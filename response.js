var _formLang,
_defaultBtnText,
_errorMessages= {
    isEmpty: {
        en: "This field is required", de: "Dieses Feld muss ausgefüllt werden", fr: "Ce champs est requis", tr: "Bu alanı doldurmak mecburidir", it: "Questo campo è richiesto", es: "Campo obligatorio", nl: "Dit veld is verplicht", hu: "Kötelező mező", sw: "Detta fält är obligatoriskt", fi: "Tämä kenttä on pakollinen", da: "Dette felt er påkrævet", no: "Dette feltet er påkrevd", cz: "Toto pole je povinné", ru: "Поле обязательно для заполнения", pl: "To pole jest wymagane", "latam-es": "Este campo es obligatorio", "latam-br": "Este campo é obrigatório", cn: "该字段为必填项", jp: "このフィールドは必須です", tc: "這是必填欄位", th: "นี่เป็นฟิลด์บังคับ", ko: "필수 필드입니다."
    }
    ,
    required: {
        en: "This field is required", de: "Dieses Feld muss ausgefüllt werden", fr: "Ce champs est requis", tr: "Bu alanı doldurmak mecburidir", it: "Questo campo è richiesto", es: "Campo obligatorio", nl: "Dit veld is verplicht", hu: "Kötelező mező", sw: "Detta fält är obligatoriskt", fi: "Tämä kenttä on pakollinen", da: "Dette felt er påkrævet", no: "Dette feltet er påkrevd", cz: "Toto pole je povinné", ru: "Поле обязательно для заполнения", pl: "To pole jest wymagane", "latam-es": "Este campo es obligatorio", "latam-br": "Este campo é obrigatório", cn: "该字段为必填项", jp: "このフィールドは必須です", tc: "這是必填欄位", th: "นี่เป็นฟิลด์บังคับ", ko: "필수 필드입니다."
    }
    ,
    regexNotMatch: {
        en:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported",
        de:"Bitte verwenden Sie nur Zeichen des lateinischen Alphabets. Sonderzeichen (/“”(){}[]#$&*+,) werden nicht unterstützt.",
        fr:"Veuillez utiliser des caractères latins et des chiffres uniquement. Les symboles spéciaux (/“”(){}[]#$&*+,) ne sont pas pris en charge.",
        tr:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported",
        it: "Utilizzare esclusivamente cifre e caratteri latini; i simboli speciali (/“”(){}[]#$&*+,) non sono supportati", es:"Por favor, use únicamente caracteres latinos y números, los símbolos especiales como (/“”(){}[]#$&*+,) no están permitidos", nl:"Gebruik alstublieft alleen Latijnse karakters en cijfers, speciale tekens (/“”(){}[]#$&*+,) worden niet ondersteund", hu:"Kérjük, csak latin betűket és számjegyeket használjon. A speciális szimbólumok (/“”(){}[]#$&*+,) nincsenek támogatva.", sw:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", fi:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", da:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", no:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", cz:"Používejte jen znaky latinky a číslice. Speciální znaky (/“”(){}[]#$&*+,) nejsou podporovány.", ru:"Используйте только цифры и латинские буквы. Символы (/“”(){}[]#$&*+,) не поддерживаются.", pl:"Používejte jen znaky latinky a číslice. Speciální znaky (/“”(){}[]#$&*+,) nejsou podporovány.", "latam-es":"Utilice caracteres y cifras latinos únicamente, los símbolos especiales (/“”(){}[]#$&*+,) no son compatibles.", "latam-br":"Use somente caracteres latinos e números. Símbolos especiais (/“”(){}[]#$&*+,) não são suportados", cn:"请只使用拉丁字符和数字，特殊字符不支持(/“”(){}[]#$&*+,)", jp:"唯一のラテン文字と数字を使用してください、特殊文字のサポートはありません(/“”(){}[]#$&*+,)", tc:"请只使用拉丁字符和数字，特殊字符不支持(/“”(){}[]#$&*+,)", th:"กรุณาใช้อักขระละตินและตัวเลขเท่านั้น ไม่รองรับสัญลักษณ์พิเศษ (/“”(){}[]#$&*+,)", ko:"영어 문자와 숫자만 사용하십시오. 특수 기호(/“”(){}[]#$&*+,)는 지원되지 않습니다."
    }
    ,
    name: {
        en:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported",
        de:"Bitte verwenden Sie nur Zeichen des lateinischen Alphabets. Sonderzeichen (/“”(){}[]#$&*+,) werden nicht unterstützt.",
        fr:"Veuillez utiliser des caractères latins et des chiffres uniquement. Les symboles spéciaux (/“”(){}[]#$&*+,) ne sont pas pris en charge.",
        tr:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported",
        it: "Utilizzare esclusivamente cifre e caratteri latini; i simboli speciali (/“”(){}[]#$&*+,) non sono supportati", es:"Por favor, use únicamente caracteres latinos y números, los símbolos especiales como (/“”(){}[]#$&*+,) no están permitidos", nl:"Gebruik alstublieft alleen Latijnse karakters en cijfers, speciale tekens (/“”(){}[]#$&*+,) worden niet ondersteund", hu:"Kérjük, csak latin betűket és számjegyeket használjon. A speciális szimbólumok (/“”(){}[]#$&*+,) nincsenek támogatva.", sw:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", fi:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", da:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", no:"Please use Latin characters and digits only, special symbols (/“”(){}[]#$&*+,) are not supported", cz:"Používejte jen znaky latinky a číslice. Speciální znaky (/“”(){}[]#$&*+,) nejsou podporovány.", ru:"Используйте только цифры и латинские буквы. Символы (/“”(){}[]#$&*+,) не поддерживаются.", pl:"Používejte jen znaky latinky a číslice. Speciální znaky (/“”(){}[]#$&*+,) nejsou podporovány.", "latam-es":"Utilice caracteres y cifras latinos únicamente, los símbolos especiales (/“”(){}[]#$&*+,) no son compatibles.", "latam-br":"Use somente caracteres latinos e números. Símbolos especiais (/“”(){}[]#$&*+,) não são suportados", cn:"请只使用拉丁字符和数字，特殊字符不支持(/“”(){}[]#$&*+,)", jp:"唯一のラテン文字と数字を使用してください、特殊文字のサポートはありません(/“”(){}[]#$&*+,)", tc:"请只使用拉丁字符和数字，特殊字符不支持(/“”(){}[]#$&*+,)", th:"กรุณาใช้อักขระละตินและตัวเลขเท่านั้น ไม่รองรับสัญลักษณ์พิเศษ (/“”(){}[]#$&*+,)", ko:"영어 문자와 숫자만 사용하십시오. 특수 기호(/“”(){}[]#$&*+,)는 지원되지 않습니다."
    }
    ,
    fullname: {
        en: "Please enter your full name", de: "Dieses Feld muss ausgefüllt werden", fr: "Ce champs est requis", tr: "Bu alanı doldurmak mecburidir", it: "Questo campo è richiesto", es: "Campo obligatorio", nl: "Dit veld is verplicht", hu: "Kötelező mező", sw: "Detta fält är obligatoriskt", fi: "Tämä kenttä on pakollinen", da: "Dette felt er påkrævet", no: "Dette feltet er påkrevd", cz: "Toto pole je povinné", ru: "Поле обязательно для заполнения", pl: "To pole jest wymagane", "latam-es": "Este campo es obligatorio", "latam-br": "Este campo é obrigatório", cn: "该字段为必填项", jp: "このフィールドは必須です", tc: "這是必填欄位", th: "นี่เป็นฟิลด์บังคับ", ko: "성함을 입력해 주십시오."
    }
    ,
    company: {
        en: "Please use Latin characters, digits and &+,-._!'`() special symbols only", de: "Bitte verwenden Sie ausschließlich lateinische Buchstaben, Ziffern und die Sonderzeichen &+,-._!'`()", fr: "Veuillez utiliser uniquement des caractères latins, des chiffres et les symboles spéciaux &+,-._!'`()", tr: "Lütfen sadece Latin karakterler, rakam ve &+,-._!'`() özel sembollerini kullanın", it: "Usare solo caratteri latini, numeri e i simboli speciali  &+,-._!'`()", es: "Por favor utilice únicamente caracteres latinos, números y los símbolos especiales &+,-._!'`()", nl: "Gebruik alleen Latijnse letters, cijfers en de speciale symbolen &+,-._!'`()", hu: "Kérjük, csak latin betűket, számjegyeket, és a &+,-._!'`() speciális szimbólumokat használja.", sw: "Please use Latin characters, digits and &+,-._!'`() special symbols only", fi: "Please use Latin characters, digits and &+,-._!'`() special symbols only", da: "Please use Latin characters, digits and &+,-._!'`() special symbols only", no: "Please use Latin characters, digits and &+,-._!'`() special symbols only", cz: "Používejte pouze latinské znaky, číslice a speciální symboly &+,-._!'`()", ru: "Используйте только символы латинского алфавита, цифры и специальные символы &+,-._!'`()", pl: "Prosimy używać wyłącznie znaków alfabetu łacińskiego, cyfr i symboli specjalnych &+,-._!'`()", "latam-es": "Utilice solo caracteres latinos, dígitos y los símbolos especiales &+,-._!'`()", "latam-br": "Utilize apenas caracteres latinos, números e os símbolos especiais &+,-._!'`()", cn: "仅限使用拉丁字符、数字和特殊字符 &+,-._!'`()", jp: "英数字と特殊文字（&+,-._!'`()）のみ使用可能です。", tc: "請使用拉丁字母、數字和 &+,-._!'`() 等特殊符號", th: "กรุณาใช้อักขระละติน ตัวเลข และสัญลักษณ์พิเศษ &+,-._!'`() เท่านั้น", ko: "라틴 문자, 숫자 및 특수 기호(&+,-._!'`())만 사용하십시오."
    }
    ,
    email: {
        en: "Must be valid email address. example@domain.com", de: "Geben Sie bitte eine gültige E-Mail-Adresse ein", fr: "Adresse e-mail invalide", tr: "Geçerli e-posta adresi olmak zorunda", it: "Deve essere un indirizzo e-mail valido", es: "La dirección de email debe ser válida", nl: "Moet een geldig e-mailadres zijn", hu: "A megadott e-mail címnek érvényesnek kell lennie", sw: "Måste vara en giltig e-postadress", fi: "Anna kelvollinen sähköpostiosoite", da: "Skal være en gyldig e-mailadresse", no: "Må være en gyldig e-postadresse ", cz: "E-mailová adresa musí být platná", ru: "Введите действующий адрес электронной почты", pl: "Wymagany jest prawidłowy adres e-mail", "latam-es": "Ingresar una dirección de correo electrónico válida", "latam-br": "Deve ser um endereço de e-mail válido: exemplo@domínio.com", cn: "输入有效的电子邮件地址", jp: "有効なメール アドレスを入力してください", tc: "請輸入有效的電子郵件地址", th: "จะต้องเป็นอีเมลแอดเดรสที่ถูกต้อง example@domain.com", ko: "유효한 이메일 주소여야 합니다(예: example@domain.com)."
    }
    ,
    errorPublicFound: {
        en: "Please enter your business email", de: "Bitte geben Sie Ihre geschäftliche E-Mail Adresse ein", fr: "Merci de renseigner votre adresse email professionnelle", tr: "Lütfen iş e-posta adresinizi girin", it: "Per favore inserisci il tuo email aziendale", es: "Por favor introduzca su email corporativo", nl: "Geef uw zakelijke e-mail", hu: "Kérjük, céges email címet adjon meg", sw: "Fyll i ditt företags e-mailadress här", fi: "Anna työ-sähköpostiosoitteesi", da: "Venligst brug din arbejdsmail", no: "Vennligst skriv inn din e-post (arbeid)", cz: "Prosím, napište Váš pracovní email", ru: "Пожалуйста, введите свой рабочий email", pl: "Wprowadź służbowy adres e-mail", "latam-es": "Ingrese su correo electrónico corporativo", "latam-br": "Digite seu e-mail comercial", cn: "输入有效的电子邮件地址", jp: "勤務先のメールアドレスを入力してください。", tc: "請輸入公司電子郵件", th: "กรุณากรอกอีเมลทางธุรกิจของคุณ", ko: "회사 이메일을 입력해 주십시오."
    }
    ,
    emailLicense: {
        en: "This field is required to send license to your email", de: "Dieses Feld ist erforderlich, um eine Lizenz an Ihre E-Mail zu schicken", fr: "Ce champ est obligatoire pour vous envoyer la licence par e-mail", tr: "Lisansın e-postanıza gönderilmesi için bu alanın doldurulması zorunludur", it: "Questo campo è obbligatorio per poter inviare la licenza al tuo indirizzo e-mail", es: "Este campo es obligatorio para poderle enviar la licencia a su correo electrónico", nl: "Dit veld is verplicht", hu: "Kötelező mező", sw: "Detta fält är obligatoriskt", fi: "Tämä kenttä on pakollinen", da: "Dette felt er påkrævet", no: "Dette feltet er påkrevd", cz: "Toto políčko je k odeslání licence e-mailem povinné", ru: "Это поле необходимо заполнить, чтобы получить лицензию по электронной почте", pl: "To pole jest wymagane w celu wysłania licencji na Twój adres e-mail", "latam-es": "Este campo es obligatorio para enviarle la licencia por correo electrónico", "latam-br": "Este campo é obrigatório para enviar a licença para seu e-mail", cn: "该字段为必填项", jp: "お客様にメールでライセンスを送信するために、この項目への入力は必須です", tc: "這是必填欄位", th: "นี่เป็นฟิลด์บังคับ", ko: "필수 필드입니다."
    }
    ,
    publicNotAllowed: {
        en: "Please enter your business email", de: "Bitte geben Sie Ihre geschäftliche E-Mail Adresse ein", fr: "Merci de renseigner votre adresse email professionnelle", tr: "Lütfen iş e-posta adresinizi girin", it: "Per favore inserisci il tuo email aziendale", es: "Por favor introduzca su email corporativo", nl: "Geef uw zakelijke e-mail", hu: "Kérjük, céges email címet adjon meg", sw: "Fyll i ditt företags e-mailadress här", fi: "Anna työ-sähköpostiosoitteesi", da: "Venligst brug din arbejdsmail", no: "Vennligst skriv inn din e-post (arbeid)", cz: "Prosím, napište Váš pracovní email", ru: "Пожалуйста, введите свой рабочий email", pl: "Wprowadź służbowy adres e-mail", "latam-es": "Ingrese su correo electrónico corporativo", "latam-br": "Digite seu e-mail comercial", cn: "输入有效的电子邮件地址", jp: "勤務先のメールアドレスを入力してください。", tc: "請輸入公司電子郵件", th: "กรุณากรอกอีเมลทางธุรกิจของคุณ", ko: "회사 이메일을 입력해 주십시오."
    }
    ,
    business: {
        en: "Please enter your business email", de: "Bitte geben Sie Ihre geschäftliche E-Mail Adresse ein", fr: "Merci de renseigner votre adresse email professionnelle", tr: "Lütfen iş e-posta adresinizi girin", it: "Per favore inserisci il tuo email aziendale", es: "Por favor introduzca su email corporativo", nl: "Geef uw zakelijke e-mail", hu: "Kérjük, céges email címet adjon meg", sw: "Fyll i ditt företags e-mailadress här", fi: "Anna työ-sähköpostiosoitteesi", da: "Venligst brug din arbejdsmail", no: "Vennligst skriv inn din e-post (arbeid)", cz: "Prosím, napište Váš pracovní email", ru: "Пожалуйста, введите свой рабочий email", pl: "Wprowadź służbowy adres e-mail", "latam-es": "Ingrese su correo electrónico corporativo", "latam-br": "Digite seu e-mail comercial", cn: "输入有效的电子邮件地址", jp: "勤務先のメールアドレスを入力してください。", tc: "請輸入公司電子郵件", th: "กรุณากรอกอีเมลทางธุรกิจของคุณ", ko: "회사 이메일을 입력해 주십시오."
    }
    ,
    phone: {
        en: "Must be valid phone number. 123-456-78-90", de: "Geben Sie bitte eine gültige Telefonnummer ein", fr: "Numéro de téléphone invalide", tr: "Geçerli telefon numarası olmak zorunda", it: "Deve essere un numero di telefono valido", es: "El número de teléfono debe ser válido", nl: "Moet een geldig telefoonnummer zijn", hu: "A megadott telefonszámnak érvényesnek kell lennie", sw: "Måste vara ett giltigt telefonnummer", fi: "Anna kelvollinen puhelinnumero", da: "Skal være et gyldigt telefonnummer", no: "Må være et gyldig telefonnummer", cz: "Telefonní číslo musí být platné", ru: "Введите действующий номер телефона", pl: "Wymagany jest prawidłowy numer telefonu", "latam-es": "Ingrese un número de teléfono válido. 123-456-78-90", "latam-br": "Deve ser um número de telefone válido: 1234-4567", cn: "请务必提供有效的电话号码，如 123-456-78-90", jp: "有効な電話番号を入力してください。000-1111-2222", tc: "必須為有效的電話號碼，如 123-456-78-90", th: "จะต้องเป็นหมายเลขโทรศัพท์ที่ถูกต้อง 123-456-78-90", ko: "유효한 전화번호여야 합니다. 123-456-78-90"
    }
    ,
    number: {
        en: "Please enter a numerical value", de: "Geben Sie bitte eine Zahl ein", fr: "Veuillez entrer une valeur numérique", tr: "Lütfen sayısal değer girin", it: "Inserire un valore numerico", es: "Introduzca un valor numérico por favor", nl: "Voer een numerieke waarde in", hu: "Kérjük, adja meg számszerűen", sw: "Ange ett numeriskt värde", fi: "Anna numeerinen arvo", da: "Angiv en numerisk værdi", no: "Angi en tallverdi", cz: "Zadejte číselnou hodnotu", ru: "Введите числовое значение", pl: "Wprowadź wartość liczbową", "latam-es": "Ingrese un valor numérico", "latam-br": "Digite um valor numérico", cn: "请输入一个数值", jp: "値を入力してください", tc: "請輸入一個數值", th: "กรุณากรอกข้อมูลเป็นตัวเลข", ko: "숫자 값을 입력해 주십시오."
    }
    ,
    digitsOnly: {
        en: "Please enter a numerical value", de: "Geben Sie bitte eine Zahl ein", fr: "Veuillez entrer une valeur numérique", tr: "Lütfen sayısal değer girin", it: "Inserire un valore numerico", es: "Introduzca un valor numérico por favor", nl: "Voer een numerieke waarde in", hu: "Kérjük, adja meg számszerűen", sw: "Ange ett numeriskt värde", fi: "Anna numeerinen arvo", da: "Angiv en numerisk værdi", no: "Angi en tallverdi", cz: "Zadejte číselnou hodnotu", ru: "Введите числовое значение", pl: "Wprowadź wartość liczbową", "latam-es": "Ingrese un valor numérico", "latam-br": "Digite um valor numérico", cn: "请输入一个数值", jp: "値を入力してください", tc: "請輸入一個數值", th: "กรุณากรอกข้อมูลเป็นตัวเลข", en: "숫자 값을 입력해 주십시오."
    }
    ,
    wait: {
        en: "Please wait", de: "Bitte warten Sie", fr: "Veuillez patienter", tr: "Lütfen bekleyiniz", it: "Attendere prego", es: "Por favor espere", nl: "Aan het laden", hu: "Kérem várjon", sw: "Vänta, tack!", fi: "Odota ole hyvä", da: "Vent venligst", no: "Vennligst vent", cz: "Pockejte, prosím", ru: "Подождите...", pl: "Poczekaj", "latam-es": "Espere", "latam-br": "Aguarde", cn: "请稍候", jp: "お待ちください", tc: "請稍候", th: "กรุณารอสักครู่", ko: "기다려 주십시오."
    }
    ,
    notInArray: {
        en: "Form is not valid"
    }
}

,
_GDPRText= {
    en: {
        privacy_policy: 'By registering you agree to the&nbsp;<a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeam Privacy Policy</a>.', optout: "I want to receive product news and&nbsp;updates from&nbsp;Veeam and&nbsp;Veeam partners."
    }
    ,
    de: {
        privacy_policy: 'Mit der Registrierung stimmen Sie der <a href="https://www.veeam.com/de/privacy-policy.html" target="_blank" style="white-space: normal">Veeam-Datenschutzrichtlinie</a> zu.', optout: "Ich möchte Informationen zu neuen Produkten und anderen Neuigkeiten von Veeam und den Veeam-Partnern erhalten."
    }
    ,
    fr: {
        privacy_policy: 'En vous inscrivant, vous acceptez la <a href="https://www.veeam.com/fr/privacy-policy.html" target="_blank" style="white-space: normal">politique de confidentialité de&nbsp;Veeam</a>.', optout: "Je souhaite recevoir les actualités et les mises à jour produits de la part de Veeam et de ses partenaires."
    }
    ,
    tr: {
        privacy_policy: 'Kaydolarak <a href="https://www.veeam.com/tr/privacy-policy.html" target="_blank" style="white-space: normal">Veeam Gizlilik Politikası</a>\'nı kabul etmiş olursunuz.', optout: "Veeam ve Veeam iş ortaklarından ürün haberleri ve güncellemeler almak istiyorum."
    }
    ,
    it: {
        privacy_policy: 'Registrandoti, accetti l\'<a href="https://www.veeam.com/it/privacy-policy.html" target="_blank" style="white-space: normal">Informativa sulla privacy di&nbsp;Veeam</a>.', optout: "\tDesidero ricevere novità e aggiornamenti sui prodotti Veeam e&nbsp;dei partner Veeam."
    }
    ,
    es: {
        privacy_policy: 'Al registrarse acepta la <a href="https://www.veeam.com/es/privacy-policy.html" target="_blank" style="white-space: normal">Política de Privacidad de&nbsp;Veeam</a>.', optout: "Deseo recibir noticias de productos y actualizaciones de&nbsp;Veeam y&nbsp;sus partners."
    }
    ,
    nl: {
        privacy_policy: 'Door u te registreren, gaat u akkoord met het <a href="https://www.veeam.com/nl/privacy-policy.html" target="_blank">Veeam Gegevensprivacybeleid</a>.', optout: "Ik wil productnieuws en updates van Veeam en Veeam-partners ontvangen."
    }
    ,
    hu: {
        privacy_policy: 'A regisztrációval hozzájárul a&nbsp;<a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeam Privacy Policy</a> elfogadásához.', optout: "Szeretnék a Veeam gyártótól és annak partnereitől termékkel kapcsolatos információt kapni."
    }
    ,
    sw: {
        privacy_policy: 'Genom att registrera godkänner du&nbsp;<a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeams integritetspolicy</a>.', optout: "Jag ger mitt samtycke till att Veeam och dess koncernföretag kontaktar mig via e-post för att berätta om sina produkter och tjänster."
    }
    ,
    fi: {
        privacy_policy: 'Rekisteröitymällä hyväksyt <a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeam-tietosuojakäytännön</a>.', optout: "Annan suostumukseni siihen, että Veeam ja Veeam-konserniin kuuluvat yritykset voivat ottaa minuun yhteyttä sähköpostitse markkinoidakseen tuotteitaan ja palvelujaan."
    }
    ,
    da: {
        privacy_policy: 'Ved at registrere dig accepterer du <a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeams privatlivspolitik</a>.', optout: "Jeg accepterer, at Veeam og koncernens virksomheder må kontakte mig via e-mail for at promovere deres produkter og tjenester."
    }
    ,
    no: {
        privacy_policy: 'Ved å registrere deg godtar du <a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeams personvernregler</a>.', optout: "Jeg godtar at Veeam med sine selskaper kan kontakte meg på e-post for å fremme sine produkter og tjenester."
    }
    ,
    cz: {
        privacy_policy: 'Registrací vyjadřujete souhlas se <a href="https://www.veeam.com/cz/privacy-policy.html" target="_blank" style="white-space: normal">Zásadami ochrany osobních údajů společnosti Veeam</a>.', optout: "Chci dostávat novinky a zprávy o produktech od společnosti Veeam a jejích partnerů."
    }
    ,
    ru: {
        privacy_policy: 'Регистрируясь, вы принимаете условия <a href="https://www.veeam.com/ru/privacy-policy.html" target="_blank" style="white-space: normal">политики конфиденциальности Veeam</a>.', optout: "Я хочу получать информацию о&nbsp;продуктах и&nbsp;обновлениях от&nbsp;компании Veeam и&nbsp;ее&nbsp;партнеров."
    }
    ,
    pl: {
        privacy_policy: 'Dokonując rejestracji, akceptujesz <a href="https://www.veeam.com/pl/privacy-policy.html" target="_blank" style="white-space: normal">Politykę prywatności firmy Veeam</a>.', optout: "Chcę otrzymywać wiadomości i aktualizacje dotyczące produktów od firmy Veeam i&nbsp;jej partnerów."
    }
    ,
    "latam-es": {
        privacy_policy: 'Al registrarse, acepta la <a href="https://www.veeam.com/es-lat/privacy-policy.html" target="_blank" style="white-space: normal">Veeam Privacy Policy</a>.', optout: "Quiero recibir novedades y actualizaciones sobre los productos de Veeam y de sus asociados."
    }
    ,
    "latam-br": {
        privacy_policy: 'Ao se inscrever, você concorda com a&nbsp;<a href="https://www.veeam.com/br/privacy-policy.html" target="_blank" style="white-space: normal">Política de Privacidade da&nbsp;Veeam</a>.', optout: "Quero receber atualizações e notícias de produtos da Veeam e&nbsp;seus parceiros."
    }
    ,
    cn: {
        privacy_policy: '注册即表示您同意 <a href="https://www.veeam.com/cn/privacy-policy.html" target="_blank">Veeam 隐私政策</a>。', optout: "我愿意接受 Veeam 及 Veeam 合作伙伴发送的产品资讯和更新。"
    }
    ,
    jp: {
        privacy_policy: '登録することで、<a href="https://www.veeam.com/jp/privacy-policy.html" target="_blank">Veeamプライバシー・ポリシー</a>に同意したことと見なされます。', optout: "VeeamとVeeamのパートナーから製品に関するニュースや最新情報を受け取ることを希望します。"
    }
    ,
    tc: {
        privacy_policy: '註冊即表示您同意 <a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeam 隱私政策</a>。', optout: "我想收到 Veeam 和 Veeam 合作夥伴的產品消息與更新。"
    }
    ,
    th: {
        privacy_policy: 'ในการลงทะเบียนคุณเห็นด้วยกับ <a href="https://www.veeam.com/privacy-policy.html" target="_blank">นโยบายความเป็นส่วนตัวของ Veeam</a>', optout: "ฉันต้องการรับข่าวสารและข้อมูลอัพเดตจาก Veeam และพันธมิตรของ Veeam"
    }
    ,
    ko: {
        privacy_policy: '등록하면 <a href="https://www.veeam.com/privacy-policy.html" target="_blank">Veeam 개인정보 보호정책</a>에 동의하는 것으로 간주됩니다.', optout: "Veeam과 Veeam 파트너의 제품 뉴스와 업데이트 소식을 받겠습니다."
    }
}

,
_selectCountry= {
    en: "Select country/region", de: "Wählen Sie Ihr Land / Ihre Region aus", fr: "Sélectionnez un pays/une région", tr: "Ülke/bölge seçin", it: "Seleziona il paese/la regione", es: "Seleccione país/región", nl: "Selecteer land/regio", hu: "Ország/Régió kiválasztása", sw: "Select country/region", fi: "Select country/region", da: "Select country/region", no: "Select country/region", cz: "Vybrat zemi/oblast", ru: "Выбрать страну/регион", pl: "Wybierz kraj/region", "latam-es": "Seleccionar país/región", "latam-br": "Selecionar país/região", cn: "选择国家/地区", jp: "国または地域を指定する", tc: "選擇國家/地區", th: "เลือกประเทศ/ภูมิภาค", ko: "국가/지역 선택"
}

;
function showError(e, a, t) {
    var i=_errorMessages[a][t]||_errorMessages[a].en;
    0<$(e).next(".mForm__error").length?$(e).addClass("invalid-field").next(".mForm__error").text(i): $(e).hasClass("mForm__row-checkbox")?0==$(e).parents(".mForm__row").find(".mForm__error").length&&$(e).addClass("invalid-field").parents(".mForm__row").find("label.mForm__row-checkbox").after("<div class='mForm__error'>"+i+"</div>"): $(e).addClass("invalid-field").after("<div class='mForm__error'>"+i+"</div>")
}

function followUp(e, a, t, i) {
    if(0==a.indexOf("#"))return $("#download-link").attr("href", i),
    $(e).slideUp(),
    $("#marketo-ty").slideDown(),
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
        case"lic_gen": case"no_lic_public": case"no_lic_gen": case"lic_gen_public": case"no_lic_gen_public": var n, s="https://www.veeam.com"+a.data.productUrl;
        followUp(t, n=n+r+"products="+a.data.products+"&key_type="+a.data.key_type, "prd_dnl", s);
        break;
        default: followUp(t, n, "resource_url", o)
    }
    var l= {
        email: $.trim($('[name="email"]').val()), action: "e"
    }
    ;
    $.ajax( {
        url:"https://mkto.veeam.com/projects/pr-pr/", type:"post", data:JSON.stringify(l), success:function(e) {
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
        var a="https://www.veeam.com/api/";
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
    ), setTimeout(function() {
        (new Image).src="//psr.veeam.com/global/img/icon/arrow_select_999999.svg", (new Image).src="//psr.veeam.com/global/img/icon/arrow_select_005f4b.svg", (new Image).src="//psr.veeam.com/global/img/icon/arrow_select_00b336.svg", (new Image).src="//psr.veeam.com/global/img/icon/arrow_select_ba0200.svg", (new Image).src="//psr.veeam.com/global/img/icon/arrow_select_ffffff.svg", (new Image).src="//psr.veeam.com/global/img/icon/arrow_select_d5d5d6.svg", (new Image).src="//psr.veeam.com/global/img/icon/checkbox_checked_00b336.svg", (new Image).src="//psr.veeam.com/global/img/icon/checkbox_checked_005f4b.svg", (new Image).src="//psr.veeam.com/global/img/icon/checkbox_checked_cdcdcd.svg", (new Image).src="//psr.veeam.com/global/img/icon/checkbox_checked_93ea20.svg"
    }
    , 100)
}

);