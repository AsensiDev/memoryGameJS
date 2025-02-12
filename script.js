document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
      {
        name: 'burguer',
        img: 'images/burguer.jpg'
      },
      {
        name: 'burguer',
        img: 'images/burguer.jpg'
      },
      {
        name: 'coffee',
        img: 'images/coffee.jpg'
      },
      {
        name: 'coffee',
        img: 'images/coffee.jpg'
      },
      {
        name: 'fish',
        img: 'images/fish.jpg'
      },
      {
        name: 'fish',
        img: 'images/fish.jpg'
      },
      {
        name: 'meat',
        img: 'images/meat.jpg'
      },
      {
        name: 'meat',
        img: 'images/meat.jpg'
      },
      {
        name: 'pasta',
        img: 'images/pasta.jpg'
      },
      {
        name: 'pasta',
        img: 'images/pasta.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    resultDisplay.textContent = 'Score: '
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = `Score: ${cardsWon.length}`
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
        resultDisplay.style.backgroundColor = 'green'
        resultDisplay.style.padding = '10px 25px'
        resultDisplay.style.color = 'white'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 1000)
      }
    }
  
    createBoard()
  })