(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{169:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("midway-bin 通过继承了 egg-bin，扩展一些跟 ts 相关的命令。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("默认脚手架已经自带。")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("包括 egg-bin 自带的:")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("这些命令都没有特别处理，参数和 egg-bin 相同，具体使用可以查看 "),a("a",{attrs:{href:"https://github.com/eggjs/egg-bin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-bin 文档"),a("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("我们增加了一个 build 命令用于增强构建 typescript 项目。")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("你可以在其中使用相对路径或者通配符，乃至任意符合 "),a("a",{attrs:{href:"https://github.com/isaacs/minimatch#usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("glob 语法"),a("OutboundLink")],1),t._v(" 的 pattern 数组。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("我们增加了一个 clean 命令用于清理一些临时文件。")]),t._v(" "),t._m(16),a("p",[t._v("清理的内容包括：")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("提供了基础的 midway 应用脚手架，后续会增加其他模板。")]),t._v(" "),t._m(22)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"midway-工具集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#midway-工具集","aria-hidden":"true"}},[this._v("#")]),this._v(" midway 工具集")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"midway-bin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#midway-bin","aria-hidden":"true"}},[this._v("#")]),this._v(" midway-bin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" midway-bin --save-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用命令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("midway-bin test 测试命令， ts 使用时需要带上 "),a("code",[t._v("--ts")])]),t._v(" "),a("li",[t._v("midway-bin cov 生成覆盖率命令， ts 使用时需要带上 "),a("code",[t._v("--ts")])]),t._v(" "),a("li",[t._v("midway-bin debug 调试命令， ts 使用时需要带上 "),a("code",[t._v("--ts")])]),t._v(" "),a("li",[t._v("midway-bin autod")]),t._v(" "),a("li",[t._v("midway-bin dev 本地开发命令， ts 使用时需要带上 "),a("code",[t._v("--ts")])]),t._v(" "),a("li",[t._v("midway-bin pkgfiles")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"build-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" build 命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("midway-bin build\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("额外增加了一个 "),s("code",[this._v("-c")]),this._v(" 参数用于支持打包前清理 "),s("code",[this._v("/dist")]),this._v(" 目录。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("midway-bin build -c\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于 typescript 编译无法拷贝非 "),s("code",[this._v("*.ts")]),this._v(" 文件，我们特定在对 build 命令做了增强。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在执行 midway-bin build 命令中，会自动调用 "),s("code",[this._v("package.json")]),this._v(" 的 "),s("code",[this._v("midway-bin-build")]),this._v(" 段落，配置如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"midway-bin-build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/view"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib/platform/aone/api.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib/*.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib/*.text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pattern/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!pattern/**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("这里的路径相对于 src 目录。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样在打包时会自动将相应的目录或者文件从 "),s("code",[this._v("src")]),this._v(" 目录拷贝到对应的 "),s("code",[this._v("dist")]),this._v(" 目录中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"clean-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" clean 命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("midway-bin clean\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("logs 目录")]),this._v(" "),s("li",[this._v("run 目录")]),this._v(" "),s("li",[this._v(".nodejs-cache 目录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("同时和 build 命令类似，你可以在 "),s("code",[this._v("package.json")]),this._v(" 的 "),s("code",[this._v("midway-bin-clean")]),this._v(" 段落增加配置，用于清理自己的目录和文件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"midway-bin-clean"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/app/public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resource/temp"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("这里的路径相对于应用的根目录。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"midway-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#midway-init","aria-hidden":"true"}},[this._v("#")]),this._v(" midway-init")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" -g midway-init\nmidway-init\n")])])])}],!1,null,null,null);n.options.__file="tool_set.md";s.default=n.exports}}]);