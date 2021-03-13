(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{235:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a(1),r=a(9),o=(a(0),a(307)),l={id:"globals",title:"Global Properties"},i={id:"globals",title:"Global Properties",description:"## Available Global Properties",source:"@site/../docs/global-properties.md",permalink:"/docs/globals",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/global-properties.md",lastUpdatedBy:"basyskom-dege",lastUpdatedAt:1614707062,sidebar:"docs",previous:{title:"Usage",permalink:"/docs/usage"},next:{title:"Configuration Options",permalink:"/docs/configuration"}},b=[{value:"Available Global Properties",id:"available-global-properties",children:[]},{value:"Note on Global Property declaration",id:"note-on-global-property-declaration",children:[]}],p={rightToc:b};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"available-global-properties"},"Available Global Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Acceptable value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debugOpenAPI"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dumps JSON formatted and fully parsed OpenAPI document during generation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debugModels"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dumps JSON formatted template-bound model information during generation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debugOperations"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dumps JSON formatted template-bound operation information during generation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debugSupportingFiles"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dumps JSON formatted Supporting File information during generation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"verbose"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the verbosity"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generateAliasAsModel"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines whether primitive types defined at the model/schema level will be wrapped in a model"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"org.openapitools.codegen.utils.oncelogger.enabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Enable/disable the "OnceLogger" which reduces noise for select repeated logs'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"supportingFiles"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define which supporting files will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no value, or a comma-separated string of file names")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"models"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define which models will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no value, or a comma-separated string of model names")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apis"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define which apis will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no value, or a comma-separated string of api names")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apiDocs"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define if api docs will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"modelDocs"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define if model docs will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apiTests"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define if api tests will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"modelTests"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to define if model tests will be generated. Prefer using the more robust ",Object(o.b)("inlineCode",{parentName:"td"},".openapi-generator-ignore"),"."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"withXml"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the user to control support of XML generated constructs, where supported"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none")))),Object(o.b)("h2",{id:"note-on-global-property-declaration"},"Note on Global Property declaration"),Object(o.b)("p",null,"There are ",Object(o.b)("em",{parentName:"p"},"two ways"),' to provide selective generation properties or "global properties". First, these can be passed as Java System Properties. Second, these can be passed via the global property tooling option (',Object(o.b)("inlineCode",{parentName:"p"},"--global-property")," in CLI and ",Object(o.b)("inlineCode",{parentName:"p"},"globalProperty")," in Maven and Gradle configurations). This differentiation is new in version 5.0 with the removal of the ",Object(o.b)("inlineCode",{parentName:"p"},"-D")," CLI option and the renaming of ",Object(o.b)("inlineCode",{parentName:"p"},"systemProperties"),". If you're upgrading to OpenAPI Generator 5.0+"),Object(o.b)("p",null,"While the examples seen in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/customization"}),"Customization")," use the Java System Property syntax, keep in mind that the following are equivalent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"java -Dmodels {jar} generate {opts}\n")),Object(o.b)("p",null,"and"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"java {jar} generate {opts} --global-property=models\n")),Object(o.b)("p",null,"Why the two differing ways to provide the same properties? We previously accepted a ",Object(o.b)("inlineCode",{parentName:"p"},"-D"),' tooling option which resembled Java System Property declaration. In older versions of OpenAPI Generator, the option modified the SystemProperties collection directly and was truly a "system property". This option changed during the 4.x release in an effort to make OpenAPI Generator thread-safe and isolate its configuration via thread locals. We no longer mutate System Properties. In the 4.x release and earlier, specifying the tooling ',Object(o.b)("inlineCode",{parentName:"p"},"-D")," option with system properties intended for other tools like swagger-parser rather than passing them as true Java System Properties would lead to unexpected behavior for the user; if our tool set the system property ",Object(o.b)("em",{parentName:"p"},"after")," invoking certain code, it would seem to the user like Java System Properties weren't working! "))}c.isMDXComponent=!0},307:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return a?r.a.createElement(u,i({ref:t},p,{components:a})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);