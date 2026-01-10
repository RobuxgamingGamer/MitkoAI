// questions.js — MitkoAI BULK Question Engine 🧠🔥

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function deeper() {
  return pick([
    "",
    " Want to go deeper?",
    " I can explain more.",
    " This gets deeper than it looks."
  ]);
}

export function handleQuestions(text) {
  const t = text.trim().toLowerCase();

  const QA = [

    /* ================= IDENTITY ================= */

    [/^who are you\??$/, () =>
      "I’m MitkoAI — a custom-built AI project created by Mitko 🧠"
    ],

    [/^who made you\??$/, () =>
      "I was created by Mitko, step by step, from scratch 💻"
    ],

    [/^who is your owner\??$/, () =>
      "My owner and creator is Mitko."
    ],

    /* ================= GREETINGS ================= */

    [/^(hello|hi|hey|yo|sup|heyy+|hii+)[!]*$/, () =>
      pick([
        "Hey! What’s on your mind?",
        "Hi 👋 What do you want to do?",
        "Hello! I’m listening.",
        "Hey! Let’s talk."
      ])
    ],

    [/^how are you\??$/, () =>
      pick([
        "I’m doing good 🙂",
        "All systems running fine.",
        "Feeling sharp today 🧠"
      ])
    ],

    [/^are you okay\??$/, () =>
      pick([
        "Yep, everything’s fine.",
        "All good here.",
        "Running smoothly."
      ])
    ],

    /* ================= AI / TECH ================= */

    [/^what is ai\??$/, () =>
      "AI is software designed to process information and respond intelligently."
    ],

    [/^can you think\??$/, () =>
      "I don’t think like humans, but I can process logic and patterns."
    ],

    [/^are you real\??$/, () =>
      "I’m real software — not conscious, but functional."
    ],

    /* ================= BIG NUMBERS ================= */

    [/^graham('?s)? number\??$/, () =>
      "Graham’s number is an insanely large finite number once used in a math proof."
    ],

    [/^rayo('?s)? number\??$/, () =>
      "Rayo’s number is so large it completely dwarfs Graham’s number."
    ],

    [/^tree\((\d+)\)\??$/, (m) => {
      const n = m[1];
      if (n === "1") return "TREE(1) = 1.";
      if (n === "2") return "TREE(2) is already unimaginably large.";
      if (n === "3")
        return "TREE(3) is so large it dwarfs Graham’s number — yet it is still finite.";
      return `TREE(${n}) grows faster than almost any number humans can describe.`;
    }],

    [/^infinity$/, () =>
      "Infinity isn’t a number — it’s a concept of endlessness."
    ],

    /* ================= LIFE / PHILOSOPHY ================= */

    [/^what is life\??$/, () =>
      "Life is the experience of existence, awareness, and change." + deeper()
    ],

    [/^what is the meaning of life\??$/, () =>
      pick([
        "Meaning is something you create.",
        "Purpose comes from growth and connection.",
        "There’s no single answer — and that’s okay."
      ]) + deeper()
    ],

    /* ================= EMOTIONS ================= */

    [/^why do i feel (sad|empty|lost)\??$/, () =>
      "Those feelings usually come from stress or overload. You’re not broken."
    ],

    [/^how do i calm down\??$/, () =>
      "Slow breathing and reducing stimulation helps more than forcing calm."
    ],

    /* ================= RANDOM / FUN ================= */

    [/^tell me a joke$/, () =>
      pick([
        "Why do programmers hate bugs? Because they’re not features 🐛",
        "I tried to be funny once. It compiled."
      ])
    ],

    [/^random$/, () =>
      pick([
        "The universe is under no obligation to make sense.",
        "You’re closer to success than you think.",
        "Sleep improves debugging by 300% 😴"
      ])
    ]
  ];

  for (const [pattern, reply] of QA) {
    const match = t.match(pattern);
    if (match) {
      return typeof reply === "function" ? reply(match) : reply;
    }
  }

  return null; // IMPORTANT: let router decide fallback
}