/*! scripts/tumblr/utils/exceptions.js */
(function(t,L){var f=t.document;var C=t.encodeURIComponent;var z=t.navigator;var i=t.parseInt;var q=t.performance;var E=t.window;var D=t.Date;var j=t.Error;var p=t.Math;var I=t.XMLHttpRequest;var K=[];var r=[];var a={};var c=false;var B;function P(S,R,T,Q){S.addEventListener?S.addEventListener(R,T,!!Q):S.attachEvent&&S.attachEvent("on"+R,T,!!Q)}function h(Q){var R=decodeURIComponent(f.cookie).match(new RegExp(Q+"=([^;]+)"));return(R&&R.length>1)?R[1]:null}function g(R,Q){return(typeof R==="string")&&(R.length>Q)?[R.slice(0,Q/2),"...",R.length-Q,"...",R.slice(-Q/2)].join(""):R}function F(U,S){var V=[];for(var T in U){if(!U.hasOwnProperty(T)){continue}var R=S?(S+"["+T+"]"):T,Q=U[T];V.push(typeof Q==="object"?F(Q,R):C(R)+"="+C(Q))}return V.join("&")}function o(Q){for(var R in Q){if(Q.hasOwnProperty(R)){return false}}return true}var w=(function(Q){return(Q&&Q.keys)||function(U){var R=[];var T=Q.prototype.hasOwnProperty;for(var S in U){T.call(U,S)&&R.push(S)}return R}})(t.Object);var d=function(R,U,S){if(typeof U!=="function"){return}var Q=(R&&R.length)>>>0;for(var T=0;T<Q;T++){U.call(S,R[T],T,R)}};var O=(function(Q){return(Q&&Q.stringify&&function(S){try{return Q.stringify(S)}catch(R){l(R);return'"FAILED_JSON_STRINGIFY"'}})||function(){return'"NO_JSON_STRINGIFY"'}})(t.JSON);var u=(function(Q){return(Q&&Q.Flags)||(function(){l(new j("Missing Tumblr.Flags in exceptions.js"));var R={enable_js_errors_log:true,enable_js_ephemeral_log:true};function S(T,U){return(typeof T==="function")?T.call(this,U):T}return function(U){var T=!!(R[U]);return function V(X,Y){var W=S.call(this,(T?X:Y),T);return(W!==void 0)?W:V}}})()})(t.Tumblr);(function n(){try{var R=new I();R.open("GET","//secure.assets.tumblr.com/delivery/cdn.json");R.onreadystatechange=function(){if(R.readyState===I.DONE){B=JSON.parse(R.response).cdn}};R.send()}catch(Q){}})();function l(R,Q){if(typeof Q==="number"&&p.random()>Q){return}if(R instanceof j){R.url||(R.url="//www.tumblr.com/");m(R.message,R.url,R.ln,R.col,R)}else{K.push(O(R))}}var H=/https?:\/\//;var J=/https?:\/\/[^/]*tumblr[^/]*/;function m(U,R,T,Q,S){try{R=g(R,300)||"";if(H.test(R)&&!J.test(R)){return}S=O(g(S&&S.stack,1000)||"");if(H.test(S)&&!J.test(S)){return}r.push({path:(f.location||{}).pathname||"NO_LOCATION_OR_PATHNAME",msg:g(U,200)||"",url:R,ln:i(T,10)||-1,col:i(Q,10)||-1,err:S,group:u("js_errors_a")("A",u("js_errors_b")("B","*")),logged_in:h("logged_in")?true:false});E.___err=true}catch(S){}}function b(){return((f.head||{}).innerHTML||"").indexOf("#missinge_button")!==-1}var x=l.debugDump=function(){var Q=[];d(f.getElementsByTagName("script"),function(R){Q.push(R.src)});return{timestamp:+new D(),path:(f.location||{}).href||"NO_HREF",lang:(z||{}).userLanguage||(z||{}).language||"NO_LANG",referrer:f.referrer||"NO_REFERRER",ua:(z||{}).userAgent||"NO_UA",timing:(q||{}).timing||"NO_TIMING",scripts:Q,globals:w(t),cookie:f.cookie,ephemeral:K,errors:r,document:(f.documentElement||{}).innerHTML||"NO_DOCUMENT"}};function s(Q){var R=x();R.name=Q;return O(R)}function y(T){var Q=T.length,R,S;while(Q>0){S=p.floor(p.random()*Q);Q--;R=T[Q];T[Q]=T[S];T[S]=R}return T}function e(V){if(!q||!q.getEntriesByType){return V}var R=q.getEntriesByType("resource");var W={};d(R,function(Y){var X=(Y.name.match(/\/\/([^/]+)/)||"")[1];if(X.indexOf(".tumblr.")===-1){return}if(!W[Y.initiatorType]){W[Y.initiatorType]=[]}var Z=X.split(".")[0];W[Y.initiatorType].push({name:Y.name.split(X)[1],duration:Y.duration,bucket:Z})});a.entries||(a.entries=[]);var Q=[{type:"img",num:10},{type:"link",num:2},{type:"script",num:2},{type:"css",num:2}];for(var U=0;U<Q.length;++U){var T=Q[U];var S=W[T.type];if(!S){continue}if(T.num<S.length){y(S)}while(T.num&&S.length){a.entries.push(S.pop());--T.num}}if(w(a)){((V||(V={})).perf=a);a.timing=q.timing;a.memory=q.memory;a.navigation=q.navigation}return V}function N(){try{if(!c){r.length=0;l(new j("PAGE_DID_NOT_LOAD"))}var Q;!b()&&u("enable_js_errors_log")(function(){r.length&&((Q||(Q={})).errors=r)});u("js_performance_logging")(function(){try{Q=e(Q)}catch(U){}});u("enable_js_ephemeral_log")(function(){K.length&&((Q||(Q={})).ephemeral=K)});u("js_debugger_1")(function(){(Q||(Q={})).ephemeral=[s("js_debugger_1")]});u("js_debugger_2")(function(){(Q||(Q={})).ephemeral=[s("js_debugger_2")]});if(!Q){return}Q.cdn=B||"CDN_LOOKUP_FAILED";var S=JSON.stringify({form_key:(f.getElementById("tumblr_form_key")||f.body).getAttribute("content"),gpop:(f.getElementById("tumblr_gpop")||f.body).getAttribute("content"),log:Q});var T=new I();T.open("POST","/svc/log/capture/exceptions",false);T.setRequestHeader("Content-type","text/plain");T.onreadystatechange=function(){if(T.readyState!==4){return}r.length=K.length=0};T.send(S)}catch(R){if(!t.jQuery){return}(Q||(Q={})).errors||(Q.errors=r);t.jQuery.ajax({async:false,dataType:"json",contentType:"text/plain",type:"POST",data:{form_key:t.jQuery("#tumblr_form_key").attr("content"),log:Q},url:"/svc/log/capture/exceptions",with_form_key:true});l(R)}}(function M(){P(E,"beforeunload",N);E.onerror=m})();(L.Utils||(L.Utils={})).exceptions=l;function k(){a.page_info={};a.page_info.path=f.location.pathname||"n/a"}function A(){var Q=new D().getTime();var R=Q-q.timing.navigationStart;a.page_load_time=R}function v(){if(!q||!q.timing){return}try{k();A()}catch(Q){}}function G(){c=true;v()}P(E,"load",G)})(this,this.Tumblr||(this.Tumblr={}));