"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
// Меню бурнер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Фон при скроле шапки
$(document).ready(function(){
    $(window).scroll(function(){
      const scroll = $(window).scrollTop();
      if (scroll > 40) {
        $(".header").css("background" , "rgba(0,0,0,1)"); 
      }
      else{
        $(".header").css("background" , "rgba(255,255,255,0)"); 
      }
    })
    })

//Скрыть лого при скроле
const logo = $('.header__logo'),
scrollPrev = 0;

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();
    
    if ( scrolled > 100 && scrolled > scrollPrev ) {
    logo.addClass('header-out');
    } else {
    logo.removeClass('header-out');
    }
    // scrollPrev = scrolled;
});




$('#form').submit(function(){
	$.ajax({
		type:"POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
	alert("Дякоэмо за звернення!");
	setTimeout(function() {
		$.magnificPopup.close();
	}, 1000);
	});
	return false;
});