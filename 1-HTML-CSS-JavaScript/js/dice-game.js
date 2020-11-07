function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6 ) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if ((roll === 4) && (goldCoins > 0)) {
            goldCoins = goldCoins - 1;
            alert('You lost 1 gold coin. You now have ' + goldCoins + '.');
            continue;
        }

        if ((roll === 4) && (goldCoins === 0)) {
            alert('You would have lost 1 gold coin, but you are already broke!');
            continue;
        }

        if (roll < 5) {
            continue;
        }
        alert('Congrats, you win ' + roll + ' gold coins!')
        goldCoins += roll;
        alert('You have won a total of ' + goldCoins + ' gold coins!');
    }
    alert('You have won a final total of ' + goldCoins + ' gold coins from this game!');
}