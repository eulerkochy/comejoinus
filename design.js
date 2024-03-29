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


login.addEventListener('click', () => {
	console.log("I've been clicked")
	FB.init({
	  appId            : '2070778906293269',
	  autoLogAppEvents : true,
	  xfbml            : true,
	  version          : 'v3.2'
	});
	FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
	FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
		console.log(typeof response.first_name);
		document.getElementById('yname').innerHTML ='<b>' + ((typeof (response.first_name) !== 'undefined')?  response.first_name : 'there!') + '</b>';
		if (typeof(response.picture) !== 'undefined')
			document.getElementById('ypic').innerHTML = "<img src='" + response.picture.data.url + "' class='img-circle'> <br>";
	});
	console.log(FB);
	});
});


