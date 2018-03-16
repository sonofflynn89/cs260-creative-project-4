webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(e){a("RFQW")},null,null).exports,o=a("/ocq"),s=a("mtWM"),l=a.n(s),c={name:"ZombieTeam",data:function(){return{team:[],name:"",imageUrl:"",weapon:"",rating:0}},computed:{numMembers:function(){return this.team.length}},created:function(){this.getTeam()},methods:{getTeam:function(){var e=this;l.a.get("/api/team").then(function(t){return e.team=t.data,!0}).catch(function(e){})},addMember:function(){var e=this;this.numMembers>=4||l.a.post("/api/team",{name:this.name,weapon:this.weapon,rating:this.rating,imageUrl:this.imageUrl}).then(function(t){return e.name="",e.weapon="",e.rating=0,e.imageUrl="",e.getTeam(),!0}).catch(function(e){})},increaseRating:function(e){var t=this,a=e.rating+1;l.a.put("/api/team/"+e.id,{rating:a}).then(function(e){return t.getTeam(),!0}).catch(function(e){})},decreaseRating:function(e){var t=this,a=e.rating-1;l.a.put("/api/team/"+e.id,{rating:a}).then(function(e){return t.getTeam(),!0}).catch(function(e){})},deleteMember:function(e){var t=this;l.a.delete("/api/team/"+e.id).then(function(e){return t.getTeam(),!0}).catch(function(e){})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("CHOOSE YOUR TEAM")]),e._v(" "),a("h2",[e._v("When the Apocalypse hits, who's on your side?")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.addMember(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")]),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.weapon,expression:"weapon"}],attrs:{type:"text"},domProps:{value:e.weapon},on:{input:function(t){t.target.composing||(e.weapon=t.target.value)}}}),e._v(" "),a("label",[e._v("Weapon of Choice")]),e._v(" "),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rating,expression:"rating"}],attrs:{type:"number"},domProps:{value:e.rating},on:{input:function(t){t.target.composing||(e.rating=t.target.value)}}}),e._v(" "),a("label",{attrs:{id:"rating-label"}},[e._v("Rating")]),e._v(" "),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.imageUrl,expression:"imageUrl"}],attrs:{type:"text"},domProps:{value:e.imageUrl},on:{input:function(t){t.target.composing||(e.imageUrl=t.target.value)}}}),e._v(" "),a("label",[e._v("Image URL")]),e._v(" "),a("br"),e._v(" "),a("button",{attrs:{type:"submit"}},[e._v("Add")])]),e._v(" "),a("table",[a("th"),e._v(" "),a("th",{staticClass:"nameCell"},[e._v("Member Name")]),e._v(" "),a("th",{staticClass:"weaponCell"},[e._v("Weapon")]),e._v(" "),a("th",{staticClass:"ratingCell"},[e._v("Rating")]),e._v(" "),a("th",{staticClass:"increaseCell"},[e._v("Up Rating")]),e._v(" "),a("th",{staticClass:"decreaseCell"},[e._v("Down Rating")]),e._v(" "),a("th"),e._v(" "),e._l(e.team,function(t){return a("tr",[a("td",[a("img",{attrs:{src:t.imageUrl}})]),a("td",{staticClass:"nameCell"},[e._v(" "+e._s(t.name)+" ")]),e._v(" "),a("td",{staticClass:"weaponCell"},[e._v(e._s(t.weapon)+" ")]),e._v(" "),a("td",{staticClass:"ratingCell"},[e._v(e._s(t.rating))]),e._v(" "),a("td",{staticClass:"increaseCell"},[a("button",{staticClass:"fa fa-angle-double-up",on:{click:function(a){e.increaseRating(t)}}})]),e._v(" "),a("td",{staticClass:"decreaseCell"},[a("button",{staticClass:"fa fa-angle-double-down",on:{click:function(a){e.decreaseRating(t)}}})]),e._v(" "),a("td",[a("button",{on:{click:function(a){e.deleteMember(t)}}},[e._v("Remove")])])])})],2),e._v(" "),e.numMembers>=4?a("h2",[e._v("TEAM FULL")]):e._e(),e._v(" "),a("a",{attrs:{href:"https://github.com/sonofflynn89/cs260-creative-project-4"}},[e._v(" Repository")])])},staticRenderFns:[]};var m=a("VU/8")(c,u,!1,function(e){a("lN0T")},null,null).exports;n.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"ZombieTeam",component:m}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{App:r},template:"<App/>"})},RFQW:function(e,t){},lN0T:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.21623a8340dbac97e203.js.map