
const divRender = document.getElementById('featured-post-body');
const divAuthor = document.getElementById('featured-post-title');
const buttonRenderQuote = document.getElementById('button-fetch');


const fetchDummyJson = async () => {
    const fetchDummy = await fetch('https://dummyjson.com/quotes/random');
    const fetchDummyJson = await fetchDummy.json();

    
    divRender.innerHTML = fetchDummyJson.quote;
    divAuthor.innerHTML = fetchDummyJson.author;
};

buttonRenderQuote.addEventListener('click', fetchDummyJson);