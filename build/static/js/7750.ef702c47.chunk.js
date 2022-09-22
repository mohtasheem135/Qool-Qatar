"use strict";(self.webpackChunkqool_qatar=self.webpackChunkqool_qatar||[]).push([[7750],{7750:function(o,l,i){i.r(l);var n=i(4165),e=i(5861),a=i(885),t=i(5483),s=i.n(t),d=i(2791),r=i(7975),c=i(6710),u=(i(3161),i(625),i(7488)),v=i(184),p=d.lazy((function(){return i.e(678).then(i.bind(i,678))})),A=d.lazy((function(){return Promise.all([i.e(5017),i.e(6082)]).then(i.bind(i,6082))}));l.default=function(){var o,l=(0,d.useState)([]),t=(0,a.Z)(l,2),h=t[0],g=t[1],m=(0,d.useState)(!1),x=(0,a.Z)(m,2),j=x[0],k=x[1],f=(0,d.useState)(),C=(0,a.Z)(f,2),w=C[0],I=C[1];(0,d.useEffect)((function(){var o;document.title="Destination Page - Qool Qatar";var l=localStorage.getItem("packageCategoryId");(0,e.Z)((0,n.Z)().mark((function i(){var e,a,t,s,d,r,c,v,p,A;return(0,n.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,u.ep)(l);case 2:o=i.sent,g(null===(e=o)||void 0===e?void 0:e.payload),localStorage.setItem("packageData",JSON.stringify(null===(a=o)||void 0===a?void 0:a.payload)),(null===(t=o)||void 0===t||null===(s=t.payload)||void 0===s||null===(d=s.description)||void 0===d?void 0:d.length)>150?(k(!0),I(null===(c=o)||void 0===c||null===(v=c.payload)||void 0===v?void 0:v.description.slice(0,150))):I(null===(p=o)||void 0===p||null===(A=p.payload)||void 0===A?void 0:A.description),(null===(r=o)||void 0===r?void 0:r.payload)&&N();case 7:case"end":return i.stop()}}),i)})))()}),[]);var N=function(){var o,l,i,n=JSON.parse(localStorage.getItem("packageData")),e=null===n||void 0===n||null===(o=n.coordinates)||void 0===o?void 0:o[1],a=null===n||void 0===n||null===(l=n.coordinates)||void 0===l?void 0:l[0];s().accessToken="pk.eyJ1IjoibWVhemFkMTM1MCIsImEiOiJjbDVwbGNncTIwYmFpM2tuMnY3eHBlM2VhIn0._eM88ThriAOOttj-IY7OGQ";var t=new(s().Map)({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[a,e],zoom:13},{attributionControl:!1});return(null===n||void 0===n||null===(i=n.packages)||void 0===i?void 0:i.length)>0&&(null===n||void 0===n||n.packages.map((function(o){var l,i,n,e,a,d,r,c=null===o||void 0===o||null===(l=o.packageId)||void 0===l||null===(i=l.location)||void 0===i||null===(n=i.coordinates)||void 0===n?void 0:n[0],u=null===o||void 0===o||null===(e=o.packageId)||void 0===e||null===(a=e.location)||void 0===a||null===(d=a.coordinates)||void 0===d?void 0:d[1],v=new(s().Marker)({color:"#A2195B",draggable:!1}).setLngLat([c,u]).setPopup((new(s().Popup)).setHTML(null===o||void 0===o||null===(r=o.packageId)||void 0===r?void 0:r.name)).addTo(t);v.togglePopup(),v.setRotation(10)}))),t.addControl(new(s().NavigationControl)({visualizePitch:!1}),"top-left"),t.addControl(new(s().FullscreenControl)),t.addControl(new(s().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})),t};return(0,v.jsxs)(p,{children:[(0,v.jsxs)("section",{className:"destination-page",children:[(0,v.jsxs)(r.W2,{children:[(0,v.jsx)(r.X2,{children:(0,v.jsx)(r.JX,{lg:12,children:(0,v.jsxs)("ul",{className:"breadcrumb",children:[(0,v.jsx)("li",{children:"Top Picks"}),(0,v.jsx)("li",{children:(0,v.jsx)("img",{src:i(9998),alt:"rightarrow"})}),(0,v.jsx)("li",{children:null===h||void 0===h?void 0:h.name})]})})}),(0,v.jsxs)(r.X2,{className:"destination-info",children:[(0,v.jsx)(r.JX,{lg:4,children:(0,v.jsxs)("div",{className:"pick-left",children:[(0,v.jsx)(c.Z,{url:null===h||void 0===h?void 0:h.videoUrl,className:"video-player",width:"450",height:"450",controls:!0,volume:!0}),(0,v.jsx)("ul",{className:"img-list",children:null===h||void 0===h||null===(o=h.photos)||void 0===o?void 0:o.map((function(o){return(0,v.jsx)("li",{children:(0,v.jsx)("img",{src:o,alt:"small"})})}))})]})}),(0,v.jsx)(r.JX,{lg:8,children:(0,v.jsxs)("div",{className:"pick-right",children:[(0,v.jsx)("h1",{children:null===h||void 0===h?void 0:h.name}),(0,v.jsxs)("p",{className:"pick-txt",children:[w," ",j&&(0,v.jsx)("span",{onClick:function(){return I(null===h||void 0===h?void 0:h.description),void k(!1)},children:" ... Read more"})]}),(0,v.jsx)("div",{id:"map",className:"mapp"})]})})]})]}),(0,v.jsx)(r.W2,{fluid:!0,children:(0,v.jsx)("div",{className:"destination-bottom"})})]}),(0,v.jsx)(A,{})]})}},9998:function(o){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7ZNNCoAgEEanxH1H6Ah1hG7j0k6SS2/TFTpCR2gpiJhCq8h/aeUDYWCGB9/IADRK6VwNSumolNqklCvn/IRIek/vMm/CGO+EkBFKhYyxCyG02DpF2oUGnui7rU38JRQ/KEyVRgnfUrOK2a7ka66HDIQQg6v3f+Sqn5Iq8wpzZBbvpWitjxRZow43XEtq9nbDMbwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=7750.ef702c47.chunk.js.map