const rectangularCollision = ({ rectangle1, rectangle2 }) => {
	return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
			rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
			rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
			rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	)
}

const determineWinner = ({ player, enemy }) => {
	clearTimeout(timerId);
	if (player.health === enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Ничья!';
	} else if (player.health > enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Выиграл Player 1!';
	} else {
		document.querySelector('#displayText').innerHTML = 'Выиграл Player 2!';
	}
	document.querySelector('#displayText').style.display = 'flex';
}

const decreaseTimer = (timer) => {
	if (timer === 0) {
		determineWinner({ player, enemy });
	}

	if (timer >= 0) {
		timerId = setTimeout(() => {
			decreaseTimer(timer)
		}, 1000);
		document.querySelector('#timer').innerHTML = timer;
		console.log('timer', timer)
		timer -= 1;
	}
}