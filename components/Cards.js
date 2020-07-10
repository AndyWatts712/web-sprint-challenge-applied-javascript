// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function articleMaker(articleObj) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = articleObj.headline
    img.src = articleObj.authorPhoto
    authorName.textContent = articleObj.authorName

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(img)

    card.addEventListener('click', function (e) {
        console.log(e.target.textContent)
    })
    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (resp) {
        console.log(resp)

        resp.data.articles.bootstrap.forEach(articleInfo => {
            let article = articleMaker(articleInfo)
            const cardsContainer = document.querySelector('.cards-container')
            cardsContainer.appendChild(article)
        })
        resp.data.articles.javascript.forEach(articleInfo => {
            let article = articleMaker(articleInfo)
            const cardsContainer = document.querySelector('.cards-container')
            cardsContainer.appendChild(article)
        })
        resp.data.articles.jquery.forEach(articleInfo => {
            let article = articleMaker(articleInfo)
            const cardsContainer = document.querySelector('.cards-container')
            cardsContainer.appendChild(article)
        })
        resp.data.articles.node.forEach(articleInfo => {
            let article = articleMaker(articleInfo)
            const cardsContainer = document.querySelector('.cards-container')
            cardsContainer.appendChild(article)
        })
        resp.data.articles.technology.forEach(articleInfo => {
            let article = articleMaker(articleInfo)
            const cardsContainer = document.querySelector('.cards-container')
            cardsContainer.appendChild(article)
        })

    })

    // })
    .catch(function (err) {
        console.log(err)
    })

