"use client";

import React, { useState } from 'react';

const week1Curriculum = {
  Sophia: [
    "🌍 Intro to French: Learn basic greetings with audio support",
    "🧠 Mental Models: What is First Principles Thinking? + real-life example",
    "💼 Entrepreneur Challenge: Design your own smoothie stand",
    "🧬 Systems Thinking: Trace how a t-shirt is made (global supply chain)",
    "📣 Talk Lab: Record yourself telling a 1-minute story about your favorite place"
  ],
  Arthur: [
    "🎮 Simon Says logic game with patterns",
    "🌱 Eco Hero: Plant a seed in a cup and draw it",
    "💬 Story Building: Choose your own story with Mom/Dad",
    "🎨 World Cultures: Color the flag of Brazil",
    "🧘 Emotions Game: Match emoji faces to real feelings"
  ],
  Asher: [
    "🎵 Listen to music from 3 different cultures",
    "👁️ Watch colorful shape animations",
    "🤲 Texture play with 3 different safe materials",
    "🗣️ Hear the word 'hello' in 3 languages (EN, FR, AR)",
    "🧸 Peekaboo logic with toys and blanket"
  ]
};

export default function LearningApp() {
  const [selectedTab, setSelectedTab] = useState("Sophia");
  const [completed, setCompleted] = useState({ Sophia: false, Arthur: false, Asher: false });
  const [darkMode, setDarkMode] = useState(false);

  const speak = (text) => {
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
            onClick={() => setSelectedTab(name)}
          >
            {name} ({name === 'Sophia' ? '11' : name === 'Arthur' ? '5' : '8mo'})
          </button>
        ))}
      </div>

      <div className="grid gap-4">
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
