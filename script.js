const playerList = document.getElementById('playerList');

function addPlayer() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const score = parseInt(document.getElementById('score').value);

    if (firstName && lastName && country !== "Select country" && !isNaN(score)) {
        const playerEntry = document.createElement('div');
        playerEntry.classList.add('player-entry');

        const playerInfo = document.createElement('div');
        playerInfo.textContent = `${firstName} ${lastName} ${new Date().toLocaleDateString()} - ${country}`;

        const scoreDisplay = document.createElement('span');
        scoreDisplay.classList.add('player-score');
        scoreDisplay.textContent = score;

        const controls = document.createElement('div');
        controls.classList.add('score-controls');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.onclick = () => playerEntry.remove();

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-5';
        decreaseButton.onclick = () => {
            scoreDisplay.textContent = parseInt(scoreDisplay.textContent) - 5;
        };

        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+5';
        increaseButton.onclick = () => {
            scoreDisplay.textContent = parseInt(scoreDisplay.textContent) + 5;
        };

        controls.append(deleteButton, decreaseButton, increaseButton);
        playerEntry.append(playerInfo, scoreDisplay, controls);
        playerList.appendChild(playerEntry);

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('country').value = 'Select country';
        document.getElementById('score').value = '';
    } else {
        alert("Please fill in all fields correctly.");
    }
}
