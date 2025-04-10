"use client";

import React, { useState } from 'react';

type Child = "Sophia" | "Arthur" | "Asher";

const week1Curriculum: Record<Child, string[]> = {
  Sophia: [
    "🌍 Bonjour! Let's learn some French greetings:\n- Bonjour (Hello)\n- Merci (Thank you)\n- Comment ça va? (How are you?)\nPractice saying each one twice, slowly.",
    "🧠 First Principles Thinking: Break down a big problem like 'How do we make school better?' into simple truths. What do kids need? What wastes time? Write your thoughts in a journal.",
    "💼 Entrepreneur Challenge: Imagine your smoothie stand. What will you name it? What fruits will you mix? Draw your stand and write one line to describe it.",
    "🧬 Systems Thinking: How is a t-shirt made?\n1. Cotton grown on a farm → 2. Sent to factory → 3. Sewed → 4. Sent to store → 5. You buy it!\nDraw this flow as a chain of steps.",
    "📣 Talk Lab: Tell a story about your favorite place. Include who you were with, what you saw, and how you felt. Record yourself if you can!"
  ],
  Arthur: [
    "🎮 Simon Says: Play with someone. Try patterns like 'touch your nose, then hop'. Can you remember 4 steps in a row? Try to lead next!",
    "🌱 Eco Hero: Take a paper cup, add dirt, and plant a seed. Draw what it looks like today, and where it will be in 5 days.",
    "💬 Choose Your Own Story: Ask your grown-up to start a story. Then YOU decide what happens next. Example: 'A robot dog finds a...?'",
    "🎨 Flag of Brazil: Use green, yellow, blue, and white to color it. Talk about where Brazil is and one thing you'd want to see there.",
    "🧘 Emotions Game: Make faces in a mirror — happy, sad, angry, sleepy. Try guessing each other's faces. Which one is hardest to act?"
  ],
  Asher: [
    "🎵 Play 3 songs from different places — African drums, French lullaby, and Chinese zither. Watch how Asher moves or reacts.",
    "👁️ Colorful Shapes: Use an app or toy with bold shapes (circle, square, triangle). Name each one while he watches.",
    "🤲 Texture Time: Let Asher feel a soft cloth, crinkly paper, and a rubber ball. Describe each one. Which does he like most?",
    "🗣️ Say 'hello' in 3 languages: 'Hello' (English), 'Bonjour' (French), 'Marhaba' (Arabic). Repeat them slowly and clearly.",
    "🧸 Peekaboo: Use a soft toy and blanket to play. Watch for giggles and surprises. Say the toy's name each time you uncover it!"
  ]
};

export default function LearningApp() {
  const [selectedTab, setSelectedTab] = useState<Child>("Sophia");
  const [completed, setCompleted] = useState<Record<Child, boolean>>({ Sophia: false, Arthur: false, Asher: false });
  const [darkMode, setDarkMode] = useState(false);

  const speak: (text: string) => void = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Family Learning App - Week 1</h1>
        <label className="flex items-center gap-2 cursor-pointer">
          <span>🌞</span>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="accent-blue-500" />
          <span>🌜</span>
        </label>
      </div>

      <div className="flex gap-2 mb-4">
        {Object.keys(week1Curriculum).map((name) => (
          <button
            key={name}
            className={`px-4 py-2 rounded ${selectedTab === name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setSelectedTab(name as Child)}
          >
            {name} ({name === 'Sophia' ? '11' : name === 'Arthur' ? '5' : '8mo'})
          </button>
        ))}
      </div>

      <div className="grid gap-4 whitespace-pre-wrap">
        {week1Curriculum[selectedTab].map((task, idx) => (
          <div
            key={idx}
            className="border border-gray-400 rounded-lg p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => speak(task)}
          >
            {task}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setCompleted({ ...completed, [selectedTab]: true })}
          disabled={completed[selectedTab]}
          className={`mt-4 px-6 py-2 rounded font-bold ${
            completed[selectedTab] ? 'bg-gray-400 text-white' : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {completed[selectedTab] ? '✅ Completed' : 'Mark Week 1 as Complete'}
        </button>
      </div>
    </div>
  );
}
