const slides = document.querySelectorAll('.slider-container .slide');
const eraser = document.querySelector('.eraser');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const intervalTime = 7000;
const eraserActiveTime = 700;
let sliderInterval;


const nextSlide = () => {
	eraser.classList.add('active');
	setTimeout(() => {
		const active = document.querySelector('.slide.active');
		active.classList.toggle('active');
		if(active.nextElementSibling) {
			active.nextElementSibling.classList.toggle('active');
		} else {
			slides[0].classList.toggle('active');
		}
		setTimeout(() => {
			eraser.classList.remove('active');
		}, 200);
	}, eraserActiveTime);
}

const prevSlide = () => {
	eraser.classList.add('active');
	setTimeout(() => {
		const active = document.querySelector('.slide.active');
		active.classList.toggle('active');
		if(active.previousElementSibling) {
			active.previousElementSibling.classList.toggle('active');
		} else {
			slides[slides.length-1].classList.toggle('active');
		}
		setTimeout(() => {
			eraser.classList.remove('active');
		}, 200);
	}, eraserActiveTime);
}

next.addEventListener('click', () => {
	nextSlide();
	clearInterval(sliderInterval);
	sliderInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener('click', () => {
	prevSlide();
	clearInterval(sliderInterval);
	sliderInterval = setInterval(nextSlide, intervalTime);
});

sliderInterval = setInterval(nextSlide, intervalTime);

// Initial slide
setTimeout(nextSlide, 100);


window.fbAsyncInit = function() {
	FB.init({
	  appId            : '2070778906293269',
	  autoLogAppEvents : true,
	  xfbml            : true,
	  version          : 'v3.2'
	});
	};
login.addEventListener('click', () => {
	FB.login(function(response) {
		if (response.status === 'connected') {
			document.getElementById('status').innerHTML = 'We are connected.';
			document.getElementById('login').style.visibility = 'hidden';
		} else if (response.status === 'not_authorized') {
			document.getElementById('status').innerHTML = 'We are not logged in.'
		} else {
			document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		}
	}, {scope: 'email'});
	FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
		document.getElementById('yname').innerHTML = '<b>' + response.first_name + '</b>';
	});
	}

	function getInfo() {
	FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
		document.getElementById('status').innerHTML = response.id;
	});
	});

