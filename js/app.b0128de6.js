(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getSessionKey",(function(){return I})),n.d(r,"getDisplayName",(function(){return P})),n.d(r,"getShortTeamInfo",(function(){return _})),n.d(r,"getShortEventInfo",(function(){return q})),n.d(r,"getTeamAvatars",(function(){return N})),n.d(r,"isProbablySignedIn",(function(){return C})),n.d(r,"getLocale",(function(){return V})),n.d(r,"getDarkModeEnabled",(function(){return H})),n.d(r,"getEnableOnlineSync",(function(){return O})),n.d(r,"getTeamLikes",(function(){return U})),n.d(r,"getEventLikes",(function(){return j})),n.d(r,"getHideAnnouncement",(function(){return D}));var o={};n.r(o),n.d(o,"setSessionKey",(function(){return $})),n.d(o,"setShortTeamInfo",(function(){return F})),n.d(o,"setShortEventInfo",(function(){return J})),n.d(o,"setLocale",(function(){return M})),n.d(o,"setTeamAvatar",(function(){return R})),n.d(o,"setTeamLikes",(function(){return B})),n.d(o,"setEventLikes",(function(){return Q})),n.d(o,"setHideAnnouncement",(function(){return Y}));var a={};n.r(a),n.d(a,"refreshShortTeamInfo",(function(){return Z})),n.d(a,"refreshShortEventInfo",(function(){return ee})),n.d(a,"getTeamLikes",(function(){return te})),n.d(a,"likeTeam",(function(){return ne})),n.d(a,"likeEvent",(function(){return re})),n.d(a,"unlikeTeam",(function(){return oe})),n.d(a,"unlikeEvent",(function(){return ae})),n.d(a,"getTeamAvatars",(function(){return se})),n.d(a,"checkIfSessionKeyValid",(function(){return ie})),n.d(a,"saveUserStore",(function(){return ue})),n.d(a,"userLogout",(function(){return ce})),n.d(a,"login",(function(){return fe})),n.d(a,"setSessionKey",(function(){return me})),n.d(a,"setHideAnnouncement",(function(){return de}));var s=n("967e"),i=n.n(s),u=(n("a481"),n("96cf"),n("fa84")),c=n.n(u),f=(n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),m=n("1f91"),d=n("42d2"),p=n("b05d"),l=n("436b"),v=n("18d6"),h=n("2a19"),k=n("696d");f["a"].use(p["a"],{config:{},lang:m["a"],iconSet:d["a"],plugins:{Dialog:l["a"],LocalStorage:v["a"],Notify:h["a"],AddressbarColor:k["a"]}});var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},y=[],b={name:"App"},w=b,L=n("2877"),T=Object(L["a"])(w,g,y,!1,null,null,null),S=T.exports,x=n("2f62");n("f751");function E(){return{sessionKey:"",lastAnnouncementVersionShown:1,hideAnnouncement:!1,shortTeamInfo:[],shortEventInfo:[],teamAvatars:{},teamLikes:[],eventLikes:[]}}var K={};v["a"].has("vuex-store-user")&&(K=v["a"].getItem("vuex-store-user"));var A=Object.assign(E(),K);function I(e){return e.sessionKey}function P(e){return e.displayName}function _(e){return e.shortTeamInfo}function q(e){return e.shortEventInfo}function N(e){return e.teamAvatars}function C(e){return e.sessionKey.length>0}function V(e){return e.locale}function H(e){return e.darkModeEnabled}function O(e){return e.enableOnlineSync}function U(e){return e.teamLikes}function j(e){return e.eventLikes}function D(e){return e.hideAnnouncement}function $(e,t){f["a"].set(e,"sessionKey",t)}function F(e,t){f["a"].set(e,"shortTeamInfo",t)}function J(e,t){f["a"].set(e,"shortEventInfo",t)}function M(e,t){f["a"].set(e,"locale",t)}function R(e,t){var n=t.team_number,r=t.avatar;f["a"].set(e.teamAvatars,n,r)}function B(e,t){f["a"].set(e,"teamLikes",t)}function Q(e,t){f["a"].set(e,"eventLikes",t)}function Y(e,t){f["a"].set(e,"hideAnnouncement",t)}n("ac6a"),n("cadf"),n("456d"),n("551c"),n("06db");var z=n("bc3a"),G=n.n(z),W=G.a.create({baseURL:"https://us-east4-your-final-grade.cloudfunctions.net/district-one-api/"}),X=function(){var e=c()(i.a.mark((function e(t){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=W;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Z(e){var t=e.commit;return new Promise((function(e,n){W.post("/",{requestType:"getTeamsForTeamList"}).then((function(n){t("setShortTeamInfo",n.data.teams),e()})).catch((function(e){n(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function ee(e){var t=e.commit;return new Promise((function(e,n){W.post("/",{requestType:"getShortEventInfo"}).then((function(n){t("setShortEventInfo",n.data.events),e()})).catch((function(e){n(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function te(e){var t=e.state,n=e.commit;return new Promise((function(e,r){W.post("/",{requestType:"getTeamAndEventLikes",sessionKey:t.sessionKey}).then((function(t){n("setTeamLikes",t.data.teamLikes),n("setEventLikes",t.data.eventLikes),e()})).catch((function(e){r(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function ne(e,t){var n=e.state,r=e.commit,o=t.teamNumber;return new Promise((function(e,t){W.post("/",{requestType:"likeTeam",sessionKey:n.sessionKey,teamNumber:o}).then((function(t){r("setTeamLikes",t.data.teamLikes),r("setEventLikes",t.data.eventLikes),h["a"].create({message:t.data.success_msg,timeout:2e3,color:"green",position:"top"}),e()})).catch((function(e){t(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function re(e,t){var n=e.state,r=e.commit,o=t.eventCode;return new Promise((function(e,t){W.post("/",{requestType:"likeEvent",sessionKey:n.sessionKey,eventCode:o}).then((function(t){r("setTeamLikes",t.data.teamLikes),r("setEventLikes",t.data.eventLikes),h["a"].create({message:t.data.success_msg,timeout:2e3,color:"green",position:"top"}),e()})).catch((function(e){t(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function oe(e,t){var n=e.state,r=e.commit,o=t.teamNumber;return new Promise((function(e,t){W.post("/",{requestType:"unlikeTeam",sessionKey:n.sessionKey,teamNumber:o}).then((function(t){r("setTeamLikes",t.data.teamLikes),r("setEventLikes",t.data.eventLikes),h["a"].create({message:t.data.success_msg,timeout:2e3,color:"green"}),e()})).catch((function(e){t(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function ae(e,t){var n=e.state,r=e.commit,o=t.eventCode;return new Promise((function(e,t){W.post("/",{requestType:"unlikeEvent",sessionKey:n.sessionKey,eventCode:o}).then((function(t){r("setTeamLikes",t.data.teamLikes),r("setEventLikes",t.data.eventLikes),h["a"].create({message:t.data.success_msg,timeout:2e3,color:"green"}),e()})).catch((function(e){t(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function se(e,t){var n=e.commit,r=t.list_of_team_number;return new Promise((function(e,t){W.post("/",{requestType:"getAvatarsForTeams",list_of_team_number:r}).then((function(t){Object.keys(t.data).forEach((function(e){n("setTeamAvatar",{team_number:e,avatar:t.data[e]})})),e()})).catch((function(e){t(e),h["a"].create({message:e,timeout:2e3,color:"red",position:"top"})}))}))}function ie(e){var t=e.state,n=e.dispatch;return new Promise((function(e,r){0!==t.sessionKey.length?W.post("/",{requestType:"checkSessionKey",sessionKey:t.sessionKey}).then((function(t){t.data.valid?(n("getTeamLikes"),t.data.gaveReward&&h["a"].create({message:"You got a login reward! +5",timeout:3e3,color:"green",position:"top"}),e()):(h["a"].create({message:"Session expired",timeout:3e3,color:"red",position:"top"}),n("userLogout"),e())})).catch((function(e){r(e)})):e()}))}function ue(e){var t=e.state;v["a"].set("vuex-store-user",t)}function ce(e){var t=e.commit,n=e.dispatch;return new Promise((function(e,r){t("setSessionKey",""),t("setTeamLikes",[]),t("setEventLikes",[]),t("setHideAnnouncement",!1),n("saveUserStore"),e()}))}function fe(e,t){e.commit,t.username,t.password;return new Promise((function(e,t){e()}))}function me(e,t){var n=e.commit,r=e.dispatch,o=t.sessionKey;localStorage.setItem("sessionKey",o),n("setSessionKey",o),r("saveUserStore")}function de(e,t){var n=e.commit,r=e.dispatch;n("setHideAnnouncement",t),r("saveUserStore")}var pe={namespaced:!1,getters:r,mutations:o,actions:a,state:A};f["a"].use(x["a"]);var le=function(){var e=new x["a"].Store({modules:{user:pe},strict:!1});return e},ve=n("8c4f"),he=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))}}]}];he.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}});var ke=he;f["a"].use(ve["a"]);var ge=function(){var e=new ve["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ke,mode:"hash",base:""});return e},ye=function(){return be.apply(this,arguments)};function be(){return be=c()(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof le){e.next=6;break}return e.next=3,le({Vue:f["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=le;case 7:if(t=e.t0,"function"!==typeof ge){e.next=14;break}return e.next=11,ge({Vue:f["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=ge;case 15:return n=e.t1,t.$router=n,r={el:"#q-app",router:n,store:t,render:function(e){return e(S)}},e.abrupt("return",{app:r,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),be.apply(this,arguments)}function we(){return Le.apply(this,arguments)}function Le(){return Le=c()(i.a.mark((function e(){var t,n,r,o,a,s,u,c,m;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,a=!0,s=function(e){a=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),c=[X],m=0;case 11:if(!(!0===a&&m<c.length)){e.next=29;break}if("function"===typeof c[m]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[m]({app:n,router:o,store:r,Vue:f["a"],ssrContext:null,redirect:s,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:m++,e.next=11;break;case 29:if(!1!==a){e.next=31;break}return e.abrupt("return");case 31:new f["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Le.apply(this,arguments)}we()},"7e6d":function(e,t,n){}},[[0,2,0]]]);