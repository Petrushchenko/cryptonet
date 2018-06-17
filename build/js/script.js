'use strict'
window.onload = function () {
	var h = document.querySelector('.header h1');

	animate(h, 'active');

	modal();
}

function animate(el, cl) {
	el.classList.add(cl);

}

function modal() {
	var btn = document.querySelector('.navigation__button');
	
	var dropdown = document.querySelector('.navigation__modal');

	var elements = document.querySelectorAll('.navigation__secondary li');

	var submt = document.querySelectorAll('input[name=submit]');
	
	var modal = document.querySelector('.modal');

	var templt = document.querySelector('#template_modal');

	var modalBtn = modal.querySelector('button');
		
	var counter = 0;
	btn.addEventListener('click', function () {
		
		if(counter % 2 == 0) {
			dropdown.classList.add("opened");
			counter++;

		} else {
			dropdown.classList.remove('opened');
			counter++;
		}	

	});

	insertEl(dropdown, elements);

	modal.appendChild(templt.content.cloneNode(true));

	submt.forEach(function(item) {
		console.log(item);
		item.addEventListener('click', function(e) {
			e.preventDefault();

			
				modal.classList.add('active');
				modal.querySelector('h2').classList.add('animate');
				document.body.style.overflow = 'hidden';
			
		});
	});

	modalBtn.addEventListener('click', function(e) {
		modal.classList.remove('active');
		document.body.style.overflow = 'auto';
	});

}


function insertEl(el, elToInsert) {
	for (var i = 0; i < elToInsert.length; i++) {
		el.appendChild(elToInsert[i].cloneNode(true) );
		
	}
};

