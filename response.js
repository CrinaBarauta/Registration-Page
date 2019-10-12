var _formLang,
_defaultBtnText,
_errorMessages= {
    isEmpty: {
        en: "This field is required"
    }
    ,
    required: {
        en: "This field is required"
    }
    ,
    regexNotMatch: {
        en:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported"
    }
    ,
    name: {
        en:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported"
    }
    ,
    fullname: {
        en: "Please enter your full name"
    }
    ,
    company: {
        en: "Please use Latin characters, digits and &+,-._!'`() special symbols only"
    }
    ,
    email: {
        en: "Must be valid email address. example@domain.com"
    }
    ,
    errorPublicFound: {
        en: "Please enter your business email"
    }
    ,
    emailLicense: {
        en: "This field is required to send license to your email"
    }
    ,
    publicNotAllowed: {
        en: "Please enter your business email"
    }
    ,
    business: {
        en: "Please enter your business email"
    }
    ,
    phone: {
        en: "Must be valid phone number. 123-456-78-90"
    }
    ,
    number: {
        en: "Please enter a numerical value"
    }
    ,
    digitsOnly: {
        en: "Please enter a numerical value"
    }
    ,
    wait: {
        en: "Please wait"
    }
    ,
    notInArray: {
        en: "Form is not valid"
    }
}

,
_GDPRText= {
    en: {
        privacy_policy: 'By registering you agree to the&nbsp;<a href="#" target="_blank">Privacy Policy</a>.', optout: "I want to receive product news and&nbsp;updates."
    }
    
}

,
_selectCountry= {
    en: "Select country/region"
}

;
function showError(e, a, t) {
    var i=_errorMessages[a][t]||_errorMessages[a].en;
    0<$(e).next(".mForm__error").length?$(e).addClass("invalid-field").next(".mForm__error").text(i): $(e).hasClass("mForm__row-checkbox")?0==$(e).parents(".mForm__row").find(".mForm__error").length&&$(e).addClass("invalid-field").parents(".mForm__row").find("label.mForm__row-checkbox").after("<div class='mForm__error'>"+i+"</div>"): $(e).addClass("invalid-field").after("<div class='mForm__error'>"+i+"</div>")
}

function followUp(e, a, t, i) {
    if(0==a.indexOf("#"))return $("#download-link").attr("href", i),
    $(e).slideUp(),
    $("#ty").slideDown(),
    1==$(".mForm").length&&$("html, body").animate( {
        scrollTop: $(e).offset().top-50
    }
    , 1e3),
    !1;
    var r=new Date((new Date).getTime()+36e5);
    document.cookie=t+"="+i+"; path=/; expires="+r,
    location.href=a
}

$(document).on("callSuccessSubmitForm", function(e, a) {
    var t=a.data.cc?$("[value='"+a.data.cc+"']").parents(".mForm"): $(".mForm")[0], i=$(t).find("input[name=form_type]").val(), r="?";
    switch(-1<(n=$(t).find("input[name=ty]").val()).indexOf("?")&&(r="&"), $(t).find(".mForm__error").remove(), $(t).find(".invalid-field").removeClass("invalid-field"), i) {
        case"resource_access": var o=a.data.resourceUrl;
        followUp(t, n, "resource_url", o);
        break;
        case"lic_gen": case"no_lic_public": case"no_lic_gen": case"lic_gen_public": case"no_lic_gen_public": var n, s="#"+a.data.productUrl;
        followUp(t, n=n+r+"products="+a.data.products+"&key_type="+a.data.key_type, "prd_dnl", s);
        break;
        default: followUp(t, n, "resource_url", o)
    }
    var l= {
        email: $.trim($('[name="email"]').val()), action: "e"
    }
    ;
    $.ajax( {
        url:"#", type:"post", data:JSON.stringify(l), success:function(e) {
            var a=JSON.parse(e);
            document.cookie="pr-pr="+a.result+"; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/"
        }
    }
    )
}

),
$(document).on("showErrorsSubmitForm", function(e, a) {
    console.log(e), console.log(a)
}

),
"function"==typeof Validator?$(document).on("validationEvent", function(e, a) {
    return $.each(a, function(e, a) {
        if("regexNotMatch"===a) {
            $(".mSubmit").text(_defaultBtnText);
            var t="[name='"+e+"']";
            switch(e) {
                case"email": showError(t, "email", _formLang);
                break;
                case"phone": showError(t, "phone", _formLang);
                break;
                default: showError(t, "regexNotMatch", _formLang)
            }
        }
    }
    ), !1
}

):$(document).on("validationEvent", function(e, a) {
    $.each(a, function(e, a) {
        showError("[name='"+e+"']", a, _formLang)
    }
    ), $(".invalid-field").on("focus", function() {
        $(this).next(".mForm__error").remove(), $(this).removeClass("invalid-field")
    }
    )
}

),
$(document).on("validation.onElementValidation", function(e, t) {
    $.each(t.result, function(e, a) {
        "submitPublic"===$('[name="SubmitForm"]').data("validators")&&!1===t.result.business?($('[name="company"]').show(), Validator.utils.addValidator($('[name="company"]'), "required")): "submitPublic"===$('[name="SubmitForm"]').data("validators")&&!0===t.result.business?($('[name="company"]').next(".mForm__error").remove(), $('[name="company"]').hide(), Validator.utils.removeValidator($('[name="company"]'), "required")): !1===a&&("email"!=t.element.name||t.result.required||"lic_gen"!=t.element.form.elements.form_type.defaultValue&&"lic_gen_public"!=t.element.form.elements.form_type.defaultValue?showError(t.element, e, _formLang): showError(t.element, "emailLicense", _formLang))
    }
    ), $(".invalid-field").on("focus", function() {
        $(this).next(".mForm__error").remove(), $(this).removeClass("invalid-field")
    }
    ), $("input.mForm__row-checkbox").click(function() {
        $(this).parents(".mForm__row").find(".mForm__error").remove(), $(this).removeClass("invalid-field")
    }
    )
}

),
$(document).on("validation.onFormValidation", function(e, a) {
    Validator.utils.isFormValid(a)&&$(a.form).find(".mSubmit").text(_errorMessages.wait[_formLang])
}

),
$(document).ready(function() {
    if(_defaultBtnText=$(".mSubmit").first().text(), _formLang=$(".mForm").find("input[name=lang]").val()||"en", $("[name=full_name]").on("focusout", function() {
        var e=$("[name=full_name]").val().trim();
        ""!=e&&(1<e.split(" ").length?($("[name=first_name]").val(e.split(" ").slice(0, -1).join(" ")), $("[name=last_name]").val(e.split(" ").slice(-1).join(" "))): 1==e.split(" ").length&&showError($("[name=full_name]"), "fullname", _formLang))
    }
    ), $('input[type="number"]').on("focusout", function() {
        parseInt($(this).val(), 10)<parseInt($(this).attr("min"), 10)?$(this).val($(this).attr("min")): parseInt($(this).val(), 10)>parseInt($(this).attr("max"), 10)&&$(this).val($(this).attr("max"))
    }
    ), 0<$('select[name="country"]').length) {
        var a="#/";
        $.ajax( {
            url:a+"get-countries-list", success:function(e) {
                var t="", i="";
                $.each(e, function(e, a) {
                    i=""!=a.country_local_name?" ("+a.country_local_name+")": "", t+='<option value="'+a.code3+'">'+a.country_name+i+"</option>"
                }
                ), $('select[name="country"]').html(t).prepend($('<option value="" disabled selected>'+_selectCountry[_formLang]+"</option>")), $.ajax( {
                    url:a+"get-country-code3", xhrFields: {
                        withCredentials: !0
                    }
                    , success:function(e) {
                        "NULL"!=e.code&&$('select[name="country"]').each(function() {
                            $(this).eq(0).val(e.code).change()
                        }
                        )
                    }
                }
                )
            }
            , error:function() {
                return $('select[name="country"]').parents(".mForm__row").remove(), $('select[name="country"]').parents(".mForm__oneLine-item").remove(), !1
            }
        }
        )
    }
    var t, i;
    "de"==_formLang&&0<$('input[name="private_policy_check"]').length?$('input[name="private_policy_check"]').next("label").html(_GDPRText.de.privacy_policy):(t=_formLang, $(".mForm").each(function(e) {
        $(this).find("label.private_policy_label").length<=0&&$(this).find('input[name="form_type"]').after('<div class="mForm__policy"><div class="mForm__row"><label class="private_policy_label">'+_GDPRText[t].privacy_policy+"</label></div></div>"), $(this).find('input[name="form_type"]').before('<input type="hidden" name="private_policy_check" value="1">')
    }
    )), i=_formLang, $(".mForm").each(function(e) {
        $(this).find('input[name="subscribe"]').length<=0&&$(this).find('input[name="form_type"]').before('<div class="mForm__policy"><div class="mForm__row"><input class="mForm__row-checkbox" type="checkbox" name="subscribe" id="subscribe'+e+'" value=""/><label class="mForm__row-checkbox" for="subscribe'+e+'">'+_GDPRText[i].optout+"</label></div></div>")
    }
    ), $('input[name="private_policy_check"]').click(function() {
        this.checked?$('input[name="private_policy_check"]').prop("checked", !0): $('input[name="private_policy_check"]').prop("checked", !1)
    }
    ), $('input[name="subscribe"]').click(function() {
        this.checked?$('input[name="subscribe"]').prop("checked", !0): $('input[name="subscribe"]').prop("checked", !1)
    }
    ), window.innerWidth<=1024&&$(".mForm").each(function(e) {
        $(this).find('input[name="details[From-Mobile-Device]"]').length<=0&&$(this).find('input[name="form_type"]').before('<input type="hidden" name="details[From-Mobile-Device]" value="Yes">')
    }
    )
}

);