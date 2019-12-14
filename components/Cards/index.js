// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(article)
{
   let card = document.createElement('div');
   card.classList.add('card');

   let headline = document.createElement('div');
   headline.classList.add('headline');

   let author = document.createElement('div');
   author.classList.add('author');

   let container = document.createElement('div');
   container.classList.add('img-container');

   let img = document.createElement('img');
   let name = document.createElement('span');

   card.appendChild(headline);
   card.appendChild(author); 
   author.appendChild(container);
   container.appendChild(img);
   author.appendChild(name);   

   headline.textContent = article.headline;
   img.src = article.authorPhoto;
   name.textContent = article.authorName;  

   let cards = document.querySelector('.cards-container');
   cards.appendChild(card);
}




axios.get('https://lambda-times-backend.herokuapp.com/articles')
       
    .then( response => {
        
        let obj = response.data.articles;             
        var result = Object.entries(obj);  
        let total = result.length; 
        
        for(let i=0; i<total; i++) {
            
            let finalArr = result[i][1];               
            finalArr.forEach(article => {
            createCard(article);
            });

        }
        
    })
    .catch( err => {
        console.log("Error:", err);
    })
