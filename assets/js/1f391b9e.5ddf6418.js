"use strict";(self.webpackChunkdckirrberg=self.webpackChunkdckirrberg||[]).push([[6061],{9446:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var l=t(6540),n=t(53),s=t(6112),c=t(5680),i=t(3817),r=t(5751),m=t(5594);const o="mdxPageWrapper_eQvw";const d=function(e){const{content:a}=e,{frontMatter:t,metadata:d}=a,{title:v,description:N,wrapperClassName:g,hide_table_of_contents:f}=t,{permalink:k}=d;return l.createElement(s.A,{title:v,description:N,permalink:k,wrapperClassName:g??m.GN.wrapper.mdxPages,pageClassName:m.GN.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.A)("row",o)},l.createElement("div",{className:(0,n.A)("col",!f&&"col--8")},l.createElement(c.xA,{components:i.A},l.createElement(a,null))),!f&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.A,{toc:a.toc,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level})))))}},5751:(e,a,t)=>{t.d(a,{A:()=>r});var l=t(8168),n=t(6540),s=t(53),c=t(5496);const i="tableOfContents_vrFS";const r=function(e){let{className:a,...t}=e;return n.createElement("div",{className:(0,s.A)(i,"thin-scrollbar",a)},n.createElement(c.A,(0,l.A)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5496:(e,a,t)=>{t.d(a,{A:()=>i});var l=t(8168),n=t(6540),s=t(5594);function c(e){let{toc:a,className:t,linkClassName:l,isChild:s}=e;return a.length?n.createElement("ul",{className:s?void 0:t},a.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}function i(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:o,...d}=e;const v=(0,s.pN)(),N=m??v.tableOfContents.minHeadingLevel,g=o??v.tableOfContents.maxHeadingLevel,f=(0,s.WQ)({toc:a,minHeadingLevel:N,maxHeadingLevel:g}),k=(0,n.useMemo)((()=>{if(i&&r)return{linkClassName:i,linkActiveClassName:r,minHeadingLevel:N,maxHeadingLevel:g}}),[i,r,N,g]);return(0,s.i3)(k),n.createElement(c,(0,l.A)({toc:f,className:t,linkClassName:i},d))}}}]);