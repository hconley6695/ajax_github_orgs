// Javascript Entry Point

import $ from 'jquery';

// var jddata = 'https://api.github.com/users/jisaacks/orgs?access_token=8ab15760ece58f504e1b75ac6ff686667a8c6186';

var request = $.ajax({
	url: 'https://api.github.com/users/jisaacks/orgs?access_token=125490902910c1e6da8b8fe3fa71c18fa2f66575',
	dataType: 'json',
	method: 'get'
});


request.then(function(orgs) {
	//console.log(orgs);
	var $company = $('.organizations');
	
	orgs.forEach(function(org){
	$company.append(`<li> <img src="${org.avatar_url}" height="80" width="80">  ${org.login}</li>`);
	})

});





	// declares variable for html ul list, grabbing ul from html index
	// var $avatar = $('.organizations');
	// takes html and puts into var for jquery
	// org.forEach(function({login})
	// for each li in this ul list, take the avatar_url and list it
	// $avatar.append(`<li>${login}</li>`);

//put the login from data as well


// $ajax(jddata).then(function(org) {
	//declares variable for html ul list, grabbing ul from html index
	// var $avatar = $('.organizations');
	//takes html and puts into var for jquery
	// org.forEach(function({avatar_url})
	//for each li in this ul list, take the avatar_url and list it
	// $avatar.append(`<li>${avatar_url}</li>`);
// );