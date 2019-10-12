var Validator = function(a) {
    this.rules = {}, this.init(a || document)
};
Validator.utils = function(a) {
    function b(b, c) {
        var d = n(b).filter(function(a) {
            return a != c
        });
        a(b).attr("data-validators", d.join(","))
    }

    function c(b, c) {
        var d = n(b).filter(function(a) {
            return a != c
        });
        d.push(c), a(b).attr("data-validators", d.join(","))
    }

    function d(b, c, d) {
        return a(b).on(c, d)
    }

    function e(b, c, d) {
        a(d || document).trigger(b, c)
    }

    function f(a, b) {
        return a.querySelectorAll(b)
    }

    function g(b, c) {
        return a.extend({}, b, c)
    }

    function h(b, c, d) {
        return a.ajax({
            url: b,
            method: d,
            data: JSON.stringify(c),
            contentType: "application/json"
        })
    }

    function i() {
        return a.when.apply(a, [].slice.call(arguments))
    }

    function j(a) {
        var b = a.result;
        for (var c in b)
            if (b.hasOwnProperty(c) && -1 === Validator.utils.isAllowableValidationRules().indexOf(c) && !b[c]) return !1;
        return !0
    }

    function k(a) {
        for (var b = 0; b < a.result.length; b += 1)
            if (!j(a.result[b])) return !1;
        return !0
    }

    function l(a) {
        HTMLFormElement.prototype.submit.call(a)
    }

    function m(b, c) {
        var d = a(b).attr("data-validators-label") || null;
        if (d) return d;
        var e = a(b).attr("id") || "",
            g = a(b).attr("name") || "";
        return e ? d = f(c || document, 'label[for="' + e + '"]') : g && (d = f(c || document, 'label[for="' + g + '"]')), d && d.length && (g = a(d).text().trim().replace("*", "")), g
    }

    function n(a) {
        return p(a, "data-validators")
    }

    function o(a) {
        return p(a, "data-validators-depend-elements")
    }

    function p(b, c) {
        var d = a(b).attr(c) || "";
        return d.trim().length ? d.replace(new RegExp("\\s", "g"), "").split(",") : []
    }

    function q(a) {
        var b, c = {
            event: "focusout",
            param: "",
            name: a
        };
        return b = a.split("@"), b.length > 1 && (c.event = b[1].trim(), a = b[0]), b = a.split("-"), b.length > 1 && (c.param = b[1].trim(), a = b[0]), c.name = a, c
    }

    function r() {
        return ["companyRequiredForBusinessEmail"]
    }
    return {
        removeValidator: b,
        addValidator: c,
        attachListener: d,
        trigger: e,
        getElements: f,
        merge: g,
        ajax: h,
        when: i,
        isElementValid: j,
        isFormValid: k,
        formSubmit: l,
        getElementValidators: n,
        getElementDependElements: o,
        getValidatorDataFromString: q,
        isAllowableValidationRules: r,
        getElementName: m
    }
}(jQuery), Validator.prototype = {
    init: function(a) {
        function b() {
            var a = window.location.host.split(".");
            return 3 === a.length && (-1 !== a.indexOf("staging") || -1 !== a.indexOf("staging2")) || "local" === a.pop() && -1 !== a.indexOf("") && -1 === a.indexOf("my") ? "" : "#"
        }
        var c = "^(?!.*[\\.-][\\.-])(?!.*--)(\\w+[\\w\\.+-]*)@([\\w-]+\\.)+[^\\W_]{2,}$",
            d = {
                beforeAjax: c,
                ajax: {
                    url: b() + "/api/validator/is-not-disposable-email",
                    param: "email"
                }
            },
            e = {
                ajax: {
                    url: b() + "/api/validator/business-email",
                    param: "email"
                }
            },
            f = {
                ajax: {
                    url: b() + "/api/validator/phone",
                    param: "phone"
                }
            };
        this.addRules({
            required: function(b, c, d, e) {
                var f = d.name || "",
                    g = d.type,
                    h = d.value;
                if ("radio" == g || "checkbox" == g) {
                    if (!f) return d.checked;
                    return Validator.utils.getElements(a, "[name='" + f + "']:checked").length > 0
                }
                return new RegExp("^(?!is+\\srequired)(\\S)", "i").test(h.trim())
            },
            email: d,
            emailoptional: {
                pattern: "(" + c + ")|^$"
            },
            phone: f,
            business: e,
            emailnotexists: {
                ajax: {
                    url: b() + "/api/validator/email-not-exists",
                    param: "email"
                }
            },
            companyRequiredForBusinessEmail: e,
            name: {
                pattern: "^([\\d\\sa-zA-Z_\\.'!-]*)([a-zA-Z]+)([\\d\\sa-zA-Z_\\.'!-]*)$"
            },
            company: {
                pattern: "^[\\d\\sA-Za-z_\\.!&\\+,'`\\(\\)-]*$"
            },
            number: {
                pattern: "^[\\d]*$"
            },
            zip: {
                pattern: "^([\\d\\sa-zA-Z_\\.!-]*)([\\da-zA-Z]+)([\\d\\sa-zA-Z_\\.!-]*)$|^$"
            },
            minlen: function(a, b, c, d) {
                var e = Number(Validator.utils.getValidatorDataFromString(b).param);
                return e && a.length >= e
            },
            maxlen: function(a, b, c, d) {
                var e = Number(Validator.utils.getValidatorDataFromString(b).param);
                return e && a.length <= e
            },
            except: function(a, b, c, d) {
                var e = Validator.utils.getValidatorDataFromString(b).param;
                return !!e && (e = "\\" + e.split("").join("\\"), !new RegExp("[" + e + "]+").test(a))
            },
            only: function(a, b, c, d) {
                var e = Validator.utils.getValidatorDataFromString(b).param;
                return !!e && (e = "\\" + e.split("").join("\\"), new RegExp("^[" + e + "]+$").test(a))
            },
            radio: function(b, c, d, e) {
                var f = d.name || "";
                return f ? Validator.utils.getElements(a, "[name='" + f + "']:checked").length > 0 : d.checked
            },
            likeRadio: function(b, c, d, e) {
                var f = d.getAttribute("data-validators-name") || "";
                return f ? Validator.utils.getElements(a, "[data-validators-name='" + f + "']:checked").length > 0 : d.checked
            }
        });
        for (var g = this, h = Validator.utils.getElements(a, "[data-validators]"), i = 0; i < h.length; i += 1) {
            var j = h[i],
                k = j.getAttribute("data-validators");
            if (~["submit", "submitPublic"].indexOf(k)) {
                var l = $(j).parents("form");
                if (!l.length) continue;
                ! function() {
                    var b = l[0],
                        c = j;
                    Validator.utils.attachListener(j, "click", function(d) {
                        d.preventDefault(), g.onSubmit(b, c, a)
                    })
                }()
            } else {
                k = Validator.utils.getElementValidators(j);
                var m, n = ["focusout"];
                for (m = 0; m < k.length; m += 1) {
                    var o = Validator.utils.getValidatorDataFromString(k[m]).event; - 1 === n.indexOf(o) && n.push(o)
                }
                for (m = 0; m < n.length; m += 1) this.attachValidator(j, n[m], function(b) {
                    b && Validator.utils.trigger("validation.onElementValidation", b, a)
                })
            }
        }
    },
    onSubmit: function(a, b, c) {
        return this.validateForm(a).then(function() {
            var d = Array.prototype.slice.call(arguments),
                e = b.getAttribute("data-validators");
            if (!e) return !1;
            for (var f = 0; f < d.length; f += 1) {
                var g = d[f].result.business;
                "submit" == e && !1 === g && (d[f].result.publicNotAllowed = !1), Validator.utils.trigger("validation.onElementValidation", d[f], c)
            }
            Validator.utils.trigger("validation.onFormValidation", {
                form: a,
                result: d
            }, c)
        }), !1
    },
    attachValidator: function(a, b, c) {
        var d = this;
        Validator.utils.attachListener(a, b, function() {
            d.validateElement(a, b).then(c)
        })
    },
    validateElement: function(a, b) {
        function c(h) {
            var i = Validator.utils.getValidatorDataFromString(g[f]).name;
            if (!e.rules[i]) return ++f >= d ? Validator.utils.when(h) : c(h);
            var j = " is required" == a.value ? "" : a.value.trim();
            return e.rules[i].call(e, j, g[f], a, b).then(function(a) {
                return h[i] = a, "business" == i && 0 == a && (h.publicNotAllowed = !1), !a || ++f >= d ? Validator.utils.when(h) : c(h)
            })
        }
        var d, e = this,
            f = 0,
            g = Validator.utils.getElementValidators(a);
        return "submit" !== b && "focusout" !== b && (g = g.filter(function(a) {
            return Validator.utils.getValidatorDataFromString(a).event === b
        })), d = g.length, d ? c({}).then(function(b) {
            return {
                element: a,
                result: b
            }
        }) : Validator.utils.when()
    },
    validateForm: function(a) {
        for (var b = Validator.utils.getElements(a, "[data-validators]"), c = [], d = {}, e = 0; e < b.length; e += 1) {
            var f = b[e],
                g = f.getAttribute("data-validators");
            d[f.getAttribute("name")] || g && (~["submit", "submitPublic"].indexOf(g) || (d[f.getAttribute("name")] = !0, c.push(this.validateElement(f, "submit"))))
        }
        return Validator.utils.when.apply(null, c)
    },
    addRule: function(a, b) {
        var c = this,
            d = function(a) {
                var b = new RegExp(a.pattern, "i");
                return function(a, c, d, e) {
                    return Validator.utils.when(b.test(a))
                }
            },
            e = function(a) {
                var b = null;
                return function(c, d, e, f) {
                    var g = {};
                    g[a.ajax.param] = c, b && "function" == typeof b.abort && b.abort();
                    var h = $.Deferred();
                    return b = Validator.utils.ajax(a.ajax.url, g, a.ajax.method || "POST"), b.then(function(a) {
                        h.resolve(a.success), b = null
                    }).fail(function(a, c) {
                        "abort" == c ? h.reject() : h.resolve(!1), b = null
                    }), h.promise()
                }
            },
            f = function(a) {
                var b = new RegExp(a.beforeAjax, "i");
                return c.checkOldIE() || (b = new RegExp(a.beforeAjax, "ui")),
                    function(c, f, g, h) {
                        return b.test(c) ? new e({
                            ajax: a.ajax
                        })(c, f, g, h) : new d({
                            pattern: a.beforeAjax
                        })(c, f, g, h)
                    }
            };
        "function" == typeof b ? this.rules[a] = function(a, c, d, e) {
            return Validator.utils.when(b(a, c, d, e))
        } : b.pattern ? this.rules[a] = new d(b) : b.beforeAjax ? this.rules[a] = new f(b) : b.ajax && (this.rules[a] = new e(b))
    },
    addRules: function(a) {
        for (var b in a) a.hasOwnProperty(b) && this.addRule(b, a[b])
    },
    checkOldIE: function() {
        return -1 !== navigator.appVersion.indexOf("MSIE 10") || !!window.MSInputMethodContext && !!document.documentMode
    }
};