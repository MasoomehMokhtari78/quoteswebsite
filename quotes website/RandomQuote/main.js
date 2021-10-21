quotes = [
    "“Be yourself; everyone else is already taken.”― Oscar Wilde",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
    "“To whom it may concern: It is springtime. It is late afternoon.” ― Kurt Vonnegut",
    "“Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.” ― Samuel Beckett",
    "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”― Albert Camus",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi",
    "“Without music, life would be a mistake.” ― Friedrich Nietzsche",
    "“And, when you want something, all the universe conspires in helping you to achieve it.”― Paulo Coelho",
    "“You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.” ― Harper Lee",
    "“Memories warm you up from the inside. But they also tear you apart.” ― Haruki Murakami",
    "“Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.” ― Fyodor Dostoevsky",
     "“And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.” ― Antoine de Saint-Exupéry",
     "“Do one thing every day that scares you.” ― Eleanor Roosevelt",
     "“Not all those who wander are lost.” ― J.R.R. Tolkien",
     `“The woods are lovely, dark and deep,   
     But I have promises to keep,   
     And miles to go before I sleep,   
     And miles to go before I sleep.” ― Robert Frost`,
]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

var index = getRndInteger(0,quotes.length)
console.log(quotes[index]);

var quoteBox = document.querySelector(".quote");
quoteBox.append(quotes[index])