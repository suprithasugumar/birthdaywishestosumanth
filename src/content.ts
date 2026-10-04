// ✿ EDIT EVERYTHING HERE ✿
// All words and photo paths for the website live in this one file.
// To add photos: put them in the /public/photos folder and keep the same file names
// (or change the paths below). Missing photos show a soft placeholder automatically.

export const content = {
  his: "Sumanth",
  her: "Supritha",
  age: 21,

  // Optional background music. Put an mp3 at /public/music/song.mp3 (never autoplays).
  music: "/music/song.mp3",

  opening: {
    tag: "Chapter 21",
    hint: "tap the envelope, my love",
    line: "Before you scroll — I want you to know every page of this was made thinking of you.",
  },

  hero: {
    subtitle: "A little scrapbook of you, of us, and of the year I learned what first love feels like.",
    photo: "/photos/us-hero.jpg",
  },

  childhood: {
    title: "Before I knew you",
    note: "I wish I could have met this little boy. I think I would have talked his ears off, and he would have quietly let me.",
    photos: [
      { src: "/photos/baby-1.jpg", caption: "tiny Sumanth, already calm" },
      { src: "/photos/child-1.jpg", caption: "that smile hasn't changed" },
      { src: "/photos/child-2.jpg", caption: "future foodie, clearly" },
    ],
  },

  journey: [
    { when: "2024 · first year", title: "A common friend, a simple hello", text: "Someone introduced us in college like it was nothing. Neither of us knew it was the beginning of everything." },
    { when: "2024", title: "Best friends", text: "I talked, you listened. I was chaos, you were calm. Somehow, we fit — the tall quiet one and the short loud one." },
    { when: "2025", title: "The moment I knew", text: "When our alone time became my favourite time. When the comfort you gave me felt like home. That's when I realised — I love you." },
    { when: "now", title: "Still us", text: "My best friend became my first love. And I'm still choosing you, every single day." },
  ],

  gallery: [
    { src: "/photos/us-1.jpg", caption: "that one evening" },
    { src: "/photos/us-2.jpg", caption: "you, being tall" },
    { src: "/photos/us-3.jpg", caption: "me, being loud" },
    { src: "/photos/us-4.jpg", caption: "food, obviously" },
    { src: "/photos/us-5.jpg", caption: "my favourite face" },
    { src: "/photos/us-6.jpg", caption: "us, always" },
  ],

  // 21 reasons — one for each year. Change any you like!
  reasons: [
    "You listen to every word I say, even the ones that don't make sense.",
    "You stay calm when I'm a storm, and somehow I calm down too.",
    "You never let your ego stand between us.",
    "Your quiet is the most comfortable sound I know.",
    "You have to bend down to hug me, and you always do.",
    "You get genuinely happy about food, and it's adorable.",
    "You forgive my anger faster than I can say sorry.",
    "You make ordinary days feel soft.",
    "You remember the small things I mention once.",
    "You were my best friend before you were anything else.",
    "You let me be exactly who I am — loud, messy, me.",
    "Your face when you're trying not to laugh at me.",
    "You are handsome without even trying (stop it).",
    "You're easy-going in a way that makes life lighter.",
    "You make me feel safe without saying a word.",
    "You are patient with me, always.",
    "You share your food with me (sometimes).",
    "You never make me feel too much.",
    "Being alone with you is my favourite place.",
    "You are my first love, and you made it beautiful.",
    "Because you're you. That's the whole reason, really.",
  ],

  // Little hidden notes — found by tapping the floating flowers.
  secrets: [
    "psst… you're my favourite person.",
    "I still smile when your name pops up.",
    "this is your sign to hug me right now.",
    "I'd choose you in every lifetime.",
  ],

  // Shown when he presses and holds the heart.
  holdSecret: "You found it. I love you more than I ever know how to say out loud. 🤍",

  letter: {
    greeting: "My dearest Sumanth,",
    paragraphs: [
      "Happy 21st birthday. I've started this letter so many times, because how do you fit someone like you into a few lines?",
      "You came into my life so quietly. A friend of a friend, a hello in first year. And then, without either of us noticing, you became the person I wanted to tell everything to.",
      "We are such opposites — you're calm, I'm chaos. You listen, I talk. You let things go, and I hold on too tight. But with you, I never feel like too much. You make room for all of me.",
      "You're my first love. I didn't know love could feel this gentle, this safe, this much like coming home. Thank you for being patient with me, for every silent hug, for every time you chose us.",
      "I hope this year is as kind to you as you are to me. I'll be right here — talking too much, loving you even more.",
    ],
    signoff: "Forever yours,",
    name: "Supritha",
  },

  ending: {
    title: "Twenty-one years of you",
    text: "and I'm just grateful I get to be part of the story now. Happy birthday, my love. You are so deeply, deeply loved.",
    photo: "/photos/us-ending.jpg",
  },
};
