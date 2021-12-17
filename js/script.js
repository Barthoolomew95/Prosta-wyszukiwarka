const gameList = document.querySelectorAll('li')
const gameListUl = document.querySelector('ul')
const searchInput = document.querySelector('.header__search')

// const listposition = document.createElement('li')
// listposition.textContent = 'witcher 3'
// gameListUl.appendChild(listposition)

// const importListGameFromTxt = () => {
// 	const reader = new FileReader()
// 	reader.readAsText('./doc/gameList')
// 	console.log(reader.result)
// }
// importListGameFromTxt()
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

searchInput.addEventListener('input', searchGames)
