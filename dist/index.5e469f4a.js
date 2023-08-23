const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;
async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (err) {
        console.error(`There was an error`, err);
    }
}
function displayNews(articles) {
    for (let article of articles){
        const artDiv = document.createElement("div");
        artDiv.classList.add("newsArticle");
        const title = document.createElement("h2");
        title.textContent = article.title;
        artDiv.appendChild(title);
        const description = document.createElement("p");
        description.textContent = article.description;
        artDiv.appendChild(description);
        if (article.img) {
            const artImg = document.createElement("img");
            artImg.src = article.image;
            artDiv.appendChild("artImg");
        }
        const link = document.createElement("a");
        link.textContent = "Want to read more?";
        link.href = article.url;
        link.target = `_blank`;
        artDiv.appendChild(link);
        document.getElementById("news").appendChild(artDiv);
    }
}
fetchNews();

//# sourceMappingURL=index.5e469f4a.js.map
