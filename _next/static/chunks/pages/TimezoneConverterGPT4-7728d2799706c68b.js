(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{8330:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TimezoneConverterGPT4",function(){return n(9390)}])},9390:function(e,t,n){"use strict";n.r(t);var o=n(5893),l=n(7294),i=n(4117),r=n(5866),s=n(9599),a=n(8925),c=n(9688);let u=()=>!0,m=(e,t)=>{if(!u())return t;let n=window.localStorage.getItem(e);return n||t},h=()=>{let[e,t]=(0,l.useState)(""),[n,h]=(0,l.useState)("");(0,l.useEffect)(()=>{t(m("fromTimezone","")),h(m("toTimezone",""))},[]);let[f,d]=(0,l.useState)([]);(0,l.useEffect)(()=>{u()&&e&&n&&(localStorage.setItem("fromTimezone",e),localStorage.setItem("toTimezone",n))},[e,n]);let T=[];Object.entries(a.C).forEach(e=>{let[t,n]=e;Object.keys(n).forEach(e=>{T.push({value:"".concat(t,"/").concat(e),label:"".concat(t,"/").concat(e)})})}),(0,l.useEffect)(()=>{e&&n&&p()},[e,n]);let p=()=>{let t=new Date,o=[];for(let l=0;l<24;l++){let a=new Date(t);a.setHours(0+l);let c=(0,i.Z)(a,"HH:00",{timeZone:e}),u=(0,r.Z)(a,e),m=(0,s.Z)(u,n),h=(0,i.Z)(m,"HH:00",{timeZone:n});o.push({from:c,to:h})}d(o)};return(0,o.jsxs)("div",{className:"timezone-converter",children:[(0,o.jsx)("h1",{children:"Timezone Converter"}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{htmlFor:"fromTimezone",children:"From Timezone:"}),(0,o.jsx)(c.ZP,{id:"fromTimezone",value:T.find(t=>t.value===e),onChange:e=>t(e.value),options:T,isSearchable:!0})]}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{htmlFor:"toTimezone",children:"To Timezone:"}),(0,o.jsx)(c.ZP,{id:"toTimezone",value:T.find(e=>e.value===n),onChange:e=>h(e.value),options:T,isSearchable:!0})]}),f.length>0&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Mapped Times"}),(0,o.jsx)("ul",{children:f.map((e,t)=>(0,o.jsxs)("li",{children:[e.from," ","→"," ",e.to]},t))})]})]})};t.default=h}},function(e){e.O(0,[905,66,774,888,179],function(){return e(e.s=8330)}),_N_E=e.O()}]);