const gameListUl = document.querySelector('.game-list__list')
const searchInput = document.querySelector('.header__search')
let games = []

const addPositionsToList = gameTitles => {
	const gameTitlesArray = gameTitles.split('\n')

	gameTitlesArray.forEach(gameTitle => {
		const position = document.createElement('li')
		position.innerText = gameTitle
		position.classList.add('game-title')
		gameListUl.appendChild(position)
		games.push(position)
	})
}

const searchGames = e => {
	const text = e.target.value
	console.log(gameList.length)
	for (let index = 0; index < gameList.length; index++) {
		if (gameList[index].innerText.toLowerCase().indexOf(text.toLowerCase()) == -1) {
			gameList[index].style.display = 'none'
		} else {
			gameList[index].style.display = 'block'
		}
	}
}

const getPositionsFromTxTFile = txtPath => {
	const fileUrl = txtPath

	fetch(fileUrl)
		.then(r => r.text())
		.then(t => addPositionsToList(t))
		.catch(e => console.error("'There has been a problem with your fetch operation:', error"))
}
getPositionsFromTxTFile('doc/gameList')

const gameList = document.getElementsByClassName('game-title')

searchInput.addEventListener('input', searchGames)
