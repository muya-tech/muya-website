"use strict";(self.webpackChunkmuya_technology=self.webpackChunkmuya_technology||[]).push([[49],{7912:function(e,t,a){a.r(t),a.d(t,{Head:function(){return I},default:function(){return L}});var r=a(7294),n=a(9271),o=a(4488),i=a(4520),l=a(8387),s=a(3887),c=a(4031),m=(...e)=>e.filter(Boolean).join(" ");function d(...e){return function(t){e.some((e=>(null==e||e(t),null==t?void 0:t.defaultPrevented)))}}var[u,p]=(0,l.k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function g(e){const[t,a]=e.split(" ");return t&&a?`${t.charAt(0)}${a.charAt(0)}`:t.charAt(0)}function f(e){const{name:t,getInitials:a,...n}=e,i=p();return r.createElement(o.m$.div,{role:"img","aria-label":t,...n,__css:i.label},t?null==a?void 0:a(t):null)}f.displayName="AvatarName";var h=e=>r.createElement(o.m$.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e},r.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),r.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}));function b(e){const{src:t,srcSet:a,onError:n,onLoad:i,getInitials:l,name:c,borderRadius:m,loading:d,iconLabel:u,icon:p=r.createElement(h,null),ignoreFallback:g,referrerPolicy:b}=e,v=(0,s.d9)({src:t,onError:n,ignoreFallback:g});return!t||!("loaded"===v)?c?r.createElement(f,{className:"chakra-avatar__initials",getInitials:l,name:c}):(0,r.cloneElement)(p,{role:"img","aria-label":u}):r.createElement(o.m$.img,{src:t,srcSet:a,alt:c,onLoad:i,referrerPolicy:b,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:m}})}b.displayName="AvatarImage";var v={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},y=(0,o.Gp)(((e,t)=>{const a=(0,o.jC)("Avatar",e),[n,l]=(0,r.useState)(!1),{src:s,srcSet:c,name:p,showBorder:f,borderRadius:y="full",onError:k,onLoad:w,getInitials:E=g,icon:C=r.createElement(h,null),iconLabel:x=" avatar",loading:_,children:A,borderColor:S,ignoreFallback:N,...L}=(0,i.Lr)(e),I={borderRadius:y,borderWidth:f?"2px":void 0,...v,...a.container};return S&&(I.borderColor=S),r.createElement(o.m$.span,{ref:t,...L,className:m("chakra-avatar",e.className),"data-loaded":(M=n,M?"":void 0),__css:I},r.createElement(u,{value:a},r.createElement(b,{src:s,srcSet:c,loading:_,onLoad:d(w,(()=>{l(!0)})),onError:k,getInitials:E,name:p,borderRadius:y,icon:C,iconLabel:x,ignoreFallback:N}),A));var M}));y.displayName="Avatar",(0,o.Gp)((function(e,t){const a=(0,o.jC)("Avatar",e),{children:n,borderColor:l,max:s,spacing:d="-0.75rem",borderRadius:u="full",...p}=(0,i.Lr)(e),g=(0,c.W)(n),f=s?g.slice(0,s):g,h=null!=s&&g.length-s,b=f.reverse().map(((t,a)=>{const n={marginEnd:0===a?0:d,size:e.size,borderColor:t.props.borderColor??l,showBorder:!0};return(0,r.cloneElement)(t,function(e){const t=Object.assign({},e);for(let a in t)void 0===t[a]&&delete t[a];return t}(n))})),y={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...a.group},k={borderRadius:u,marginStart:d,...v,...a.excessLabel};return r.createElement(o.m$.div,{ref:t,role:"group",__css:y,...p,className:m("chakra-avatar__group",e.className)},h>0&&r.createElement(o.m$.span,{className:"chakra-avatar__excess",__css:k},`+${h}`),b)})).displayName="AvatarGroup";var k={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}};(0,o.Gp)((function(e,t){const{placement:a="bottom-end",className:n,...i}=e,l=p(),s={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...k[a],...l.badge};return r.createElement(o.m$.div,{ref:t,...i,className:m("chakra-avatar__badge",n),__css:s})})).displayName="AvatarBadge";var w=a(2494),E=a(9583),C=a(3687),x=a(5586),_=a(9454),A=a(1735);const S={heroTitle:"About Us",heroDescription:"Muya is a leading technology company that provides cutting-edge digital services and expert staff augmentation solutions to businesses of all sizes",sections:[{title:"Our Story",description:["Founded in 2022 by a team of industry experts in software development and technical leadership, Muya brings years of experience from the US, UK, and Finland markets. Our founders' background includes architecting & implementing large scale US government applications, managing multiple cross-functional project teams and running a growing digital services firm.","This wealth of expertise and knowledge forms the backbone of our programs. At Muya, we're passionate about creating opportunities for talented individuals to succeed in the talent market of tomorrow.","Muya (ሙያ) is an Amharic word that translates to 'talent' or 'profession', and accurately captures our dual mission of providing best-in-class talent services and providing pathways for our staff to upskill and grow in the digital age."],backgroundColor:"blue.700",fontColor:"white"},{title:"Core Values",description:"Our values guide both how we work with our colleagues and how we view our partnerships.",backgroundColor:"gray.100",items:[{title:"Clarity and transparency",description:"Our jobs involve taking complicated topics and working to remove the ambiguity; our clients rely on us to work and communicate honestly and efficiently."},{title:"Be Prepared",description:"We always come prepared, researching and documenting before raising topics with our clients.  We respect our clients' time by asking questions that get to the root of things faster. "},{title:"Collaboration",description:"We believe in the power of teamwork, and work closely with our clients to understand their needs and goals."},{title:"Exhibit a growth mindset",description:"The industry is constantly evolving, and in order to stay relevant we constantly grow our skill sets to serve current and future clients."}]},{title:"Core Team",description:"Meet our team.",customId:"team"}]},N=[{name:"Samuel Balcha",title:"General Manager",photo:"/images/staff/sammy-profile.png",department:"leadership",linkedin:"https://www.linkedin.com/in/samuelhailemariam"},{name:"Anteneh Addis",title:"Digital Strategy",photo:"/images/staff/anteneh-3.png",department:"leadership",linkedin:"https://www.linkedin.com/in/anteneh-addis-98bb5128"},{name:"Groum Tefera",title:"Upskilling Strategy / Investor",photo:"/images/staff/groum-profile.png",department:"advisor"},{name:"Daniel Leul",title:"Business Strategy / Investor",photo:"/images/staff/danny-profile.png",department:"advisor"},{name:"Mehrteab Leul",title:"Investor",photo:"/images/staff/Mehrteab-Leul-profile.png",department:"advisor",linkedin:"https://www.linkedin.com/in/mehrteab-leul-kokeb"}];var L=()=>{const e=(e,t)=>r.createElement(n.xu,{marginBottom:"5"},r.createElement(n.X6,{marginBottom:"10"},e),r.createElement(n.MI,{columns:{base:2,md:4},mb:{base:12,md:12},spacing:"10"},N.filter((e=>e.department===t)).map((e=>r.createElement(n.xu,null,r.createElement(y,{name:e.name,size:{base:"xl",md:"2xl"},mb:2,src:e.photo}),e.linkedin?r.createElement(n.rU,{href:e.linkedin,isExternal:!0},r.createElement(n.xv,{fontSize:{base:"xl",md:"2xl"},fontWeight:"semibold",textDecoration:"underline",mb:1},e.name),r.createElement(n.xv,null,e.title),r.createElement(w.JO,{as:E.ltd})):r.createElement(r.Fragment,null,r.createElement(n.xv,{fontSize:{base:"xl",md:"2xl"},fontWeight:"semibold",mb:1},e.name),r.createElement(n.xv,null,e.title)))))),r.createElement(n.iz,null)),t={team:()=>r.createElement(r.Fragment,null,e("Leadership","leadership"),e("Advisors","advisor"))};return r.createElement(x.Z,null,r.createElement(C.Z,{title:S.heroTitle,description:S.heroDescription}),S.sections.map((e=>r.createElement(A.Z,{title:e.title,description:e.description,backgroundColor:e.backgroundColor,fontColor:e.fontColor,items:e.items},e.customId&&t[e.customId]()))))};const I=()=>r.createElement(_.H,{title:"Muya - About"})}}]);
//# sourceMappingURL=component---src-pages-about-tsx-5f4efb9f5373e44aa342.js.map