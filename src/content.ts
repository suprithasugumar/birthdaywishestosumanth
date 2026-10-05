// ✿ EDIT EVERYTHING HERE ✿
// All words and photo paths for the website live in this one file.
// Share photos in chat and they can be placed into these named spaces.
// Until then, missing photos show a soft placeholder automatically.

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
    note: "I wish I could have met this little boy. I would tell him that one day he would grow into the person who makes me feel the safest and most loved.",
    photos: [
      { src: "/photos/baby-1.jpg", caption: "the sweetest beginning" },
      { src: "/photos/child-1.jpg", caption: "that smile hasn't changed" },
      { src: "/photos/child-2.jpg", caption: "little you, already so lovable" },
      { src: "/photos/child-3.jpg", caption: "the same bright eyes I love now" },
      { src: "/photos/child-4.jpg", caption: "growing into my favourite person" },
      { src: "/photos/child-5.jpg", caption: "I wish I knew you then, too" },
    ],
  },

  morePhotos: {
    title: "More pages of you",
    note: "Your childhood deserves more pages here. These little spaces are waiting for every version of you that I still get to discover.",
    photos: [
      { src: "/photos/child-6.jpg", caption: "one tiny memory" },
      { src: "/photos/child-7.jpg", caption: "a chapter before us" },
      { src: "/photos/child-8.jpg", caption: "the boy behind your smile" },
      { src: "/photos/child-9.jpg", caption: "another piece of your story" },
    ],
  },

  journey: [
    { when: "2024 · first year", title: "A common friend, a simple hello", text: "Someone introduced us in college like it was nothing. Neither of us knew it was the beginning of everything." },
    { when: "2024", title: "Best friends", text: "I talked, you listened — and you loved me so openly. Somehow, your expression and my quiet heart found their own perfect language." },
    { when: "2025", title: "The moment I knew", text: "When our alone time became my favourite time, and every little way you showed your love began to feel like home. That's when I realised — I love you." },
    { when: "now", title: "Still us", text: "My best friend became my first love. You say and show what you feel so beautifully; even when I struggle to do the same, my heart keeps choosing you every day." },
  ],

  gallery: [
    { src: "/photos/us-1.jpg", caption: "that one evening" },
    { src: "/photos/us-2.jpg", caption: "you, being tall" },
    { src: "/photos/us-3.jpg", caption: "me, being loud" },
    { src: "/photos/us-4.jpg", caption: "one of our little moments" },
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
    "You express your love so openly that I never have to wonder how you feel.",
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
    "You make me feel chosen in all the little ways that matter.",
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
      "You love me out loud. You say it, show it, and make me feel it in a hundred little ways. I know I don't always express my love as much as you do, and I'm sorry for the moments when my quietness made my heart hard to read. Please know it has always been full of you.",
      "You're my first love. I didn't know love could feel this gentle, this safe, this much like coming home. Thank you for being patient with me and for never making me guess how loved I am. I promise to try harder to say it, show it, and love you out loud too.",
      "You are already wonderful, but I know you will keep becoming better, then better, and somehow the very best version of yourself. I can't wait to stand beside every version of you.",
      "Maybe nine or ten years from now, after all our growing and dreaming, we'll get married and build our own happy little life. I picture us still laughing, still choosing each other, and still feeling lucky that a simple hello became forever.",
      "I hope this year is as kind to you as you are to me. I'll be right here — learning to express more, loving you more than my words know how to hold.",
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
