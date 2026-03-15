const text = `Happy Birthday to my favourite person in this world ❤️

I honestly don’t even know where to start. Our journey together has been nothing less than a roller-coaster ride. From knowing each other just because humari mummiya dost thi to becoming friends, evolving into bestfriends to lovers, then bestfriends again and now as the stars have aligned perfectly, lovers again for hopefully the rest of our lives. And, I have loved every part of the journey. From being each other's first love and figuring out together what "dating" and being "girlfriend-boyfriend" actually means to now being in a mature relationship and figuring out life together. Thank you for always being with me every step of the way and I know I still may not be the perfect boyfriend and have a lot to learn but I promise to always keep you happy and walk alongside you through whatever path you choose.

You are the most beautiful, cute, kind and fun person I've ever met in my life. I love everything about you from your hair (you know i love open long hair), to your beautiful eyes, your amazing smile and your not-for-everyone but perfect-for-me sense of humour. Whenever you send me a random fit check (OMG i love whenever you doo) or I see your stories, I keep looking at the photos for a long time, wondering how can a person look so good in every dress 🫣🫣.

You somehow manage to make every normal day feel special. You know, maine specially tere messages ke liye whatsapp pe ek alag notification sound laga rakhi hai. Whenever I hear that sound, a smile comes on my face involuntarily and I stop whatever I'm doing to reply to your texts. Our video calls are absolutely my favourite time of the day and I feel there is something missing if a day goes by without talking to you. Listening to you talk (specially giving tea 😂), sharing our whole day's itenary with each other, playing games together and sleeping together on call are my favourite things to do.

There are so many instances when something happens and I feel ki "Agar Ishita yahan hoti toh she would've loved this". We are separated by this distance and I absolutely hate waiting 6 months to hug you, kiss you or even see your beautiful smile. But, I know it is worth the wait. I believe our bond is strong enough to last through these years and turn our relationship into something more meaningful.

You know maine socha tha ki ye letter mai handwritten likhke send karunga and birthday card wagera ka design, layout sab sochkar rakha tha but unfortunately time hi nahi mila is baar pura card banake and fir usko send karna ki wo 16th tak pahuch jaaye 😔. At the end, AI se help leni padi website banane ke liye (isi bahane html bhi sikh gaya). This design may be ChatGPT's but every word and feeling is mine.

Thank you for being you and more than that for being mine ❤️. I hope this year brings you everything you dream of. And I hope I get to be there for many more birthdays with you ❤️

Love you so sooooo muchhh and miss you bahut zyadaaaa 😘. Happy Birthday once again!`;

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typewriter").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

if(document.getElementById("typewriter")){
typeWriter();
}

function confetti() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}
