const gameList = document.querySelectorAll('li')
const gameListUl = document.querySelector('ul')
const searchInput = document.querySelector('.header__search')

const addPositionsToList = gameTitle => {
	let position = document.createElement('li')
	position.innerText = gameTitle
	gameListUl.appendChild(position)
}

const searchGames = e => {
	const text = e.target.value
	gameList.forEach(element => {
		if (element.innerText.toLowerCase().indexOf(text.toLowerCase()) == -1) {
			element.style.display = 'none'
		} else {
			element.style.display = 'block'
		}
	})
}

const getPositionsFromTxTFile = txtPath => {
	const fileUrl = txtPath

	fetch(fileUrl)
		.then(r => r.text())
		.then(t => addPositionsToList(t))
}
// addPositionsToList()
getPositionsFromTxTFile('doc/gameList')
searchInput.addEventListener('input', searchGames)
