
const vsbig = document.querySelector('.vs-big');
const targetClass = document.querySelector('.versus div div');
const vsShow = document.querySelector('.versus h5');
const aiBox = document.querySelectorAll('.bg-grey.aiImage');
const humanBox = document.querySelectorAll('.bg-grey.playerImage');

let result = null;
function gameResult(ai, human) {
	if (human == ai) return result = 'DRAW';
	if (human == 'batu') return (ai == 'gunting') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
	if (human == 'kertas') return (ai == 'batu') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
	if (human == 'gunting') return (ai == 'kertas') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
}


function randomAi() {
	const ai = Math.random();
	if (ai < (1 / 3)) return 'batu';
	if (ai >= (1 / 3) && ai < (2 / 3)) return 'kertas';
	return 'gunting';
    
}

const human = document.querySelectorAll('.gamepic .player');
human.forEach(function (choice) {
	choice.addEventListener('click', function () {
		for (let i = 0; i < humanBox.length; i++) {
			humanBox[i].style.backgroundColor = '#9c835f';
		}

		if (result === null) {
			const aiChoose = randomAi();
			const humanChoose = choice.className.substr(7, 7);

			result = gameResult(aiChoose, humanChoose);

			if (humanChoose == 'batu') {
				humanBox[0].style.backgroundColor = '#c4c4c4';
                if (confirm("Anda Memilih Batu ya")) {
                    txt = "Tekan OK untuk melanjutkan!";
                  } else {
                    txt = "Tekan Cancel Untuk membatalkan!";
                }
			}
			else if (humanChoose == 'kertas') {
				humanBox[1].style.backgroundColor = '#c4c4c4';
                if (confirm("Anda Memilih kertas ya")) {
                    txt = "Tekan OK untuk melanjutkan!";
                  } else {
                    txt = "Tekan Cancel Untuk membatalkan!";
                }
			}
			else {
				humanBox[2].style.backgroundColor = '#c4c4c4';
                if (confirm("Anda Memilih Gunting ya")) {
                    txt = "Tekan OK untuk melanjutkan!";
                  } else {
                    txt = "Tekan Cancel Untuk membatalkan!";
                }
                
			}

			setTimeout(function () {
				vsbig.style.color = '#9c835f';
				targetClass.classList.add('result');

				vsShow.innerHTML = result;
				if (result == "DRAW") {
					vsShow.style.backgroundColor = '#225c0e';
				}
				else {
					vsShow.style.backgroundColor = '#4c9654';
				}
				if (aiChoose == 'batu') {
					aiBox[0].style.backgroundColor = '#c4c4c4';
				}
				else if (aiChoose == 'kertas') {
					aiBox[1].style.backgroundColor = '#c4c4c4';
				}
				else {
					aiBox[2].style.backgroundColor = '#c4c4c4';
				}
			}, 500);
		}
		else {
			alert('Silahkan Refress Dahulu');
		}
	});
});
const reset = document.querySelector('.refresh-game');
reset.addEventListener('click', function () {
	vsShow.innerHTML = '';
	targetClass.classList.remove('result');

	for (let i = 0; i < aiBox.length; i++) {
		humanBox[i].style.backgroundColor = '#9c835f';
		aiBox[i].style.backgroundColor = '#9c835f';
	}

	result = null;
});