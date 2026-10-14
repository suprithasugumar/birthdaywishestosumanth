// ✿ EDIT EVERYTHING HERE ✿
// All words and photo paths for the website live in this one file.
// Share photos in chat and they can be placed into these named spaces.
// Until then, missing photos show a soft placeholder automatically.

import m14 from "@/assets/memory-14.jpg.asset.json";
import m32 from "@/assets/memory-32.jpg.asset.json";
import m8 from "@/assets/memory-8.jpg.asset.json";
import m7 from "@/assets/memory-7.jpg.asset.json";
import m11 from "@/assets/memory-11.jpg.asset.json";
import m9 from "@/assets/memory-9.jpg.asset.json";
import m10 from "@/assets/memory-10.jpg.asset.json";
import m5 from "@/assets/memory-5.jpg.asset.json";
import m35 from "@/assets/memory-35.jpg.asset.json";
import m39 from "@/assets/memory-39.jpg.asset.json";
import m30 from "@/assets/memory-30.jpg.asset.json";
import m31 from "@/assets/memory-31.jpg.asset.json";
import m15 from "@/assets/memory-15.jpg.asset.json";
import m18 from "@/assets/memory-18.jpg.asset.json";
import m19 from "@/assets/memory-19.jpg.asset.json";
import m36 from "@/assets/memory-36.jpg.asset.json";

export const content = {
  his: "Sumanth",
  her: "Supritha",
  age: 21,

  // Optional background music. Put an mp3 at /public/music/song.mp3 (never autoplays).
  music: "/music/song.mp3",

  opening: {
    tag: "Chapter 21",
    hint: "tap the envelope, my love",
    line: "Before you turn the pages — I want you to know every one was made thinking of you.",
  },

  hero: {
    subtitle: "A little scrapbook of you, of us, and of the year I learned what first love feels like.",
    photo: m15.url,
  },

  childhood: {
    title: "Before I knew you",
    note: "I wish I could have met this little boy. I would tell him that one day he would grow into the person who makes me feel the safest and most loved.",
    photos: [
      { src: m14.url, caption: "little you, already so lovable" },
      { src: m32.url, caption: "that smile hasn't changed" },
      { src: m8.url, caption: "a tiny chapter of my favourite story" },
      { src: m7.url, caption: "the world was already brighter with you" },
      { src: m11.url, caption: "a little star, long before I knew you" },
      { src: m9.url, caption: "small boy, such a big spirit" },
    ],
  },

  morePhotos: {
    title: "More pages of you",
    note: "Your childhood deserves more pages here. These little spaces are waiting for every version of you that I still get to discover.",
    photos: [
      { src: m31.url, caption: "already this charming? not fair" },
      { src: m10.url, caption: "all the little things that made you, you" },
      { src: m5.url, caption: "I wish I could have known every version" },
      { src: m35.url, caption: "a chapter before our hello" },
      { src: m39.url, caption: "little adventures, enormous dreams" },
      { src: m30.url, caption: "growing into the person I get to love" },
    ],
  },

  journey: [
    { when: "2024 · first year", title: "A common friend, a simple hello", text: "Someone introduced us in college like it was nothing. Neither of us knew it was the beginning of everything." },
    { when: "2024", title: "Best friends", text: "I talked, you listened — and you loved me so openly. Somehow, your expression and my quiet heart found their own perfect language." },
    { when: "2025", title: "The moment I knew", text: "When our alone time became my favourite time, and every little way you showed your love began to feel like home. That's when I realised — I love you." },
    { when: "now", title: "Still us", text: "My best friend became my first love. You say and show what you feel so beautifully; even when I struggle to do the same, my heart keeps choosing you every day." },
  ],

  gallery: [
    { src: m15.url, caption: "my favourite place: next to you" },
    { src: m18.url, caption: "an ordinary day, my extraordinary person" },
    { src: m19.url, caption: "us, in our own little world" },
    { src: m36.url, caption: "this is what home feels like" },
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

  surprises: {
    notes: [
      { title: "you miss me", text: "Put your hand over your heart. Somewhere, I'm loving you at this very same moment. The distance doesn't get a vote. — your Supritha" },
      { title: "today feels heavy", text: "You don't have to be the strong one every minute. Come as you are, tired heart and all. I am proud of you, even on the days you can't be proud of yourself." },
      { title: "you doubt yourself", text: "I wish you could borrow my eyes for a minute. You would see someone kind, capable, and so worth loving. Better, then better, then your very best — I'll be cheering for all of it." },
      { title: "we've had a little fight", text: "Even when my words come out wrong, I am still on your team. I'm sorry for the times I make my love hard to hear. Let's choose a softer hello, and begin again. Always us." },
    ],
    garden: ["For your patience with my quiet heart.", "For every time you love me out loud.", "For the best friend I found in you.", "For the person you're still becoming.", "For every ordinary tomorrow with you.", "For us. Again, and again, and again."],
    dream: "Nine or ten years from now… maybe it's our wedding day. I get to look at you and think: that's my best friend, my first love, my forever person. Until then, let's grow into our dreams, one tiny tomorrow at a time.",
    hug: "Come here, my tall boy. Imagine my arms around you, holding on a little longer than usual. No fixing anything. Just you, me, and a very tight hug. ♡",
  },

  ending: {
    title: "Twenty-one years of you",
    text: "and I'm just grateful I get to be part of the story now. Happy birthday, my love. You are so deeply, deeply loved.",
    photo: m36.url,
  },
};
