"use strict";(self.webpackChunkdckirrberg=self.webpackChunkdckirrberg||[]).push([[8209],{5047:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(6540),r=a(53),n=a(6112),s=a(5489);const c="sidebar_q+wC",i="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",o="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var b=a(1312);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.A)(c,"thin-scrollbar"),"aria-label":(0,b.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(n.A,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,r.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},7867:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(6540),r=a(5047),n=a(5465),s=a(5594);const c="tag_7kA+";function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(n.A,e))))),l.createElement("hr",null))}const m=function(e){let{tags:t}=e;const a=(0,s.QW)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,n=(0,s.bi)();return l.createElement(r.A,{title:n,wrapperClassName:s.GN.wrapper.blogPages,pageClassName:s.GN.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,n),l.createElement(m,{tags:Object.values(t)}))}},5465:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(6540),r=a(53),n=a(5489);const s="tag_WK-t",c="tagRegular_LXbV",i="tagWithCount_S5Zl";const m=function(e){const{permalink:t,name:a,count:m}=e;return l.createElement(n.A,{href:t,className:(0,r.A)(s,{[c]:!m,[i]:m})},a,m&&l.createElement("span",null,m))}}}]);