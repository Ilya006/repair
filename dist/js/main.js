$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      message = $('.message'),
      closeMessage = $('.message__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
 });

  closeMessage.on('click', function () {
    message.toggleClass('message--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
 });

 $(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() +25 + bullets.width() + 25)
  bullets.css('left', prev.width() + 25)
});

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});


  // валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      },
        userPolicy: {
        required: true
      }
    }, // сообщение 
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Неверный номер телефона"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      userPolicy: {
        required: "Подтвердите согласие на обработку данных"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          message.addClass('message--visible');
        }
      });
    }
  }); 



  $('.control__form').validate({
    errorClass: "control__invalid",
    errorElement: "em",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      conrolPolicy: {
        required: true
      },
    }, // сообщение 
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
      },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Неверный номер телефона"
      },
      conrolPolicy: {
        required: "Подтвердите согласие на обработку данных"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          message.addClass('message--visible');
        }
      });
    }
  }); 


  $('.footer__form').validate({
    errorClass: "footer__invalid",
    errorElement: "em",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      iserInquiry: {
        required: true,
        minlength: 5,
        maxlength: 20
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      footerPolicy: {
        required: true,
      },
    }, // сообщение 
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
      },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Неверный номер телефона"
      },
      iserInquiry: {
        required: "Заполните поле",
        minlength: "Минимальное значение символов - 5",
        maxlength: "Максимальное значение символов - 20"
      },
      footerPolicy: {
        required: "Подтвердите согласие на обработку данных"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          message.addClass('message--visible');
        }
      });
    }
  }); 
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  // slick-slider
  $('.slider-container').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    autoplay: false,
  });
});


