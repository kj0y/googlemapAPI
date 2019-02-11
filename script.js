var map;
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343};
	var storeLocation2 = {lat: 34.07215, lng: -118.24749};
	var storesCenter = {lat: 34.08763155, lng: -118.2869165};

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storesCenter,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});
	
	var popupContent = 'H+ Sport Hollywood<br>';
	    popupContent += '1750 Vine St<br>';
		popupContent += 'Los Angeles, CA';
	
	var popupContent2 = 'H+ Sport Hollywood<br>';
	    popupContent2 += '1000 Vin Scully Ave<br>';
	    popupContent2 += 'Los Angeles, CA';
	
	var infowindow = new google.maps.InfoWindow({
		content: popupContent
	});
		infowindow2 = new google.maps.InfoWindow({
		content: popupContent2
	});
	
	var marker = new google.maps.Marker({
		'position': storeLocation,
		'map': map,
		'title': 'H+ Sport in Hollywood (actually Capitol Records in real life)'
	});

	var marker2 = new google.maps.Marker({
		'position': storeLocation2,
		'map': map,
		'title': 'H+ Sport in Hollywood (actually Dodger Stadium in real life)'
	});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
		infowindow2.open(map, marker2);
	});
}