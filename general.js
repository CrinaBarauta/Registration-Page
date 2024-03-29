/*! jQuery v2.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(n, t) {
    function kt(n) {
        var t = n.length,
            r = i.type(n);
        return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }

    function wu(n) {
        var t = dt[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function c() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = i.expando + Math.random()
    }

    function yi(n, i, r) {
        var u;
        if (r === t && 1 === n.nodeType)
            if (u = "data-" + i.replace(vi, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ai.test(r) ? JSON.parse(r) : r
                } catch (e) {}
                f.set(n, i, r)
            } else r = t;
        return r
    }

    function ht() {
        return !0
    }

    function p() {
        return !1
    }

    function ki() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function gi(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function nr(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (tf.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return et.call(t, n) >= 0 !== r
        })
    }

    function fr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function hf(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function cf(n) {
        var t = of.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function ni(n, t) {
        for (var u = n.length, i = 0; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function er(n, t) {
        var e, c, o, h, s, l, a, u;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (h = r.access(n), s = i.extend({}, h), u = h.events, r.set(t, s), u)) {
                delete s.handle;
                s.events = {};
                for (o in u)
                    for (e = 0, c = u[o].length; c > e; e++) i.event.add(t, o, u[o][e])
            }
            f.hasData(n) && (l = f.access(n), a = i.extend({}, l), f.set(t, a))
        }
    }

    function s(n, r) {
        var u = n.getElementsByTagName ? n.getElementsByTagName(r || "*") : n.querySelectorAll ? n.querySelectorAll(r || "*") : [];
        return r === t || r && i.nodeName(n, r) ? i.merge([n], u) : u
    }

    function lf(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && rr.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue)
    }

    function lr(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = cr.length; i--;)
            if (t = cr[i] + r, t in n) return t;
        return u
    }

    function d(n, t) {
        return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }

    function ct(t) {
        return n.getComputedStyle(t, null)
    }

    function ar(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++) u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && d(u) && (o[f] = r.access(u, "olddisplay", wf(u.nodeName)))) : o[f] || (s = d(u), (e && "none" !== e || !s) && r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; h > f; f++) u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
        return n
    }

    function vr(n, t, i) {
        var r = vf.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function yr(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + v[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + v[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + v[e] + "Width", !0, f))) : (o += i.css(n, "padding" + v[e], !0, f), "padding" !== r && (o += i.css(n, "border" + v[e] + "Width", !0, f)));
        return o
    }

    function pr(n, t, r) {
        var e = !0,
            u = "width" === t ? n.offsetWidth : n.offsetHeight,
            f = ct(n),
            o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
        if (0 >= u || null == u) {
            if (u = w(n, t, f), (0 > u || null == u) && (u = n.style[t]), ti.test(u)) return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + yr(n, t, r || (o ? "border" : "content"), e, f) + "px"
    }

    function wf(n) {
        var r = u,
            t = sr[n];
        return t || (t = wr(n, r), "none" !== t && t || (k = (k || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(r.documentElement), r = (k[0].contentWindow || k[0].contentDocument).document, r.write("<!doctype html><html><body>"), r.close(), t = wr(n, r), k.detach()), sr[n] = t), t
    }

    function wr(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body),
            u = i.css(r[0], "display");
        return r.remove(), u
    }

    function ii(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || kf.test(n) ? u(n, i) : ii(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) ii(n + "[" + f + "]", t[f], r, u)
    }

    function iu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function ru(n, r, u, f) {
        function o(h) {
            var c;
            return e[h] = !0, i.each(n[h] || [], function(n, i) {
                var h = i(r, u, f);
                return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h), o(h), !1)
            }), c
        }
        var e = {},
            s = n === fi;
        return o(r.dataTypes[0]) || !e["*"] && o("*")
    }

    function ei(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f), n
    }

    function ue(n, i, r) {
        for (var o, f, e, s, h = n.contents, u = n.dataTypes;
            "*" === u[0];) u.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (f in h)
                if (h[f] && h[f].test(o)) {
                    u.unshift(f);
                    break
                }
        if (u[0] in r) e = u[0];
        else {
            for (f in r) {
                if (!u[0] || n.converters[f + " " + u[0]]) {
                    e = f;
                    break
                }
                s || (s = f)
            }
            e = e || s
        }
        return e ? (e !== u[0] && u.unshift(e), r[e]) : t
    }

    function fe(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function uu() {
        return setTimeout(function() {
            b = t
        }), b = i.now()
    }

    function le(n, t) {
        i.each(t, function(t, i) {
            for (var u = (tt[t] || []).concat(tt["*"]), r = 0, f = u.length; f > r; r++)
                if (u[r].call(n, t, i)) return
        })
    }

    function fu(n, t, r) {
        var h, e, o = 0,
            l = vt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (e) return !1;
                for (var s = b || uu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || uu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; r > i; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            s = u.props;
        for (ae(s, u.opts.specialEasing); l > o; o++)
            if (h = vt[o].call(u, n, s, u.opts)) return h;
        return le(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function ae(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function ve(n, u, f) {
        var s, o, v, k, e, p, y, h, g, a = this,
            c = n.style,
            w = {},
            b = [],
            l = n.nodeType && d(n);
        f.queue || (h = i._queueHooks(n, "fx"), null == h.unqueued && (h.unqueued = 0, g = h.empty.fire, h.empty.fire = function() {
            h.unqueued || g()
        }), h.unqueued++, a.always(function() {
            a.always(function() {
                h.unqueued--;
                i.queue(n, "fx").length || h.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in u || "width" in u) && (f.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (c.display = "inline-block"));
        f.overflow && (c.overflow = "hidden", a.always(function() {
            c.overflow = f.overflow[0];
            c.overflowX = f.overflow[1];
            c.overflowY = f.overflow[2]
        }));
        e = r.get(n, "fxshow");
        for (s in u)
            if (v = u[s], se.exec(v)) {
                if (delete u[s], p = p || "toggle" === v, v === (l ? "hide" : "show")) {
                    if ("show" !== v || e === t || e[s] === t) continue;
                    l = !0
                }
                b.push(s)
            }
        if (k = b.length)
            for (e = r.get(n, "fxshow") || r.access(n, "fxshow", {}), ("hidden" in e) && (l = e.hidden), p && (e.hidden = !l), l ? i(n).show() : a.done(function() {
                    i(n).hide()
                }), a.done(function() {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in w) i.style(n, t, w[t])
                }), s = 0; k > s; s++) o = b[s], y = a.createTween(o, l ? e[o] : 0), w[o] = e[o] || i.style(n, o), o in e || (e[o] = y.start, l && (y.end = y.start, y.start = "width" === o || "height" === o ? 1 : 0))
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function yt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = v[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function eu(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
    }
    var si, it, rt = typeof t,
        ou = n.location,
        u = n.document,
        hi = u.documentElement,
        su = n.jQuery,
        hu = n.$,
        ut = {},
        ft = [],
        pt = "2.0.0",
        ci = ft.concat,
        wt = ft.push,
        a = ft.slice,
        et = ft.indexOf,
        cu = ut.toString,
        bt = ut.hasOwnProperty,
        lu = pt.trim,
        i = function(n, t) {
            return new i.fn.init(n, t, si)
        },
        ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        h = /\S+/g,
        au = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        li = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        vu = /^-ms-/,
        yu = /-([\da-z])/gi,
        pu = function(n, t) {
            return t.toUpperCase()
        },
        st = function() {
            u.removeEventListener("DOMContentLoaded", st, !1);
            n.removeEventListener("load", st, !1);
            i.ready()
        },
        dt, f, r, ai, vi, oi, lt;
    i.fn = i.prototype = {
        jquery: pt,
        constructor: i,
        init: function(n, r, f) {
            var e, o;
            if (!n) return this;
            if ("string" == typeof n) {
                if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : au.exec(n), !e || !e[1] && r) return !r || r.jquery ? (r || f).find(n) : this.constructor(r).find(n);
                if (e[1]) {
                    if (r = r instanceof i ? r[0] : r, i.merge(this, i.parseHTML(e[1], r && r.nodeType ? r.ownerDocument || r : u, !0)), li.test(e[1]) && i.isPlainObject(r))
                        for (e in r) i.isFunction(this[e]) ? this[e](r[e]) : this.attr(e, r[e]);
                    return this
                }
                return o = u.getElementById(e[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n), this
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: wt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var o, e, u, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof n && (c = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++)
            if (null != (o = arguments[f]))
                for (e in o) u = n[e], r = o[e], n !== r && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    };
    i.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return n.$ === i && (n.$ = hu), t && n.jQuery === i && (n.jQuery = su), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (it.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready")))
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return null != n && n === n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ut[cu.call(n)] || "object" : typeof n
        },
        isPlainObject: function(n) {
            if ("object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !bt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        error: function(n) {
            throw Error(n);
        },
        parseHTML: function(n, t, r) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = li.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function(n) {
            var r, u;
            if (!n || "string" != typeof n) return null;
            try {
                u = new DOMParser;
                r = u.parseFromString(n, "text/xml")
            } catch (f) {
                r = t
            }
            return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(n) {
            var t, r = eval;
            n = i.trim(n);
            n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
        },
        camelCase: function(n) {
            return n.replace(vu, "ms-").replace(yu, pu)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = kt(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n
        },
        trim: function(n) {
            return null == n ? "" : lu.call(n)
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (kt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : wt.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : et.call(t, n, i)
        },
        merge: function(n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if ("number" == typeof f)
                for (; f > r; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            var u, f = [],
                r = 0,
                e = n.length;
            for (i = !!i; e > r; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = kt(n),
                f = [];
            if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u && (f[f.length] = u);
            else
                for (r in n) u = t(n[r], r, i), null != u && (f[f.length] = u);
            return ci.apply([], f)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, e, u;
            return "string" == typeof r && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = a.call(arguments, 2), u = function() {
                return n.apply(r || this, e.concat(a.call(arguments)))
            }, u.guid = n.guid = n.guid || i.guid++, u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == u;
            if ("object" === i.type(u)) {
                e = !0;
                for (h in u) i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
                    return c.call(i(n), r)
                })), r))
                for (; l > h; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: Date.now,
        swap: function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        }
    });
    i.ready.promise = function(t) {
        return it || (it = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", st, !1), n.addEventListener("load", st, !1))), it.promise(t)
    };
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ut["[object " + t + "]"] = t.toLowerCase()
    });
    si = i(u),
        function(n, t) {
            function ii(n) {
                return fr.test(n + "")
            }

            function ri() {
                var n, t = [];
                return n = function(i, u) {
                    return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
                }
            }

            function l(n) {
                return n[o] = !0, n
            }

            function v(n) {
                var t = s.createElement("div");
                try {
                    return !!n(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function u(n, t, i, r) {
                var p, u, f, a, w, v, k, l, g, d;
                if ((t ? t.ownerDocument || t : y) !== s && ft(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (c && !r) {
                    if (p = er.exec(n))
                        if (f = p[1]) {
                            if (9 === a) {
                                if (u = t.getElementById(f), !u || !u.parentNode) return i;
                                if (u.id === f) return i.push(u), i
                            } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f) return i.push(u), i
                        } else {
                            if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                            if ((f = p[3]) && e.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(f)), i
                        }
                    if (e.qsa && (!h || !h.test(n))) {
                        if (l = k = o, g = t, d = 9 === a && n, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (v = wt(n), (k = t.getAttribute("id")) ? l = k.replace(hr, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", w = v.length; w--;) v[w] = l + bt(v[w]);
                            g = ti.test(n) && t.parentNode || t;
                            d = v.join(",")
                        }
                        if (d) try {
                            return b.apply(i, g.querySelectorAll(d)), i
                        } catch (nt) {} finally {
                            k || t.removeAttribute("id")
                        }
                    }
                }
                return wr(n.replace(yt, "$1"), t, i, r)
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function cr(n, i, r) {
                var u;
                return r ? t : (u = n.getAttributeNode(i)) && u.specified ? u.value : n[i] === !0 ? i.toLowerCase() : null
            }

            function lr(n, i, r) {
                var u;
                return r ? t : u = n.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
            }

            function ar(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function vr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function rt(n) {
                return l(function(t) {
                    return t = +t, l(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function wt(n, t) {
                var e, f, s, o, i, h, c, l = ci[n + " "];
                if (l) return t ? 0 : l.slice(0);
                for (i = n, h = [], c = r.preFilter; i;) {
                    (!e || (f = nr.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                    e = !1;
                    (f = tr.exec(i)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(yt, " ")
                    }), i = i.slice(e.length));
                    for (o in r.filter)(f = pt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), i = i.slice(e.length));
                    if (!e) break
                }
                return t ? i.length : i ? u.error(n) : ci(n, h).slice(0)
            }

            function bt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                return i
            }

            function ui(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    f = ki++;
                return t.first ? function(t, i, f) {
                    while (t = t[r])
                        if (1 === t.nodeType || u) return n(t, i, f)
                } : function(t, i, e) {
                    var h, s, c, l = p + " " + f;
                    if (e) {
                        while (t = t[r])
                            if ((1 === t.nodeType || u) && n(t, i, e)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || u)
                                if (c = t[o] || (t[o] = {}), (s = c[r]) && s[0] === l) {
                                    if ((h = s[1]) === !0 || h === ht) return h === !0
                                } else if (s = c[r] = [l], s[1] = n(t, i, e) || ht, s[1] === !0) return !0
                }
            }

            function fi(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function kt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function ei(n, t, i, r, u, f) {
                return r && !r[o] && (r = ei(r)), u && !u[o] && (u = ei(u, f)), l(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        k = f || pr(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? k : kt(k, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = kt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? it.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = kt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
                })
            }

            function oi(n) {
                for (var s, u, i, e = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = ui(function(n) {
                        return n === s
                    }, c, !0), a = ui(function(n) {
                        return it.call(s, n) > -1
                    }, c, !0), f = [function(n, t, i) {
                        return !h && (i || t !== lt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                    }]; e > t; t++)
                    if (u = r.relative[n[t].type]) f = [ui(fi(f), u)];
                    else {
                        if (u = r.filter[n[t].type].apply(null, n[t].matches), u[o]) {
                            for (i = ++t; e > i; i++)
                                if (r.relative[n[i].type]) break;
                            return ei(t > 1 && fi(f), t > 1 && bt(n.slice(0, t - 1)).replace(yt, "$1"), u, i > t && oi(n.slice(t, i)), e > i && oi(n = n.slice(i)), e > i && bt(n))
                        }
                        f.push(u)
                    }
                return fi(f)
            }

            function yr(n, t) {
                var f = 0,
                    i = t.length > 0,
                    e = n.length > 0,
                    o = function(o, h, c, l, a) {
                        var y, g, k, w = [],
                            d = 0,
                            v = "0",
                            nt = o && [],
                            tt = null != a,
                            it = lt,
                            ut = o || e && r.find.TAG("*", a && h.parentNode || h),
                            rt = p += null == it ? 1 : Math.random() || .1;
                        for (tt && (lt = h !== s && h, ht = f); null != (y = ut[v]); v++) {
                            if (e && y) {
                                for (g = 0; k = n[g++];)
                                    if (k(y, h, c)) {
                                        l.push(y);
                                        break
                                    }
                                tt && (p = rt, ht = ++f)
                            }
                            i && ((y = !k && y) && d--, o && nt.push(y))
                        }
                        if (d += v, i && v !== d) {
                            for (g = 0; k = t[g++];) k(nt, w, h, c);
                            if (o) {
                                if (d > 0)
                                    while (v--) nt[v] || w[v] || (w[v] = di.call(l));
                                w = kt(w)
                            }
                            b.apply(l, w);
                            tt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l)
                        }
                        return tt && (p = rt, lt = it), nt
                    };
                return i ? l(o) : o
            }

            function pr(n, t, i) {
                for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
                return i
            }

            function wr(n, t, i, u) {
                var o, f, e, h, l, s = wt(n);
                if (!u && 1 === s.length) {
                    if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === t.nodeType && c && r.relative[f[1].type]) {
                        if (t = (r.find.ID(e.matches[0].replace(k, d), t) || [])[0], !t) return i;
                        n = n.slice(f.shift().value.length)
                    }
                    for (o = pt.needsContext.test(n) ? 0 : f.length; o--;) {
                        if (e = f[o], r.relative[h = e.type]) break;
                        if ((l = r.find[h]) && (u = l(e.matches[0].replace(k, d), ti.test(f[0].type) && t.parentNode || t))) {
                            if (f.splice(o, 1), n = u.length && bt(f), !n) return b.apply(i, u), i;
                            break
                        }
                    }
                }
                return dt(n, s)(u, t, !c, i, ti.test(n)), i
            }

            function bi() {}
            var ut, ht, r, ct, si, dt, lt, g, ft, s, a, c, h, nt, at, ot, o = "sizzle" + -new Date,
                y = n.document,
                e = {},
                p = 0,
                ki = 0,
                hi = ri(),
                ci = ri(),
                li = ri(),
                st = !1,
                vt = function() {
                    return 0
                },
                tt = typeof t,
                ai = -2147483648,
                w = [],
                di = w.pop,
                gi = w.push,
                b = w.push,
                vi = w.slice,
                it = w.indexOf || function(n) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] === n) return t;
                    return -1
                },
                gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                f = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                yi = et.replace("w", "w#"),
                pi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + yi + ")|)|)" + f + "*\\]",
                ni = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pi.replace(3, 8) + ")*)|.*)\\)|)",
                yt = RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                nr = RegExp("^" + f + "*," + f + "*"),
                tr = RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"),
                ti = RegExp(f + "*[+~]"),
                ir = RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"),
                rr = RegExp(ni),
                ur = RegExp("^" + yi + "$"),
                pt = {
                    ID: RegExp("^#(" + et + ")"),
                    CLASS: RegExp("^\\.(" + et + ")"),
                    TAG: RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + pi),
                    PSEUDO: RegExp("^" + ni),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
                    boolean: RegExp("^(?:" + gt + ")$", "i"),
                    needsContext: RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i")
                },
                fr = /^[^{]+\{\s*\[native \w/,
                er = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                or = /^(?:input|select|textarea|button)$/i,
                sr = /^h\d$/i,
                hr = /'|\\/g,
                k = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                d = function(n, t) {
                    var i = "0x" + t - 65536;
                    return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                b.apply(w = vi.call(y.childNodes), y.childNodes);
                w[y.childNodes.length].nodeType
            } catch (br) {
                b = {
                    apply: w.length ? function(n, t) {
                        gi.apply(n, vi.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            si = u.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            ft = u.setDocument = function(n) {
                var i = n ? n.ownerDocument || n : y;
                return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, a = i.documentElement, c = !si(i), e.getElementsByTagName = v(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), e.attributes = v(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), e.getElementsByClassName = v(function(n) {
                    return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length
                }), e.sortDetached = v(function(n) {
                    return 1 & n.compareDocumentPosition(s.createElement("div"))
                }), e.getById = v(function(n) {
                    return a.appendChild(n).id = o, !i.getElementsByName || !i.getElementsByName(o).length
                }), e.getById ? (r.find.ID = function(n, t) {
                    if (typeof t.getElementById !== tt && c) {
                        var i = t.getElementById(n);
                        return i && i.parentNode ? [i] : []
                    }
                }, r.filter.ID = function(n) {
                    var t = n.replace(k, d);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (r.find.ID = function(n, i) {
                    if (typeof i.getElementById !== tt && c) {
                        var r = i.getElementById(n);
                        return r ? r.id === n || typeof r.getAttributeNode !== tt && r.getAttributeNode("id").value === n ? [r] : t : []
                    }
                }, r.filter.ID = function(n) {
                    var t = n.replace(k, d);
                    return function(n) {
                        var i = typeof n.getAttributeNode !== tt && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), r.find.TAG = e.getElementsByTagName ? function(n, i) {
                    return typeof i.getElementsByTagName !== tt ? i.getElementsByTagName(n) : t
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, r.find.CLASS = e.getElementsByClassName && function(n, i) {
                    return typeof i.getElementsByClassName !== tt && c ? i.getElementsByClassName(n) : t
                }, nt = [], h = [], (e.qsa = ii(i.querySelectorAll)) && (v(function(n) {
                    n.innerHTML = "<select><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + gt + ")");
                    n.querySelectorAll(":checked").length || h.push(":checked")
                }), v(function(n) {
                    var t = s.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("t", "");
                    n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")");
                    n.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    h.push(",.*:")
                })), (e.matchesSelector = ii(at = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && v(function(n) {
                    e.disconnectedMatch = at.call(n, "div");
                    at.call(n, "[s!='']:x");
                    nt.push("!=", ni)
                }), h = h.length && RegExp(h.join("|")), nt = nt.length && RegExp(nt.join("|")), ot = ii(a.contains) || a.compareDocumentPosition ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, vt = a.compareDocumentPosition ? function(n, t) {
                    if (n === t) return st = !0, 0;
                    var r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t);
                    return r ? 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || ot(y, n) ? -1 : t === i || ot(y, t) ? 1 : g ? it.call(g, n) - it.call(g, t) : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
                } : function(n, t) {
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (n === t) return st = !0, 0;
                    if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : g ? it.call(g, n) - it.call(g, t) : 0;
                    if (o === s) return wi(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === y ? -1 : e[u] === y ? 1 : 0
                }, s) : s
            };
            u.matches = function(n, t) {
                return u(n, null, null, t)
            };
            u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== s && ft(n), t = t.replace(ir, "='$1']"), !(!e.matchesSelector || !c || nt && nt.test(t) || h && h.test(t))) try {
                    var i = at.call(n, t);
                    if (i || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                } catch (r) {}
                return u(t, s, null, [n]).length > 0
            };
            u.contains = function(n, t) {
                return (n.ownerDocument || n) !== s && ft(n), ot(n, t)
            };
            u.attr = function(n, i) {
                (n.ownerDocument || n) !== s && ft(n);
                var f = r.attrHandle[i.toLowerCase()],
                    u = f && f(n, i, !c);
                return u === t ? e.attributes || !c ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null : u
            };
            u.error = function(n) {
                throw Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (st = !e.detectDuplicates, g = !e.sortStable && n.slice(0), n.sort(vt), st) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return n
            };
            ct = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += ct(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    for (; r = n[u]; u++) i += ct(r);
                return i
            };
            r = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[5] && n[2];
                        return pt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && rr.test(t) && (i = wt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(k, d).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== tt && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            e = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var a, k, c, l, v, w, b = s !== e ? "nextSibling" : "previousSibling",
                                y = t.parentNode,
                                g = f && t.nodeName.toLowerCase(),
                                d = !h && !f;
                            if (y) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [e ? y.firstChild : y.lastChild], e && d) {
                                    for (k = y[o] || (y[o] = {}), a = k[n] || [], v = a[0] === p && a[1], l = a[0] === p && a[2], c = v && y.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            k[n] = [p, v, l];
                                            break
                                        }
                                } else if (d && (a = (t[o] || (t[o] = {}))[n]) && a[0] === p) l = a[1];
                                else
                                    while (c = ++v && c && c[b] || (l = v = 0) || w.pop())
                                        if ((f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[o] || (c[o] = {}))[n] = [p, l]), c === t)) break; return l -= u, l === r || 0 == l % r && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, t) {
                        var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                            for (var u, f = i(n, t), e = f.length; e--;) u = it.call(n, f[e]), n[u] = !(r[u] = f[e])
                        }) : function(n) {
                            return i(n, 0, f)
                        }) : i
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var i = [],
                            r = [],
                            t = dt(n.replace(yt, "$1"));
                        return t[o] ? l(function(n, i, r, u) {
                            for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                        }) : function(n, u, f) {
                            return i[0] = n, t(i, null, f, r), !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return u(n, t).length > 0
                        }
                    }),
                    contains: l(function(n) {
                        return function(t) {
                            return (t.textContent || t.innerText || ct(t)).indexOf(n) > -1
                        }
                    }),
                    lang: l(function(n) {
                        return ur.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = c ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === a
                    },
                    focus: function(n) {
                        return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return n.disabled === !1
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !r.pseudos.empty(n)
                    },
                    header: function(n) {
                        return sr.test(n.nodeName)
                    },
                    input: function(n) {
                        return or.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                    },
                    first: rt(function() {
                        return [0]
                    }),
                    last: rt(function(n, t) {
                        return [t - 1]
                    }),
                    eq: rt(function(n, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: rt(function(n, t) {
                        for (var i = 0; t > i; i += 2) n.push(i);
                        return n
                    }),
                    odd: rt(function(n, t) {
                        for (var i = 1; t > i; i += 2) n.push(i);
                        return n
                    }),
                    lt: rt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: rt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; t > ++r;) n.push(r);
                        return n
                    })
                }
            };
            for (ut in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[ut] = ar(ut);
            for (ut in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[ut] = vr(ut);
            dt = u.compile = function(n, t) {
                var r, u = [],
                    f = [],
                    i = li[n + " "];
                if (!i) {
                    for (t || (t = wt(n)), r = t.length; r--;) i = oi(t[r]), i[o] ? u.push(i) : f.push(i);
                    i = li(n, yr(f, u))
                }
                return i
            };
            r.pseudos.nth = r.pseudos.eq;
            bi.prototype = r.filters = r.pseudos;
            r.setFilters = new bi;
            e.sortStable = o.split("").sort(vt).join("") === o;
            ft();
            [0, 0].sort(vt);
            e.detectDuplicates = st;
            v(function(n) {
                if (n.innerHTML = "<a href='#'><\/a>", "#" !== n.firstChild.getAttribute("href"))
                    for (var t = "type|href|height|width".split("|"), i = t.length; i--;) r.attrHandle[t[i]] = lr
            });
            v(function(n) {
                if (null != n.getAttribute("disabled"))
                    for (var t = gt.split("|"), i = t.length; i--;) r.attrHandle[t[i]] = cr
            });
            i.find = u;
            i.expr = u.selectors;
            i.expr[":"] = i.expr.pseudos;
            i.unique = u.uniqueSort;
            i.text = u.getText;
            i.isXMLDoc = u.isXML;
            i.contains = u.contains
        }(n);
    dt = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? dt[n] || wu(n) : i.extend({}, n);
        var f, c, s, l, e, o, r = [],
            u = !n.once && [],
            a = function(t) {
                for (f = n.memory && t, c = !0, o = l || 0, l = 0, e = r.length, s = !0; r && e > o; o++)
                    if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    }
                s = !1;
                r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
            },
            h = {
                add: function() {
                    if (r) {
                        var t = r.length;
                        (function u(t) {
                            i.each(t, function(t, f) {
                                var e = i.type(f);
                                "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                            })
                        })(arguments);
                        s ? e = r.length : f && (l = t, a(f))
                    }
                    return this
                },
                remove: function() {
                    return r && i.each(arguments, function(n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), s && (e >= u && e--, o >= u && o--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
                },
                empty: function() {
                    return r = [], e = 0, this
                },
                disable: function() {
                    return r = u = f = t, this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return u = t, f || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(n, t) {
                    return t = t || [], t = [n, t.slice ? t.slice() : t], !r || c && !u || (s ? u.push(t) : a(t)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return h
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var s = e[0],
                                    o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = a.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? a.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.support = function(t) {
        var r = u.createElement("input"),
            e = u.createDocumentFragment(),
            f = u.createElement("div"),
            o = u.createElement("select"),
            s = o.appendChild(u.createElement("option"));
        return r.type ? (r.type = "checkbox", t.checkOn = "" !== r.value, t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled, r = u.createElement("input"), r.value = "t", r.type = "radio", t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), e.appendChild(r), t.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in n, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, i(function() {
            var o, r, e = u.getElementsByTagName("body")[0];
            e && (o = u.createElement("div"), o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e.appendChild(o).appendChild(f), f.innerHTML = "", f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", i.swap(e, null != e.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === f.offsetWidth
            }), n.getComputedStyle && (t.pixelPosition = "1%" !== (n.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (n.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(u.createElement("div")), r.style.cssText = f.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((n.getComputedStyle(r, null) || {}).marginRight)), e.removeChild(o))
        }), t) : t
    }({});
    ai = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    vi = /([A-Z])/g;
    c.uid = 1;
    c.accepts = function(n) {
        return n.nodeType ? 1 === n.nodeType || 9 === n.nodeType : !0
    };
    c.prototype = {
        key: function(n) {
            if (!c.accepts(n)) return 0;
            var r = {},
                t = n[this.expando];
            if (!t) {
                t = c.uid++;
                try {
                    r[this.expando] = {
                        value: t
                    };
                    Object.defineProperties(n, r)
                } catch (u) {
                    r[this.expando] = t;
                    i.extend(n, r)
                }
            }
            return this.cache[t] || (this.cache[t] = {}), t
        },
        set: function(n, t, r) {
            var u, e = this.key(n),
                f = this.cache[e];
            if ("string" == typeof t) f[t] = r;
            else if (i.isEmptyObject(f)) this.cache[e] = t;
            else
                for (u in t) f[u] = t[u]
        },
        get: function(n, i) {
            var r = this.cache[this.key(n)];
            return i === t ? r : r[i]
        },
        access: function(n, i, r) {
            return i === t || i && "string" == typeof i && r === t ? this.get(n, i) : (this.set(n, i, r), r !== t ? r : i)
        },
        remove: function(n, r) {
            var f, u, o = this.key(n),
                e = this.cache[o];
            if (r === t) this.cache[o] = {};
            else
                for (i.isArray(r) ? u = r.concat(r.map(i.camelCase)) : (r in e) ? u = [r] : (u = i.camelCase(r), u = (u in e) ? [u] : u.match(h) || []), f = u.length; f--;) delete e[u[f]]
        },
        hasData: function(n) {
            return !i.isEmptyObject(this.cache[n[this.expando]] || {})
        },
        discard: function(n) {
            delete this.cache[this.key(n)]
        }
    };
    f = new c;
    r = new c;
    i.extend({
        acceptData: c.accepts,
        hasData: function(n) {
            return f.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return f.access(n, t, i)
        },
        removeData: function(n, t) {
            f.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, u) {
            var s, o, e = this[0],
                h = 0,
                c = null;
            if (n === t) {
                if (this.length && (c = f.get(e), 1 === e.nodeType && !r.get(e, "hasDataAttrs"))) {
                    for (s = e.attributes; s.length > h; h++) o = s[h].name, 0 === o.indexOf("data-") && (o = i.camelCase(o.substring(5)), yi(e, o, c[o]));
                    r.set(e, "hasDataAttrs", !0)
                }
                return c
            }
            return "object" == typeof n ? this.each(function() {
                f.set(this, n)
            }) : i.access(this, function(r) {
                var u, o = i.camelCase(n);
                if (e && r === t) {
                    if ((u = f.get(e, n), u !== t) || (u = f.get(e, o), u !== t) || (u = yi(e, o, t), u !== t)) return u
                } else this.each(function() {
                    var i = f.get(this, o);
                    f.set(this, o, r); - 1 !== n.indexOf("-") && i !== t && f.set(this, n, r)
                })
            }, null, u, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                f.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, u, f) {
            var e;
            return n ? (u = (u || "fx") + "queue", e = r.get(n, u), f && (!e || i.isArray(f) ? e = r.access(n, u, i.makeArray(f)) : e.push(f)), e || []) : t
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var f = i.queue(n, t),
                e = f.length,
                r = f.shift(),
                u = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            "inprogress" === r && (r = f.shift(), e--);
            u.cur = r;
            r && ("fx" === t && f.unshift("inprogress"), delete u.stop, r.call(n, o, u));
            !e && u && u.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return "string" != typeof n && (r = n, n = "fx", u--), u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, u) {
            var f, o = 1,
                s = i.Deferred(),
                e = this,
                h = this.length,
                c = function() {
                    --o || s.resolveWith(e, [e])
                };
            for ("string" != typeof n && (u = n, n = t), n = n || "fx"; h--;) f = r.get(e[h], n + "queueHooks"), f && f.empty && (o++, f.empty.add(c));
            return c(), s.promise(u)
        }
    });
    var bu, pi, gt = /[\t\r\n]/g,
        ku = /\r/g,
        du = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        },
        addClass: function(n) {
            var e, t, r, u, o, f = 0,
                s = this.length,
                c = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (c)
                for (e = (n || "").match(h) || []; s > f; f++)
                    if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : " ")) {
                        for (o = 0; u = e[o++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function(n) {
            var e, t, r, u, o, f = 0,
                s = this.length,
                c = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (c)
                for (e = (n || "").match(h) || []; s > f; f++)
                    if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : "")) {
                        for (o = 0; u = e[o++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        t.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n,
                f = "boolean" == typeof t;
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if ("string" === u)
                    for (var e, c = 0, s = i(this), o = t, l = n.match(h) || []; e = l[c++];) o = f ? o : !s.hasClass(e), s[o ? "addClass" : "removeClass"](e);
                else(u === rt || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0) return !0;
            return !1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                var f, o = i(this);
                1 === this.nodeType && (f = e ? n.call(this, u, o.val()) : n, null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return null == n ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, "string" == typeof u ? u.replace(ku, "") : null == u ? "" : u)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                        if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), u) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        },
        attr: function(n, r, u) {
            var f, e, o = n.nodeType;
            if (n && 3 !== o && 8 !== o && 2 !== o) return typeof n.getAttribute === rt ? i.prop(n, r, u) : (1 === o && i.isXMLDoc(n) || (r = r.toLowerCase(), f = i.attrHooks[r] || (i.expr.match.boolean.test(r) ? pi : bu)), u === t ? f && "get" in f && null !== (e = f.get(n, r)) ? e : (e = i.find.attr(n, r), null == e ? t : e) : null !== u ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.boolean.test(r) && (n[u] = !1), n.removeAttribute(r)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null !== (e = f.get(n, r)) ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    return n.hasAttribute("tabindex") || du.test(n.nodeName) || n.href ? n.tabIndex : -1
                }
            }
        }
    });
    pi = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.boolean.source.match(/\w+/g), function(n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = function(n, r, f) {
            var e = i.expr.attrHandle[r],
                o = f ? t : (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null;
            return i.expr.attrHandle[r] = e, o
        }
    });
    i.support.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, r) {
                return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
            }
        };
        i.support.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    var gu = /^key/,
        nf = /^(?:mouse|contextmenu)|click/,
        wi = /^(?:focusinfocus|focusoutblur)$/,
        bi = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, u, f, e, o) {
            var p, l, b, w, k, a, c, v, s, d, g, y = r.get(n);
            if (y) {
                for (f.handler && (p = f, f = p.handler, o = p.selector), f.guid || (f.guid = i.guid++), (w = y.events) || (w = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
                        return typeof i === rt || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = n), u = (u || "").match(h) || [""], k = u.length; k--;) b = bi.exec(u[k]) || [], s = g = b[1], d = (b[2] || "").split(".").sort(), s && (c = i.event.special[s] || {}, s = (o ? c.delegateType : c.bindType) || s, c = i.event.special[s] || {}, a = i.extend({
                    type: s,
                    origType: g,
                    data: e,
                    handler: f,
                    guid: f.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: d.join(".")
                }, p), (v = w[s]) || (v = w[s] = [], v.delegateCount = 0, c.setup && c.setup.call(n, e, d, l) !== !1 || n.addEventListener && n.addEventListener(s, l, !1)), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = f.guid)), o ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[s] = !0);
                n = null
            }
        },
        remove: function(n, t, u, f, e) {
            var p, k, c, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
            if (y && (v = y.events)) {
                for (t = (t || "").match(h) || [""], w = t.length; w--;)
                    if (c = bi.exec(t[w]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                        for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;) s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
            }
        },
        trigger: function(f, e, o, s) {
            var b, h, l, k, v, y, a, w = [o || u],
                c = bt.call(f, "type") ? f.type : f,
                p = bt.call(f, "namespace") ? f.namespace.split(".") : [];
            if (h = l = o = o || u, 3 !== o.nodeType && 8 !== o.nodeType && !wi.test(c + i.event.triggered) && (c.indexOf(".") >= 0 && (p = c.split("."), c = p.shift(), p.sort()), v = 0 > c.indexOf(":") && "on" + c, f = f[i.expando] ? f : new i.Event(c, "object" == typeof f && f), f.isTrigger = s ? 2 : 3, f.namespace = p.join("."), f.namespace_re = f.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f.result = t, f.target || (f.target = o), e = null == e ? [f] : i.makeArray(e, [f]), a = i.event.special[c] || {}, s || !a.trigger || a.trigger.apply(o, e) !== !1)) {
                if (!s && !a.noBubble && !i.isWindow(o)) {
                    for (k = a.delegateType || c, wi.test(k + c) || (h = h.parentNode); h; h = h.parentNode) w.push(h), l = h;
                    l === (o.ownerDocument || u) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (b = 0;
                    (h = w[b++]) && !f.isPropagationStopped();) f.type = b > 1 ? k : a.bindType || c, y = (r.get(h, "events") || {})[f.type] && r.get(h, "handle"), y && y.apply(h, e), y = v && h[v], y && i.acceptData(h) && y.apply && y.apply(h, e) === !1 && f.preventDefault();
                return f.type = c, s || f.isDefaultPrevented() || a._default && a._default.apply(w.pop(), e) !== !1 || !i.acceptData(o) || v && i.isFunction(o[c]) && !i.isWindow(o) && (l = o[v], l && (o[v] = null), i.event.triggered = c, o[c](), i.event.triggered = t, l && (o[v] = l)), f.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var s, h, o, f, u, c = [],
                l = a.call(arguments),
                v = (r.get(this, "events") || {})[n.type] || [],
                e = i.event.special[n.type] || {};
            if (l[0] = n, n.delegateTarget = this, !e.preDispatch || e.preDispatch.call(this, n) !== !1) {
                for (c = i.event.handlers.call(this, n, v), s = 0;
                    (f = c[s++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = f.elem, h = 0;
                        (u = f.handlers[h++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(u.namespace)) && (n.handleObj = u, n.data = u.data, o = ((i.event.special[u.origType] || {}).handle || u.handler).apply(f.elem, l), o !== t && (n.result = o) === !1 && (n.preventDefault(), n.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, r) {
            var o, f, e, s, c = [],
                h = r.delegateCount,
                u = n.target;
            if (h && u.nodeType && (!n.button || "click" !== n.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== n.type) {
                        for (f = [], o = 0; h > o; o++) s = r[o], e = s.selector + " ", f[e] === t && (f[e] = s.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(s);
                        f.length && c.push({
                            elem: u,
                            handlers: f
                        })
                    }
            return r.length > h && c.push({
                elem: this,
                handlers: r.slice(h)
            }), c
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var o, r, f, e = i.button;
                return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || u, r = o.documentElement, f = o.body, n.pageX = i.clientX + (r && r.scrollLeft || f && f.scrollLeft || 0) - (r && r.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (r && r.scrollTop || f && f.scrollTop || 0) - (r && r.clientTop || f && f.clientTop || 0)), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n
            }
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var u, f, e, r = n.type,
                o = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = nf.test(r) ? this.mouseHooks : gu.test(r) ? this.keyHooks : {}), e = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(o), u = e.length; u--;) f = e[u], n[f] = o[f];
            return 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, o) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ki() && this.focus ? (this.focus(), !1) : t
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ki() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && i.nodeName(this, "input") ? (this.click(), !1) : t
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    };
    i.Event = function(n, r) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.getPreventDefault && n.getPreventDefault() ? ht : p) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r)
    };
    i.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ht;
            n && n.preventDefault && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ht;
            n && n.stopPropagation && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ht;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = 0,
            f = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function() {
                0 == r++ && u.addEventListener(n, f, !0)
            },
            teardown: function() {
                0 == --r && u.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if ("object" == typeof n) {
                "string" != typeof r && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = p;
            else if (!f) return this;
            return 1 === e && (o = f, f = function(n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if ("object" == typeof n) {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || "function" == typeof r) && (u = r, r = t), u === !1 && (u = p), this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, r) {
            var u = this[0];
            return u ? i.event.trigger(n, r, u, !0) : t
        }
    });
    var tf = /^.[^:#\[\.,]*$/,
        di = i.expr.match.needsContext,
        rf = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function(n) {
            var f, r, t, u = this.length;
            if ("string" != typeof n) return f = this, this.pushStack(i(n).filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = [], t = 0; u > t; t++) i.find(n, this[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, r
        },
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; r > n; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        not: function(n) {
            return this.pushStack(nr(this, n || [], !0))
        },
        filter: function(n) {
            return this.pushStack(nr(this, n || [], !1))
        },
        is: function(n) {
            return !!n && ("string" == typeof n ? di.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (11 > r.nodeType && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        r = u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return gi(n, "nextSibling")
        },
        prev: function(n) {
            return gi(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (rf[n] || i.unique(f), "p" === n[0] && f.reverse()), this.pushStack(f)
        }
    });
    i.extend({
        filter: function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        },
        dir: function(n, r, u) {
            for (var f = [], e = u !== t;
                (n = n[r]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (e && i(n).is(u)) break;
                    f.push(n)
                }
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    var tr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ir = /<([\w:]+)/,
        uf = /<|&#?\w+;/,
        ff = /<(?:script|style|link)/i,
        rr = /^(?:checkbox|radio)$/i,
        ef = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ur = /^$|\/(?:java|ecma)script/i,
        of = /^true\/(.*)/,
        sf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        o = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    o.optgroup = o.option;
    o.tbody = o.tfoot = o.colgroup = o.caption = o.col = o.thead;
    o.th = o.td;
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = fr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = fr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++) t || 1 !== r.nodeType || i.cleanData(s(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && ni(s(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {},
                    u = 0,
                    f = this.length;
                if (n === t && 1 === r.nodeType) return r.innerHTML;
                if ("string" == typeof n && !ff.test(n) && !o[(ir.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(tr, "<$1><\/$2>");
                    try {
                        for (; f > u; u++) r = this[u] || {}, 1 === r.nodeType && (i.cleanData(s(r, !1)), r.innerHTML = n);
                        r = 0
                    } catch (e) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var t = i.map(this, function(n) {
                    return [n.nextSibling, n.parentNode]
                }),
                n = 0;
            return this.domManip(arguments, function(r) {
                var f = t[n++],
                    u = t[n++];
                u && (i(this).remove(), u.insertBefore(r, f))
            }, !0), n ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t, u) {
            n = ci.apply([], n);
            var h, v, o, c, f, y, e = 0,
                l = this.length,
                w = this,
                b = l - 1,
                a = n[0],
                p = i.isFunction(a);
            if (p || !(1 >= l || "string" != typeof a || i.support.checkClone) && ef.test(a)) return this.each(function(i) {
                var r = w.eq(i);
                p && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t, u)
            });
            if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, !u && this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) {
                for (o = i.map(s(h, "script"), hf), c = o.length; l > e; e++) f = h, e !== b && (f = i.clone(f, !0, !0), c && i.merge(o, s(f, "script"))), t.call(this[e], f, e);
                if (c)
                    for (y = o[o.length - 1].ownerDocument, i.map(o, cf), e = 0; c > e; e++) f = o[e], ur.test(f.type || "") && !r.access(f, "globalEval") && i.contains(y, f) && (f.src ? i._evalUrl(f.src) : i.globalEval(f.textContent.replace(sf, "")))
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), wt.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var u, h, e, f, o = n.cloneNode(!0),
                c = i.contains(n.ownerDocument, n);
            if (!(i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(o), e = s(n), u = 0, h = e.length; h > u; u++) lf(e[u], f[u]);
            if (t)
                if (r)
                    for (e = e || s(n), f = f || s(o), u = 0, h = e.length; h > u; u++) er(e[u], f[u]);
                else er(n, o);
            return f = s(o, "script"), f.length > 0 && ni(f, !c && s(n, "script")), o
        },
        buildFragment: function(n, t, r, u) {
            for (var f, e, y, l, p, a, h = 0, w = n.length, c = t.createDocumentFragment(), v = []; w > h; h++)
                if (f = n[h], f || 0 === f)
                    if ("object" === i.type(f)) i.merge(v, f.nodeType ? [f] : f);
                    else if (uf.test(f)) {
                for (e = e || c.appendChild(t.createElement("div")), y = (ir.exec(f) || ["", ""])[1].toLowerCase(), l = o[y] || o._default, e.innerHTML = l[1] + f.replace(tr, "<$1><\/$2>") + l[2], a = l[0]; a--;) e = e.firstChild;
                i.merge(v, e.childNodes);
                e = c.firstChild;
                e.textContent = ""
            } else v.push(t.createTextNode(f));
            for (c.textContent = "", h = 0; f = v[h++];)
                if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = s(c.appendChild(f), "script"), p && ni(e), r))
                    for (a = 0; f = e[a++];) ur.test(f.type || "") && r.push(f);
            return c
        },
        cleanData: function(n) {
            for (var e, t, u, s = n.length, o = 0, h = i.event.special; s > o; o++) {
                if (t = n[o], i.acceptData(t) && (e = r.access(t)))
                    for (u in e.events) h[u] ? i.event.remove(t, u) : i.removeEvent(t, u, e.handle);
                f.discard(t);
                r.discard(t)
            }
        },
        _evalUrl: function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "text",
                async: !1,
                global: !1,
                success: i.globalEval
            })
        }
    });
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var w, k, af = /^(none|table(?!-c[ea]).+)/,
        or = /^margin/,
        vf = RegExp("^(" + ot + ")(.*)$", "i"),
        ti = RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
        yf = RegExp("^([+-])=(" + ot + ")", "i"),
        sr = {
            BODY: "block"
        },
        pf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hr = {
            letterSpacing: 0,
            fontWeight: 400
        },
        v = ["Top", "Right", "Bottom", "Left"],
        cr = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, o, s = {},
                    f = 0;
                if (i.isArray(r)) {
                    for (e = ct(n), o = r.length; o > f; f++) s[r[f]] = i.css(n, r[f], !1, e);
                    return s
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return ar(this, !0)
        },
        hide: function() {
            return ar(this)
        },
        toggle: function(n) {
            var t = "boolean" == typeof n;
            return this.each(function() {
                (t ? n : d(this)) ? i(this).show(): i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = w(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, s, e, h = i.camelCase(r),
                    c = n.style;
                return r = i.cssProps[h] || (i.cssProps[h] = lr(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t ? e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r] : (s = typeof u, "string" === s && (o = yf.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t || (c[r] = u)), t)
            }
        },
        css: function(n, r, u, f) {
            var e, h, o, s = i.camelCase(r);
            return r = i.cssProps[s] || (i.cssProps[s] = lr(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = w(n, r, f)), "normal" === e && r in hr && (e = hr[r]), "" === u || u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
        }
    });
    w = function(n, r, u) {
        var s, h, c, o = u || ct(n),
            e = o ? o.getPropertyValue(r) || o[r] : t,
            f = n.style;
        return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ti.test(e) && or.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e
    };
    i.each(["height", "width"], function(n, r) {
        i.cssHooks[r] = {
            get: function(n, u, f) {
                return u ? 0 === n.offsetWidth && af.test(i.css(n, "display")) ? i.swap(n, pf, function() {
                    return pr(n, r, f)
                }) : pr(n, r, f) : t
            },
            set: function(n, t, u) {
                var f = u && ct(n);
                return vr(n, t, u ? yr(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, r) {
                return r ? i.swap(n, {
                    display: "inline-block"
                }, w, [n, "marginRight"]) : t
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u) {
                    return u ? (u = w(n, r), ti.test(u) ? i(n).position()[r] + "px" : u) : t
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return 0 >= n.offsetWidth && 0 >= n.offsetHeight
    }, i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + v[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        or.test(n) || (i.cssHooks[n + t].set = vr)
    });
    var bf = /%20/g,
        kf = /\[\]$/,
        br = /\r?\n/g,
        df = /^(?:submit|button|image|reset|file)$/i,
        gf = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && gf.test(this.nodeName) && !df.test(n) && (this.checked || !rr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(br, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(br, "\r\n")
                }
            }).get()
        }
    });
    i.param = function(n, r) {
        var u, f = [],
            e = function(n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value)
        });
        else
            for (u in n) ii(u, n[u], r, e);
        return f.join("&").replace(bf, "+")
    };
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var y, l, ri = i.now(),
        ui = /\?/,
        ne = /#.*$/,
        kr = /([?&])_=[^&]*/,
        te = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ie = /^(?:GET|HEAD)$/,
        re = /^\/\//,
        dr = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        gr = i.fn.load,
        nu = {},
        fi = {},
        tu = "*/".concat("*");
    try {
        l = ou.href
    } catch (ye) {
        l = u.createElement("a");
        l.href = "";
        l = l.href
    }
    y = dr.exec(l.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if ("string" != typeof n && gr) return gr.apply(this, arguments);
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return o >= 0 && (f = n.slice(o), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (s = "POST"), e.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: r
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).complete(u && function(n, t) {
            e.each(u, h || [n.responseText, t, n])
        }), this
    };
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: l,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(y[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ei(ei(n, i.ajaxSettings), t) : ei(i.ajaxSettings, n)
        },
        ajaxPrefilter: iu(nu),
        ajaxTransport: iu(fi),
        ajax: function(n, r) {
            function k(n, r, h, c) {
                var a, rt, k, y, w, l = r;
                2 !== o && (o = 2, g && clearTimeout(g), v = t, d = c || "", f.readyState = n > 0 ? 4 : 0, a = n >= 200 && 300 > n || 304 === n, h && (y = ue(u, f, h)), y = fe(u, y, f, a), a ? (u.ifModified && (w = f.getResponseHeader("Last-Modified"), w && (i.lastModified[e] = w), w = f.getResponseHeader("etag"), w && (i.etag[e] = w)), 204 === n ? l = "nocontent" : 304 === n ? l = "notmodified" : (l = y.state, rt = y.data, k = y.error, a = !k)) : (k = l, (n || !l) && (l = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || l) + "", a ? tt.resolveWith(s, [rt, l, f]) : tt.rejectWith(s, [f, l, k]), f.statusCode(b), b = t, p && nt.trigger(a ? "ajaxSuccess" : "ajaxError", [f, u, a ? rt : k]), it.fireWith(s, [f, l]), p && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (r = n, n = t);
            r = r || {};
            var v, e, d, w, g, c, p, a, u = i.ajaxSetup({}, r),
                s = u.context || u,
                nt = u.context && (s.nodeType || s.jquery) ? i(s) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                b = u.statusCode || {},
                rt = {},
                ut = {},
                o = 0,
                ft = "canceled",
                f = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (2 === o) {
                            if (!w)
                                for (w = {}; t = te.exec(d);) w[t[1].toLowerCase()] = t[2];
                            t = w[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === o ? d : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return o || (n = ut[i] = ut[i] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return o || (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (2 > o)
                                for (t in n) b[t] = [b[t], n[t]];
                            else f.always(n[f.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return v && v.abort(t), k(0, t), this
                    }
                };
            if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || l) + "").replace(ne, "").replace(re, y[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(h) || [""], null == u.crossDomain && (c = dr.exec(u.url.toLowerCase()), u.crossDomain = !(!c || c[1] === y[1] && c[2] === y[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (y[3] || ("http:" === y[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ru(nu, u, r, f), 2 === o) return f;
            p = u.global;
            p && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !ie.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (ui.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = kr.test(e) ? e.replace(kr, "$1_=" + ri++) : e + (ui.test(e) ? "&" : "?") + "_=" + ri++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + tu + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || 2 === o)) return f.abort();
            ft = "abort";
            for (a in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) f[a](u[a]);
            if (v = ru(fi, u, r, f)) {
                f.readyState = 1;
                p && nt.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (g = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1;
                    v.send(rt, k)
                } catch (et) {
                    if (!(2 > o)) throw et;
                    k(-1, et)
                }
            } else k(-1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        }
    });
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            })
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        async: !0,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    });
    oi = [];
    lt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = oi.pop() || i.expando + "_" + ri++;
            return this[n] = !0, n
        }
    });
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
        return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (ui.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
            return o || i.error(e + " was not called"), o[0]
        }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
            o = arguments
        }, f.always(function() {
            n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback, oi.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t
        }), "script") : t
    });
    i.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (n) {}
    };
    var g = i.ajaxSettings.xhr(),
        ee = {
            0: 200,
            1223: 204
        },
        oe = 0,
        nt = {};
    n.ActiveXObject && i(n).on("unload", function() {
        for (var n in nt) nt[n]();
        nt = t
    });
    i.support.cors = !!g && "withCredentials" in g;
    i.support.ajax = g = !!g;
    i.ajaxTransport(function(n) {
        var r;
        return i.support.cors || g && !n.crossDomain ? {
            send: function(i, u) {
                var e, o, f = n.xhr();
                if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                    for (e in n.xhrFields) f[e] = n.xhrFields[e];
                n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (e in i) f.setRequestHeader(e, i[e]);
                r = function(n) {
                    return function() {
                        r && (delete nt[o], r = f.onload = f.onerror = null, "abort" === n ? f.abort() : "error" === n ? u(f.status || 404, f.statusText) : u(ee[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : t, f.getAllResponseHeaders()))
                    }
                };
                f.onload = r();
                f.onerror = r("error");
                r = nt[o = oe++] = r("abort");
                f.send(n.hasContent && n.data || null)
            },
            abort: function() {
                r && r()
            }
        } : t
    });
    var b, at, se = /^(?:toggle|show|hide)$/,
        he = RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
        ce = /queueHooks$/,
        vt = [ve],
        tt = {
            "*": [function(n, t) {
                var o, s, r = this.createTween(n, t),
                    e = he.exec(t),
                    h = r.cur(),
                    u = +h || 0,
                    f = 1,
                    c = 20;
                if (e) {
                    if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), "px" !== s && u) {
                        u = i.css(r.elem, n, !0) || o || 1;
                        do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && 1 !== f && --c)
                    }
                    r.unit = s;
                    r.start = u;
                    r.end = e[1] ? u + (e[1] + 1) * o : o
                }
                return r
            }]
        };
    i.Animation = i.extend(fu, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++) r = n[u], tt[r] = tt[r] || [], tt[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? vt.unshift(n) : vt.push(n)
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = e.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : e.propHooks._default.set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(yt(t, !0), n, i, u)
        }
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(d).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = fu(this, i.extend({}, n), o);
                    e.finish = function() {
                        t.stop(!0)
                    };
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, u, f) {
            var e = function(n) {
                var t = n.stop;
                delete n.stop;
                t(f)
            };
            return "string" != typeof n && (f = u, u = n, n = t), u && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    u = r.get(this);
                if (t) u[t] && u[t].stop && e(u[t]);
                else
                    for (t in u) u[t] && u[t].stop && ce.test(t) && e(u[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(f), s = !1, o.splice(t, 1));
                (s || !f) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = e.prototype.init;
    i.fx.tick = function() {
        var u, n = i.timers,
            r = 0;
        for (b = i.now(); n.length > r; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        b = t
    };
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        at || (at = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(at);
        at = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    });
    i.fn.offset = function(n) {
        if (arguments.length) return n === t ? this : this.each(function(t) {
            i.offset.setOffset(this, n, t)
        });
        var u, e, r = this[0],
            f = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
        if (o) return u = o.documentElement, i.contains(u, r) ? (typeof r.getBoundingClientRect !== rt && (f = r.getBoundingClientRect()), e = eu(o), {
            top: f.top + e.pageYOffset - u.clientTop,
            left: f.left + e.pageXOffset - u.clientLeft
        }) : f
    };
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var n, r, u = this[0],
                    t = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || hi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || hi
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(r, u) {
        var f = "pageYOffset" === u;
        i.fn[r] = function(e) {
            return i.access(this, function(i, r, e) {
                var o = eu(i);
                return e === t ? o ? o[u] : i[r] : (o ? o.scrollTo(f ? n.pageXOffset : e, f ? e : n.pageYOffset) : i[r] = e, t)
            }, r, e, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || "boolean" != typeof f),
                    s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    i.fn.size = function() {
        return this.length
    };
    i.fn.andSelf = i.fn.addBack;
    "object" == typeof module && "object" == typeof module.exports ? module.exports = i : "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    });
    "object" == typeof n && "object" == typeof n.document && (n.jQuery = n.$ = i)
})(window);