// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


(function () {
    "use strict"; // Start of use strict

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000, function () {
                        // Callback after animation

                    });
                }
            }
        });

})();

$(window).on("load", function () {
    if ($(this).scrollTop() > 30) {
        $("#navbar ").addClass('fixed-top');
    } else {
        $("#navbar ").removeClass('fixed-top')
    }
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $("#navbar ").addClass('fixed-top');
    } else {
        $("#navbar ").removeClass('fixed-top')

    }
});

$(document).ready(function () {
    'use strict';
    $('.navbar .search-form .form-control').focus(function () {
        $('#backdrop').addClass('backdrop')
    })
    $('.navbar .search-form .form-control').focusout(function () {
        $('#backdrop').removeClass('backdrop').addClass('not-has-backdrop')
    })
})


$(function () {
    $('audio').audioPlayer();
});


//has-cropper

$(function () {
    $('.has-counter').each(function () {
        $(this).next('span').text($(this).val().length + '/' + $(this).attr('maxlength'))
    });
    $('.has-counter').on('keydown', function () {
        $(this).next('span').text($(this).val().length + '/' + $(this).attr('maxlength'))
    });

    // Trigger data text of specializations
    $('.has-data-text').change(function () {
        $('#data-text').text($(this).attr('data-text'));
    });
    $('#data-text').text($('.has-data-text:checked').attr('data-text'))

})

$(document).ready(function () {

    // trigger toggle disable event
    $(document).on('dblclick', '.dblclick-event', function () {
        $(this).prev().prop('disabled', '');
        $(this).prop('disabled', '');
    })

    $(document).on('click', '.profile-photo, .upload-photo-btn', function () {
        $('#profile-photo').trigger('click');
    })

    // User Edit Profile Showing The Hidden input
    if ($('.type-of-accommodation input[type="radio"].has-hidden-input').is(':checked')) {
        $('.user-edit-profile .residency-number').removeClass('d-none');
    }

    $('.type-of-accommodation input[type="radio"]').change(function () {
        if ($(this).is(':checked') && $(this).hasClass('has-hidden-input')) {
            $('.user-edit-profile .residency-number').removeClass('d-none');
        } else {
            $('.user-edit-profile .residency-number').addClass('d-none');
        }
    });

    $('.user-delete-account input[type="radio"]').change(function () {
        if ($(this).is(':checked') && $(this).hasClass('has-hidden-input')) {
            $('.user-delete-account .reason-delete-input').removeClass('d-none');
        } else {
            $('.user-delete-account .reason-delete-input').addClass('d-none');
        }
    });


    $(document).on('change', '#profile-photo', function () {
        readURL(this, $('.preview'))
    });

    function readURL(input, preview) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                preview.prop('src', e.target.result)
            }
            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }

    }

    // custom-file-input

    $(document).on('change', '.custom-file-input', function () {
        let val = $(this).val();
        console.log(val);
        $(this).parent('.custom-file').append(`<strong class="mr-3 text-danger">${val}</strong>`);
    })

    $('.toggle-submenu').on('click', function () {
        $(this).toggleClass('rotate');
        $(this).parents('.has-submenu').find('.submenu').toggle();
    });

})



$(function () {

    $(".circle-progress").each(function () {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

});

//   Meeting Form Handler
$(function () {
    $('input[type=datetime-local]').prop('min', new Date().toJSON().slice(0, 19));

    var form = $("#meeting-form");
    if (form) {

    }
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            confirm: {
                equalTo: "#password"
            },
            url: {
                required: true,
                url: true
            }
        }
    });
    form.children("div").steps({
        headerTag: "h1",
        bodyTag: "div",
        labels: {
            current: "الخطوة الحالية:",
            pagination: "ترقيم الصفحات",
            finish: "إنهاء",
            next: "التالى",
            previous: "رجوع",
            loading: "تحميل ...",
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent(".form-group"));
        },
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            $('#confirm-model').modal('show');
        }
    });

    $.extend($.validator.messages, {
        required: "هذا الحقل مطلوب",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "يجب اضافة اللينك بشكل صحيح.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}.")
    });


    $('.select2').select2()

});

var countable = 2;
// Start Append test
$('#btn-add-new-test').click(function () {

    let _append = `
            <li id="row-${countable++}" class="d-flex mb-3">
                <span class="test-icon"></span>
                <div class="d-flex flex-column mr-3">
                    <span class="mb-2">اختبار</span>
                    <a href="#" class="text-primary question-modal-trigger" >إضافة سؤال</a>
                </div>
            </li>
    `;
    $('#list-of-tests').find('ul').append(_append)
});

// Start Get Row number to add in the modal
$(document).on('click', '.question-modal-trigger', function () {
    $('#add-questions-modal').attr('data-row-id', $(this).parents('li').attr('id'))
});
var countableRows = 1;
// trigger input to add questions
$('#add-new-question').on('keyup', function (e) {
    if (e.keyCode == 13) {

        if ($(this).val().length == 0) {
            alert('لا يمكن اضافة قيمة فارغة');
            return
        }

        countableRows++;
        let append = `
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="question-${countableRows}">
            <label class="custom-control-label" for="question-${countableRows}"> 
                ${$(this).val()}
            </label>
        </div>
        `;
        $('#questions-list').append(append);
        $(this).val('');
    }
})


$('#add-questions-modal').on('hidden.bs.modal', function (e) {
    $('#questions-list').html('');
})


var maxLength = 300;
$(".show-read-more").each(function () {
    var myStr = $(this).text();
    if ($.trim(myStr).length > maxLength) {
        var newStr = myStr.substring(0, maxLength);
        var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
        $(this).empty().html(newStr);
        $(this).append(`<a href="javascript:void(0);" class="text-primary read-more d-flex align-items-center mt-2">
        <span>عرض المزيد</span>  <i class="fas fa-chevron-down mr-1"></i> </a> `);
        $(this).append('<span class="more-text">' + removedStr + '</span>');
    }
});
$(document).on('click', '.read-more', function () {
    $(this).siblings(".more-text").css('display', 'inline');
    $(this).parent().append(`<a href="javascript:void(0);" class="text-primary hide-more d-flex align-items-center mt-2">
        <span>اخفاء</span>  <i class="fas fa-chevron-up mr-1"></i> </a> `);
    $(this).remove();
});
$(document).on('click', '.hide-more', function () {
    $(this).siblings(".more-text").css('display', 'none');
    $(this).parent().append(`<a href="javascript:void(0);" class="text-primary read-more d-flex align-items-center mt-2">
        <span>عرض المزيد</span>  <i class="fas fa-chevron-down mr-1"></i> </a> `);
    $(this).remove();
});


// Quizzes 
$("#quiz1").dlxQuiz({
    quizData: {
        questions: [
            {
                q:'ما هي خطة العمل المتفق عليها                ',
                a: "All div elements",
                options: [
                    "الأزياء",
                    "المجوهرات",
                    "التصميم الداخلي"
                ]
            },
            {
                q: "Which of the following is correct",
                a: "jQuery is a JavaScript Library",
                options: [
                    "jQuery is a JSON Library",
                    "jQuery is a JavaScript Library"
                ]
            },
            {
                q: "jQuery uses CSS selectors to select elements?",
                a: "True",
                options: ["True", "False"]
            },
            {
                q: "Which sign does jQuery use as a shortcut for jQuery?",
                a: "the $ sign",
                options: ["the % sign", "the $ sign", "the ? Sign"]
            },
            {
                q:
                    "Is jQuery a library for client scripting or server scripting?",
                a: "Client scripting",
                options: ["Client scripting", "Server scripting"]
            }
        ]
    }
});
