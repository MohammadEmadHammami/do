(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{lGQG:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("EnSQ"),o=i("fXoL"),c=i("tk/3");let s=(()=>{class t extends n.a{constructor(t){super(t)}signin(t){return this.sendPostRequest("auth/signin",t)}signout(){return this.sendPostRequest("auth/signout",{})}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(c.a))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vWH4:function(t,e,i){"use strict";i.d(e,"a",function(){return N});var n=i("PSD3"),o=i.n(n),c=i("bl9C"),s=i("fXoL"),r=i("tyNb"),a=i("EnSQ"),b=i("OC8m"),d=i("ofXK"),l=i("63me"),f=i("EX9E");function g(t,e){if(1&t){const t=s.Qb();s.Pb(0,"button",10),s.Wb("click",function(){s.hc(t);const e=s.Yb().$implicit;return s.Yb(2).handleBtn(e)}),s.Lb(1,"i"),s.oc(2),s.Ob()}if(2&t){const t=s.Yb().$implicit;s.Bb("p-2 px-3 text-sm bg-"+t.color+"-500 text-white rounded-md hover:bg-"+t.color+"-600 mx-1"),s.zb(1),s.Bb(t.icon+" mr-1"),s.zb(1),s.qc(" ",t.name," ")}}function u(t,e){if(1&t&&(s.Pb(0,"section"),s.nc(1,g,3,5,"button",9),s.Ob()),2&t){const t=e.$implicit,i=s.Yb(2);s.zb(1),s.dc("ngIf",i.allowToShowBtn(t))}}function p(t,e){if(1&t&&(s.Pb(0,"div",5),s.Pb(1,"span",6),s.Lb(2,"i"),s.oc(3),s.Ob(),s.Pb(4,"div",7),s.nc(5,u,2,1,"section",8),s.Ob(),s.Ob()),2&t){const t=s.Yb();s.zb(2),s.Bb(t.icon),s.zb(1),s.qc(" ",t.singleName," "),s.zb(2),s.dc("ngForOf",t.buttons)}}function h(t,e){if(1&t&&(s.Pb(0,"div",11),s.Pb(1,"p",12),s.oc(2),s.Ob(),s.Ob()),2&t){const t=s.Yb();s.zb(2),s.pc(t.error)}}function m(t,e){if(1&t&&(s.Pb(0,"section"),s.Pb(1,"div",21),s.Pb(2,"div",22),s.Lb(3,"img",23),s.Ob(),s.Ob(),s.Ob()),2&t){const t=s.Yb().$implicit,e=s.Yb(2);s.zb(3),s.dc("src",e.data[t.name],s.jc)}}const x=function(t){return[t]};function v(t,e){if(1&t&&(s.Pb(0,"span",25),s.oc(1),s.Ob()),2&t){const t=s.Yb(2).$implicit,e=s.Yb(2);s.dc("ngClass",s.ec(2,x,(t.reverseBooleanColors?!e.data[t.name]:e.data[t.name])?"text-green-500":"text-red-500")),s.zb(1),s.qc(" ",t.values[e.data[t.name]?1:0]," ")}}function w(t,e){1&t&&(s.Pb(0,"section"),s.nc(1,v,2,4,"span",24),s.Ob()),2&t&&(s.zb(1),s.dc("ngSwitchCase","boolean"))}function y(t,e){if(1&t&&(s.Pb(0,"span",27),s.oc(1),s.Ob()),2&t){const t=e.$implicit;s.zb(1),s.qc(" ",t," ")}}function O(t,e){if(1&t&&(s.Pb(0,"section"),s.nc(1,y,2,1,"span",26),s.Ob()),2&t){const t=s.Yb().$implicit,e=s.Yb(2);s.zb(1),s.dc("ngForOf",e.data[t.name])}}function z(t,e){if(1&t&&(s.Pb(0,"section"),s.Pb(1,"span"),s.oc(2),s.Zb(3,"date"),s.Ob(),s.Ob()),2&t){const t=s.Yb().$implicit,e=s.Yb(2);s.zb(2),s.qc(" ",s.ac(3,1,e.data[t.name],"longDate")," ")}}function P(t,e){if(1&t&&(s.Pb(0,"section"),s.Pb(1,"span"),s.oc(2),s.Ob(),s.Ob()),2&t){const t=s.Yb().$implicit,e=s.Yb(2);s.zb(2),s.qc(" ",e.data[t.name]?e.data[t.name]:t.default," ")}}function k(t,e){if(1&t){const t=s.Qb();s.Pb(0,"button",28),s.Wb("click",function(){s.hc(t);const e=s.Yb().$implicit;return s.Yb(2).navigateToLink(e)}),s.Lb(1,"i",29),s.Ob()}}function L(t,e){if(1&t&&(s.Pb(0,"div",15),s.Pb(1,"span",16),s.oc(2),s.Ob(),s.Pb(3,"section",17),s.nc(4,m,4,1,"section",18),s.nc(5,w,2,1,"section",18),s.nc(6,O,2,1,"section",18),s.nc(7,z,4,4,"section",18),s.nc(8,P,3,1,"section",19),s.nc(9,k,2,0,"button",20),s.Ob(),s.Ob()),2&t){const t=e.$implicit;s.Bb(s.ec(10,x,t.width?"w-"+t.width:"w-full")),s.zb(2),s.qc(" ",t.title," "),s.zb(1),s.dc("ngClass",s.ec(12,x,"image"!=t.type&&"avatar"!=t.type?"border-t-2 border-b-2 border-gray-300 bg-gray-50 flex justify-between items-center":""))("ngSwitch",t.type),s.zb(1),s.dc("ngSwitchCase","image"==t.type||"avatar"==t.type?t.type:""),s.zb(1),s.dc("ngSwitchCase","boolean"),s.zb(1),s.dc("ngSwitchCase","tags"),s.zb(1),s.dc("ngSwitchCase","date"),s.zb(2),s.dc("ngIf",t.link)}}function Y(t,e){if(1&t&&(s.Pb(0,"div",13),s.nc(1,L,10,14,"div",14),s.Ob()),2&t){const t=s.Yb();s.zb(1),s.dc("ngForOf",t.headers)}}function S(t,e){if(1&t){const t=s.Qb();s.Pb(0,"button",10),s.Wb("click",function(){s.hc(t);const i=e.$implicit;return s.Yb(2).handleBtn(i)}),s.Lb(1,"i"),s.oc(2),s.Ob()}if(2&t){const t=e.$implicit;s.Bb("p-2 mx-2 text-sm rounded-xl border-2 border-"+t.color+"-200 hover:bg-"+t.color+"-200"),s.zb(1),s.Bb(t.icon+" mx-2"),s.zb(1),s.qc(" ",t.name," ")}}function I(t,e){if(1&t&&(s.Pb(0,"th",38),s.oc(1),s.Ob()),2&t){const t=e.$implicit;s.zb(1),s.qc(" ",t.title," ")}}function q(t,e){if(1&t&&(s.Pb(0,"span"),s.oc(1),s.Zb(2,"date"),s.Ob()),2&t){const t=s.Yb().$implicit,e=s.Yb().$implicit;s.zb(1),s.qc(" ",s.ac(2,1,e[t.name],"medium")," ")}}function B(t,e){if(1&t&&(s.Pb(0,"div",46),s.oc(1),s.Zb(2,"resumeText"),s.Ob()),2&t){const t=s.Yb().$implicit,e=s.Yb().$implicit;s.zb(1),s.pc(s.ac(2,1,e[t.name],t.maxLength))}}function F(t,e){if(1&t&&(s.Pb(0,"td",43),s.Pb(1,"section",44),s.nc(2,q,3,4,"span",18),s.nc(3,B,3,4,"div",45),s.Ob(),s.Ob()),2&t){const t=e.$implicit;s.zb(1),s.dc("ngSwitch",t.type),s.zb(1),s.dc("ngSwitchCase","date")}}function $(t,e){if(1&t){const t=s.Qb();s.Pb(0,"button",10),s.Wb("click",function(){s.hc(t);const i=e.$implicit,n=s.Yb().$implicit;return s.Yb(3).listNavigateToLink(i,n)}),s.Lb(1,"i"),s.Ob()}if(2&t){const t=e.$implicit;s.Bb("mx-2 py-2 px-3 rounded-lg border-2 border-"+t.color+"-100 hover:bg-"+t.color+"-200"),s.zb(1),s.Bb(t.icon)}}function C(t,e){if(1&t&&(s.Pb(0,"tr"),s.nc(1,F,4,2,"td",41),s.Pb(2,"td",42),s.nc(3,$,2,4,"button",32),s.Ob(),s.Ob()),2&t){const t=e.index,i=s.Yb(3);s.Cb("bg-gray-100",t%2),s.zb(1),s.dc("ngForOf",i.list.headers),s.zb(2),s.dc("ngForOf",i.list.rowsButtons)}}function R(t,e){if(1&t&&(s.Pb(0,"tbody",39),s.nc(1,C,4,4,"tr",40),s.Ob()),2&t){const t=s.Yb(2);s.zb(1),s.dc("ngForOf",t.data[t.list.name])}}function E(t,e){1&t&&s.Lb(0,"app-alert",47)}function U(t,e){if(1&t&&(s.Pb(0,"div",30),s.Pb(1,"span",31),s.Pb(2,"span"),s.Lb(3,"i"),s.oc(4),s.Ob(),s.nc(5,S,3,5,"button",32),s.Ob(),s.Pb(6,"table",33),s.Pb(7,"thead",34),s.Pb(8,"tr"),s.nc(9,I,2,1,"th",35),s.Lb(10,"th"),s.Ob(),s.Ob(),s.nc(11,R,2,1,"tbody",36),s.Ob(),s.nc(12,E,1,0,"app-alert",37),s.Ob()),2&t){const t=s.Yb();s.zb(3),s.Bb(t.list.icon+" mr-1"),s.zb(1),s.qc(" ",t.list.title," "),s.zb(1),s.dc("ngForOf",t.list.buttons),s.zb(4),s.dc("ngForOf",t.list.headers),s.zb(2),s.dc("ngIf",t.data[t.list.name]&&t.data[t.list.name].length),s.zb(1),s.dc("ngIf",t.data[t.list.name]&&!t.data[t.list.name].length)}}const D=[[["","id","before-reports"]]],j=["#before-reports"];let N=(()=>{class t{constructor(t,e,i,n){this.route=t,this.dataService=e,this.router=i,this.notification=n,this.headers=void 0,this.buttons=[],this.list=void 0,this.loading=!1}ngOnInit(){this.getDataId()}getDataId(){this.route.queryParamMap.subscribe(t=>{this.dataId=t.get("id"),this.getData()})}getData(){const t=this.retrieveURL.replace(/:id/g,this.dataId);this.error=void 0,this.dataService.sendGetRequest(t,{}).subscribe(t=>{this.loading=!1,this.data=t.data,this.headers.forEach(t=>{console.log(t),"avatar"!=t.type&&"image"!=t.type||(this.data[t.name]=c.a.DOMAIN_URL+this.data[t.name])})},t=>{t=t.error,this.loading=!1,this.error=t})}showErrorMessage(t){this.notification.showError(t,"Error")}showSuccessMessage(t){this.notification.showSuccess(t,"Success")}showConf(t){return o.a.fire(t.confirmation)}handleBtn(t){t.confirmation?this.showConf(t).then(e=>{if(e.isConfirmed)if("string"==typeof e.value){const i={};i[t.confirmation.inputAttributes.name]=e.value,this.btnGuideEvent(t,i)}else this.btnGuideEvent(t)}):this.btnGuideEvent(t)}btnGuideEvent(t,e={}){t.request?this.doRequest(t,e):this.navigateBtn(t)}navigateBtn(t){const e=t.link.replace(/:id/g,this.dataId);this.router.navigateByUrl(e)}doRequest(t,e={}){const i=t.request.url.replace(/:id/g,this.dataId);this.dataService.sendRequest(t.request.methode,i,e).subscribe(e=>{t.request.redirectURL&&this.router.navigateByUrl(t.request.redirectURL),this.getData(),this.showSuccessMessage(e.message)},t=>{this.showErrorMessage(t.error)})}navigateToLink(t){const e=t.link.split(":");this.router.navigateByUrl(e.map((t,e)=>e%2?this.data[t]:t).join(""))}listNavigateToLink(t,e){const i=t.link.split(":");this.router.navigateByUrl(i.map((t,i)=>i%2?e[t]:t).join(""))}allowToShowBtn(t){if(t.condition){const e=t.condition.includes("!"),i=t.condition.replace("!","");return e?!this.data[i]:this.data[i]}return!0}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(r.a),s.Kb(a.a),s.Kb(r.b),s.Kb(b.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-display"]],inputs:{singleName:"singleName",icon:"icon",deleteURL:"deleteURL",headers:"headers",retrieveURL:"retrieveURL",redirectURL:"redirectURL",editLink:"editLink",buttons:"buttons",list:"list"},ngContentSelectors:j,decls:7,vars:4,consts:[[1,"mx-3","pb-7"],["class","flex my-3 justify-between",4,"ngIf"],["class","bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mx-4 my-4",4,"ngIf"],["class","flex flex-wrap mb-6 w-full pb-4",4,"ngIf"],["class","mb-3 mt-5 pt-5 mx-4",4,"ngIf"],[1,"flex","my-3","justify-between"],[1,"text-3xl","uppercase"],[1,"flex"],[4,"ngFor","ngForOf"],[3,"class","click",4,"ngIf"],[3,"click"],[1,"bg-red-100","border-l-4","border-red-500","text-red-700","p-4","mx-4","my-4"],[1,"font-bold"],[1,"flex","flex-wrap","mb-6","w-full","pb-4"],["class","px-3 my-2",3,"class",4,"ngFor","ngForOf"],[1,"px-3","my-2"],[1,"block","uppercase","tracking-wide","text-gray-700","text-md","font-bold","mb-2"],[1,"text-md","py-3","px-1",3,"ngClass","ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","border-2 py-2 px-3 text-sm rounded-lg border-indigo-200 hover:bg-indigo-200 ",3,"click",4,"ngIf"],[1,"flex","items-center","justify-center"],[1,"w-32","h-32","flex","items-center","rounded-full","ring-2","ring-gray-300","overflow-hidden"],["alt","",1,"w-full","min-h-full","rounded-full",3,"src"],["class","inline-flex leading-5 font-semibold",3,"ngClass",4,"ngSwitchCase"],[1,"inline-flex","leading-5","font-semibold",3,"ngClass"],["class","mr-1 inline-block border-2 border-indigo-400 p-2 rounded-lg",4,"ngFor","ngForOf"],[1,"mr-1","inline-block","border-2","border-indigo-400","p-2","rounded-lg"],[1,"border-2","py-2","px-3","text-sm","rounded-lg","border-indigo-200","hover:bg-indigo-200",3,"click"],[1,"fas","fa-eye"],[1,"mb-3","mt-5","pt-5","mx-4"],[1,"text-3xl","capitalize","flex","justify-between"],[3,"class","click",4,"ngFor","ngForOf"],[1,"min-w-full","divide-y","divide-gray-200","mt-4"],[1,"bg-black"],["scope","col","class","py-3 px-2 text-xs font-medium text-left text-white uppercase tracking-wider",4,"ngFor","ngForOf"],["class","bg-white divide-y divide-gray-200",4,"ngIf"],["title","Empty Result","message","No data found (0)","type","info",4,"ngIf"],["scope","col",1,"py-3","px-2","text-xs","font-medium","text-left","text-white","uppercase","tracking-wider"],[1,"bg-white","divide-y","divide-gray-200"],[3,"bg-gray-100",4,"ngFor","ngForOf"],["class","py-2 whitespace-nowrap px-2 border-2 border-gray-200",4,"ngFor","ngForOf"],[1,"text-right","py-2","whitespace-nowrap","px-2","border-2","border-gray-200"],[1,"py-2","whitespace-nowrap","px-2","border-2","border-gray-200"],[3,"ngSwitch"],["class","text-gray-900",4,"ngSwitchDefault"],[1,"text-gray-900"],["title","Empty Result","message","No data found (0)","type","info"]],template:function(t,e){1&t&&(s.cc(D),s.Pb(0,"div",0),s.nc(1,p,6,4,"div",1),s.Lb(2,"hr"),s.nc(3,h,3,1,"div",2),s.nc(4,Y,2,1,"div",3),s.bc(5),s.nc(6,U,13,7,"div",4),s.Ob()),2&t&&(s.zb(1),s.dc("ngIf",e.data),s.zb(2),s.dc("ngIf",e.error),s.zb(1),s.dc("ngIf",e.data&&e.headers),s.zb(2),s.dc("ngIf",e.list&&e.data))},directives:[d.k,d.j,d.i,d.l,d.m,d.n,l.a],pipes:[d.d,f.a],styles:[""]}),t})()}}]);