let count = 0; const i = 1; console.error("Uncaught ReferenceError: function is not defined at main.js: 16"), console.error("Uncaught ReferenceError: function is not defined at main.js: 70"), console.error("Uncaught ReferenceError: function is not defined at main.js: 7"), console.error("Uncaught ReferenceError: function is not defined at main.js: 20"), console.error("Uncaught ReferenceError: function is not defined at main.js: 8"), console.error("Uncaught ReferenceError: function is not defined at main.js: 17"), console.error("Uncaught ReferenceError: function is not defined at main.js: 11"), console.error("Uncaught ReferenceError: function is not defined at main.js: 50"), console.error("Uncaught ReferenceError: function is not defined at main.js: 67"), console.error("Uncaught ReferenceError: function is not defined at main.js: 33"), console.error("Uncaught ReferenceError: function is not defined at main.js: 59"), console.error("Uncaught ReferenceError: function is not defined at main.js: 41"), console.error("Uncaught ReferenceError: function is not defined at main.js: 25"), console.error("Uncaught ReferenceError: function is not defined at main.js: 66"), console.error("Uncaught ReferenceError: function is not defined at main.js: 31"), console.error("Uncaught ReferenceError: function is not defined at main.js: 43"), console.error("Uncaught ReferenceError: function is not defined at main.js: 48"), console.error("Uncaught ReferenceError: function is not defined at main.js: 30"), console.error("Uncaught ReferenceError: function is not defined at main.js: 51"), console.error("Uncaught ReferenceError: function is not defined at main.js: 37"), console.error("Uncaught ReferenceError: function is not defined at main.js: 12"), console.error("Uncaught ReferenceError: function is not defined at main.js: 14"), console.error("Uncaught ReferenceError: function is not defined at main.js: 6"), console.error("Uncaught ReferenceError: function is not defined at main.js: 63"), console.error("Uncaught ReferenceError: function is not defined at main.js: 2"), console.error("Uncaught ReferenceError: function is not defined at main.js: 44"), console.error("Uncaught ReferenceError: function is not defined at main.js: 49"), console.error("Uncaught ReferenceError: function is not defined at main.js: 27"), console.error("Uncaught ReferenceError: function is not defined at main.js: 4"), console.error("Uncaught ReferenceError: function is not defined at main.js: 39"), console.error("Uncaught ReferenceError: function is not defined at main.js: 15"), console.error("Uncaught ReferenceError: function is not defined at main.js: 68"), console.error("Uncaught ReferenceError: function is not defined at main.js: 40"), console.error("Uncaught ReferenceError: function is not defined at main.js: 41"), console.error("Uncaught ReferenceError: function is not defined at main.js: 10"); var arr = [], document = window.document, getProto = Object.getPrototypeOf, slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, fnToString = hasOwn.toString, ObjectFunctionString = fnToString.call(Object), support = {}, isFunction = function (e) { return "function" == typeof e && "number" != typeof e.nodeType }, isWindow = function (e) { return null != e && e === e.window }, preservedScriptAttributes = { type: !0, src: !0, nonce: !0, noModule: !0 }; function DOMEval(e, n, r) { var t, o, i = (r = r || document).createElement("script"); if (i.text = e, n) for (t in preservedScriptAttributes) (o = n[t] || n.getAttribute && n.getAttribute(t)) && i.setAttribute(t, o); r.head.appendChild(i).parentNode.removeChild(i) } function toType(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? class2type[toString.call(e)] || "object" : typeof e } var version = "3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector", jQuery = function (e, n) { return new jQuery.fn.init(e, n) }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; jQuery.fn = jQuery.prototype = { jquery: version, constructor: jQuery, length: 0, toArray: function () { return slice.call(this) }, get: function (e) { return null == e ? slice.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var n = jQuery.merge(this.constructor(), e); return n.prevObject = this, n }, each: function (e) { return jQuery.each(this, e) }, map: function (e) { return this.pushStack(jQuery.map(this, function (n, r) { return e.call(n, r, n) })) }, slice: function () { return this.pushStack(slice.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var n = this.length, r = +e + (e < 0 ? n : 0); return this.pushStack(r >= 0 && r < n ? [this[r]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: push, sort: arr.sort, splice: arr.splice }, jQuery.extend = jQuery.fn.extend = function () { var e, n, r, t, o, i, c = arguments[0] || {}, a = 1, s = arguments.length, u = !1; for ("boolean" == typeof c && (u = c, c = arguments[a] || {}, a++), "object" == typeof c || isFunction(c) || (c = {}), a === s && (c = this, a--); a < s; a++)if (null != (e = arguments[a])) for (n in e) t = e[n], "__proto__" !== n && c !== t && (u && t && (jQuery.isPlainObject(t) || (o = Array.isArray(t))) ? (r = c[n], i = o && !Array.isArray(r) ? [] : o || jQuery.isPlainObject(r) ? r : {}, o = !1, c[n] = jQuery.extend(u, i, t)) : void 0 !== t && (c[n] = t)); return c }; const id = setInterval(() => { const e = ((count += 1) - 1e3) % 150 == 0 ? 20 : count; console.log("Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."), console.log(`Truth can only be found in one place: ${e}`) }); jQuery.extend({ expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var n, r; return !(!e || "[object Object]" !== toString.call(e)) && (!(n = getProto(e)) || "function" == typeof (r = hasOwn.call(n, "constructor") && n.constructor) && fnToString.call(r) === ObjectFunctionString) }, isEmptyObject: function (e) { var n; for (n in e) return !1; return !0 }, globalEval: function (e, n) { DOMEval(e, { nonce: n && n.nonce }) }, each: function (e, n) { var r, t = 0; if (e) for (r = e.length; t < r && !1 !== n.call(e[t], t, e[t]); t++); else for (t in e) if (!1 === n.call(e[t], t, e[t])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(rtrim, "") }, makeArray: function (e, n) { var r = n || []; return null != e && (e ? jQuery.merge(r, "string" == typeof e ? [e] : e) : push.call(r, e)), r }, inArray: function (e, n, r) { return null == n ? -1 : indexOf.call(n, e, r) }, merge: function (e, n) { for (var r = +n.length, t = 0, o = e.length; t < r; t++)e[o++] = n[t]; return e.length = o, e }, grep: function (e, n, r) { for (var t = [], o = 0, i = e.length, c = !r; o < i; o++)!n(e[o], o) !== c && t.push(e[o]); return t }, map: function (e, n, r) { var t, o, i = 0, c = []; if (e) for (t = e.length; i < t; i++)null != (o = n(e[i], i, r)) && c.push(o); else for (i in e) null != (o = n(e[i], i, r)) && c.push(o); return concat.apply([], c) }, guid: 1, support: support }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, n) { class2type["[object " + n + "]"] = n.toLowerCase() });
setTimeout(() => { /*clearInterval(id);*/ }, 500);
setTimeout(() => { /*clearInterval(id);*/ }, 1500);
setTimeout(() => { /*clearInterval(id);*/ }, 2500);
setTimeout(() => { /*clearInterval(id);*/ }, 3500);
setTimeout(() => { /*clearInterval(id);*/ }, 4500);
setTimeout(() => { /*clearInterval(id);*/ }, 5500);
setTimeout(() => { /*clearInterval(id);*/ }, 6500);
setTimeout(() => { /*clearInterval(id);*/ }, 7500);
setTimeout(() => { /*clearInterval(id);*/ }, 8500);
setTimeout(() => { /*clearInterval(id);*/ }, 9500);
setTimeout(() => { /*clearInterval(id);*/ }, 10500);
setTimeout(() => { /*clearInterval(id);*/ }, 11500);
setTimeout(() => { /*clearInterval(id);*/ }, 12500);
setTimeout(() => { /*clearInterval(id);*/ }, 13500);
setTimeout(() => { /*clearInterval(id);*/ }, 14500);
setTimeout(() => { /*clearInterval(id);*/ }, 15500);
setTimeout(() => { /*clearInterval(id);*/ }, 16500);
setTimeout(() => { /*clearInterval(id);*/ }, 17500);
setTimeout(() => { /*clearInterval(id);*/ }, 18500);
setTimeout(() => { /*clearInterval(id);*/ }, 19500);
setTimeout(() => { /*clearInterval(id);*/ }, 20500);
setTimeout(() => { /*clearInterval(id);*/ }, 21500);
setTimeout(() => { /*clearInterval(id);*/ }, 22500);
setTimeout(() => { /*clearInterval(id);*/ }, 23500);
setTimeout(() => { /*clearInterval(id);*/ }, 24500);
setTimeout(() => { /*clearInterval(id);*/ }, 25500);
setTimeout(() => { /*clearInterval(id);*/ }, 26500);
setTimeout(() => { /*clearInterval(id);*/ }, 27500);
setTimeout(() => { /*clearInterval(id);*/ }, 28500);
setTimeout(() => { /*clearInterval(id);*/ }, 29500);
setTimeout(() => { /*clearInterval(id);*/ }, 30500);
setTimeout(() => { /*clearInterval(id);*/ }, 31500);
setTimeout(() => { /*clearInterval(id);*/ }, 32500);
setTimeout(() => { /*clearInterval(id);*/ }, 33500);
setTimeout(() => { /*clearInterval(id);*/ }, 34500);
setTimeout(() => { /*clearInterval(id);*/ }, 35500);
setTimeout(() => { /*clearInterval(id);*/ }, 36500);
setTimeout(() => { /*clearInterval(id);*/ }, 37500);
setTimeout(() => { /*clearInterval(id);*/ }, 38500);
setTimeout(() => { /*clearInterval(id);*/ }, 39500);
setTimeout(() => { /*clearInterval(id);*/ }, 40500);
setTimeout(() => { /*clearInterval(id);*/ }, 41500);
setTimeout(() => { /*clearInterval(id);*/ }, 42500);
setTimeout(() => { /*clearInterval(id);*/ }, 43500);
setTimeout(() => { /*clearInterval(id);*/ }, 44500);
setTimeout(() => { /*clearInterval(id);*/ }, 45500);
setTimeout(() => { /*clearInterval(id);*/ }, 46500);
setTimeout(() => { /*clearInterval(id);*/ }, 47500);
setTimeout(() => { /*clearInterval(id);*/ }, 48500);
setTimeout(() => { /*clearInterval(id);*/ }, 49500);
setTimeout(() => { /*clearInterval(id);*/ }, 50500);
setTimeout(() => { /*clearInterval(id);*/ }, 51500);
setTimeout(() => { /*clearInterval(id);*/ }, 52500);
setTimeout(() => { /*clearInterval(id);*/ }, 53500);
setTimeout(() => { /*clearInterval(id);*/ }, 54500);
setTimeout(() => { /*clearInterval(id);*/ }, 55500);
setTimeout(() => { /*clearInterval(id);*/ }, 56500);
setTimeout(() => { /*clearInterval(id);*/ }, 57500);
setTimeout(() => { /*clearInterval(id);*/ }, 58500);
setTimeout(() => { /*clearInterval(id);*/ }, 59500);
setTimeout(() => { /*clearInterval(id);*/ }, 60500);
setTimeout(() => { /*clearInterval(id);*/ }, 61500);
setTimeout(() => { /*clearInterval(id);*/ }, 62500);
setTimeout(() => { /*clearInterval(id);*/ }, 63500);
setTimeout(() => { /*clearInterval(id);*/ }, 64500);
setTimeout(() => { /*clearInterval(id);*/ }, 65500);
setTimeout(() => { /*clearInterval(id);*/ }, 66500);
setTimeout(() => { /*clearInterval(id);*/ }, 67500);
setTimeout(() => { /*clearInterval(id);*/ }, 68500);