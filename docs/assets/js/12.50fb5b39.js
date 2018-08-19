(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"optimization-of-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#optimization-of-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Optimization of code")]),t._v(" "),n("h2",{attrs:{id:"сдеnать-удобные-импорты-в-app-module-ts-сбор-в-одном-месте"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#сдеnать-удобные-импорты-в-app-module-ts-сбор-в-одном-месте","aria-hidden":"true"}},[t._v("#")]),t._v(" Сделать удобные импорты в app.module.ts (Сбор в одном месте)")]),t._v(" "),n("p",[t._v("Допустим у нас есть: "),n("code",[t._v("app / pages / home, article, login")]),t._v(", так мы подключаем их стандартно:")]),t._v(" "),n("h6",{attrs:{id:"app-module-ts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-module-ts","aria-hidden":"true"}},[t._v("#")]),t._v(" app.module.ts")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Pages components")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/home/home.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/article/article.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LoginComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/login/login.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n")])])]),n("p",[t._v("А вот так можно сделать, чтобы собрать их в одном месте:")]),t._v(" "),n("ol",[n("li",[t._v("Создаем файл "),n("code",[t._v("index.ts")]),t._v(" в "),n("code",[t._v("app / pages /")]),t._v(" и там делаем импорты")])]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// app/pages/index.ts")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/home/home.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/article/article.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LoginComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/login/login.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// for 1 and 2 second import ")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LoginComponent "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// for 3 import")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LoginComponent "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("в "),n("code",[t._v("app.module.ts")]),t._v(" делаем импорт из "),n("code",[t._v("/ pages / index.ts")])])]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// app.module.ts")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v('// Import with destucturization (not allowed if only defined "export default{}")')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LoginComponent "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// OR import with grouping ")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pages "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// OR import object from default export")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pages "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/index'")]),t._v("\n\n@"),n("span",{attrs:{class:"token function"}},[t._v("NgModule")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LoginComponent\n    \n    "),n("span",{attrs:{class:"token comment"}},[t._v("// OR if export * as")]),t._v("\n    pages"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pages"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ArticleComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pages"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LoginComponent\n    \n    "),n("span",{attrs:{class:"token comment"}},[t._v('// OR if defined "export default {}" - make it with Spread')]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("pages "),n("span",{attrs:{class:"token comment"}},[t._v("// same as - HomeComponent, ArticleComponent, LoginComponent")]),t._v("\n\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"сдеnать-принадnежность-компонента-к-странице-компоненту-nогически"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#сдеnать-принадnежность-компонента-к-странице-компоненту-nогически","aria-hidden":"true"}},[t._v("#")]),t._v(' Сделать "принадлежность" компонента к странице(компоненту), '),n("code",[t._v("логически")])]),t._v(" "),n("p",[t._v("Допустим есть страница "),n("code",[t._v("app / pages / home")]),t._v(", и него есть компонент "),n("code",[t._v("card.component")]),t._v(" который мы включаем в него и т.д. Но при импорте мы хотим импортить страницу "),n("code",[t._v("home")]),t._v(" и компонент вместе, который используеться только в этой странице.")]),t._v(" "),n("h6",{attrs:{id:"app-module-ts-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-module-ts-2","aria-hidden":"true"}},[t._v("#")]),t._v(" app.module.ts")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Обычный импорт")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/home/home.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v('// \x3c!-- страница(компонент) в который включаеться "CardComponent"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CardComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./pages/components/card/card.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// card component")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\ndeclarations"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CardComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("Делаем по-другому")]),t._v(" "),n("h6",{attrs:{id:"home-component-ts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#home-component-ts","aria-hidden":"true"}},[t._v("#")]),t._v(" home.component.ts")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// default class of component")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HomeComponent")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// changed to this")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CardComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./components/card/card.component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HomeComponent")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HomeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CardComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}],!1,null,null,null);o.options.__file="optimization-of-code.md";s.default=o.exports}}]);