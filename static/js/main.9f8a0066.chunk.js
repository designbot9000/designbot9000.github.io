(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(14),o=n.n(a),i=(n(21),n(22),n(4)),s=n.n(i),u=n(15),p=n(5),l=n(16),b=n.n(l).a.create({baseURL:"https://www.alphavantage.co/query"}),h=n(1);function j(e){return Object.entries(e).map((function(e){var t=Object(p.a)(e,2),n=t[0],c=t[1];return{date:n,open:Number(c["1. open"]),high:Number(c["2. high"]),low:Number(c["3. low"]),close:Number(c["4. close"])}}))}var f=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n="MOO",b.get("",{params:{function:"TIME_SERIES_DAILY",symbol:n,interval:"5min",apikey:"0WG7874IOAWOY2FX"}});case 2:t=e.sent,console.log(t.data),r(j(t.data["Time Series (Daily)"]));case 5:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(n[0].date),Object(h.jsx)("div",{children:n[0].date+" open: "+n[0].open+", close: "+n[0].close})},O=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Stock Ticker 9000"}),Object(h.jsx)("h2",{children:"MOO"}),Object(h.jsx)(f,{})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),d()}},[[43,1,2]]]);
//# sourceMappingURL=main.9f8a0066.chunk.js.map