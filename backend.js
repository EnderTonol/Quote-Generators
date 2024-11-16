const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { quote: "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", author: "Marilyn Monroe" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "In three words I can sum up everything I’ve learned about life: It goes on.", author: "Robert Frost" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { quote: "What we think, we become.", author: "Buddha" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { quote: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { quote: "If life were predictable it would cease to be life and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "You define your own life. Don’t let other people write your script.", author: "Oprah Winfrey" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
    { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
    { quote: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi" }
];
  
function NextC(){
const RandomInt = Math.floor(Math.random() * 55)+ 0;
console.log("Index:", RandomInt);

const Quote = document.getElementById("quote");
const Author = document.getElementById("author");

Quote.innerText = quotes[RandomInt].quote;
Author.innerText = `-- ${quotes[RandomInt].author}`;

console.log("quote: " + quotes[RandomInt].quote)
console.log("Author: " + quotes[RandomInt].author)

}