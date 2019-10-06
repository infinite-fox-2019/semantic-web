document.getElementById('view-button').innerHTML = 'Click Here';
document.getElementById('close-button').innerHTML = 'Close';
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let miaw = document.getElementById('miaw');
let kata = document.getElementById('kata');
let open = function() {
	miaw.style.display = 'block';
	kata.style.display = 'block';
	close.style.display = 'block';
};

let hide = function() {
	miaw.style.display = 'none';
	kata.style.display = 'none';
	close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

let textChange = function() {
	view.innerHTML = 'How To Use';
};
let textReturn = function() {
	view.innerHTML = 'Back';
};

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);

let doKlik = new Audio();
doKlik.src = 'keySound/1.C4.mp3';

let reKlik = new Audio();
reKlik.src = 'keySound/2.D4.mp3';

let miKlik = new Audio();
miKlik.src = 'keySound/3.E4.mp3';

let faKlik = new Audio();
faKlik.src = 'keySound/4.F4.mp3';

let solKlik = new Audio();
solKlik.src = 'keySound/5.G4.mp3';

let laKlik = new Audio();
laKlik.src = 'keySound/6.A4.mp3';

let siKlik = new Audio();
siKlik.src = 'keySound/7.B4.mp3';

let d0Klik = new Audio();
d0Klik.src = 'keySound/8.C5.mp3';

let re_Klik = new Audio();
re_Klik.src = 'keySound/9.Db4.mp3';

let mi_Klik = new Audio();
mi_Klik.src = 'keySound/10.Eb4.mp3';

let sol_Klik = new Audio();
sol_Klik.src = 'keySound/11.Gb4.mp3';

let la_Klik = new Audio();
la_Klik.src = 'keySound/12.Ab4.mp3';

let si_Klik = new Audio();
si_Klik.src = 'keySound/13.Bb4.mp3';

window.addEventListener('keydown', ({ keyCode }) => {
	// Press Q
	if (keyCode === 81) return doKlik.play();

	// Press W
	if (keyCode === 87) return reKlik.play();

	// Press E
	if (keyCode === 69) return miKlik.play();

	// Press R
	if (keyCode === 82) return faKlik.play();

	// Press T
	if (keyCode === 84) return solKlik.play();

	// Press Y
	if (keyCode === 89) return laKlik.play();

	// Press U
	if (keyCode === 85) return siKlik.play();

	// Press I
	if (keyCode === 73) return d0Klik.play();

	// Press 2
	if (keyCode === 50) return re_Klik.play();

	// Press 3
	if (keyCode === 51) return mi_Klik.play();

	// Press 5
	if (keyCode === 53) return sol_Klik.play();

	// Press 6
	if (keyCode === 54) return la_Klik.play();

	// Press 7
	if (keyCode === 55) return si_Klik.play();
});
