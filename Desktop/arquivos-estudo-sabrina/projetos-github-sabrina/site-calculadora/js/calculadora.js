let screen = document.getElementById('calculator-screen');
let expression = '';
let buttonSound = document.getElementById('button-sound');

		function addToScreen(char) {
			expression += char;
			screen.innerHTML = expression;
		}

		function operatorClicked(operator) {
			expression += operator;
			screen.innerHTML = expression;
		}

		function percentClicked() {
			expression += '*0.01';
			screen.innerHTML = expression;
		}

		function clearScreen() {
			expression = '';
			screen.innerHTML = '';
		}

		function calculate() {
			try {
				let result = eval(expression);
				screen.innerHTML = result;
				expression = result;
			} catch (error) {
				screen.innerHTML = 'Erro';
			}
		}

        function playSound() {
			buttonSound.currentTime = 0;
			buttonSound.play();
		}