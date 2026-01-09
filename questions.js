// questions.js
// MitkoAI 0.6 – Categorized Question Engine (BIG + TIGHT)

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function deeper() {
  return pick([
    " Want to go deeper?",
    " I can explain this further.",
    " This topic goes much deeper.",
    ""
  ]);
}

export function handleQuestions(text) {
  const t = text.trim().toLowerCase();

  const QA = [

    /* ================= REALITY / EXISTENCE ================= */

    [/^what is (life|reality|existence|truth)\??$/, () =>
      pick([
        "These describe how we experience being alive.",
        "They are explored through philosophy and science.",
        "There is no single final answer."
      ]) + deeper()
    ],

    [/^what is the meaning of life\??$/, () =>
      pick([
        "Many believe meaning is created through purpose and growth.",
        "Meaning changes over time.",
        "Connection and contribution often create meaning."
      ]) + deeper()
    ],

    [/^is life (meaningless|worth it)\??$/, () =>
      pick([
        "Life can feel meaningless during hard periods.",
        "Meaning is often built, not discovered.",
        "Feeling this doesn’t define your future."
      ]) + deeper()
    ],

    /* ================= EMOTIONS / MENTAL ================= */

    [/^why (am i|do i feel) (sad|empty|lost|lonely|tired|anxious)\??$/, () =>
      pick([
        "These feelings often come from stress or disconnection.",
        "They are signals, not flaws.",
        "You’re not broken for feeling this way."
      ]) + deeper()
    ],

    [/^how do i (be happy|feel better|calm down|stop overthinking)\??$/, () =>
      pick([
        "Small consistent habits matter more than big changes.",
        "Reducing mental overload helps.",
        "Presence improves emotional clarity."
      ]) + deeper()
    ],

    [/^what is (happiness|confidence|self love)\??$/, () =>
      pick([
        "These develop over time, not instantly.",
        "They grow through self-acceptance and action.",
        "They are skills, not traits."
      ]) + deeper()
    ],

    /* ================= SELF IMPROVEMENT ================= */

    [/^how do i (improve|fix|change) my life\??$/, () =>
      pick([
        "Life changes through small consistent actions.",
        "Clarity comes before change.",
        "Progress is gradual."
      ]) + deeper()
    ],

    [/^how do i (get motivated|build discipline|stop procrastinating)\??$/, () =>
      pick([
        "Motivation often follows action.",
        "Lowering the starting effort helps.",
        "Discipline grows from routines."
      ]) + deeper()
    ],

    [/^how do i (build habits|stop bad habits)\??$/, () =>
      pick([
        "Habits form through repetition.",
        "Environment matters more than willpower.",
        "Consistency beats intensity."
      ]) + deeper()
    ],

    /* ================= SOCIAL / RELATIONSHIPS ================= */

    [/^how do i (make friends|talk to people|improve social skills)\??$/, () =>
      pick([
        "Listening matters more than talking.",
        "Practice builds confidence.",
        "Most people are focused on themselves."
      ]) + deeper()
    ],

    [/^why do people (feel lonely|compare themselves|seek validation)\??$/, () =>
      pick([
        "Humans naturally seek belonging.",
        "Comparison comes from insecurity.",
        "Connection reduces loneliness."
      ]) + deeper()
    ],

    /* ================= BRAIN / LEARNING ================= */

    [/^how does (the brain|memory|motivation|discipline) work\??$/, () =>
      pick([
        "These rely on neural connections.",
        "Repetition strengthens learning.",
        "The brain adapts over time."
      ]) + deeper()
    ],

    [/^how do i (learn faster|study better|get smarter)\??$/, () =>
      pick([
        "Active learning works best.",
        "Sleep and rest are critical.",
        "Understanding beats memorization."
      ]) + deeper()
    ],

    /* ================= MATH ================= */

    [/^what is (math|algebra|numbers)\??$/, () =>
      pick([
        "Math studies patterns and relationships.",
        "Math is a language of logic.",
        "Math models reality."
      ])
    ],

    [/^how much is (\d+)\s*([\+\-\*\/])\s*(\d+)\??$/, (m) =>
      String(eval(`${m[1]}${m[2]}${m[3]}`))
    ],

    /* ================= AI ================= */

    [/^what is (ai|artificial intelligence)\??$/, () =>
      pick([
        "AI is software that processes patterns.",
        "AI imitates certain problem-solving abilities.",
        "AI does not think like humans."
      ]) + deeper()
    ],

    [/^can ai (think|feel|be conscious)\??$/, () =>
      pick([
        "AI does not have awareness or emotions.",
        "AI follows logic, not intent.",
        "AI simulates understanding."
      ]) + deeper()
    ],

    [/^is ai (dangerous|safe|biased)\??$/, () =>
      pick([
        "AI depends on how it is designed and used.",
        "Bias can come from data.",
        "Oversight is important."
      ]) + deeper()
    ],

    /* ================= GAMES ================= */

    [/^what is (a )?(game|video game)\??$/, () =>
      pick([
        "A game is an interactive system with rules and goals.",
        "Games provide challenge and engagement.",
        "Games simulate experiences."
      ]) + deeper()
    ],

    [/^why do people play games\??$/, () =>
      pick([
        "For fun, creativity, or challenge.",
        "Games provide achievement.",
        "Games offer escape."
      ]) + deeper()
    ],

    /* ================= ROBLOX ================= */

    [/^what is roblox\??$/, () =>
      pick([
        "Roblox is a platform where users create and play games.",
        "Roblox mixes gaming and development.",
        "Roblox is community-driven."
      ]) + deeper()
    ],

    [/^is roblox safe\??$/, () =>
      pick([
        "Roblox can be safe with proper settings.",
        "Parental controls help.",
        "Online awareness matters."
      ]) + deeper()
    ],

    /* ================= MINECRAFT ================= */

    [/^what is minecraft\??$/, () =>
      pick([
        "Minecraft is a sandbox game focused on creativity.",
        "Minecraft allows building and exploration.",
        "Minecraft encourages experimentation."
      ]) + deeper()
    ],

    [/^why is minecraft popular\??$/, () =>
      pick([
        "Creative freedom keeps it popular.",
        "Mods extend gameplay.",
        "It appeals to all ages."
      ]) + deeper()
    ],

    /* ================= SPACE / UNIVERSE ================= */

    [/^are we alone in the universe\??$/, () =>
      pick([
        "There is no confirmed evidence yet.",
        "The universe is extremely large.",
        "The question remains open."
      ]) + deeper()
    ],

    [/^do aliens exist\??$/, () =>
      pick([
        "No proof yet, but it’s possible.",
        "Many scientists consider it plausible.",
        "We don’t know for sure."
      ]) + deeper()
    ],

    /* ================= SAFETY ================= */

    [/^how do i stay safe online\??$/, () =>
      pick([
        "Avoid sharing personal information.",
        "Be careful with links.",
        "Use strong passwords."
      ]) + deeper()
    ],

    /* ================= IDENTITY ================= */

    [/^who am i really\??$/, () =>
      pick([
        "Identity is shaped by choices and experiences.",
        "You define yourself over time.",
        "Identity is not fixed."
      ]) + deeper()
    ]
  ];

  for (const [pattern, reply] of QA) {
    if (pattern.test(t)) {
      return typeof reply === "function" ? reply() : reply;
    }
  }

  return "Sorry, I cannot understand this yet, I am still learning and trying to improve.";
}