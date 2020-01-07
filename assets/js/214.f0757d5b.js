(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{523:function(s,t,r){"use strict";r.r(t);var a=r(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"serversettings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serversettings"}},[s._v("#")]),s._v(" ServerSettings "),r("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),r("section",{staticClass:"symbol-info"},[r("table",{staticClass:"is-full-width"},[r("tbody",[r("tr",[r("th",[s._v("Module")]),r("td",[r("div",{staticClass:"lang-typescript"},[r("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { ServerSettings } "),r("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),r("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),r("tr",[r("th",[s._v("Source")]),r("td",[r("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.36.2/packages/common/src/server/decorators/serverSettings.ts#L0-L0"}},[s._v("/packages/common/src/server/decorators/serverSettings.ts")])])])])])]),s._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),r("div",{staticClass:"language-typescript"},[r("pre",{pre:!0,attrs:{class:"language-typescript"}},[r("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("function "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ServerSettings")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("settings?"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<"),r("a",{pre:!0,attrs:{href:"/api/di/decorators/IModuleOptions.html"}},[r("span",{pre:!0,attrs:{class:"token"}},[s._v("IModuleOptions")])]),s._v(">"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),r("div",{pre:!0},[r("p",[r("code",[s._v("@ServerSettings")]),s._v(" let you to configure quickly your server via decorator. This decorator take your configuration and merge it with the default server configuration.")]),s._v(" "),r("p",[s._v("The default configuration is as follow:")]),s._v(" "),r("div",{pre:!0,attrs:{class:"language-json line-numbers-mode"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rootDir"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path/to/root/project"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"env"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"httpsPort"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"uploadDir"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/uploads"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mount"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"/rest"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/controllers/**/*.js"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[s._v('"componentsScan"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/middlewares/**/*.js"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/services/**/*.js"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/converters/**/*.js"')]),s._v("\n "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),r("br")])]),r("p",[s._v("You can customize your configuration as follow:")]),s._v(" "),r("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ServerLoader"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ServerSettings"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Path "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ServerSettings")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rootDir"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Path"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    mount"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/rest"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/controllers/current/**/*.js"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/rest/v1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/controllers/v1/users/*.js"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rootDir}/controllers/v1/groups/*.js"')]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Server")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServerLoader")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),r("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),r("br"),r("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),r("br")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);