(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{iMzT:function(e,t,s){"use strict";s.r(t),s.d(t,"ServiceModule",function(){return y});var i=s("bGsp"),a=s("ofXK"),r=s("Yyql"),n=s("fXoL"),o=s("vWH4");let c=(()=>{class e{constructor(){this.headers=[{name:"photo",title:"",type:"image"},{name:"_id",title:"id"},{name:"title",title:"title"},{name:"description",title:"description"},{name:"company",title:"company",type:"text"},{name:"country",title:"country",width:"1/2"},{name:"city",title:"city",width:"1/2"},{name:"phone",title:"phone number"},{name:"deletedAt",title:"status",type:"boolean",reverseBooleanColors:!0,values:["Enabled","Disabled"]},{name:"user",title:"Creator",link:"/dashboard/users/display?id=:user"}],this.list={headers:[{name:"_id",title:"id"},{name:"message",title:"message",maxLength:500},{name:"message",title:"message",maxLength:500},{name:"createdAt",title:"date",type:"date"}],buttons:[{icon:"fas fa-broom",color:"indigo",name:"clear reports",request:{url:"service/:id/clearReports",methode:"post"}}],rowsButtons:[{icon:"fas fa-eye",name:"",color:"indigo",link:"/dashboard/reports/display?id=:_id"}],icon:"fas fa-exclamation-triangle",title:"list of reports",name:"reports"},this.buttons=[{name:"Enable",icon:"fas fa-lightbulb",color:"green",request:{url:"service/:id/status",methode:"post"},condition:"deletedAt"},{name:"Disable",icon:"far fa-lightbulb",color:"red",request:{url:"service/:id/status",methode:"post"},condition:"!deletedAt"},{name:"Edit",icon:"fas fa-edit",link:"/dashboard/services/form/edit?id=:id",color:"gray"},{name:"Delete",icon:"fas fa-trash-alt",color:"red",request:{url:"service/dash/:id",methode:"delete",redirectURL:"/dashboard/services/list"},confirmation:{title:"Delete Service",text:"Are you sure you want to delete this service",confirmButtonText:"Yes",confirmButtonColor:"red",showCancelButton:!0,cancelButtonText:"No",icon:"warning"}}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["app-display-service"]],decls:1,vars:3,consts:[["singleName","service","retrieveURL","service/dash/:id","deleteURL","service/:id","redirectLink","/dashboard/services/list","editLink","/dashboard/services/form/edit","icon","fas fa-cog",3,"headers","buttons","list"]],template:function(e,t){1&e&&n.Lb(0,"app-display",0),2&e&&n.dc("headers",t.headers)("buttons",t.buttons)("list",t.list)},directives:[o.a],styles:[""]}),e})();var l=s("vmXk"),d=s("5VZg");let u=(()=>{class e{constructor(){this.headers=[{name:"photo",title:"",type:"avatar",sort:!1,align:"center"},{name:"_id",title:"id"},{name:"title",title:"title"},{name:"description",title:"description",maxLength:80},{name:"company",title:"company"},{name:"city",title:"city"},{name:"deletedAt",title:"status",type:"boolean",reverseBooleanColors:!0,values:["Enabled","Disabled"]},{name:"reports",title:"reports"}]}ngOnInit(){this.getUser()}getUser(){this.user=(new l.a).initialize(JSON.parse(localStorage.getItem("user")))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["app-list"]],decls:2,vars:3,consts:[[1,"container-fluid"],["plurarName","services","singleName","service","deleteURL","service/dash/:id","retrieveURL","service/all","displayLink","/dashboard/services/display","editLink","/dashboard/services/form/edit","createLink","/dashboard/services/form/create","icon","fas fa-cogs",3,"headers","showCreateButton","showUpdateButton"]],template:function(e,t){1&e&&(n.Pb(0,"div",0),n.Lb(1,"app-table",1),n.Ob()),2&e&&(n.zb(1),n.dc("headers",t.headers)("showCreateButton","SUPER ADMIN"==t.user.role)("showUpdateButton","SUPER ADMIN"==t.user.role))},directives:[d.a],styles:[""]}),e})();var p=s("tyNb");let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["app-service"]],decls:1,vars:0,template:function(e,t){1&e&&n.Lb(0,"router-outlet")},directives:[p.g],styles:[""]}),e})();var m=s("pbSD"),v=s("ENac");const b=[{path:"",component:h,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:u},{path:"form/:type",component:(()=>{class e{constructor(e){this.jsonService=e,this.countries={},this.headers=[]}ngOnInit(){this.getJsonData()}getJsonData(){this.countries=JSON.parse(localStorage.getItem("countries")),this.initializeHeaders()}initializeHeaders(){this.headers=[{name:"photo",title:"",type:"image",value:""},{name:"id",title:"id",hidden:!0,value:""},{name:"title",title:"title",type:"text",value:""},{name:"description",title:"description",type:"textarea",value:""},{name:"company",title:"company",type:"text",value:""},{name:"country",title:"country",type:"select",width:"1/2",options:Object.keys(this.countries),value:Object.keys(this.countries)[0]},{name:"city",title:"city",type:"select",width:"1/2",options:this.countries[Object.keys(this.countries)[0]],value:this.countries[Object.keys(this.countries)[0]][0]},{name:"phone",title:"phone number",type:"text",value:""},{name:"enabled",title:"status",type:"boolean",options:["disabled","enabled"],value:!0}]}changeHeaders(e){this.headers=e}fieldChanged(e){"country"==e.name&&(this.headers=this.headers.map(t=>("city"==t.name&&(t.options=this.countries[e.value],t.value=this.countries[e.value][0]),t)))}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(m.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-service-form"]],decls:1,vars:1,consts:[["plurarName","services","singleName","service","icon","fas fa-cog","redirectLink","/dashboard/services/list","retrieveURL","service/dash/:id","storeURL","service/","updateURL","service/:id",3,"headers","headersChanged","onChange"]],template:function(e,t){1&e&&(n.Pb(0,"app-form",0),n.Wb("headersChanged",function(e){return t.changeHeaders(e)})("onChange",function(e){return t.fieldChanged(e)}),n.Ob()),2&e&&n.dc("headers",t.headers)},directives:[v.a],styles:[""]}),e})(),canActivate:[r.a]},{path:"display",component:c}]}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({imports:[[p.f.forChild(b)],p.f]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({imports:[[a.b,f,i.a]]}),e})()}}]);