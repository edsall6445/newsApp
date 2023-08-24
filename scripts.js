const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        
        displayNews(data.articles);
    } catch(err) {
        console.error(`There was an error`, err);
    }
}

function displayNews(articles) {

    for(let article of articles)
    {
        const bCard = document.createElement('div');
        bCard.classList.add('newsArticle');
        
        if(article.img) {
            const artImg = document.createElement('img');
            artImg.src = article.image;
            artImg.classList.add('card-img-top');
            artImg.alt = article.title;
            bCard.appendChild(artImg);

        }
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = article.title;
        
        const description = document.createElement('p');
        description.classList.add = ('card-content');
        description.textContent = article.description;

        
        const link = document.createElement('a');
        link.href = article.url;
        link.classList.add('btn', 'btn-primary');
        link.textContent = "Want to read more?";
        link.target = `_blank`;
        
        
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        
        bCard.appendChild(cardBody);

        const box = document.getElementById('news');
        box.appendChild(bCard);


    }
}


fetchNews();

