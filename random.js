const quotes = [
    {
      "quote": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "author": "Martin Luther King Jr."
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life.",
      "author": "Steve Jobs"
    },
    {
      "quote": "If you want to live a happy life, tie it to a goal, not to people or things.",
      "author": "Albert Einstein"
    },
    {
      "quote": "You only live once, but if you do it right, once is enough.",
      "author": "Mae West"
    },
    {
      "quote": "The purpose of our lives is to be happy.",
      "author": "Dalai Lama"
    }
  ]
  


document.getElementById('btn-quote').addEventListener('click',function(){

    const random = Math.floor(Math.random()*quotes.length);
    const quote = document.getElementById('title');
    const author = document.querySelector('#author');
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})