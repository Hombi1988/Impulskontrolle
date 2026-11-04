(()=>{var Qa=Object.create;var ks=Object.defineProperty;var Xa=Object.getOwnPropertyDescriptor;var Za=Object.getOwnPropertyNames;var ec=Object.getPrototypeOf,tc=Object.prototype.hasOwnProperty;var nc=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var rc=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Za(e))!tc.call(n,i)&&i!==t&&ks(n,i,{get:()=>e[i],enumerable:!(r=Xa(e,i))||r.enumerable});return n};var ic=(n,e,t)=>(t=n!=null?Qa(ec(n)):{},rc(e||!n||!n.__esModule?ks(t,"default",{value:n,enumerable:!0}):t,n));var ja=nc((Ba,qa)=>{var Fa=function(){var n=function(A,R){var T=236,b=17,f=A,I=t[R],l=null,u=0,E=null,g=[],w={},M=function(p,m){u=f*4+17,l=function(h){for(var _=new Array(h),v=0;v<h;v+=1){_[v]=new Array(h);for(var S=0;S<h;S+=1)_[v][S]=null}return _}(u),V(0,0),V(u-7,0),V(0,u-7),ne(),K(),Se(p,m),f>=7&&ve(p),E==null&&(E=Ya(f,I,g)),Re(E,m)},V=function(p,m){for(var h=-1;h<=7;h+=1)if(!(p+h<=-1||u<=p+h))for(var _=-1;_<=7;_+=1)m+_<=-1||u<=m+_||(0<=h&&h<=6&&(_==0||_==6)||0<=_&&_<=6&&(h==0||h==6)||2<=h&&h<=4&&2<=_&&_<=4?l[p+h][m+_]=!0:l[p+h][m+_]=!1)},q=function(){for(var p=0,m=0,h=0;h<8;h+=1){M(!0,h);var _=i.getLostPoint(w);(h==0||p>_)&&(p=_,m=h)}return m},K=function(){for(var p=8;p<u-8;p+=1)l[p][6]==null&&(l[p][6]=p%2==0);for(var m=8;m<u-8;m+=1)l[6][m]==null&&(l[6][m]=m%2==0)},ne=function(){for(var p=i.getPatternPosition(f),m=0;m<p.length;m+=1)for(var h=0;h<p.length;h+=1){var _=p[m],v=p[h];if(l[_][v]==null)for(var S=-2;S<=2;S+=1)for(var D=-2;D<=2;D+=1)S==-2||S==2||D==-2||D==2||S==0&&D==0?l[_+S][v+D]=!0:l[_+S][v+D]=!1}},ve=function(p){for(var m=i.getBCHTypeNumber(f),h=0;h<18;h+=1){var _=!p&&(m>>h&1)==1;l[Math.floor(h/3)][h%3+u-8-3]=_}for(var h=0;h<18;h+=1){var _=!p&&(m>>h&1)==1;l[h%3+u-8-3][Math.floor(h/3)]=_}},Se=function(p,m){for(var h=I<<3|m,_=i.getBCHTypeInfo(h),v=0;v<15;v+=1){var S=!p&&(_>>v&1)==1;v<6?l[v][8]=S:v<8?l[v+1][8]=S:l[u-15+v][8]=S}for(var v=0;v<15;v+=1){var S=!p&&(_>>v&1)==1;v<8?l[8][u-v-1]=S:v<9?l[8][15-v-1+1]=S:l[8][15-v-1]=S}l[u-8][8]=!p},Re=function(p,m){for(var h=-1,_=u-1,v=7,S=0,D=i.getMaskFunction(m),C=u-1;C>0;C-=2)for(C==6&&(C-=1);;){for(var $=0;$<2;$+=1)if(l[_][C-$]==null){var J=!1;S<p.length&&(J=(p[S]>>>v&1)==1);var L=D(_,C-$);L&&(J=!J),l[_][C-$]=J,v-=1,v==-1&&(S+=1,v=7)}if(_+=h,_<0||u<=_){_-=h,h=-h;break}}},ct=function(p,m){for(var h=0,_=0,v=0,S=new Array(m.length),D=new Array(m.length),C=0;C<m.length;C+=1){var $=m[C].dataCount,J=m[C].totalCount-$;_=Math.max(_,$),v=Math.max(v,J),S[C]=new Array($);for(var L=0;L<S[C].length;L+=1)S[C][L]=255&p.getBuffer()[L+h];h+=$;var le=i.getErrorCorrectPolynomial(J),de=o(S[C],le.getLength()-1),Ss=de.mod(le);D[C]=new Array(le.getLength()-1);for(var L=0;L<D[C].length;L+=1){var Rs=L+Ss.getLength()-D[C].length;D[C][L]=Rs>=0?Ss.getAt(Rs):0}}for(var Ps=0,L=0;L<m.length;L+=1)Ps+=m[L].totalCount;for(var Rr=new Array(Ps),dn=0,L=0;L<_;L+=1)for(var C=0;C<m.length;C+=1)L<S[C].length&&(Rr[dn]=S[C][L],dn+=1);for(var L=0;L<v;L+=1)for(var C=0;C<m.length;C+=1)L<D[C].length&&(Rr[dn]=D[C][L],dn+=1);return Rr},Ya=function(p,m,h){for(var _=a.getRSBlocks(p,m),v=c(),S=0;S<h.length;S+=1){var D=h[S];v.put(D.getMode(),4),v.put(D.getLength(),i.getLengthInBits(D.getMode(),p)),D.write(v)}for(var C=0,S=0;S<_.length;S+=1)C+=_[S].dataCount;if(v.getLengthInBits()>C*8)throw"code length overflow. ("+v.getLengthInBits()+">"+C*8+")";for(v.getLengthInBits()+4<=C*8&&v.put(0,4);v.getLengthInBits()%8!=0;)v.putBit(!1);for(;!(v.getLengthInBits()>=C*8||(v.put(T,8),v.getLengthInBits()>=C*8));)v.put(b,8);return ct(v,_)};w.addData=function(p,m){m=m||"Byte";var h=null;switch(m){case"Numeric":h=d(p);break;case"Alphanumeric":h=y(p);break;case"Byte":h=O(p);break;case"Kanji":h=N(p);break;default:throw"mode:"+m}g.push(h),E=null},w.isDark=function(p,m){if(p<0||u<=p||m<0||u<=m)throw p+","+m;return l[p][m]},w.getModuleCount=function(){return u},w.make=function(){if(f<1){for(var p=1;p<40;p++){for(var m=a.getRSBlocks(p,I),h=c(),_=0;_<g.length;_++){var v=g[_];h.put(v.getMode(),4),h.put(v.getLength(),i.getLengthInBits(v.getMode(),p)),v.write(h)}for(var S=0,_=0;_<m.length;_++)S+=m[_].dataCount;if(h.getLengthInBits()<=S*8)break}f=p}M(!1,q())},w.createTableTag=function(p,m){p=p||2,m=typeof m=="undefined"?p*4:m;var h="";h+='<table style="',h+=" border-width: 0px; border-style: none;",h+=" border-collapse: collapse;",h+=" padding: 0px; margin: "+m+"px;",h+='">',h+="<tbody>";for(var _=0;_<w.getModuleCount();_+=1){h+="<tr>";for(var v=0;v<w.getModuleCount();v+=1)h+='<td style="',h+=" border-width: 0px; border-style: none;",h+=" border-collapse: collapse;",h+=" padding: 0px; margin: 0px;",h+=" width: "+p+"px;",h+=" height: "+p+"px;",h+=" background-color: ",h+=w.isDark(_,v)?"#000000":"#ffffff",h+=";",h+='"/>';h+="</tr>"}return h+="</tbody>",h+="</table>",h},w.createSvgTag=function(p,m,h,_){var v={};typeof arguments[0]=="object"&&(v=arguments[0],p=v.cellSize,m=v.margin,h=v.alt,_=v.title),p=p||2,m=typeof m=="undefined"?p*4:m,h=typeof h=="string"?{text:h}:h||{},h.text=h.text||null,h.id=h.text?h.id||"qrcode-description":null,_=typeof _=="string"?{text:_}:_||{},_.text=_.text||null,_.id=_.text?_.id||"qrcode-title":null;var S=w.getModuleCount()*p+m*2,D,C,$,J,L="",le;for(le="l"+p+",0 0,"+p+" -"+p+",0 0,-"+p+"z ",L+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',L+=v.scalable?"":' width="'+S+'px" height="'+S+'px"',L+=' viewBox="0 0 '+S+" "+S+'" ',L+=' preserveAspectRatio="xMinYMin meet"',L+=_.text||h.text?' role="img" aria-labelledby="'+ut([_.id,h.id].join(" ").trim())+'"':"",L+=">",L+=_.text?'<title id="'+ut(_.id)+'">'+ut(_.text)+"</title>":"",L+=h.text?'<description id="'+ut(h.id)+'">'+ut(h.text)+"</description>":"",L+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',L+='<path d="',$=0;$<w.getModuleCount();$+=1)for(J=$*p+m,D=0;D<w.getModuleCount();D+=1)w.isDark($,D)&&(C=D*p+m,L+="M"+C+","+J+le);return L+='" stroke="transparent" fill="black"/>',L+="</svg>",L},w.createDataURL=function(p,m){p=p||2,m=typeof m=="undefined"?p*4:m;var h=w.getModuleCount()*p+m*2,_=m,v=h-m;return ln(h,h,function(S,D){if(_<=S&&S<v&&_<=D&&D<v){var C=Math.floor((S-_)/p),$=Math.floor((D-_)/p);return w.isDark($,C)?0:1}else return 1})},w.createImgTag=function(p,m,h){p=p||2,m=typeof m=="undefined"?p*4:m;var _=w.getModuleCount()*p+m*2,v="";return v+="<img",v+=' src="',v+=w.createDataURL(p,m),v+='"',v+=' width="',v+=_,v+='"',v+=' height="',v+=_,v+='"',h&&(v+=' alt="',v+=ut(h),v+='"'),v+="/>",v};var ut=function(p){for(var m="",h=0;h<p.length;h+=1){var _=p.charAt(h);switch(_){case"<":m+="&lt;";break;case">":m+="&gt;";break;case"&":m+="&amp;";break;case'"':m+="&quot;";break;default:m+=_;break}}return m},Ja=function(p){var m=1;p=typeof p=="undefined"?m*2:p;var h=w.getModuleCount()*m+p*2,_=p,v=h-p,S,D,C,$,J,L={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},le={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},de="";for(S=0;S<h;S+=2){for(C=Math.floor((S-_)/m),$=Math.floor((S+1-_)/m),D=0;D<h;D+=1)J="\u2588",_<=D&&D<v&&_<=S&&S<v&&w.isDark(C,Math.floor((D-_)/m))&&(J=" "),_<=D&&D<v&&_<=S+1&&S+1<v&&w.isDark($,Math.floor((D-_)/m))?J+=" ":J+="\u2588",de+=p<1&&S+1>=v?le[J]:L[J];de+=`
`}return h%2&&p>0?de.substring(0,de.length-h-1)+Array(h+1).join("\u2580"):de.substring(0,de.length-1)};return w.createASCII=function(p,m){if(p=p||1,p<2)return Ja(m);p-=1,m=typeof m=="undefined"?p*2:m;var h=w.getModuleCount()*p+m*2,_=m,v=h-m,S,D,C,$,J=Array(p+1).join("\u2588\u2588"),L=Array(p+1).join("  "),le="",de="";for(S=0;S<h;S+=1){for(C=Math.floor((S-_)/p),de="",D=0;D<h;D+=1)$=1,_<=D&&D<v&&_<=S&&S<v&&w.isDark(C,Math.floor((D-_)/p))&&($=0),de+=$?J:L;for(C=0;C<p;C+=1)le+=de+`
`}return le.substring(0,le.length-1)},w.renderTo2dContext=function(p,m){m=m||2;for(var h=w.getModuleCount(),_=0;_<h;_++)for(var v=0;v<h;v++)p.fillStyle=w.isDark(_,v)?"black":"white",p.fillRect(_*m,v*m,m,m)},w};n.stringToBytesFuncs={default:function(A){for(var R=[],T=0;T<A.length;T+=1){var b=A.charCodeAt(T);R.push(b&255)}return R}},n.stringToBytes=n.stringToBytesFuncs.default,n.createStringToBytes=function(A,R){var T=function(){for(var f=at(A),I=function(){var K=f.read();if(K==-1)throw"eof";return K},l=0,u={};;){var E=f.read();if(E==-1)break;var g=I(),w=I(),M=I(),V=String.fromCharCode(E<<8|g),q=w<<8|M;u[V]=q,l+=1}if(l!=R)throw l+" != "+R;return u}(),b=63;return function(f){for(var I=[],l=0;l<f.length;l+=1){var u=f.charCodeAt(l);if(u<128)I.push(u);else{var E=T[f.charAt(l)];typeof E=="number"?(E&255)==E?I.push(E):(I.push(E>>>8),I.push(E&255)):I.push(b)}}return I}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},t={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var A=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],R=1335,T=7973,b=21522,f={},I=function(l){for(var u=0;l!=0;)u+=1,l>>>=1;return u};return f.getBCHTypeInfo=function(l){for(var u=l<<10;I(u)-I(R)>=0;)u^=R<<I(u)-I(R);return(l<<10|u)^b},f.getBCHTypeNumber=function(l){for(var u=l<<12;I(u)-I(T)>=0;)u^=T<<I(u)-I(T);return l<<12|u},f.getPatternPosition=function(l){return A[l-1]},f.getMaskFunction=function(l){switch(l){case r.PATTERN000:return function(u,E){return(u+E)%2==0};case r.PATTERN001:return function(u,E){return u%2==0};case r.PATTERN010:return function(u,E){return E%3==0};case r.PATTERN011:return function(u,E){return(u+E)%3==0};case r.PATTERN100:return function(u,E){return(Math.floor(u/2)+Math.floor(E/3))%2==0};case r.PATTERN101:return function(u,E){return u*E%2+u*E%3==0};case r.PATTERN110:return function(u,E){return(u*E%2+u*E%3)%2==0};case r.PATTERN111:return function(u,E){return(u*E%3+(u+E)%2)%2==0};default:throw"bad maskPattern:"+l}},f.getErrorCorrectPolynomial=function(l){for(var u=o([1],0),E=0;E<l;E+=1)u=u.multiply(o([1,s.gexp(E)],0));return u},f.getLengthInBits=function(l,u){if(1<=u&&u<10)switch(l){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw"mode:"+l}else if(u<27)switch(l){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw"mode:"+l}else if(u<41)switch(l){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw"mode:"+l}else throw"type:"+u},f.getLostPoint=function(l){for(var u=l.getModuleCount(),E=0,g=0;g<u;g+=1)for(var w=0;w<u;w+=1){for(var M=0,V=l.isDark(g,w),q=-1;q<=1;q+=1)if(!(g+q<0||u<=g+q))for(var K=-1;K<=1;K+=1)w+K<0||u<=w+K||q==0&&K==0||V==l.isDark(g+q,w+K)&&(M+=1);M>5&&(E+=3+M-5)}for(var g=0;g<u-1;g+=1)for(var w=0;w<u-1;w+=1){var ne=0;l.isDark(g,w)&&(ne+=1),l.isDark(g+1,w)&&(ne+=1),l.isDark(g,w+1)&&(ne+=1),l.isDark(g+1,w+1)&&(ne+=1),(ne==0||ne==4)&&(E+=3)}for(var g=0;g<u;g+=1)for(var w=0;w<u-6;w+=1)l.isDark(g,w)&&!l.isDark(g,w+1)&&l.isDark(g,w+2)&&l.isDark(g,w+3)&&l.isDark(g,w+4)&&!l.isDark(g,w+5)&&l.isDark(g,w+6)&&(E+=40);for(var w=0;w<u;w+=1)for(var g=0;g<u-6;g+=1)l.isDark(g,w)&&!l.isDark(g+1,w)&&l.isDark(g+2,w)&&l.isDark(g+3,w)&&l.isDark(g+4,w)&&!l.isDark(g+5,w)&&l.isDark(g+6,w)&&(E+=40);for(var ve=0,w=0;w<u;w+=1)for(var g=0;g<u;g+=1)l.isDark(g,w)&&(ve+=1);var Se=Math.abs(100*ve/u/u-50)/5;return E+=Se*10,E},f}(),s=function(){for(var A=new Array(256),R=new Array(256),T=0;T<8;T+=1)A[T]=1<<T;for(var T=8;T<256;T+=1)A[T]=A[T-4]^A[T-5]^A[T-6]^A[T-8];for(var T=0;T<255;T+=1)R[A[T]]=T;var b={};return b.glog=function(f){if(f<1)throw"glog("+f+")";return R[f]},b.gexp=function(f){for(;f<0;)f+=255;for(;f>=256;)f-=255;return A[f]},b}();function o(A,R){if(typeof A.length=="undefined")throw A.length+"/"+R;var T=function(){for(var f=0;f<A.length&&A[f]==0;)f+=1;for(var I=new Array(A.length-f+R),l=0;l<A.length-f;l+=1)I[l]=A[l+f];return I}(),b={};return b.getAt=function(f){return T[f]},b.getLength=function(){return T.length},b.multiply=function(f){for(var I=new Array(b.getLength()+f.getLength()-1),l=0;l<b.getLength();l+=1)for(var u=0;u<f.getLength();u+=1)I[l+u]^=s.gexp(s.glog(b.getAt(l))+s.glog(f.getAt(u)));return o(I,0)},b.mod=function(f){if(b.getLength()-f.getLength()<0)return b;for(var I=s.glog(b.getAt(0))-s.glog(f.getAt(0)),l=new Array(b.getLength()),u=0;u<b.getLength();u+=1)l[u]=b.getAt(u);for(var u=0;u<f.getLength();u+=1)l[u]^=s.gexp(s.glog(f.getAt(u))+I);return o(l,0).mod(f)},b}var a=function(){var A=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],R=function(f,I){var l={};return l.totalCount=f,l.dataCount=I,l},T={},b=function(f,I){switch(I){case t.L:return A[(f-1)*4+0];case t.M:return A[(f-1)*4+1];case t.Q:return A[(f-1)*4+2];case t.H:return A[(f-1)*4+3];default:return}};return T.getRSBlocks=function(f,I){var l=b(f,I);if(typeof l=="undefined")throw"bad rs block @ typeNumber:"+f+"/errorCorrectionLevel:"+I;for(var u=l.length/3,E=[],g=0;g<u;g+=1)for(var w=l[g*3+0],M=l[g*3+1],V=l[g*3+2],q=0;q<w;q+=1)E.push(R(M,V));return E},T}(),c=function(){var A=[],R=0,T={};return T.getBuffer=function(){return A},T.getAt=function(b){var f=Math.floor(b/8);return(A[f]>>>7-b%8&1)==1},T.put=function(b,f){for(var I=0;I<f;I+=1)T.putBit((b>>>f-I-1&1)==1)},T.getLengthInBits=function(){return R},T.putBit=function(b){var f=Math.floor(R/8);A.length<=f&&A.push(0),b&&(A[f]|=128>>>R%8),R+=1},T},d=function(A){var R=e.MODE_NUMBER,T=A,b={};b.getMode=function(){return R},b.getLength=function(l){return T.length},b.write=function(l){for(var u=T,E=0;E+2<u.length;)l.put(f(u.substring(E,E+3)),10),E+=3;E<u.length&&(u.length-E==1?l.put(f(u.substring(E,E+1)),4):u.length-E==2&&l.put(f(u.substring(E,E+2)),7))};var f=function(l){for(var u=0,E=0;E<l.length;E+=1)u=u*10+I(l.charAt(E));return u},I=function(l){if("0"<=l&&l<="9")return l.charCodeAt(0)-48;throw"illegal char :"+l};return b},y=function(A){var R=e.MODE_ALPHA_NUM,T=A,b={};b.getMode=function(){return R},b.getLength=function(I){return T.length},b.write=function(I){for(var l=T,u=0;u+1<l.length;)I.put(f(l.charAt(u))*45+f(l.charAt(u+1)),11),u+=2;u<l.length&&I.put(f(l.charAt(u)),6)};var f=function(I){if("0"<=I&&I<="9")return I.charCodeAt(0)-48;if("A"<=I&&I<="Z")return I.charCodeAt(0)-65+10;switch(I){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+I}};return b},O=function(A){var R=e.MODE_8BIT_BYTE,T=A,b=n.stringToBytes(A),f={};return f.getMode=function(){return R},f.getLength=function(I){return b.length},f.write=function(I){for(var l=0;l<b.length;l+=1)I.put(b[l],8)},f},N=function(A){var R=e.MODE_KANJI,T=A,b=n.stringToBytesFuncs.SJIS;if(!b)throw"sjis not supported.";(function(l,u){var E=b(l);if(E.length!=2||(E[0]<<8|E[1])!=u)throw"sjis not supported."})("\u53CB",38726);var f=b(A),I={};return I.getMode=function(){return R},I.getLength=function(l){return~~(f.length/2)},I.write=function(l){for(var u=f,E=0;E+1<u.length;){var g=(255&u[E])<<8|255&u[E+1];if(33088<=g&&g<=40956)g-=33088;else if(57408<=g&&g<=60351)g-=49472;else throw"illegal char at "+(E+1)+"/"+g;g=(g>>>8&255)*192+(g&255),l.put(g,13),E+=2}if(E<u.length)throw"illegal char at "+(E+1)},I},j=function(){var A=[],R={};return R.writeByte=function(T){A.push(T&255)},R.writeShort=function(T){R.writeByte(T),R.writeByte(T>>>8)},R.writeBytes=function(T,b,f){b=b||0,f=f||T.length;for(var I=0;I<f;I+=1)R.writeByte(T[I+b])},R.writeString=function(T){for(var b=0;b<T.length;b+=1)R.writeByte(T.charCodeAt(b))},R.toByteArray=function(){return A},R.toString=function(){var T="";T+="[";for(var b=0;b<A.length;b+=1)b>0&&(T+=","),T+=A[b];return T+="]",T},R},Y=function(){var A=0,R=0,T=0,b="",f={},I=function(u){b+=String.fromCharCode(l(u&63))},l=function(u){if(!(u<0)){if(u<26)return 65+u;if(u<52)return 97+(u-26);if(u<62)return 48+(u-52);if(u==62)return 43;if(u==63)return 47}throw"n:"+u};return f.writeByte=function(u){for(A=A<<8|u&255,R+=8,T+=1;R>=6;)I(A>>>R-6),R-=6},f.flush=function(){if(R>0&&(I(A<<6-R),A=0,R=0),T%3!=0)for(var u=3-T%3,E=0;E<u;E+=1)b+="="},f.toString=function(){return b},f},at=function(A){var R=A,T=0,b=0,f=0,I={};I.read=function(){for(;f<8;){if(T>=R.length){if(f==0)return-1;throw"unexpected end of file./"+f}var u=R.charAt(T);if(T+=1,u=="=")return f=0,-1;if(u.match(/^\s$/))continue;b=b<<6|l(u.charCodeAt(0)),f+=6}var E=b>>>f-8&255;return f-=8,E};var l=function(u){if(65<=u&&u<=90)return u-65;if(97<=u&&u<=122)return u-97+26;if(48<=u&&u<=57)return u-48+52;if(u==43)return 62;if(u==47)return 63;throw"c:"+u};return I},Ne=function(A,R){var T=A,b=R,f=new Array(A*R),I={};I.setPixel=function(g,w,M){f[w*T+g]=M},I.write=function(g){g.writeString("GIF87a"),g.writeShort(T),g.writeShort(b),g.writeByte(128),g.writeByte(0),g.writeByte(0),g.writeByte(0),g.writeByte(0),g.writeByte(0),g.writeByte(255),g.writeByte(255),g.writeByte(255),g.writeString(","),g.writeShort(0),g.writeShort(0),g.writeShort(T),g.writeShort(b),g.writeByte(0);var w=2,M=u(w);g.writeByte(w);for(var V=0;M.length-V>255;)g.writeByte(255),g.writeBytes(M,V,255),V+=255;g.writeByte(M.length-V),g.writeBytes(M,V,M.length-V),g.writeByte(0),g.writeString(";")};var l=function(g){var w=g,M=0,V=0,q={};return q.write=function(K,ne){if(K>>>ne)throw"length over";for(;M+ne>=8;)w.writeByte(255&(K<<M|V)),ne-=8-M,K>>>=8-M,V=0,M=0;V=K<<M|V,M=M+ne},q.flush=function(){M>0&&w.writeByte(V)},q},u=function(g){for(var w=1<<g,M=(1<<g)+1,V=g+1,q=E(),K=0;K<w;K+=1)q.add(String.fromCharCode(K));q.add(String.fromCharCode(w)),q.add(String.fromCharCode(M));var ne=j(),ve=l(ne);ve.write(w,V);var Se=0,Re=String.fromCharCode(f[Se]);for(Se+=1;Se<f.length;){var ct=String.fromCharCode(f[Se]);Se+=1,q.contains(Re+ct)?Re=Re+ct:(ve.write(q.indexOf(Re),V),q.size()<4095&&(q.size()==1<<V&&(V+=1),q.add(Re+ct)),Re=ct)}return ve.write(q.indexOf(Re),V),ve.write(M,V),ve.flush(),ne.toByteArray()},E=function(){var g={},w=0,M={};return M.add=function(V){if(M.contains(V))throw"dup key:"+V;g[V]=w,w+=1},M.size=function(){return w},M.indexOf=function(V){return g[V]},M.contains=function(V){return typeof g[V]!="undefined"},M};return I},ln=function(A,R,T){for(var b=Ne(A,R),f=0;f<R;f+=1)for(var I=0;I<A;I+=1)b.setPixel(I,f,T(I,f));var l=j();b.write(l);for(var u=Y(),E=l.toByteArray(),g=0;g<E.length;g+=1)u.writeByte(E[g]);return u.flush(),"data:image/gif;base64,"+u};return n}();(function(){Fa.stringToBytesFuncs["UTF-8"]=function(n){function e(t){for(var r=[],i=0;i<t.length;i++){var s=t.charCodeAt(i);s<128?r.push(s):s<2048?r.push(192|s>>6,128|s&63):s<55296||s>=57344?r.push(224|s>>12,128|s>>6&63,128|s&63):(i++,s=65536+((s&1023)<<10|t.charCodeAt(i)&1023),r.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63))}return r}return e(n)}})();(function(n){typeof define=="function"&&define.amd?define([],n):typeof Ba=="object"&&(qa.exports=n())})(function(){return Fa})});var Cs=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},sc=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{let s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,y=s>>2,O=(s&3)<<4|a>>4,N=(a&15)<<2|d>>6,j=d&63;c||(j=64,o||(N=64)),r.push(t[y],t[O],t[N],t[j])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let O=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||d==null||O==null)throw new kr;let N=s<<2|a>>4;if(r.push(N),d!==64){let j=a<<4&240|d>>2;if(r.push(j),O!==64){let Y=d<<6&192|O;r.push(Y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},kr=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},oc=function(n){let e=Cs(n);return Ns.encodeByteArray(e,!0)},kt=function(n){return oc(n).replace(/\./g,"")},Cr=function(n){try{return Ns.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ac(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var cc=()=>ac().__FIREBASE_DEFAULTS__,uc=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lc=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Cr(n[1]);return e&&JSON.parse(e)},Nr=()=>{try{return cc()||uc()||lc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dr=n=>{var e,t;return(t=(e=Nr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ds=n=>{let e=Dr(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lr=()=>{var n;return(n=Nr())===null||n===void 0?void 0:n.config},xr=n=>{var e;return(e=Nr())===null||e===void 0?void 0:e[`_${n}`]};var hn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Ls(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kt(JSON.stringify(t)),kt(JSON.stringify(o)),""].join(".")}function te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xs(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function Ms(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Us(){let n=te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fs(){try{return typeof indexedDB=="object"}catch{return!1}}function Bs(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var dc="FirebaseError",ce=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=dc,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}},Pe=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ce(i,a,r)}};function hc(n,e){return n.replace(fc,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var fc=/\{\$([^}]+)}/g;function qs(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function De(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],o=e[i];if(Os(s)&&Os(o)){if(!De(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Os(n){return n!==null&&typeof n=="object"}function lt(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dt(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ht(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function js(n,e){let t=new Or(n,e);return t.subscribe.bind(t)}var Or=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");pc(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Pr),i.error===void 0&&(i.error=Pr),i.complete===void 0&&(i.complete=Pr);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function pc(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pr(){}var rh=4*60*60*1e3;function G(n){return n&&n._delegate?n._delegate:n}var he=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var He="[DEFAULT]";var Mr=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new hn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gc(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mc(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function mc(n){return n===He?void 0:n}function gc(n){return n.instantiationMode==="EAGER"}var fn=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Mr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var _c=[],B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));var vc={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},yc=B.INFO,wc={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ic=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=wc[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Le=class{constructor(e){this.name=e,this._logLevel=yc,this._logHandler=Ic,this._userLogHandler=null,_c.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}};var Ec=(n,e)=>e.some(t=>n instanceof t),$s,Hs;function Tc(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bc(){return Hs||(Hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Ws=new WeakMap,Ur=new WeakMap,zs=new WeakMap,Vr=new WeakMap,Br=new WeakMap;function Ac(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ye(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ws.set(t,n)}).catch(()=>{}),Br.set(e,n),e}function Sc(n){if(Ur.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ur.set(n,e)}var Fr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ur.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ye(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gs(n){Fr=n(Fr)}function Rc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(pn(this),e,...t);return zs.set(r,e.sort?e.sort():[e]),ye(r)}:bc().includes(n)?function(...e){return n.apply(pn(this),e),ye(Ws.get(this))}:function(...e){return ye(n.apply(pn(this),e))}}function Pc(n){return typeof n=="function"?Rc(n):(n instanceof IDBTransaction&&Sc(n),Ec(n,Tc())?new Proxy(n,Fr):n)}function ye(n){if(n instanceof IDBRequest)return Ac(n);if(Vr.has(n))return Vr.get(n);let e=Pc(n);return e!==n&&(Vr.set(n,e),Br.set(e,n)),e}var pn=n=>Br.get(n);function Ys(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(n,e),a=ye(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ye(o.result),c.oldVersion,c.newVersion,ye(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}var kc=["get","getKey","getAll","getAllKeys","count"],Oc=["put","add","delete","clear"],qr=new Map;function Ks(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Oc.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kc.includes(t)))return;let s=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),d=c.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[t](...a),i&&c.done]))[0]};return qr.set(e,s),s}Gs(n=>({...n,get:(e,t,r)=>Ks(e,t)||n.get(e,t,r),has:(e,t)=>!!Ks(e,t)||n.has(e,t)}));var $r=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cc(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Cc(n){let e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}var Hr="@firebase/app",Js="0.10.5";var We=new Le("@firebase/app"),Nc="@firebase/app-compat",Dc="@firebase/analytics-compat",Lc="@firebase/analytics",xc="@firebase/app-check-compat",Mc="@firebase/app-check",Vc="@firebase/auth",Uc="@firebase/auth-compat",Fc="@firebase/database",Bc="@firebase/database-compat",qc="@firebase/functions",jc="@firebase/functions-compat",$c="@firebase/installations",Hc="@firebase/installations-compat",Wc="@firebase/messaging",zc="@firebase/messaging-compat",Gc="@firebase/performance",Kc="@firebase/performance-compat",Yc="@firebase/remote-config",Jc="@firebase/remote-config-compat",Qc="@firebase/storage",Xc="@firebase/storage-compat",Zc="@firebase/firestore",eu="@firebase/vertexai-preview",tu="@firebase/firestore-compat",nu="firebase",ru="10.12.2";var Wr="[DEFAULT]",iu={[Hr]:"fire-core",[Nc]:"fire-core-compat",[Lc]:"fire-analytics",[Dc]:"fire-analytics-compat",[Mc]:"fire-app-check",[xc]:"fire-app-check-compat",[Vc]:"fire-auth",[Uc]:"fire-auth-compat",[Fc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[qc]:"fire-fn",[jc]:"fire-fn-compat",[$c]:"fire-iid",[Hc]:"fire-iid-compat",[Wc]:"fire-fcm",[zc]:"fire-fcm-compat",[Gc]:"fire-perf",[Kc]:"fire-perf-compat",[Yc]:"fire-rc",[Jc]:"fire-rc-compat",[Qc]:"fire-gcs",[Xc]:"fire-gcs-compat",[Zc]:"fire-fst",[tu]:"fire-fst-compat",[eu]:"fire-vertex","fire-js":"fire-js",[nu]:"fire-js-all"};var mn=new Map,su=new Map,zr=new Map;function Qs(n,e){try{n.container.addComponent(e)}catch(t){We.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Me(n){let e=n.name;if(zr.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,n);for(let t of mn.values())Qs(t,n);for(let t of su.values())Qs(t,n);return!0}function Ct(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function we(n){return n.settings!==void 0}var ou={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xe=new Pe("app","Firebase",ou);var Gr=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new he("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}};var Ve=ru;function Jr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xe.create("bad-app-name",{appName:String(i)});if(t||(t=Lr()),!t)throw xe.create("no-options");let s=mn.get(i);if(s){if(De(t,s.options)&&De(r,s.config))return s;throw xe.create("duplicate-app",{appName:i})}let o=new fn(i);for(let c of zr.values())o.addComponent(c);let a=new Gr(t,r,o);return mn.set(i,a),a}function gn(n=Wr){let e=mn.get(n);if(!e&&n===Wr&&Lr())return Jr();if(!e)throw xe.create("no-app",{appName:n});return e}function pe(n,e,t){var r;let i=(r=iu[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}Me(new he(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var au="firebase-heartbeat-database",cu=1,Ot="firebase-heartbeat-store",jr=null;function to(){return jr||(jr=Ys(au,cu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ot)}catch(t){console.warn(t)}}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),jr}async function uu(n){try{let t=(await to()).transaction(Ot),r=await t.objectStore(Ot).get(no(n));return await t.done,r}catch(e){if(e instanceof ce)We.warn(e.message);else{let t=xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(t.message)}}}async function Xs(n,e){try{let r=(await to()).transaction(Ot,"readwrite");await r.objectStore(Ot).put(e,no(n)),await r.done}catch(t){if(t instanceof ce)We.warn(t.message);else{let r=xe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});We.warn(r.message)}}}function no(n){return`${n.name}!${n.options.appId}`}var lu=1024,du=30*24*60*60*1e3,Kr=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Yr(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zs();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let a=new Date(o.date).valueOf();return Date.now()-a<=du}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Zs(),{heartbeatsToSend:r,unsentEntries:i}=hu(this._heartbeatsCache.heartbeats),s=kt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}};function Zs(){return new Date().toISOString().substring(0,10)}function hu(n,e=lu){let t=[],r=n.slice();for(let i of n){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),eo(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),eo(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Yr=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fs()?Bs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await uu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Xs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Xs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function eo(n){return kt(JSON.stringify({version:2,heartbeats:n})).length}function fu(n){Me(new he("platform-logger",e=>new $r(e),"PRIVATE")),Me(new he("heartbeat",e=>new Kr(e),"PRIVATE")),pe(Hr,Js,n),pe(Hr,Js,"esm2017"),pe("fire-js","")}fu("");var pu="firebase",mu="10.12.2";pe(pu,mu,"app");function _n(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Io(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Eo=Io,To=new Pe("auth","Firebase",Io());var Tn=new Le("@firebase/auth");function gu(n,...e){Tn.logLevel<=B.WARN&&Tn.warn(`Auth (${Ve}): ${n}`,...e)}function yn(n,...e){Tn.logLevel<=B.ERROR&&Tn.error(`Auth (${Ve}): ${n}`,...e)}function me(n,...e){throw _i(n,...e)}function Ee(n,...e){return _i(n,...e)}function bo(n,e,t){let r=Object.assign(Object.assign({},Eo()),{[e]:t});return new Pe("auth","Firebase",r).create(e,{appName:n.name})}function Fe(n){return bo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _i(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return To.create(n,...e)}function P(n,e,...t){if(!n)throw _i(e,...t)}function Ie(n){let e="INTERNAL ASSERTION FAILED: "+n;throw yn(e),new Error(e)}function Oe(n,e){n||Ie(e)}function Zr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _u(){return ro()==="http:"||ro()==="https:"}function ro(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function vu(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_u()||Ms()||"connection"in navigator)?navigator.onLine:!0}function yu(){if(typeof navigator=="undefined")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var ze=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=xs()||Vs()}get(){return vu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function vi(n,e){Oe(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var bn=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var wu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Iu=new ze(3e4,6e4);function Q(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function re(n,e,t,r,i={}){return Ao(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let a=lt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),bn.fetch()(So(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ao(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},wu),e);try{let i=new ei(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw Nt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[c,d]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Nt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Nt(n,"user-disabled",o);let y=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw bo(n,y,d);me(n,y)}}catch(i){if(i instanceof ce)throw i;me(n,"network-request-failed",{message:String(i)})}}async function Be(n,e,t,r,i={}){let s=await re(n,e,t,r,i);return"mfaPendingCredential"in s&&me(n,"multi-factor-auth-required",{_serverResponse:s}),s}function So(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?vi(n.config,i):`${n.config.apiScheme}://${i}`}function Eu(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ei=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ee(this.auth,"network-request-failed")),Iu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Nt(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Ee(n,e,r);return i.customData._tokenResponse=t,i}function io(n){return n!==void 0&&n.enterprise!==void 0}var ti=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Eu(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function Tu(n,e){return re(n,"GET","/v2/recaptchaConfig",Q(n,e))}async function bu(n,e){return re(n,"POST","/v1/accounts:delete",e)}async function Ro(n,e){return re(n,"POST","/v1/accounts:lookup",e)}function Dt(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Po(n,e=!1){let t=G(n),r=await t.getIdToken(e),i=yi(r);P(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dt(Qr(i.auth_time)),issuedAtTime:Dt(Qr(i.iat)),expirationTime:Dt(Qr(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qr(n){return Number(n)*1e3}function yi(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yn("JWT malformed, contained fewer than 3 sections"),null;try{let i=Cr(t);return i?JSON.parse(i):(yn("Failed to decode base64 JWT payload"),null)}catch(i){return yn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function so(n){let e=yi(n);return P(e,"internal-error"),P(typeof e.exp!="undefined","internal-error"),P(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}async function xt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ce&&Au(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Au({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var ni=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Mt=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dt(this.lastLoginAt),this.creationTime=Dt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function An(n){var e;let t=n.auth,r=await n.getIdToken(),i=await xt(n,Ro(t,{idToken:r}));P(i==null?void 0:i.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Oo(s.providerUserInfo):[],a=Su(n.providerData,o),c=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),y=c?d:!1,O={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mt(s.createdAt,s.lastLoginAt),isAnonymous:y};Object.assign(n,O)}async function ko(n){let e=G(n);await An(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Su(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Oo(n){return n.map(e=>{var{providerId:t}=e,r=_n(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Ru(n,e){let t=await Ao(n,{},async()=>{let r=lt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=So(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bn.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pu(n,e){return re(n,"POST","/v2/accounts:revokeToken",Q(n,e))}var Lt=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken!="undefined","internal-error"),P(typeof e.refreshToken!="undefined","internal-error");let t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):so(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,"internal-error");let t=so(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Ru(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new n;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Ie("not implemented")}};function Ue(n,e){P(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}var pt=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=_n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ni(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await xt(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Po(this,e)}reload(){return ko(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await An(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(Fe(this.auth));let e=await this.getIdToken();return await xt(this,bu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,d,y;let O=(r=t.displayName)!==null&&r!==void 0?r:void 0,N=(i=t.email)!==null&&i!==void 0?i:void 0,j=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,Y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,at=(a=t.tenantId)!==null&&a!==void 0?a:void 0,Ne=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,ln=(d=t.createdAt)!==null&&d!==void 0?d:void 0,A=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:R,emailVerified:T,isAnonymous:b,providerData:f,stsTokenManager:I}=t;P(R&&I,e,"internal-error");let l=Lt.fromJSON(this.name,I);P(typeof R=="string",e,"internal-error"),Ue(O,e.name),Ue(N,e.name),P(typeof T=="boolean",e,"internal-error"),P(typeof b=="boolean",e,"internal-error"),Ue(j,e.name),Ue(Y,e.name),Ue(at,e.name),Ue(Ne,e.name),Ue(ln,e.name),Ue(A,e.name);let u=new n({uid:R,auth:e,email:N,emailVerified:T,displayName:O,isAnonymous:b,photoURL:Y,phoneNumber:j,tenantId:at,stsTokenManager:l,createdAt:ln,lastLoginAt:A});return f&&Array.isArray(f)&&(u.providerData=f.map(E=>Object.assign({},E))),Ne&&(u._redirectEventId=Ne),u}static async _fromIdTokenResponse(e,t,r=!1){let i=new Lt;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await An(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];P(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Oo(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Lt;a.updateFromIdToken(r);let c=new n({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}};var oo=new Map;function ke(n){Oe(n instanceof Function,"Expected a class definition");let e=oo.get(n);return e?(Oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oo.set(n,e),e)}var Sn=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Sn.type="NONE";var ri=Sn;function wn(n,e,t){return`firebase:${n}:${e}:${t}`}var Rn=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=wn(this.userKey,i.apiKey,s),this.fullPersistenceKey=wn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(ke(ri),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||ke(ri),o=wn(r,e.config.apiKey,e.name),a=null;for(let d of t)try{let y=await d._get(o);if(y){let O=pt._fromJSON(e,y);d!==s&&(a=O),s=d;break}}catch{}let c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new n(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new n(s,e,r))}};function ao(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Do(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Co(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xo(e))return"Blackberry";if(Mo(e))return"Webos";if(wi(e))return"Safari";if((e.includes("chrome/")||No(e))&&!e.includes("edge/"))return"Chrome";if(Lo(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Co(n=te()){return/firefox\//i.test(n)}function wi(n=te()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function No(n=te()){return/crios\//i.test(n)}function Do(n=te()){return/iemobile/i.test(n)}function Lo(n=te()){return/android/i.test(n)}function xo(n=te()){return/blackberry/i.test(n)}function Mo(n=te()){return/webos/i.test(n)}function Wn(n=te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ku(n=te()){var e;return Wn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ou(){return Us()&&document.documentMode===10}function Vo(n=te()){return Wn(n)||Lo(n)||Mo(n)||xo(n)||/windows phone/i.test(n)||Do(n)}function Cu(){try{return!!(window&&window!==window.top)}catch{return!1}}function Uo(n,e=[]){let t;switch(n){case"Browser":t=ao(te());break;case"Worker":t=`${ao(te())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ve}/${r}`}var ii=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((o,a)=>{try{let c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};async function Nu(n,e={}){return re(n,"GET","/v2/passwordPolicy",Q(n,e))}var Du=6,si=class{constructor(e){var t,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Du,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var oi=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pn(this),this.idTokenSubscription=new Pn(this),this.beforeStateQueue=new ii(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=To,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ke(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ro(this,{idToken:e}),r=await pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(we(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await An(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(we(this.app))return Promise.reject(Fe(this));let t=e?G(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return we(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Nu(this),t=new si(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pe("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pu(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ke(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{let c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gu(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function gt(n){return G(n)}var Pn=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=js(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var zn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lu(n){zn=n}function Fo(n){return zn.loadJS(n)}function xu(){return zn.recaptchaEnterpriseScript}function Mu(){return zn.gapiScript}function Bo(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Vu="recaptcha-enterprise",Uu="NO_RECAPTCHA",ai=class{constructor(e){this.type=Vu,this.auth=gt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Tu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let d=new ti(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){let c=window.grecaptcha;io(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Uu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&io(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xu();c.length!==0&&(c+=a),Fo(c).then(()=>{i(a,s,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}};async function co(n,e,t,r=!1){let i=new ai(n),s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}let o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uo(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await co(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await co(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function qo(n,e){let t=Ct(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(De(s,e!=null?e:{}))return i;me(i,"already-initialized")}return t.initialize({options:e})}function Fu(n,e){let t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ke);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gn(n,e,t){let r=gt(n);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!(t!=null&&t.disableWarnings),s=jo(e),{host:o,port:a}=Bu(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qu()}function jo(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Bu(n){let e=jo(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:lo(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:lo(o)}}}function lo(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function qu(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Ge=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}};async function ju(n,e){return re(n,"POST","/v1/accounts:signUp",e)}async function $u(n,e){return Be(n,"POST","/v1/accounts:signInWithPassword",Q(n,e))}async function Hu(n,e){return Be(n,"POST","/v1/accounts:signInWithEmailLink",Q(n,e))}async function Wu(n,e){return Be(n,"POST","/v1/accounts:signInWithEmailLink",Q(n,e))}var Vt=class n extends Ge{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uo(e,t,"signInWithPassword",$u);case"emailLink":return Hu(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uo(e,r,"signUpPassword",ju);case"emailLink":return Wu(e,{idToken:t,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function ft(n,e){return Be(n,"POST","/v1/accounts:signInWithIdp",Q(n,e))}var zu="http://localhost",Ke=class n extends Ge{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=_n(t,["providerId","signInMethod"]);if(!r||!i)return null;let o=new n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ft(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){let e={requestUri:zu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lt(t)}return e}};async function Gu(n,e){return re(n,"POST","/v1/accounts:sendVerificationCode",Q(n,e))}async function Ku(n,e){return Be(n,"POST","/v1/accounts:signInWithPhoneNumber",Q(n,e))}async function Yu(n,e){let t=await Be(n,"POST","/v1/accounts:signInWithPhoneNumber",Q(n,e));if(t.temporaryProof)throw Nt(n,"account-exists-with-different-credential",t);return t}var Ju={USER_NOT_FOUND:"user-not-found"};async function Qu(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Be(n,"POST","/v1/accounts:signInWithPhoneNumber",Q(n,t),Ju)}var Ut=class n extends Ge{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ku(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Yu(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Qu(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Xu(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zu(n){let e=dt(ht(n)).link,t=e?dt(ht(e)).deep_link_id:null,r=dt(ht(n)).deep_link_id;return(r?dt(ht(r)).link:null)||r||t||e||n}var kn=class n{constructor(e){var t,r,i,s,o,a;let c=dt(ht(e)),d=(t=c.apiKey)!==null&&t!==void 0?t:null,y=(r=c.oobCode)!==null&&r!==void 0?r:null,O=Xu((i=c.mode)!==null&&i!==void 0?i:null);P(d&&y&&O,"argument-error"),this.apiKey=d,this.operation=O,this.code=y,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){let t=Zu(e);try{return new n(t)}catch{return null}}};var mt=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Vt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=kn.parseLink(t);return P(r,"argument-error"),Vt._fromEmailAndCode(e,r.code,r.tenantId)}};mt.PROVIDER_ID="password";mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var On=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ye=class extends On{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ft=class n extends Ye{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";var Bt=class n extends Ye{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";var qt=class n extends Ye{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";var jt=class n extends Ye{constructor(){super("twitter.com")}static credential(e,t){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";async function el(n,e){return Be(n,"POST","/v1/accounts:signUp",Q(n,e))}var Je=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await pt._fromIdTokenResponse(e,r,i),o=ho(r);return new n({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=ho(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function ho(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Ii(n){var e;if(we(n.app))return Promise.reject(Fe(n));let t=gt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Je({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await el(t,{returnSecureToken:!0}),i=await Je._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var ci=class n extends ce{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function $o(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ci._fromErrorAndOperation(n,s,e,r):s})}async function tl(n,e,t=!1){let r=await xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Je._forOperation(n,"link",r)}async function nl(n,e,t=!1){let{auth:r}=n;if(we(r.app))return Promise.reject(Fe(r));let i="reauthenticate";try{let s=await xt(n,$o(r,i,e,n),t);P(s.idToken,r,"internal-error");let o=yi(s.idToken);P(o,r,"internal-error");let{sub:a}=o;return P(n.uid===a,r,"user-mismatch"),Je._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&me(r,"user-mismatch"),s}}async function rl(n,e,t=!1){if(we(n.app))return Promise.reject(Fe(n));let r="signIn",i=await $o(n,r,e),s=await Je._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Ho(n,e,t,r){return G(n).onIdTokenChanged(e,t,r)}function Wo(n,e,t){return G(n).beforeAuthStateChanged(e,t)}function Ei(n,e,t,r){return G(n).onAuthStateChanged(e,t,r)}function il(n,e){return re(n,"POST","/v2/accounts/mfaEnrollment:start",Q(n,e))}function sl(n,e){return re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Q(n,e))}function ol(n,e){return re(n,"POST","/v2/accounts/mfaEnrollment:start",Q(n,e))}function al(n,e){return re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Q(n,e))}var Cn="__sak";var Nn=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cn,"1"),this.storage.removeItem(Cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function cl(){let n=te();return wi(n)||Wn(n)}var ul=1e3,ll=10,Dn=class extends Nn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cl()&&Cu(),this.fallbackToPolling=Vo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ou()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ll):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ul)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Dn.type="LOCAL";var zo=Dn;var Ln=class extends Nn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Ln.type="SESSION";var Ti=Ln;function dl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var xn=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let a=Array.from(o).map(async d=>d(t.origin,s)),c=await dl(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};xn.receivers=[];function bi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var ui=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{let d=bi("",20);i.port1.start();let y=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(O){let N=O;if(N.data.eventId===d)switch(N.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(N.data.response);break;default:clearTimeout(y),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function Te(){return window}function hl(n){Te().location.href=n}function Go(){return typeof Te().WorkerGlobalScope!="undefined"&&typeof Te().importScripts=="function"}async function fl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ml(){return Go()?self:null}var Ko="firebaseLocalStorageDb",gl=1,Mn="firebaseLocalStorage",Yo="fbase_key",Qe=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Kn(n,e){return n.transaction([Mn],e?"readwrite":"readonly").objectStore(Mn)}function _l(){let n=indexedDB.deleteDatabase(Ko);return new Qe(n).toPromise()}function li(){let n=indexedDB.open(Ko,gl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Mn,{keyPath:Yo})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Mn)?e(r):(r.close(),await _l(),e(await li()))})})}async function fo(n,e,t){let r=Kn(n,!0).put({[Yo]:e,value:t});return new Qe(r).toPromise()}async function vl(n,e){let t=Kn(n,!1).get(e),r=await new Qe(t).toPromise();return r===void 0?null:r.value}function po(n,e){let t=Kn(n,!0).delete(e);return new Qe(t).toPromise()}var yl=800,wl=3,Vn=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>wl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Go()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(ml()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fl(),!this.activeServiceWorker)return;this.sender=new ui(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await li();return await fo(e,Cn,"1"),await po(e,Cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fo(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>vl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>po(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Kn(i,!1).getAll();return new Qe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Vn.type="LOCAL";var Jo=Vn;function Il(n,e){return re(n,"POST","/v2/accounts/mfaSignIn:start",Q(n,e))}function El(n,e){return re(n,"POST","/v2/accounts/mfaSignIn:finalize",Q(n,e))}function Tl(n,e){return re(n,"POST","/v2/accounts/mfaSignIn:finalize",Q(n,e))}var Oh=Bo("rcb"),Ch=new ze(3e4,6e4);var bl="recaptcha";async function Al(n,e,t){var r;let i=await t.verify();try{P(typeof i=="string",n,"argument-error"),P(t.type===bl,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",n,"internal-error"),(await il(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",n,"internal-error");let a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,n,"missing-multi-factor-info"),(await Il(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await Gu(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}var $t=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=gt(e)}verifyPhoneNumber(e,t){return Al(this.auth,e,G(t))}static credential(e,t){return Ut._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Ut._fromTokenResponse(t,r):null}};$t.PROVIDER_ID="phone";$t.PHONE_SIGN_IN_METHOD="phone";function Sl(n,e){return e?ke(e):(P(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Ht=class extends Ge{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Rl(n){return rl(n.auth,new Ht(n),n.bypassAuthState)}function Pl(n){let{auth:e,user:t}=n;return P(t,e,"internal-error"),nl(t,new Ht(n),n.bypassAuthState)}async function kl(n){let{auth:e,user:t}=n;return P(t,e,"internal-error"),tl(t,new Ht(n),n.bypassAuthState)}var Un=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rl;case"linkViaPopup":case"linkViaRedirect":return kl;case"reauthViaPopup":case"reauthViaRedirect":return Pl;default:me(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Ol=new ze(2e3,1e4);var di=class n extends Un{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");let e=bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ol.get())};e()}};di.currentPopupAction=null;var Cl="pendingRedirect",In=new Map,hi=class extends Un{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=In.get(this.auth._key());if(!e){try{let r=await Nl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}In.set(this.auth._key(),e)}return this.bypassAuthState||In.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Nl(n,e){let t=xl(e),r=Ll(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Dl(n,e){In.set(n._key(),e)}function Ll(n){return ke(n._redirectPersistence)}function xl(n){return wn(Cl,n.config.apiKey,n.name)}async function Ml(n,e,t=!1){if(we(n.app))return Promise.reject(Fe(n));let r=gt(n),i=Sl(r,e),o=await new hi(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var Vl=10*60*1e3,fi=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ul(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qo(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vl&&this.cachedEventUids.clear(),this.cachedEventUids.has(mo(e))}saveEventToCache(e){this.cachedEventUids.add(mo(e)),this.lastProcessedEventTime=Date.now()}};function mo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qo({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ul(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qo(n);default:return!1}}async function Fl(n,e={}){return re(n,"GET","/v1/projects",e)}var Bl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ql=/^https?/;async function jl(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Fl(n);for(let t of e)try{if($l(t))return}catch{}me(n,"unauthorized-domain")}function $l(n){let e=Zr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ql.test(t))return!1;if(Bl.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Hl=new ze(3e4,6e4);function go(){let n=Te().___jsl;if(n!=null&&n.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Wl(n){return new Promise((e,t)=>{var r,i,s;function o(){go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{go(),t(Ee(n,"network-request-failed"))},timeout:Hl.get()})}if(!((i=(r=Te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Te().gapi)===null||s===void 0)&&s.load)o();else{let a=Bo("iframefcb");return Te()[a]=()=>{gapi.load?o():t(Ee(n,"network-request-failed"))},Fo(`${Mu()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw En=null,e})}var En=null;function zl(n){return En=En||Wl(n),En}var Gl=new ze(5e3,15e3),Kl="__/auth/iframe",Yl="emulator/auth/iframe",Jl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ql=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xl(n){let e=n.config;P(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?vi(e,Yl):`https://${n.config.authDomain}/${Kl}`,r={apiKey:e.apiKey,appName:n.name,v:Ve},i=Ql.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${lt(r).slice(1)}`}async function Zl(n){let e=await zl(n),t=Te().gapi;return P(t,n,"internal-error"),e.open({where:document.body,url:Xl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=Ee(n,"network-request-failed"),a=Te().setTimeout(()=>{s(o)},Gl.get());function c(){Te().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}var ed={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},td=500,nd=600,rd="_blank",id="http://localhost",Fn=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function sd(n,e,t,r=td,i=nd){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",c=Object.assign(Object.assign({},ed),{width:r.toString(),height:i.toString(),top:s,left:o}),d=te().toLowerCase();t&&(a=No(d)?rd:t),Co(d)&&(e=e||id,c.scrollbars="yes");let y=Object.entries(c).reduce((N,[j,Y])=>`${N}${j}=${Y},`,"");if(ku(d)&&a!=="_self")return od(e||"",a),new Fn(null);let O=window.open(e||"",a,y);P(O,n,"popup-blocked");try{O.focus()}catch{}return new Fn(O)}function od(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var ad="__/auth/handler",cd="emulator/auth/handler",ud=encodeURIComponent("fac");async function _o(n,e,t,r,i,s){P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ve,eventId:i};if(e instanceof On){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",qs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[y,O]of Object.entries(s||{}))o[y]=O}if(e instanceof Ye){let y=e.getScopes().filter(O=>O!=="");y.length>0&&(o.scopes=y.join(","))}n.tenantId&&(o.tid=n.tenantId);let a=o;for(let y of Object.keys(a))a[y]===void 0&&delete a[y];let c=await n._getAppCheckToken(),d=c?`#${ud}=${encodeURIComponent(c)}`:"";return`${ld(n)}?${lt(a).slice(1)}${d}`}function ld({config:n}){return n.emulator?vi(n,cd):`https://${n.authDomain}/${ad}`}var Xr="webStorageSupport",pi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ti,this._completeRedirectFn=Ml,this._overrideRedirectResult=Dl}async _openPopup(e,t,r,i){var s;Oe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await _o(e,t,r,Zr(),i);return sd(e,o,bi())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await _o(e,t,r,Zr(),i);return hl(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Oe(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Zl(e),r=new fi(e);return t.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xr,{type:Xr},i=>{var s;let o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xr];o!==void 0&&t(!!o),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vo()||wi()||Wn()}},Xo=pi,Bn=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ie("unexpected MultiFactorSessionType")}}},mi=class n extends Bn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return sl(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return El(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},qn=class{constructor(){}static assertion(e){return mi._fromCredential(e)}};qn.FACTOR_ID="phone";var jn=class{static assertionForEnrollment(e,t){return $n._fromSecret(e,t)}static assertionForSignIn(e,t){return $n._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;P(typeof((t=r.user)===null||t===void 0?void 0:t.auth)!="undefined","internal-error");let i=await ol(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Hn._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};jn.FACTOR_ID="totp";var $n=class n extends Bn{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return P(typeof this.secret!="undefined",e,"argument-error"),al(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){P(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Tl(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Hn=class n{constructor(e,t,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(vn(e)||vn(t))&&(i=!0),i&&(vn(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),vn(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function vn(n){return typeof n=="undefined"||(n==null?void 0:n.length)===0}var vo="@firebase/auth",yo="1.7.4";var gi=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function dd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hd(n){Me(new he("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uo(n)},d=new oi(r,i,s,c);return Fu(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Me(new he("auth-internal",e=>{let t=gt(e.getProvider("auth").getImmediate());return(r=>new gi(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(vo,yo,dd(n)),pe(vo,yo,"esm2017")}var fd=5*60,pd=xr("authIdTokenMaxAge")||fd,wo=null,md=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pd)return;let i=t==null?void 0:t.token;wo!==i&&(wo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ai(n=gn()){let e=Ct(n,"auth");if(e.isInitialized())return e.getImmediate();let t=qo(n,{popupRedirectResolver:Xo,persistence:[Jo,zo,Ti]}),r=xr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=md(s.toString());Wo(t,o,()=>o(t.currentUser)),Ho(t,a=>o(a))}}let i=Dr("auth");return i&&Gn(t,`http://${i}`),t}function gd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Lu({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Ee("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",gd().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hd("Browser");var ie=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");var bt="10.12.1";var yt=new Le("@firebase/firestore");function Qn(n,...e){if(yt.logLevel<=B.DEBUG){let t=e.map(ps);yt.debug(`Firestore (${bt}): ${n}`,...t)}}function fs(n,...e){if(yt.logLevel<=B.ERROR){let t=e.map(ps);yt.error(`Firestore (${bt}): ${n}`,...t)}}function fa(n,...e){if(yt.logLevel<=B.WARN){let t=e.map(ps);yt.warn(`Firestore (${bt}): ${n}`,...t)}}function ps(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function W(n="Unexpected state"){let e=`FIRESTORE (${bt}) INTERNAL ASSERTION FAILED: `+n;throw fs(e),new Error(e)}function ue(n,e){n||W()}function an(n,e){return n}var Zo="ok",_d="cancelled",Wt="unknown",x="invalid-argument",vd="deadline-exceeded",yd="not-found";var wd="permission-denied",Pi="unauthenticated",Id="resource-exhausted",Xe="failed-precondition",Ed="aborted",Td="out-of-range",pa="unimplemented",bd="internal",Ad="unavailable";var k=class extends ce{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Xn=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},ki=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ie.UNAUTHENTICATED))}shutdown(){}},Oi=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Ci=class{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ue(typeof e.accessToken=="string"),new Xn(e.accessToken,new ie(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}},Ni=class{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);let e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}},Di=class{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Ni(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Li=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},xi=class{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(ue(typeof e.token=="string"),new Li(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}};var Mi=class{constructor(e,t,r,i,s,o,a,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=d}},Zn=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}},er=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ee=class n extends er{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new k(x,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},Sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/,be=class n extends er{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Sd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new k(x,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},o=!1;for(;i<e.length;){let a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(x,"Path has trailing escape character: "+e);let c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(x,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(x,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var ae=class n{constructor(e){this.path=e}static fromPath(e){return new n(ee.fromString(e))}static fromName(e){return new n(ee.fromString(e).popFirst(5))}static empty(){return new n(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ee(e.slice()))}};function ma(n,e,t){if(!t)throw new k(x,`Function ${n}() cannot be called with an empty ${e}.`)}function ea(n){if(!ae.isDocumentKey(n))throw new k(x,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ta(n){if(ae.isDocumentKey(n))throw new k(x,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function it(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(x,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Tr(n);throw new k(x,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ga(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Yn=null;function Rd(){return Yn===null?Yn=function(){return 268435456+Math.round(2147483648*Math.random())}():Yn++,"0x"+Yn.toString(16)}function Pd(n){return n==null}function tr(n){return n===0&&1/n==-1/0}var kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var na,F;function ra(n){if(n===void 0)return fs("RPC_ERROR","HTTP error has no status"),Wt;switch(n){case 200:return Zo;case 400:return Xe;case 401:return Pi;case 403:return wd;case 404:return yd;case 409:return Ed;case 416:return Td;case 429:return Id;case 499:return _d;case 500:return Wt;case 501:return pa;case 503:return Ad;case 504:return vd;default:return n>=200&&n<300?Zo:n>=400&&n<500?Xe:n>=500&&n<600?bd:Wt}}(F=na||(na={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";var Vi=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(t,r,i,s,o){let a=Rd(),c=this.I(t,r.toUriEncodedString());Qn("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);let d={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(d,s,o),this.p(t,c,d,i).then(y=>(Qn("RestConnection",`Received RPC '${t}' ${a}: `,y),y),y=>{throw fa("RestConnection",`RPC '${t}' ${a} failed with error: `,y,"url: ",c,"request:",i),y})}g(t,r,i,s,o,a){return this.P(t,r,i,s,o)}V(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}I(t,r){let i=kd[t];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;let o=JSON.stringify(i),a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(c){let d=c;throw new k(ra(d.status),"Request failed with error: "+d.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);let d=(s=c==null?void 0:c.error)===null||s===void 0?void 0:s.message;throw new k(ra(a.status),`Request failed with error: ${d!=null?d:a.statusText}`)}return a.json()}};function Od(n){let e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Ui=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=Od(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function Z(n,e){return n<e?-1:n>e?1:0}function _a(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function ia(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}var Fi=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var $e=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Fi("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};$e.EMPTY_BYTE_STRING=new $e("");var Cd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(n){if(ue(!!n),typeof n=="string"){let e=0,t=Cd.exec(n);if(ue(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:X(n.seconds),nanos:X(n.nanos)}}function X(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}var ge=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(x,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(x,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new k(x,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(x,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};function va(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ya(n){let e=n.mapValue.fields.__previous_value__;return va(e)?ya(e):e}function Jt(n){let e=Ze(n.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}var Jn={fields:{__type__:{stringValue:"__max__"}}};function et(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?va(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:W()}function nr(n,e){if(n===e)return!0;let t=et(n);if(t!==et(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jt(n).isEqual(Jt(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Ze(i.timestampValue),a=Ze(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Yt(i.bytesValue).isEqual(Yt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return X(i.geoPointValue.latitude)===X(s.geoPointValue.latitude)&&X(i.geoPointValue.longitude)===X(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return X(i.integerValue)===X(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=X(i.doubleValue),a=X(s.doubleValue);return o===a?tr(o)===tr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return _a(n.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:return function(i,s){let o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ia(o)!==ia(a))return!1;for(let c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nr(o[c],a[c])))return!1;return!0}(n,e);default:return W()}}function Qt(n,e){return(n.values||[]).find(t=>nr(t,e))!==void 0}function rr(n,e){if(n===e)return 0;let t=et(n),r=et(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(s,o){let a=X(s.integerValue||s.doubleValue),c=X(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return sa(n.timestampValue,e.timestampValue);case 4:return sa(Jt(n),Jt(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(s,o){let a=Yt(s),c=Yt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){let a=s.split("/"),c=o.split("/");for(let d=0;d<a.length&&d<c.length;d++){let y=Z(a[d],c[d]);if(y!==0)return y}return Z(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){let a=Z(X(s.latitude),X(o.latitude));return a!==0?a:Z(X(s.longitude),X(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){let a=s.values||[],c=o.values||[];for(let d=0;d<a.length&&d<c.length;++d){let y=rr(a[d],c[d]);if(y)return y}return Z(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Jn&&o===Jn)return 0;if(s===Jn)return 1;if(o===Jn)return-1;let a=s.fields||{},c=Object.keys(a),d=o.fields||{},y=Object.keys(d);c.sort(),y.sort();for(let O=0;O<c.length&&O<y.length;++O){let N=Z(c[O],y[O]);if(N!==0)return N;let j=rr(a[c[O]],d[y[O]]);if(j!==0)return j}return Z(c.length,y.length)}(n.mapValue,e.mapValue);default:throw W()}}function sa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);let t=Ze(n),r=Ze(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function oa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wa(n){return!!n&&"arrayValue"in n}function aa(n){return!!n&&"nullValue"in n}function ca(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Si(n){return!!n&&"mapValue"in n}function zt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zt(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zt(n.arrayValue.values[t]);return e}return Object.assign({},n)}var ir=class{constructor(e,t){this.position=e,this.inclusive=t}};var sr=class{},_e=class n extends sr{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bi(e,t,r):t==="array-contains"?new $i(e,r):t==="in"?new Hi(e,r):t==="not-in"?new Wi(e,r):t==="array-contains-any"?new zi(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new qi(e,r):new ji(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(rr(t,this.value)):t!==null&&et(this.value)===et(t)&&this.matchesComparison(rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Xt=class n extends sr{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new n(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}};var Bi=class extends _e{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){let t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}},qi=class extends _e{constructor(e,t){super(e,"in",t),this.keys=Ia("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},ji=class extends _e{constructor(e,t){super(e,"not-in",t),this.keys=Ia("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Ia(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ae.fromName(r.referenceValue))}var $i=class extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return wa(t)&&Qt(t.arrayValue,this.value)}},Hi=class extends _e{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Qt(this.value.arrayValue,t)}},Wi=class extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Qt(this.value.arrayValue,t)}},zi=class extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!wa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qt(this.value.arrayValue,r))}};var Zt=class{constructor(e,t="asc"){this.field=e,this.dir=t}};var oe=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new ge(0,0))}static max(){return new n(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Gi=class n{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vt(this.root,e,this.comparator,!1)}getReverseIterator(){return new vt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vt(this.root,e,this.comparator,!0)}},vt=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ae=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:n.RED,this.left=i!=null?i:n.EMPTY,this.right=s!=null?s:n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();let e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}};Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var or=class n{constructor(e){this.comparator=e,this.data=new Gi(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ar(this.data.getIterator())}getIteratorFrom(e){return new ar(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},ar=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var wt=class n{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new n([])}unionWith(e){let t=new or(be.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _a(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var fe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zt(t)}setAll(e){let t=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){let c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=zt(o):i.push(a.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());Si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(zt(this.value))}};var en=class n{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new n(e,0,oe.min(),oe.min(),oe.min(),fe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,oe.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,oe.min(),oe.min(),fe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,oe.min(),oe.min(),fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Ki=class{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}};function ua(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Ki(n,e,t,r,i,s,o)}var cr=class{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}};function Nd(n){return n.collectionGroup!==null}function Dd(n){let e=an(n);if(e.S===null){e.S=[];let t=new Set;for(let s of e.explicitOrderBy)e.S.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new or(be.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.S.push(new Zt(s,r))}),t.has(be.keyField().canonicalString())||e.S.push(new Zt(be.keyField(),r))}return e.S}function Ld(n){let e=an(n);return e.N||(e.N=xd(e,Dd(n))),e.N}function xd(n,e){if(n.limitType==="F")return ua(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Zt(i.field,s)});let t=n.endAt?new ir(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ir(n.startAt.position,n.startAt.inclusive):null;return ua(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Yi(n,e){let t=n.filters.concat([e]);return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Md(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!tr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tr(i)?"-0":i}}(n,e)}var It=class{constructor(){this._=void 0}},ur=class extends It{},lr=class extends It{constructor(e){super(),this.elements=e}},Ji=class extends It{constructor(e){super(),this.elements=e}},Qi=class extends It{constructor(e,t){super(),this.serializer=e,this.q=t}};var dr=class{constructor(e,t){this.field=e,this.transform=t}},qe=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}},Et=class{},hr=class extends Et{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},tn=class extends Et{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}},nn=class extends Et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Xi=class extends Et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Vd={asc:"ASCENDING",desc:"DESCENDING"},Ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fd={and:"AND",or:"OR"},Zi=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function es(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qd(n,e){return es(n,e.toTimestamp())}function Gt(n){return ue(!!n),oe.fromTimestamp(function(t){let r=Ze(t);return new ge(r.seconds,r.nanos)}(n))}function ms(n,e){return ts(n,e).canonicalString()}function ts(n,e){let t=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fr(n,e){return ms(n.databaseId,e.path)}function ns(n,e){let t=function(i){let s=ee.fromString(i);return ue(Ta(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new k(x,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(x,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(function(i){return ue(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function la(n,e,t){return{name:fr(n,e),fields:t.value.mapValue.fields}}function jd(n,e){return"found"in e?function(r,i){ue(!!i.found),i.found.name,i.found.updateTime;let s=ns(r,i.found.name),o=Gt(i.found.updateTime),a=i.found.createTime?Gt(i.found.createTime):oe.min(),c=new fe({mapValue:{fields:i.found.fields}});return en.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){ue(!!i.missing),ue(!!i.readTime);let s=ns(r,i.missing),o=Gt(i.readTime);return en.newNoDocument(s,o)}(n,e):W()}function $d(n,e){let t;if(e instanceof hr)t={update:la(n,e.key,e.value)};else if(e instanceof nn)t={delete:fr(n,e.key)};else if(e instanceof tn)t={update:la(n,e.key,e.data),updateMask:Kd(e.fieldMask)};else{if(!(e instanceof Xi))return W();t={verify:fr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let a=o.transform;if(a instanceof ur)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof lr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qi)return{fieldPath:o.field.canonicalString(),increment:a.q};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qd(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(n,e.precondition)),t}function Hd(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=function(d,y){return ms(d.databaseId,y)}(n,i);let s=function(d){if(d.length!==0)return Ea(Xt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(d){if(d.length!==0)return d.map(y=>function(N){return{field:_t(N.field),direction:Wd(N.dir)}}(y))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let a=function(d,y){return d.useProto3Json||Pd(y)?y:{value:y}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{B:t,parent:i}}function Wd(n){return Vd[n]}function zd(n){return Ud[n]}function Gd(n){return Fd[n]}function _t(n){return{fieldPath:n.canonicalString()}}function Ea(n){return n instanceof _e?function(t){if(t.op==="=="){if(ca(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NAN"}};if(aa(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ca(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NOT_NAN"}};if(aa(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_t(t.field),op:zd(t.op),value:t.value}}}(n):n instanceof Xt?function(t){let r=t.getFilters().map(i=>Ea(i));return r.length===1?r[0]:{compositeFilter:{op:Gd(t.op),filters:r}}}(n):W()}function Kd(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ta(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function gs(n){return new Zi(n,!0)}var rs=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new k(Xe,"The client has already been terminated.")}P(e,t,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,ts(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Pi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(Wt,s.toString())})}g(e,t,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,ts(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Pi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(Wt,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}};async function br(n,e){let t=an(n),r={writes:e.map(i=>$d(t.serializer,i))};await t.P("Commit",t.serializer.databaseId,ee.emptyPath(),r)}async function Yd(n,e){let t=an(n),r={documents:e.map(a=>fr(t.serializer,a))},i=await t.g("BatchGetDocuments",t.serializer.databaseId,ee.emptyPath(),r,e.length),s=new Map;i.forEach(a=>{let c=jd(t.serializer,a);s.set(c.key.toString(),c)});let o=[];return e.forEach(a=>{let c=s.get(a.toString());ue(!!c),o.push(c)}),o}async function Jd(n,e){let t=an(n),{B:r,parent:i}=Hd(t.serializer,Ld(e));return(await t.g("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,c,d){let y=ns(a,c.name),O=Gt(c.updateTime),N=c.createTime?Gt(c.createTime):oe.min(),j=new fe({mapValue:{fields:c.fields}}),Y=en.newFoundDocument(y,O,N,j);return d&&Y.setHasCommittedMutations(),d?Y.setHasCommittedMutations():Y}(t.serializer,s.document,void 0))}var Kt=new Map;function At(n){if(n._terminated)throw new k(Xe,"The client has already been terminated.");if(!Kt.has(n)){Qn("ComponentProvider","Initializing Datastore");let e=function(s){return new Vi(s,fetch.bind(null))}(function(s,o,a,c){return new Mi(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ga(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=gs(n._databaseId),r=function(s,o,a,c){return new rs(s,o,a,c)}(n._authCredentials,n._appCheckCredentials,e,t);Kt.set(n,r)}return Kt.get(n)}var pr=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(x,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(x,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,c){if(o===!0&&c===!0)throw new k(x,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ga((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new k(x,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new k(x,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new k(x,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},tt=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(Xe,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(Xe,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ki;switch(r.type){case"firstParty":return new Di(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(x,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Kt.get(t);r&&(Qn("ComponentProvider","Removing Datastore"),Kt.delete(t),r.terminate())}(this),Promise.resolve()}};function ba(n,e){let t=typeof n=="object"?n:gn(),r=typeof n=="string"?n:e||"(default)",i=Ct(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){let s=Ds("firestore");s&&_s(i,...s)}return i}function _s(n,e,t,r={}){var i;let s=(n=it(n,tt))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ie.MOCK_USER;else{a=Ls(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new k(x,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ie(d)}n._authCredentials=new Oi(new Xn(a,c))}}var Tt=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},se=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new je(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},je=class n extends Tt{constructor(e,t,r){super(e,t,function(s){return new cr(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new ae(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Ce(n,e,...t){if(n=G(n),ma("collection","path",e),n instanceof tt){let r=ee.fromString(e,...t);return ta(r),new je(n,null,r)}{if(!(n instanceof se||n instanceof je))throw new k(x,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ee.fromString(e,...t));return ta(r),new je(n.firestore,null,r)}}function H(n,e,...t){if(n=G(n),arguments.length===1&&(e=Ui.newId()),ma("doc","path",e),n instanceof tt){let r=ee.fromString(e,...t);return ea(r),new se(n,null,new ae(r))}{if(!(n instanceof se||n instanceof je))throw new k(x,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ee.fromString(e,...t));return ea(r),new se(n.firestore,n instanceof je?n.converter:null,new ae(r))}}var rn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n($e.fromBase64String(e))}catch(t){throw new k(x,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var nt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(x,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var rt=class{constructor(e){this._methodName=e}};var sn=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(x,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(x,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}};var Qd=/^__.*__$/,is=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}},mr=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Aa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}var gr=class n{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return vr(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Aa(this.et)&&Qd.test(e))throw this._t('Document fields cannot begin and end with "__"')}},ss=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||gs(e)}ht(e,t,r,i=!1){return new gr({et:e,methodName:t,lt:r,path:be.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Ar(n){let e=n._freezeSettings(),t=gs(n._databaseId);return new ss(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sa(n,e,t,r,i,s={}){let o=n.ht(s.merge||s.mergeFields?2:0,e,t,i);vs("Data must be an object, but it was:",o,r);let a=ka(r,o),c,d;if(s.merge)c=new wt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){let y=[];for(let O of s.mergeFields){let N=cs(e,O,t);if(!o.contains(N))throw new k(x,`Field '${N}' is specified in your field mask but missing from your input data.`);Ca(y,N)||y.push(N)}c=new wt(y),d=o.fieldTransforms.filter(O=>c.covers(O.field))}else c=null,d=o.fieldTransforms;return new is(new fe(a),c,d)}var _r=class n extends rt{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Xd(n,e,t){return new gr({et:3,lt:e.settings.lt,methodName:n._methodName,it:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var os=class n extends rt{_toFieldTransform(e){return new dr(e.path,new ur)}isEqual(e){return e instanceof n}},as=class n extends rt{constructor(e,t){super(e),this.dt=t}_toFieldTransform(e){let t=Xd(this,e,!0),r=this.dt.map(s=>St(s,t)),i=new lr(r);return new dr(e.path,i)}isEqual(e){return e instanceof n&&De(this.dt,e.dt)}};function Ra(n,e,t,r){let i=n.ht(1,e,t);vs("Data must be an object, but it was:",i,r);let s=[],o=fe.empty();cn(r,(c,d)=>{let y=ys(e,c,t);d=G(d);let O=i.ot(y);if(d instanceof _r)s.push(y);else{let N=St(d,O);N!=null&&(s.push(y),o.set(y,N))}});let a=new wt(s);return new mr(o,a,i.fieldTransforms)}function Pa(n,e,t,r,i,s){let o=n.ht(1,e,t),a=[cs(e,r,t)],c=[i];if(s.length%2!=0)throw new k(x,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<s.length;N+=2)a.push(cs(e,s[N])),c.push(s[N+1]);let d=[],y=fe.empty();for(let N=a.length-1;N>=0;--N)if(!Ca(d,a[N])){let j=a[N],Y=c[N];Y=G(Y);let at=o.ot(j);if(Y instanceof _r)d.push(j);else{let Ne=St(Y,at);Ne!=null&&(d.push(j),y.set(j,Ne))}}let O=new wt(d);return new mr(y,O,o.fieldTransforms)}function Zd(n,e,t,r=!1){return St(t,n.ht(r?4:3,e))}function St(n,e){if(Oa(n=G(n)))return vs("Unsupported field value:",e,n),ka(n,e);if(n instanceof rt)return function(r,i){if(!Aa(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let a of r){let c=St(a,i.ut(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=G(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Md(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ge.fromDate(r);return{timestampValue:es(i.serializer,s)}}if(r instanceof ge){let s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(i.serializer,s)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Bd(i.serializer,r._byteString)};if(r instanceof se){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ms(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${Tr(r)}`)}(n,e)}function ka(n,e){let t={};return function(i){for(let s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,i)=>{let s=St(i,e.nt(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Oa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof sn||n instanceof rn||n instanceof se||n instanceof rt)}function vs(n,e,t){if(!Oa(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Tr(t);throw r==="an object"?e._t(n+" a custom object"):e._t(n+" "+r)}}function cs(n,e,t){if((e=G(e))instanceof nt)return e._internalPath;if(typeof e=="string")return ys(n,e);throw vr("Field path arguments must be of type string or ",n,!1,void 0,t)}var eh=new RegExp("[~\\*/\\[\\]]");function ys(n,e,t){if(e.search(eh)>=0)throw vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nt(...e.split("."))._internalPath}catch{throw vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vr(n,e,t,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new k(x,a+n+c)}function Ca(n,e){return n.some(t=>t.isEqual(e))}var yr=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new wr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Na("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},wr=class extends yr{data(){return super.data()}},us=class{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}};function Na(n,e){return typeof e=="string"?ys(n,e):e instanceof nt?e._internalPath:e._delegate._internalPath}var on=class{},ls=class extends on{};function Da(n,e,...t){let r=[];e instanceof on&&r.push(e),r=r.concat(t),function(s){let o=s.filter(c=>c instanceof ds).length,a=s.filter(c=>c instanceof Ir).length;if(o>1||o>0&&a>0)throw new k(x,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var Ir=class n extends ls{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return xa(e._query,t),new Tt(e.firestore,e.converter,Yi(e._query,t))}_parse(e){let t=Ar(e.firestore);return function(s,o,a,c,d,y,O){let N;if(d.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new k(x,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){ha(O,y);let j=[];for(let Y of O)j.push(da(c,s,Y));N={arrayValue:{values:j}}}else N=da(c,s,O)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||ha(O,y),N=Zd(a,o,O,y==="in"||y==="not-in");return _e.create(d,y,N)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function La(n,e,t){let r=e,i=Na("where",n);return Ir._create(i,r,t)}var ds=class n extends on{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Xt.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i,a=s.getFlattenedFilters();for(let c of a)xa(o,c),o=Yi(o,c)}(e._query,t),new Tt(e.firestore,e.converter,Yi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};function da(n,e,t){if(typeof(t=G(t))=="string"){if(t==="")throw new k(x,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nd(e)&&t.indexOf("/")!==-1)throw new k(x,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(ee.fromString(t));if(!ae.isDocumentKey(r))throw new k(x,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oa(n,new ae(r))}if(t instanceof se)return oa(n,t._key);throw new k(x,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tr(t)}.`)}function ha(n,e){if(!Array.isArray(n)||n.length===0)throw new k(x,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xa(n,e){let t=function(i,s){for(let o of i)for(let a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(x,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(x,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ma(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Er=class extends class{convertValue(t,r="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return X(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(Yt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 10:return this.convertObject(t.mapValue,r);default:throw W()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){let i={};return cn(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(t){return new sn(X(t.latitude),X(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":let i=ya(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Jt(t));default:return null}}convertTimestamp(t){let r=Ze(t);return new ge(r.seconds,r.nanos)}convertDocumentKey(t,r){let i=ee.fromString(t);ue(Ta(i));let s=new Zn(i.get(1),i.get(3)),o=new ae(i.popFirst(5));return s.isEqual(r)||fs(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}};function st(n){let e=At((n=it(n,se)).firestore),t=new Er(n.firestore);return Yd(e,[n._key]).then(r=>{ue(r.length===1);let i=r[0];return new yr(n.firestore,t,n._key,i.isFoundDocument()?i:null,n.converter)})}function ot(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new k(pa,"limitToLast() queries require specifying at least one orderBy() clause")})((n=it(n,Tt))._query);let e=At(n.firestore),t=new Er(n.firestore);return Jd(e,n._query).then(r=>{let i=r.map(s=>new wr(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new us(n,i)})}function Rt(n,e,t){let r=Ma((n=it(n,se)).converter,e,t),i=Sa(Ar(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return br(At(n.firestore),[i.toMutation(n._key,qe.none())])}function ws(n,e,t,...r){let i=Ar((n=it(n,se)).firestore),s;return s=typeof(e=G(e))=="string"||e instanceof nt?Pa(i,"updateDoc",n._key,e,t,r):Ra(i,"updateDoc",n._key,e),br(At(n.firestore),[s.toMutation(n._key,qe.exists(!0))])}function Is(n){return br(At((n=it(n,se)).firestore),[new nn(n._key,qe.none())])}function Va(){return new os("serverTimestamp")}function Ua(...n){return new as("arrayUnion",n)}var hs=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ar(e)}set(e,t,r){this._verifyNotCommitted();let i=Ri(e,this._firestore),s=Ma(i.converter,t,r),o=Sa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,qe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Ri(e,this._firestore),o;return o=typeof(t=G(t))=="string"||t instanceof nt?Pa(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ra(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,qe.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Ri(e,this._firestore);return this._mutations=this._mutations.concat(new nn(t._key,qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(Xe,"A write batch can no longer be used after commit() has been called.")}};function Ri(n,e){if((n=G(n)).firestore!==e)throw new k(x,"Provided document reference is from a different Firestore instance.");return n}function un(n){let e=At(n=it(n,tt));return new hs(n,t=>br(e,t))}(function(){(function(t){bt=t})(`${Ve}_lite`),Me(new he("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new tt(new Ci(e.getProvider("auth-internal")),new xi(e.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(x,'"projectId" not provided in firebase.initializeApp.');return new Zn(a.options.projectId,c)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),pe("firestore-lite","4.6.3",""),pe("firestore-lite","4.6.3","esm2017")})();var za=ic(ja()),bs=window.FIREBASE_CONFIG||{},th=new URLSearchParams(location.search),Sr=(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&th.has("emu"),As=Sr||bs.apiKey&&!String(bs.apiKey).startsWith("HIER"),Es,Pt,U,Ga;As&&(Es=Jr(Sr?{apiKey:"demo-key",projectId:"demo-ik",authDomain:"localhost"}:bs),Pt=Ai(Es),U=ba(Es),Sr&&(Gn(Pt,"http://127.0.0.1:9099",{disableWarnings:!0}),_s(U,"127.0.0.1",8080)),Ga=new Promise(n=>{let e=Ei(Pt,t=>{e(),n(t)})}));async function z(){if(!As)throw new Error("not-configured");return await Ga,Pt.currentUser||await Ii(Pt),Pt.currentUser}var Ka=()=>H(U,"meta","exercises"),Ts=n=>n.set(Ka(),{v:Date.now()},{merge:!0}),$a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Ha=n=>Array.from({length:n},()=>$a[Math.floor(Math.random()*$a.length)]).join(""),Wa=n=>String(n||"").trim().toUpperCase().replace(/\s+/g,"");window.Cloud={configured:As,emulator:Sr,async uid(){return(await z()).uid},async exercisesVersion(){await z();let n=await st(Ka());return n.exists()&&n.data().v||0},async exercises(){return await z(),(await ot(Ce(U,"exercises"))).docs.map(e=>({id:e.id,...e.data()}))},async image(n){await z();let e=await st(H(U,"exerciseImages",n));return e.exists()?e.data().data:null},async findCourse(n){await z();let e=await ot(Da(Ce(U,"courses"),La("code","==",Wa(n))));return e.empty?null:{id:e.docs[0].id,...e.docs[0].data()}},async course(n){await z();let e=await st(H(U,"courses",n));return e.exists()?{id:e.id,...e.data()}:null},async members(n){return await z(),(await ot(Ce(U,"courses",n,"members"))).docs.map(t=>({id:t.id,...t.data()}))},async pushMember(n,e){let t=await z();return await Rt(H(U,"courses",n,"members",t.uid),{...e,updated:Va()}),t.uid},async leaveCourse(n){let e=await z();await Is(H(U,"courses",n,"members",e.uid))},async myRole(){let n=await z(),e;try{e=await st(H(U,"roles",n.uid))}catch{return{role:null}}if(!e.exists())return{role:null};let t=e.data();if(t.role==="master")try{return await ot(Ce(U,"trainerCodes")),{role:"master"}}catch{return{role:null,invalid:!0}}if(t.role==="trainer")try{let r=await st(H(U,"trainerCodes",t.code));return!r.exists()||!r.data().active?{role:null,inactive:!0}:{role:"trainer",name:r.data().name,courses:r.data().courses||[]}}catch{return{role:null,inactive:!0}}return{role:null}},async redeemCode(n){let e=await z();if(n=String(n||"").trim(),!n)throw new Error("Bitte einen Code eingeben.");let t=H(U,"roles",e.uid);try{return await Rt(t,{role:"master",code:n,created:Date.now()}),"master"}catch{}try{return await Rt(t,{role:"trainer",code:Wa(n),created:Date.now()}),"trainer"}catch{}throw new Error("Dieser Freischaltcode ist ung\xFCltig oder deaktiviert.")},async dropRole(){let n=await z();await Is(H(U,"roles",n.uid))},async saveExercise(n,e,t){await z();let r=un(U),i=n?H(U,"exercises",n):H(Ce(U,"exercises")),s={...e,updated:Date.now()};return t===null?(s.imgV=0,s.imgSize=0,r.delete(H(U,"exerciseImages",i.id))):typeof t=="string"&&(s.imgV=Date.now(),s.imgSize=t.length,r.set(H(U,"exerciseImages",i.id),{data:t})),r.set(i,s,{merge:!0}),Ts(r),await r.commit(),i.id},async updateExercises(n){await z();let e=un(U);n.forEach(t=>e.update(H(U,"exercises",t.id),{...t.data,updated:Date.now()})),Ts(e),await e.commit()},async deleteExercise(n){await z();let e=un(U);e.delete(H(U,"exercises",n)),e.delete(H(U,"exerciseImages",n)),Ts(e),await e.commit()},async courses(n){if(await z(),!n)return(await ot(Ce(U,"courses"))).docs.map(r=>({id:r.id,...r.data()}));let e=[];for(let t of n){let r=await this.course(t);r&&e.push(r)}return e},async createCourse(n){await z();let e;for(let r=0;r<5&&(e=Ha(6),!!await this.findCourse(e));r++);let t=H(Ce(U,"courses"));return await Rt(t,{name:n.trim(),code:e,season:1,removed:[],created:Date.now()}),t.id},async resetRanking(n,e){await z(),await ws(H(U,"courses",n),{season:e+1})},async removeMember(n,e){await z();let t=un(U);t.update(H(U,"courses",n),{removed:Ua(e)}),t.delete(H(U,"courses",n,"members",e)),await t.commit()},async trainerCodes(){return await z(),(await ot(Ce(U,"trainerCodes"))).docs.map(e=>({id:e.id,...e.data()}))},async createTrainerCode(n,e){await z();let t;for(let r=0;r<5&&(t="T"+Ha(7),!!(await st(H(U,"trainerCodes",t))).exists());r++);return await Rt(H(U,"trainerCodes",t),{name:n.trim(),courses:e,active:!0,created:Date.now()}),t},async setTrainerCode(n,e){await z(),await ws(H(U,"trainerCodes",n),e)},qrSvg(n,e=4){let t=(0,za.default)(0,"M");return t.addData(n),t.make(),t.createSvgTag({cellSize:e,margin:2,scalable:!0})}};window.dispatchEvent(new Event("cloud-ready"));})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
