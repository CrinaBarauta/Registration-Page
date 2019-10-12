function isEmpty(a) {
    if (null == a) return !0;
    if (a.length > 0) return !1;
    if (0 === a.length) return !0;
    for (var b in a)
        if (a.hasOwnProperty.call(a, b)) return !1;
    return !0
}

function serializeObject(a) {
    for (var b = document.createElement("form"), c = 0; c < a.length; c++) {
        var d = a[c];
        if ("object" == typeof d && "submit" != d.getAttribute("type")) {
            var e = d.value;
            if ("checkbox" == d.getAttribute("type") || "radio" == d.getAttribute("type")) {
                e = 0;
                var f = 1 != $.grep(a, function(a) {
                    return a.getAttribute("name") == d.getAttribute("name")
                }).length;
                if (1 == d.checked) e = f ? d.value : 1;
                else if (f) continue
            }
            var g = document.createElement("input");
            g.setAttribute("name", d.getAttribute("name")), g.setAttribute("type", "text"), g.setAttribute("value", e), b.appendChild(g)
        }
    }
    return $(b).serializeJSON()
}

function formValidation(a) {
    for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c];
        if ("object" == typeof d && "submit" != d.getAttribute("type")) {
            -1 === (null !== d.getAttribute("class") ? d.getAttribute("class") : "noClasses").indexOf("isRequired") || d.value ? "email" == d.getAttribute("name") && d.value && (isValidEmail(d.value) || (b[d.getAttribute("name")] = "regexNotMatch")) : b[d.getAttribute("name")] = "isEmpty"
        }
    }
    return b || !0
}

function isValidEmail(a) {
    return /^(?!.*[\.-][\.-])(?!.*--)(\w+[\w\.-]*)@([\w-]+\.)+[^\W_]{2,}$/i.test(a)
}

function setGaEvents(a) {
    var b = a.data.events;
    for (var c in b) b.hasOwnProperty(c) && dataLayer.push({
        event: "VeeamEvent",
        eventCategory: b[c].eventCategory,
        eventAction: b[c].eventAction,
        eventLabel: b[c].eventLabel
    })
}

function getRootDomain() {
    return "local" == window.location.host.split(".").pop() ? "" : "https://www.veeam.com"
}

function sendData(a, b) {
    b[0].disabled = !0;
    var c = "POST",
        d = getRootDomain() + "/api/marketo/form";
    if (window.XDomainRequest) {
        var e = new XDomainRequest;
        e ? (e.open(c, d), e.onload = function() {
            var c = e.responseText ? JSON.parse(e.responseText) : {};
            for (var d in a) c.data[d] = a[d];
            $(document).trigger("callSuccess" + b[0].name, c), setGaEvents(JSON.parse(e.responseText)), b[0].disabled = !1
        }, e.onerror = function() {
            $(document).trigger("showErrors" + b[0].name, "Error"), b[0].disabled = !1
        }, e.send(JSON.stringify(a))) : console.log("Failed to create xdr")
    } else {
        var f = new XMLHttpRequest;
        f.onreadystatechange = function() {
            if (f.DONE === f.readyState) {
                var c = f.response ? JSON.parse(f.response) : {};
                if (c = prepareResponseData(a, c), 200 === f.status) $(document).trigger("callSuccess" + b[0].name, c), setGaEvents(c);
                else if (422 === f.status) {
                    var d = c.validation_messages,
                        e = {};
                    for (var g in d)
                        if (d.hasOwnProperty(g)) {
                            var h = d[g];
                            for (var i in h) h.hasOwnProperty(i) && (e[g] = i)
                        }
                    e = prepareResponseData(a, e), $(document).trigger("validationEvent", e)
                } else $(document).trigger("showErrors" + b[0].name, c);
                b[0].disabled = !1
            }
        }, f.open(c, d, !0), f.setRequestHeader("Content-Type", "application/json");
        var g = document.querySelectorAll("[name=locale]");
        g.length && (a.locale = void 0, (g = g[0].value) && f.setRequestHeader("Accept-Language", g)), f.withCredentials = !0, f.send(JSON.stringify(a))
    }
}

function prepareResponseData(a, b) {
    if (b.hasOwnProperty("data"))
        for (var c in a) b.data.hasOwnProperty(c) || (b.data[c] = a[c]);
    else b.data = a;
    return b
}

function getError(a) {
    var b = {},
        c = a.element.getAttribute("name");
    for (var d in a.result)
        if (a.result.hasOwnProperty(d)) {
            if (a.result[d]) {
                b[c] = "success";
                continue
            }
            if ("required" == d) {
                b[c] = "isEmpty";
                break
            }
            if ("email" == d || "phone" == d || "name" == d || "company" == d) {
                b[c] = "regexNotMatch";
                break
            }
            if ("number" == d) {
                b[c] = "digitsOnly";
                break
            }
            "publicNotAllowed" == d && (b[c] = "publicNotAllowed")
        }
    var e = a.element.form,
        f = e.id;
    f || (f = null);
    var g, h = {
            form: a.element.form,
            form_id: f
        },
        i = ["form_type", "cc"];
    for (var j in i) g = i[j], void 0 != e.elements[g] && (h[g] = e.elements[g].value);
    return b.data = h, b
}
var main = function(a) {
        var b = a.querySelectorAll("input, select, textarea"),
            c = a.querySelectorAll(".mSubmit"),
            d = serializeObject(b),
            e = formValidation(b),
            f = a.id;
        f || (f = null), d.form_id = f, isEmpty(e) ? sendData(d, c) : $(document).trigger("validationEvent", e)
    },
    preventSubmit = function(a) {
        return a.preventDefault ? (a.preventDefault(), main(a.srcElement || a.target)) : window.event && (window.event.returnValue = !1, main(a.srcElement || a.target)), !0
    },
    readySteady = function() {
        for (var a = document.querySelectorAll(".mForm"), b = 0; b < a.length; b++) ! function() {
            var c = a[b];
            c.querySelectorAll(".mSubmit");
            c.addEventListener ? c.addEventListener("submit", preventSubmit, !1) : c.attachEvent && c.attachEvent("onsubmit", preventSubmit)
        }()
    };
if (document.addEventListener ? document.addEventListener("DOMContentLoaded", readySteady, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
        "complete" === document.readyState && readySteady()
    }), "function" == typeof Validator) {
    var _v = new Validator;
    $(document).on("validation.onElementValidation", function(a, b) {
        Validator.utils.trigger("validationEvent", getError(b))
    }), $(document).on("validation.onFormValidation", function(a, b) {
        for (var c = {}, d = 0; d < b.result.length; d += 1) c = Validator.utils.merge(c, getError(b.result[d]));
        Validator.utils.trigger("validationEvent", c);
        for (var e in c)
            if (c.hasOwnProperty(e)) {
                if ("data" == e) continue;
                if ("success" !== c[e]) return
            }
        var f = b.form.querySelectorAll("input, select, textarea"),
            g = b.form.querySelectorAll(".mSubmit"),
            h = serializeObject(f),
            i = b.form.id;
        i || (i = null), h.form_id = i, sendData(h, g)
    })
}! function(a) {
    if ("function" == typeof define && define.amd) define(["jquery"], a);
    else if ("object" == typeof exports) {
        var b = require("jquery");
        module.exports = a(b)
    } else a(window.jQuery || window.Zepto || window.$)
}(function(a) {
    "use strict";
    a.fn.serializeJSON = function(b) {
        var c, d, e, f, g, h, i, j, k, l, m;
        return c = a.serializeJSON, d = this, e = c.setupOpts(b), f = d.serializeArray(), c.readCheckboxUncheckedValues(f, e, d), g = {}, a.each(f, function(a, b) {
            h = b.name, i = b.value, j = c.extractTypeAndNameWithNoType(h), k = j.nameWithNoType, l = j.type, l || (l = c.tryToFindTypeFromDataAttr(h, d)), c.validateType(h, l, e), "skip" !== l && (m = c.splitInputNameIntoKeysArray(k), i = c.parseValue(i, h, l, e), c.deepSet(g, m, i, e))
        }), g
    }, a.serializeJSON = {
        defaultOptions: {
            checkboxUncheckedValue: void 0,
            parseNumbers: !1,
            parseBooleans: !1,
            parseNulls: !1,
            parseAll: !1,
            parseWithFunction: null,
            customTypes: {},
            defaultTypes: {
                string: function(a) {
                    return String(a)
                },
                number: function(a) {
                    return Number(a)
                },
                boolean: function(a) {
                    return -1 === ["false", "null", "undefined", "", "0"].indexOf(a)
                },
                null: function(a) {
                    return -1 === ["false", "null", "undefined", "", "0"].indexOf(a) ? a : null
                },
                array: function(a) {
                    return JSON.parse(a)
                },
                object: function(a) {
                    return JSON.parse(a)
                },
                auto: function(b) {
                    return a.serializeJSON.parseValue(b, null, null, {
                        parseNumbers: !0,
                        parseBooleans: !0,
                        parseNulls: !0
                    })
                },
                skip: null
            },
            useIntKeysAsArrayIndex: !1
        },
        setupOpts: function(b) {
            var c, d, e, f, g, h;
            h = a.serializeJSON, null == b && (b = {}), e = h.defaultOptions || {}, d = ["checkboxUncheckedValue", "parseNumbers", "parseBooleans", "parseNulls", "parseAll", "parseWithFunction", "customTypes", "defaultTypes", "useIntKeysAsArrayIndex"];
            for (c in b)
                if (-1 === d.indexOf(c)) throw new Error("serializeJSON ERROR: invalid option '" + c + "'. Please use one of " + d.join(", "));
            return f = function(a) {
                return !1 !== b[a] && "" !== b[a] && (b[a] || e[a])
            }, g = f("parseAll"), {
                checkboxUncheckedValue: f("checkboxUncheckedValue"),
                parseNumbers: g || f("parseNumbers"),
                parseBooleans: g || f("parseBooleans"),
                parseNulls: g || f("parseNulls"),
                parseWithFunction: f("parseWithFunction"),
                typeFunctions: a.extend({}, f("defaultTypes"), f("customTypes")),
                useIntKeysAsArrayIndex: f("useIntKeysAsArrayIndex")
            }
        },
        parseValue: function(b, c, d, e) {
            var f, g;
            return f = a.serializeJSON, g = b, e.typeFunctions && d && e.typeFunctions[d] ? g = e.typeFunctions[d](b) : e.parseNumbers && f.isNumeric(b) ? g = Number(b) : !e.parseBooleans || "true" !== b && "false" !== b ? e.parseNulls && "null" == b && (g = null) : g = "true" === b, e.parseWithFunction && !d && (g = e.parseWithFunction(g, c)), g
        },
        isObject: function(a) {
            return a === Object(a)
        },
        isUndefined: function(a) {
            return void 0 === a
        },
        isValidArrayIndex: function(a) {
            return /^[0-9]+$/.test(String(a))
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        optionKeys: function(a) {
            if (Object.keys) return Object.keys(a);
            var b, c = [];
            for (b in a) c.push(b);
            return c
        },
        readCheckboxUncheckedValues: function(b, c, d) {
            var e, f, g, h, i;
            null == c && (c = {}), i = a.serializeJSON, e = "input[type=checkbox][name]:not(:checked):not([disabled])", f = d.find(e).add(d.filter(e)), f.each(function(d, e) {
                g = a(e), h = g.attr("data-unchecked-value"), h ? b.push({
                    name: e.name,
                    value: h
                }) : i.isUndefined(c.checkboxUncheckedValue) || b.push({
                    name: e.name,
                    value: c.checkboxUncheckedValue
                })
            })
        },
        extractTypeAndNameWithNoType: function(a) {
            var b;
            return (b = a.match(/(.*):([^:]+)$/)) ? {
                nameWithNoType: b[1],
                type: b[2]
            } : {
                nameWithNoType: a,
                type: null
            }
        },
        tryToFindTypeFromDataAttr: function(a, b) {
            var c, d, e;
            return c = a.replace(/(:|\.|\[|\]|\s)/g, "\\$1"), d = '[name="' + c + '"]', e = b.find(d).add(b.filter(d)), e.attr("data-value-type") || null
        },
        validateType: function(b, c, d) {
            var e, f;
            if (f = a.serializeJSON, e = f.optionKeys(d ? d.typeFunctions : f.defaultOptions.defaultTypes), c && -1 === e.indexOf(c)) throw new Error("serializeJSON ERROR: Invalid type " + c + " found in input name '" + b + "', please use one of " + e.join(", "));
            return !0
        },
        splitInputNameIntoKeysArray: function(b) {
            var c;
            return a.serializeJSON, c = b.split("["), c = a.map(c, function(a) {
                return a.replace(/\]/g, "")
            }), "" === c[0] && c.shift(), c
        },
        deepSet: function(b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == e && (e = {}), k = a.serializeJSON, k.isUndefined(b)) throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
            if (!c || 0 === c.length) throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
            f = c[0], 1 === c.length ? "" === f ? b.push(d) : b[f] = d : (g = c[1], "" === f && (i = b.length - 1, j = b[i], f = k.isObject(j) && (k.isUndefined(j[g]) || c.length > 2) ? i : i + 1), "" === g ? (k.isUndefined(b[f]) || !a.isArray(b[f])) && (b[f] = []) : e.useIntKeysAsArrayIndex && k.isValidArrayIndex(g) ? (k.isUndefined(b[f]) || !a.isArray(b[f])) && (b[f] = []) : (k.isUndefined(b[f]) || !k.isObject(b[f])) && (b[f] = {}), h = c.slice(1), k.deepSet(b[f], h, d, e))
        }
    }
});