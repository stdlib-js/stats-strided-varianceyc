"use strict";var x=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var l=x(function(C,d){
function j(r,a,e,v,y){var i,n,c,t,s,o,u,q,f;for(q=r-a,i=e.data,n=e.accessors[0],c=n(i,y),t=y+v,s=0,f=2;f<=r;f++)o=n(i,t),c+=o,u=f*o-c,s+=1/(f*(f-1))*u*u,t+=v;return s/q}d.exports=j
});var p=x(function(D,m){
var k=require('@stdlib/array-base-arraylike2object/dist'),O=l();function P(r,a,e,v,y){var i,n,c,t,s,o,u,q;if(o=r-a,r<=0||o<=0)return NaN;if(r===1||v===0)return 0;if(q=k(e),q.accessorProtocol)return O(r,a,q,v,y);for(i=e[y],n=y+v,c=0,u=2;u<=r;u++)t=e[n],i+=t,s=u*t-i,c+=1/(u*(u-1))*s*s,n+=v;return c/o}m.exports=P
});var S=x(function(E,b){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=p();function w(r,a,e,v){return h(r,a,e,v,R(r,v))}b.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=S(),A=p();z(g,"ndarray",A);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
