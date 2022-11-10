'use strict';
let puntiGioc = 0;
let puntiComp = 0;

function gioco() {
	let scelta = this.id;
	let sceltaPcVal = Math.floor(Math.random() * 3);
	let sceltaPc = '';
	let message = '';
	switch (sceltaPcVal) {
		case 0:
			sceltaPc = 'sasso';
			break;
		case 1:
			sceltaPc = 'carta';
			break;
		case 2:
			sceltaPc = 'forbice';
			break;
		default:
			sceltaPc = 'error';
			break;
	}
	if (scelta === sceltaPc) {
		message = 'Pari!';
	} else if (scelta === 'sasso') {
		sceltaPc === 'forbice'
			? (message = 'Hai vinto!')
			: (message = 'Hai perso!');
	} else if (scelta === 'carta') {
		sceltaPc === 'sasso'
			? (message = 'Hai vinto!')
			: (message = 'Hai perso!');
	} else if (scelta === 'forbice') {
		sceltaPc === 'carta'
			? (message = 'Hai vinto!')
			: (message = 'Hai perso!');
	}

	if (message !== 'Pari!')
		message === 'Hai vinto!' ? puntiGioc++ : puntiComp++;

	document.querySelector('.img-scelta-gioc').src = `image/${this.id}.png`;
	document.querySelector('.img-scelta-gioc').style.visibility = 'visible';
	document.querySelector('.img-scelta-pc').src = `image/${sceltaPc}.png`;
	document.querySelector('.img-scelta-pc').style.visibility = 'visible';
	document.querySelector('#vittoria h1').innerHTML = message;
	document.querySelector('#vittoria').style.visibility = 'visible';
	document.querySelector('.punteggio-gioc').innerHTML = puntiGioc;
	document.querySelector('.punteggio-pc').innerHTML = puntiComp;
}

function ricomincia() {
	puntiComp = 0;
	puntiGioc = 0;
	document.querySelector('#vittoria').style.visibility = 'hidden';
	document.querySelector('.punteggio-gioc').innerHTML = puntiGioc;
	document.querySelector('.punteggio-pc').innerHTML = puntiComp;
	document.querySelector('.img-scelta-gioc').style.visibility = 'hidden';
	document.querySelector('.img-scelta-pc').style.visibility = 'hidden';
}

document.querySelector('#sasso').onclick = gioco;
document.querySelector('#carta').onclick = gioco;
document.querySelector('#forbice').onclick = gioco;
document.querySelector('#ricomincia').onclick = ricomincia;
