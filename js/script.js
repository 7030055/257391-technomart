function initialize() {
	{
		var e = 59.938969,
			c = 30.32304,
			t = {
				zoom: 17,
				center: new google.maps.LatLng(e, c),
				scrollwheel: !1,
				disableDefaultUI: !0
			},
			o = new google.maps.Map(document.querySelector(".map-script"), t),
			s = new google.maps.LatLng(e, c);
		new google.maps.Marker({
			position: s,
			map: o
		})
	}
}
var feedbackPopup = document.querySelector(".feedback"),
	feedbackButton = document.querySelector(".company-contact-btn"),
	feedbackClose = document.querySelector(".feedback-close"),
	feedbackCancel = document.querySelector(".feedback-cancel");
null !== feedbackButton && null !== feedbackClose && null !== feedbackCancel && (feedbackButton.addEventListener("click", function (e) {
	e.preventDefault(e), feedbackPopup.classList.add("show-block")
}), feedbackClose.addEventListener("click", function (e) {
	e.preventDefault(e), feedbackPopup.classList.remove("show-block")
}), feedbackCancel.addEventListener("click", function (e) {
	e.preventDefault(e), feedbackPopup.classList.remove("show-block")
}), window.addEventListener("keydown", function (e) {
	27 == e.keyCode && feedbackPopup.classList.contains("show-block") && feedbackPopup.classList.remove("show-block")
}));
var buyItemButtons = document.querySelectorAll(".goods-item-buy"),
	i, cartBlock = document.querySelector(".cart-notification"),
	cartClose = document.querySelector(".cart-notification-close"),
	cartCancel = document.querySelector(".cart-cancel-btn");
for (i = 0; i < buyItemButtons.length; ++i) buyItemButtons[i].addEventListener("click", function (e) {
	e.preventDefault(e), cartBlock.classList.add("show-block")
});
cartClose.addEventListener("click", function (e) {
	e.preventDefault(e), cartBlock.classList.remove("show-block")
}), cartCancel.addEventListener("click", function (e) {
	e.preventDefault(e), cartBlock.classList.remove("show-block")
}), window.addEventListener("keydown", function (e) {
	27 == e.keyCode && cartBlock.classList.contains("show-block") && cartBlock.classList.remove("show-block")
});
var mapBlock = document.querySelector(".map"),
	mapLink = document.querySelector(".company-contacts-map"),
	mapClose = document.querySelector(".map-close");
mapLink.addEventListener("click", function (e) {
	e.preventDefault(e), mapBlock.classList.add("show-block")
}), mapClose.addEventListener("click", function (e) {
	e.preventDefault(e), mapBlock.classList.remove("show-block")
}), window.addEventListener("keydown", function (e) {
	27 == e.keyCode && mapBlock.classList.contains("show-block") && mapBlock.classList.remove("show-block")
});

google.maps.event.addDomListener(mapLink, "click", initialize);
