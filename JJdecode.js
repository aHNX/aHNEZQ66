var JJdecode={dst:"",out:function(a){JJdecode.dst+=a},decode:function(u){var f=u;if(f.replace(/^\s+|\s+$/g,""),0==f.indexOf('"\'\\"+\'+",')?(v=f.indexOf('$$+"\\""+')+8,w=f.indexOf('"\\"")())()'),x=f.substring(f.indexOf('"\'\\"+\'+",')+9,f.indexOf("=~[]")),x.length):((x=f.substr(0,f.indexOf("="))).length,v=f.indexOf('"\\""+')+5,w=f.indexOf('"\\"")())()')),v==w)throw new Error("No data !");for(var a=f.substring(v,w),c=["___+","__$+","_$_+","_$$+","$__+","$_$+","$$_+","$$$+","$___+","$__$+","$_$_+","$_$$+","$$__+","$$_$+","$$$_+","$$$$+"],i='(![]+"")['+x+"._$_]+",j=x+"._$+",k=x+".__+",l=x+"._+",m=x+".",g=x+".",s='\\\\\\"',t="\\\\\\\\",q='\\\\"+',r='\\\\"+'+x+"._+";""!=a;){if(0==a.indexOf(i)){a=a.substr(i.length),JJdecode.out("l");continue}if(0==a.indexOf(j)){a=a.substr(j.length),JJdecode.out("o");continue}if(0==a.indexOf(k)){a=a.substr(k.length),JJdecode.out("t");continue}if(0==a.indexOf(l)){a=a.substr(l.length),JJdecode.out("u");continue}if(0==a.indexOf(m)){a=a.substr(m.length);var b=0;for(b=0;b<c.length;b++)if(0==a.indexOf(c[b])){a=a.substr(c[b].length),JJdecode.out(b.toString(16));break}continue}if(0==a.indexOf('"')){if(0==(a=a.substr(1)).indexOf(r)){a=a.substr(r.length);var e="";for(j=0;j<2;j++)if(0==a.indexOf(g)){for(k=0,a=a.substr(g.length);k<c.length;k++)if(0==a.indexOf(c[k])){a=a.substr(c[k].length),e+=k.toString(16)+"";break}}else break;JJdecode.out(String.fromCharCode(parseInt(e,16)));continue}if(0==a.indexOf(q)){a=a.substr(q.length);var e="",d="",o="",p=0;for(j=0;j<3;j++){if(j>1){if(0==a.indexOf(i)){a=a.substr(i.length),d="l";break}if(0==a.indexOf(j)){a=a.substr(j.length),d="o";break}if(0==a.indexOf(k)){a=a.substr(k.length),d="t";break}if(0==a.indexOf(l)){a=a.substr(l.length),d="u";break}}if(0==a.indexOf(g)){for(k=0,o=a.substr(g.length);k<8;k++)if(0==o.indexOf(c[k])){if(parseInt(e+k+"",8)>128){p=1;break}e+=k+"",a=(a=a.substr(g.length)).substr(c[k].length);break}if(1==p&&0==a.indexOf(m)){a=a.substr(m.length);var b=0;for(b=0;b<c.length;b++)if(0==a.indexOf(c[b])){a=a.substr(c[b].length),d=b.toString(16);break}break}}else break}JJdecode.out(String.fromCharCode(parseInt(e,8))+d);continue}for(var v,w,x,h,n=0;;){if(h=a.charCodeAt(0),0==a.indexOf(s)){a=a.substr(s.length),JJdecode.out('"'),n+=1;continue}if(0==a.indexOf(t)){a=a.substr(t.length),JJdecode.out("\\"),n+=1;continue}if(0==a.indexOf('"+')){if(0==n)throw new Error("+ no match S block: "+a);a=a.substr(2);break}if(0==a.indexOf(r)){if(0==n)throw new Error("no match S block n>128: "+a);a=a.substr(r.length);var e="",d="";for(j=0;j<10;j++){if(j>1){if(0==a.indexOf(i)){a=a.substr(i.length),d="l";break}if(0==a.indexOf(j)){a=a.substr(j.length),d="o";break}if(0==a.indexOf(k)){a=a.substr(k.length),d="t";break}if(0==a.indexOf(l)){a=a.substr(l.length),d="u";break}}if(0==a.indexOf(g)){for(k=0,a=a.substr(g.length);k<c.length;k++)if(0==a.indexOf(c[k])){a=a.substr(c[k].length),e+=k.toString(16)+"";break}}else break}JJdecode.out(String.fromCharCode(parseInt(e,16)));break}else if(0==a.indexOf(q)){if(0==n)throw new Error("no match S block n<128: "+a);a=a.substr(q.length);var e="",d="",o="",p=0;for(j=0;j<3;j++){if(j>1){if(0==a.indexOf(i)){a=a.substr(i.length),d="l";break}if(0==a.indexOf(j)){a=a.substr(j.length),d="o";break}if(0==a.indexOf(k)){a=a.substr(k.length),d="t";break}if(0==a.indexOf(l)){a=a.substr(l.length),d="u";break}}if(0==a.indexOf(g)){for(k=0,o=a.substr(g.length);k<8;k++)if(0==o.indexOf(c[k])){if(parseInt(e+k+"",8)>128){p=1;break}e+=k+"",a=(a=a.substr(g.length)).substr(c[k].length);break}if(1==p&&0==a.indexOf(m)){a=a.substr(m.length);var b=0;for(b=0;b<c.length;b++)if(0==a.indexOf(c[b])){a=a.substr(c[b].length),d=b.toString(16);break}}}else break}JJdecode.out(String.fromCharCode(parseInt(e,8))+d);break}else(33<=h&&h<=47||58<=h&&h<=64||91<=h&&h<=96||123<=h&&h<=127)&&(JJdecode.out(a.charAt(0)),a=a.substr(1),n+=1)}continue}throw new Error("no match : "+a)}return JJdecode.dst}}
