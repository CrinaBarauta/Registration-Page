$('#myForm').on('submit', function(e){
	if ($(this).hasClass('form-submitted')) {
		e.preventDefault();
	} else {
		$(this).addClass('form-submitted');
	}
})


var formValid = {
	firstName: false,
	lastName: false,
	email: false
};

function checkValidation () {
if (formValid.firstName && formValid.lastName && formValid.email){
	$('#download').removeAttr('disabled');
	
} else {
	$('#download').attr('disabled', true);
}
}

$('#firstName').on('input', function(){
var firstName = $(this).val();

function msg(body){
	$('#firstName_error_message').text(body).show();
}

function hide(){
	$('#firstName_error_message').hide();
}


if (firstName.length < 1) {
	msg('This field is required');
	formValid.firstName = false;
	checkValidation ();
} else {
	hide ();
	formValid.firstName = true;
	checkValidation ();
	var testExp = new RegExp (/^[a-zA-Z0-9]+$/);
	if (!testExp.test(firstName)) {
		msg('Must not have any special characters');
		formValid.firstName = false;
		checkValidation ();
	} else {
		hide ();
		formValid.firstName = true;
		checkValidation ();
		if (firstName.length < 3 || firstName.length > 10) {
			msg('Must have at least 3 characters, but no more than 10');
			formValid.firstName = false;
			checkValidation ();
		} else {
			hide();
			formValid.firstName = true;
			checkValidation ();
		}
	}
}

});

$('#lastName').on('input', function(){
    var lastName = $(this).val();
    
    function msg(body){
        $('#lastName_error_message').text(body).show();
    }
    
    function hide(){
        $('#lastName_error_message').hide();
    }
    
    
    if (lastName.length < 1) {
        msg('This field is required');
        formValid.lastName = false;
        checkValidation ();
    } else {
        hide ();
        formValid.lastName = true;
        checkValidation ();
        var testExp = new RegExp (/^[a-zA-Z0-9]+$/);
        if (!testExp.test(lastName)) {
            msg('Must not have any special characters');
            formValid.lastName = false;
            checkValidation ();
        } else {
            hide ();
            formValid.lastName = true;
            checkValidation ();
            if (lastName.length < 3 || lastName.length > 10) {
                msg('Must have at least 3 characters, but no more than 10');
                formValid.lastName = false;
                checkValidation ();
            } else {
                hide();
                formValid.lastName = true;
                checkValidation ();
            }
        }
    }
    
    });



$('#email').on('input', function(){
    var email = $(this).val();
    
    function msg(body){
        $('#email_error_message').text(body).show();
    }
    
    function hide(){
        $('#email_error_message').hide();
    }
    
    
    if (email.length < 1) {
        msg('This field is required');
        formValid.email = false;
        checkValidation ();
    } else {
        hide ();
        formValid.email = true;
        checkValidation ();
        var testExp = new RegExp (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
        if (!testExp.test(email)) {
            msg('Must be a valid e-mail');
            formValid.email = false;
            checkValidation ();
        } else {
            hide ();
            formValid.email = true;
            checkValidation ();
            if (email.length < 3 || email.length > 30) {
                msg('Must have at least 3 characters, but no more than 30');
                formValid.email = false;
                checkValidation ();
            } else {
                hide();
                formValid.email = true;
                checkValidation ();
            }
        }
    }
    
    });