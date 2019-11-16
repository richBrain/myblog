(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(a,e,n){"use strict";n.r(e);var t=n(3),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"变量的解构赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量的解构赋值"}},[a._v("#")]),a._v(" 变量的解构赋值")]),a._v(" "),n("p",[a._v("之前对Es6解构赋值这里理解很模糊,查阅了一些资料,做个总结。")]),a._v(" "),n("h2",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 普通写法\nlet nameArr = [‘小a', '小b', '小c']; \nlet name1 = nameArr[0]; \nlet name2 = nameArr[1]; \nlet name3 = nameArr[2]; \n\n// 解构写法 \nlet [name1, name2, name3] = [‘小a', '小b', '小c']; \nconsole.log(name1, name2, name3);\n\n")])])]),n("h2",{attrs:{id:"对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[a._v("#")]),a._v(" 对象")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n// 写法1\n let {name, age, sex} = {name: ‘小a', age: 66, sex: ‘man'}; \nconsole.log(name, age, sex);\n\n// 写法2： 解构重命名\n let {name: XName, age: XAge, sex: XSex} = {name: '小a ', age: 22, sex: '公'};\nconsole.log(XName, XAge, XSex);\n\n// 写法3： 可以设置默认值\n let {name, age, sex = ‘女’} = {name: '小d', age: 33};\n console.log(sex); \n\n// 写法4：省略解构 \nlet [, , sex] = [‘小K’, 1, ‘男 ']; \nconsole.log(sex);\n\n")])])]),n("h2",{attrs:{id:"字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[a._v("#")]),a._v(" 字符串")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('const [a, b, c, d, e] = \'hello\'; \na // "h”\nb // "e”\nc // "l" \nd // "l”\ne // "o"\n')])])]),n("h2",{attrs:{id:"函数参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数参数"}},[a._v("#")]),a._v(" 函数参数")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function add([x, y])\n{\n return x + y; \n}\nadd([1, 2]);\n// 3\n")])])]),n("h2",{attrs:{id:"实际应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实际应用"}},[a._v("#")]),a._v(" 实际应用")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 例一\nlet { log, sin, cos } = Math;\nsin(1)…\n\n// 例二 \nconst { log } = console; \nlog('hello') // hello\n\n// 例三 \nlet x = 1; let y = 2;\n [x, y] = [y, x];\n\n")])])]),n("h5",{attrs:{id:"例一-将math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例一-将math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。"}},[a._v("#")]),a._v(" 例一:将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。")]),a._v(" "),n("h5",{attrs:{id:"例二-将console-log赋值到log变量…"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例二-将console-log赋值到log变量…"}},[a._v("#")]),a._v(" 例二:将console.log赋值到log变量…")]),a._v(" "),n("h5",{attrs:{id:"例三-交换变量x和y的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例三-交换变量x和y的值"}},[a._v("#")]),a._v(" 例三:交换变量x和y的值")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 例四\nlet resultSix, testArr = [1, -1, 5, -2, 39, 52, -101, 959];\nfunction randomSort(arr) {\n    if (toString.call(arr) !== '[object Array]') {\n        console.error('请传入一个数组')\n    } else {\n        let randomIndex, length = arr.length;\n        for (let i = 0; i < length; i++) {\n         //生成一个原数组长度的下标随机数\n        randomIndex = Math.floor(Math.random() * length);\n\n        //常规替换数组内元素位置的方法\n        arr.splice(randomIndex, 1, ...arr.splice(i, 1, arr[randomIndex]))\n     \n\n        //利用Es6解构赋值随机交换数组内元素的位置\n        [arr[randomIndex] , arr[i]] = [arr[i], arr[randomIndex]];\n }\n        return arr\n    }\n}\nresultSix = randomSort(testArr);\nconsole.log(resultSix)\n")])])]),n("h5",{attrs:{id:"例四-这是一个数组随机排序的方法-其中就使用了es6数组的解构赋值-可读性直线上升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例四-这是一个数组随机排序的方法-其中就使用了es6数组的解构赋值-可读性直线上升"}},[a._v("#")]),a._v(" 例四:这是一个数组随机排序的方法,其中就使用了es6数组的解构赋值,可读性直线上升")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('// 例五\n\nlet jsonData = \n    {\n        id: 42, \n        status: "OK", \n        data: [867, 5309] \n     }; \n\nlet { id, status, data: number } = jsonData;\n\nconsole.log(id, status, number); \n// 42, "OK", [867, 5309]\n')])])]),n("h5",{attrs:{id:"例五-上面代码可以快速提取-json-数据的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例五-上面代码可以快速提取-json-数据的值"}},[a._v("#")]),a._v(" 例五:上面代码可以快速提取 JSON 数据的值")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 例六\n\njQuery.ajax = function (url, \n    { \n        async = true,\n        beforeSend = function () {}, \n        cache = true, \n        complete = function () {}, \n        crossDomain = false, \n        global = true, // ... more config\n     } = {}\n) { // ... };\n\n")])])]),n("h5",{attrs:{id:"例六-指定参数的默认值，就避免了在函数体内部再写-var-xxx-config-xxx-default-xxx-这样的语句。-。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例六-指定参数的默认值，就避免了在函数体内部再写-var-xxx-config-xxx-default-xxx-这样的语句。-。"}},[a._v("#")]),a._v(" 例六:指定参数的默认值，就避免了在函数体内部再写 var xxx = config.xxx || 'default xxx';这样的语句。 。")]),a._v(" "),n("p",[a._v("打完收工。")]),a._v(" "),n("h4",{attrs:{id:"我的邮箱是z7568527-gmail-com-or-306132416-qq-com-欢迎大家相互交流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我的邮箱是z7568527-gmail-com-or-306132416-qq-com-欢迎大家相互交流"}},[a._v("#")]),a._v(" 我的邮箱是z7568527@gmail.com or 306132416@qq.com 欢迎大家相互交流.")])])}),[],!1,null,null,null);e.default=s.exports}}]);