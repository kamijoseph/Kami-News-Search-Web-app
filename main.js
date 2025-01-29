
import API_KEY from "./leen.js";

const apiKey = API_KEY;
const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try{
        const apiUrl = `
        https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles
    }
    catch(error) {
        console.error(`Error fetching News ${error}`);
    }
    return []
}

(async ()=> {
    try{
        const articles = await fetchRandomNews();
        displayBlog(articles)
    }
    catch(error) {
        console.error(`Error fetching News ${error}`);
    }
})