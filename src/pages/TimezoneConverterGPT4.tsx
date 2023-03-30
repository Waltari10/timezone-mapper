import React, { useEffect, useState } from "react";
import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz";
import timezoneData from "iana-tz-data";
import Select from "react-select";

const isBrowser = () => typeof window !== "undefined";

const getFromLocalStorage = (key: string, defaultValue: any) => {
  if (!isBrowser()) return defaultValue;
  const storedValue = window.localStorage.getItem(key);
  return storedValue ? storedValue : defaultValue;
};

const TimezoneConverter: React.FC = () => {
  const [fromTimezone, setFromTimezone] = useState<string>("");
  const [toTimezone, setToTimezone] = useState<string>("");

  useEffect(() => {
    setFromTimezone(getFromLocalStorage("fromTimezone", ""));
    setToTimezone(getFromLocalStorage("toTimezone", ""));
  }, []);

  const [mappedTimes, setMappedTimes] = useState<
    { from: string; to: string }[]
  >([]);

  useEffect(() => {
    if (isBrowser() && fromTimezone && toTimezone) {
      localStorage.setItem("fromTimezone", fromTimezone);
      localStorage.setItem("toTimezone", toTimezone);
    }
  }, [fromTimezone, toTimezone]);

  const timezoneOptions: { value: string; label: string }[] = [];
  Object.entries(timezoneData.zoneData).forEach(([continent, zones]) => {
    Object.keys(zones).forEach((zone) => {
      timezoneOptions.push({
        value: `${continent}/${zone}`,
        label: `${continent}/${zone}`,
      });
    });
  });

  useEffect(() => {
    if (fromTimezone && toTimezone) {
      handleConversion();
    }
  }, [fromTimezone, toTimezone]);

  const handleConversion = () => {
    const now = new Date();
    const times: { from: string; to: string }[] = [];

    for (let i = 0; i < 24; i++) {
      const timeInFromTimezone = new Date(now);
      timeInFromTimezone.setHours(0 + i);
      const formattedFromTime = format(timeInFromTimezone, "HH:00", {
        timeZone: fromTimezone,
      });
      const utcTime = zonedTimeToUtc(timeInFromTimezone, fromTimezone);
      const targetTime = utcToZonedTime(utcTime, toTimezone);
      const formattedToTime = format(targetTime, "HH:00", {
        timeZone: toTimezone,
      });
      times.push({ from: formattedFromTime, to: formattedToTime });
    }

    setMappedTimes(times);
  };

  return (
    <div className="timezone-converter">
      <h1>Timezone Converter</h1>
      <div className="input-group">
        <label htmlFor="fromTimezone">From Timezone:</label>
        <Select
          id="fromTimezone"
          value={timezoneOptions.find(
            (option) => option.value === fromTimezone
          )}
          onChange={(option: any) => setFromTimezone(option.value)}
          options={timezoneOptions}
          isSearchable
        />
      </div>
      <div className="input-group">
        <label htmlFor="toTimezone">To Timezone:</label>
        <Select
          id="toTimezone"
          value={timezoneOptions.find((option) => option.value === toTimezone)}
          onChange={(option: any) => setToTimezone(option.value)}
          options={timezoneOptions}
          isSearchable
        />
      </div>
      {mappedTimes.length > 0 && (
        <div>
          <h2>Mapped Times</h2>
          <ul>
            {mappedTimes.map((time, index) => (
              <li key={index}>
                {time.from} {"→"} {time.to}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimezoneConverter;
