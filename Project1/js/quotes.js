// Array of Quotes with quote and authors.
const quotes = [
    {
        quote:'However difficult life may seem, there is always something you can do and succeed at.',
        author:'Stephen Hawking',
    },
    {
        quote:'A day without laughter is a day wasted.',
        author:'Charlie Chaplin',
    },
    {
        quote:'If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.',
        author:'J. K. Rowling',
    },
    {
        quote:'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.',
        author:'Martin Luther King, Jr.',
    },
    {
        quote:'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
        author:'Martin Luther King, Jr.',
    },
    {
        quote:'In the end, the love you take is equal to the love you make.',
        author:'Paul McCartney',
    },
    {
        quote:"If you don't know where you are going, any road will get you there.",
        author:'Lewis Carroll',
    },
    {
        quote:'The great aim of education is not knowledge but action.',
        author:'Herbert Spencer',
    },
    {
        quote:'To know, is to know that you know nothing. That is the meaning of true knowledge.',
        author:'Socrates',
    },
    {
        quote:'To Jesus Christ I commend my soul; Lord Jesus, receive my soul.',
        author:'Anne Boleyn',
    },
];

// Selecting tag from HTML. 
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Choosing quote randomly
const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];
// Changing text in the HTML
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;