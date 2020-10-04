  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
      'use strict';
      window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                  }
                  form.classList.add('was-validated');
              }, false);
          });
      }, false);
  })();



  (function() {
      "use strict"; // Start of use strict

      // Select all links with hashes
      $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
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
                      }, 1000, function() {
                          // Callback after animation

                      });
                  }
              }
          });

  })();

  $(window).on("load", function() {
      if ($(this).scrollTop() > 30) {
          $("#navbar ").addClass('fixed-top');
      } else {
          $("#navbar ").removeClass('fixed-top')
      }
  })
  $(window).scroll(function() {
      if ($(this).scrollTop() > 30) {
          $("#navbar ").addClass('fixed-top');
      } else {
          $("#navbar ").removeClass('fixed-top')

      }
  });

  $(document).ready(function() {
      'use strict';
      $('.navbar .search-form .form-control').focus(function() {
          $('#backdrop').addClass('backdrop')
      })
      $('.navbar .search-form .form-control').focusout(function() {
          $('#backdrop').removeClass('backdrop').addClass('not-has-backdrop')
      })
  })


  $(function() {
      $('audio').audioPlayer();
  });


  //has-cropper

  $(function() {
      $('.has-counter').each(function() {
          $(this).next('span').text($(this).val().length + '/' + $(this).attr('maxlength'))
      });
      $('.has-counter').on('keydown', function() {
          $(this).next('span').text($(this).val().length + '/' + $(this).attr('maxlength'))
      });

      // Trigger data text of specializations
      $('.has-data-text').change(function() {
          $('#data-text').text($(this).attr('data-text'));
      });
      $('#data-text').text($('.has-data-text:checked').attr('data-text'))

  })

  $(document).ready(function() {

      // trigger toggle disable event
      $(document).on('dblclick', '.dblclick-event', function() {
          $(this).prev().prop('disabled', '');
          $(this).prop('disabled', '');
      })

      // Profile photo open file input
      $('.profile-photo, .upload-photo-btn').click(function() {
          $('#profile-photo').click();
      });

      // User Edit Profile Showing The Hidden input
      if ($('.type-of-accommodation input[type="radio"].has-hidden-input').is(':checked')) {
          $('.user-edit-profile .residency-number').removeClass('d-none');
      }

      $('.type-of-accommodation input[type="radio"]').change(function() {
          if ($(this).is(':checked') && $(this).hasClass('has-hidden-input')) {
              $('.user-edit-profile .residency-number').removeClass('d-none');
          } else {
              $('.user-edit-profile .residency-number').addClass('d-none');
          }
      });

      $('.user-delete-account input[type="radio"]').change(function() {
          if ($(this).is(':checked') && $(this).hasClass('has-hidden-input')) {
              $('.user-delete-account .reason-delete-input').removeClass('d-none');
          } else {
              $('.user-delete-account .reason-delete-input').addClass('d-none');
          }
      });

  })


  //   Trigger Steps
  var settings = {
      labels: {
          current: "الخطوة الحالية:",
          pagination: "ترقيم الصفحات",
          finish: "إنهاء",
          next: "التالى",
          previous: "رجوع",
          loading: "تحميل ..."
      }
  };
  $(".wizard").steps(settings);