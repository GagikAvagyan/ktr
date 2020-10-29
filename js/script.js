$(document).ready(function () {

	$('.popup').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
	});

	$('.pumps-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: $('.pumps-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.pumps-slider-wrap .slider-navigation .slick-next'),
	});

	$('.jobs-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: $('.jobs-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.jobs-slider-wrap .slider-navigation .slick-next'),
	});

	$('.products-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: $('.products-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.products-slider-wrap .slider-navigation .slick-next'),
	});

	$('.certificates-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: $('.certificates-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.certificates-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 2,
				}
							},
				  		],
	});

	$('.banner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		fade: true,
		prevArrow: $('.banner-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.banner-slider-wrap .slider-navigation .slick-next'),
	});

	$(".tab-menu li a").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".tab-menu").find("li").removeClass("active");
		$(this).closest("li").addClass("active");
		var index = $(this).closest("li").index();
		$(".tab-content-item").removeClass("active");
		$(".tab-content-item").eq(index).addClass("active");
	});

	$('.select-wrap select').select2({
		minimumResultsForSearch: -1
	});

	$('.select-wrap2 select#country').select2({
		placeholder: "Выберите страну",
		minimumResultsForSearch: -1
	});

	$('.select-wrap2 select.language').select2({
		placeholder: "Выберите язык",
		minimumResultsForSearch: -1
	});

	$('.select-wrap2 select.level').select2({
		placeholder: "Укажите уровень",
		minimumResultsForSearch: -1
	});

	$('.select-wrap2 select.programm').select2({
		placeholder: "Выберите программу",
		minimumResultsForSearch: -1
	});

	$('.select-wrap2 select.education-level').select2({
		placeholder: "Выберите уровень",
		minimumResultsForSearch: -1
	});

	$('#company-jobs-select').on('select2:select', function (e) {
		$("#company-jobs-list li").removeClass("active");
		$("#company-jobs-list li").eq(e.target.selectedIndex).addClass("active");
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
	});

	$(document).on('scroll', function () {
		if ($(window).scrollTop() > 80 && $('header').hasClass('home-header')) {
			$('header.header-transparent').removeClass('home-header');
		} else if ($(window).scrollTop() <= 80 && !$('header').hasClass('home-header')) {
			$('header.header-transparent').addClass('home-header');
		}
	});

	$(".drop-icon").on("click", function (e) {
		e.preventDefault();
		$(this).hide();
		$(".close-icon").show();
		$(".header .right").show();
	});

	$(".close-icon").on("click", function (e) {
		e.preventDefault();
		$(this).hide();
		$(".drop-icon").show();
		$(".header .right").hide();
	});

	$(".drop-item > button").on("click", function () {
		$(this).closest(".drop-item").find(".drop-menu").slideToggle();
		$(this).toggleClass("opened");
	});


	$(".phone-number-input").inputmask({
		"mask": "+7 999-999-99-99",
		clearMaskOnLostFocus: false
	});

	$(".birth-date-input").inputmask({
		"mask": "99/99/9999",
		clearMaskOnLostFocus: false
	});

	$(".radio-buttons input").on("change", function (e) {
		if (e.target.value == 'no') {
			$("#resume-form .working-info input").addClass("ignorefield");
			$("#resume-form .working-info").hide();
		} else {
			$("#resume-form .working-info input").removeClass("ignorefield");
			$("#resume-form .working-info").show();
		}
	});


	$(".languages .add").on("click", function () {

		var li = `<li>
					<div class="select-wrap select-wrap2">
						<select class="language" required name="language">
						  <option></option>
						  <option value="2">Six Sigma2</option>
						  <option value="3">Six Sigma3</option>
						  <option value="4">Six Sigma4</option>
						  <option value="5">Six Sigma5</option>
						</select>
						<p class="error-msg">
							<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
							<span class="text">Язык заполнен неверно</span>
						</p>
					</div>
					<div class="select-wrap select-wrap2 level-select">
						<select class="level" required name="level">
						  <option></option>
						  <option value="2">Six Sigma2</option>
						  <option value="3">Six Sigma3</option>
						  <option value="4">Six Sigma4</option>
						  <option value="5">Six Sigma5</option>
						</select>
						<p class="error-msg">
							<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
							<span class="text">Уровень заполнен неверно</span>
						</p>
					</div>
					<button type="button" class="delete"><img src="img/delete-icon.svg" alt=""></button>
				</li>`;

		$(".languages .list").append(li);

		$('.select-wrap2 select.language').select2({
			placeholder: "Выберите язык",
			minimumResultsForSearch: -1
		});

		$('.select-wrap2 select.level').select2({
			placeholder: "Укажите уровень",
			minimumResultsForSearch: -1
		});

	});

	$(".programms .add").on("click", function () {

		var li = `<li>
					<div class="select-wrap select-wrap2">
						<select class="programm" required name="programm">
						  <option></option>
						  <option value="2">Six Sigma2</option>
						  <option value="3">Six Sigma3</option>
						  <option value="4">Six Sigma4</option>
						  <option value="5">Six Sigma5</option>
						</select>
						<p class="error-msg">
							<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
							<span class="text">Программа заполнена неверно</span>
						</p>
					</div>
					<button type="button" class="delete"><img src="img/delete-icon.svg" alt=""></button>
				</li>`;

		$(".programms .list").append(li);

		$('.select-wrap2 select.programm').select2({
			placeholder: "Выберите программу",
			minimumResultsForSearch: -1
		});

	});

	$(".education .add").on("click", function () {

		var li = `<li>
					<div class="top">
						<div class="select-wrap select-wrap2">
							<p class="label">Уровень</p>
							<select class="education-level" required name="education-level">
							  <option></option>
							  <option value="2">Six Sigma2</option>
							  <option value="3">Six Sigma3</option>
							  <option value="4">Six Sigma4</option>
							  <option value="5">Six Sigma5</option>
							</select>
							<p class="error-msg">
								<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
								<span class="text">Уровень заполнен неверно</span>
							</p>
						</div>
						<div class="input-wrap">
							<p class="label">Учебное заведение</p>
							<input type="text" placeholder="Введите наименование" name="institute" required>
							<p class="error-msg">
								<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
								<span class="text">Наименование заполнено неверно</span>
							</p>
						</div>
					</div>
					<div class="bottom">
						<div class="input-wrap">
							<p class="label">Факультет</p>
							<input type="text" placeholder="Введите факультет" name="faculty" required>
							<p class="error-msg">
								<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
								<span class="text">Факультет заполнен неверно</span>
							</p>
						</div>
						<div class="input-wrap date">
							<p class="label">Год окончания</p>
							<input type="text" placeholder="Введите дату" name="end-date" required>
							<p class="error-msg">
								<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
								<span class="text">Дата заполнена неверно</span>
							</p>
						</div>
					</div>
					<button type="button" class="delete"><img src="img/delete-icon.svg" alt=""></button>
				</li>`;

		$(".education .list").append(li);

		$('.select-wrap2 select.education-level').select2({
			placeholder: "Выберите уровень",
			minimumResultsForSearch: -1
		});

	});

	$(".working-info .add").on("click", function () {

		var li = `<li>
					<div class="input-wrap">
						<p class="label">Место работы</p>
						<input type="text" placeholder="Наименование компании" name="work-place" required>
						<p class="error-msg">
							<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
							<span class="text">Место работы заполнено неверно</span>
						</p>
					</div>
					<div class="years">
						<div class="input-wrap">
							<p class="label">Год работы</p>
							<input type="text" placeholder="От" name="work-year-start" required>
							<p class="error-msg">
								<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
								<span class="text">Год заполнен неверно</span>
							</p>
						</div>
						<div class="input-wrap">
							<input type="text" placeholder="До" name="work-year-end" required>
							<p class="error-msg">
								<span class="icon"><img src="img/danger-icon.svg" alt=""></span>
								<span class="text">Год заполнен неверно</span>
							</p>
						</div>
					</div>
					<div class="input-wrap">
						<p class="label">Квалифицированные навыки</p>
						<input type="text" placeholder="Опишите полученные навыки">
					</div>
					<div class="textarea-wrap">
						<p class="label">Дополнительная информация</p>
						<textarea placeholder="Введите дополнительную информацию"></textarea>
					</div>
					<button type="button" class="delete"><img src="img/delete-icon.svg" alt=""></button>
				</li>`;

		$(".working-info .list").append(li);

	});

	$(document).on("click", "#resume-form .delete", function () {
		$(this).closest("li").remove();
	});


	$("#resume-form").validate({
		ignore:".ignorefield",
		errorPlacement: function (error, element) {},
		rules: {
			one: {
				required: true
			},
		}
	});

	$('.select-wrap2 select').on('select2:select', function () {
		$(this).valid();
	});


	$('#resume-form').on('submit', function () {
		if (!$('#resume-form').valid()) {
			$('#resume-form .error-block').show();
			return false;
		} else {
			$('#resume-form .error-block').hide();
		}
	});


	$(document).ready(function ($) {
		$(".uploadlogo").change(function () {
			var filename = readURL(this);
			$(this).parent().children('span').html(filename);
		});

		function readURL(input) {
			var url = input.value;
			var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
			if (input.files && input.files[0] && (
					ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
				)) {
				var path = $(input).val();
				var filename = path.replace(/^.*\\/, "");
				return "" + filename;
			} else {
				$(input).val("");
				return "Only image/pdf formats are allowed!";
			}
		}
	});


});
