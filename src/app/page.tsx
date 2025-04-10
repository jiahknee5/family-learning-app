"use client";

// Family Learning App MVP - Week 1 Curriculum with Full Mobile Support, Dark Mode Toggle, and Voice Read-Aloud
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

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
  const [darkMode, setDarkMode] = useState(false);
  const [completed, setCompleted] = useState({ Sophia: false, Arthur: false, Asher: false });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const markComplete = (child) => setCompleted({ ...completed, [child]: true });
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Family Learning App - Week 1</h1>
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4" />
          <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
          <Moon className="w-4 h-4" />
        </div>
      </div>
      <Tabs defaultValue="Sophia">
        <TabsList className="flex flex-wrap overflow-x-auto">
          <TabsTrigger value="Sophia">Sophia (11)</TabsTrigger>
          <TabsTrigger value="Arthur">Arthur (5)</TabsTrigger>
          <TabsTrigger value="Asher">Asher (8mo)</TabsTrigger>
        </TabsList>
        {Object.entries(week1Curriculum).map(([name, tasks]) => (
          <TabsContent key={name} value={name}>
            <div className="grid gap-4 mt-4">
              {tasks.map((task, idx) => (
                <Card key={idx} className="cursor-pointer" onClick={() => speak(task)}>
                  <CardContent className="p-4">{task}</CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button
                onClick={() => markComplete(name)}
                disabled={completed[name]}
                variant={completed[name] ? 'outline' : 'default'}
              >
                {completed[name] ? '✅ Completed' : 'Mark Week 1 as Complete'}
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
