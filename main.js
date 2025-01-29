
import API_KEY from "./leen.js";

const apiKey = API_KEY;
const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try{
        const apiUrl = `
        https://newsapi.org/v2/top-headlines?country=us&pageSize=14&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles
    }
    catch(error) {
        console.error(`Error fetching News ${error}`);
    }
    return []
}

function displayBlog(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) =>{
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "........." : article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDes = article.description.length > 68 ? article.description.slice(0, 68) + "........" : article.description;
        description.textContent = truncatedDes;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    })
}

(async ()=> {
    try{
        const articles = await fetchRandomNews();
        displayBlog(articles)
    }
    catch(error) {
        console.error(`Error fetching News ${error}`);
    }
})()