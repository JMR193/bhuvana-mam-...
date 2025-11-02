import React from 'react';

const skills = [
  { name: 'Ophthalmic Image Analysis', emoji: '👁️', level: '92%' },
  { name: 'AI for Disease Detection', emoji: '🤖', level: '88%' },
  { name: 'Computer Vision in Eye Care', emoji: '📸', level: '85%' },
  { name: 'Biomedical Data Interpretation', emoji: '📊', level: '90%' },
  { name: 'Clinical Research Collaboration', emoji: '🤝', level: '80%' },
];

const SkillsLearned: React.FC = () => {
  return (
    <section>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-8">Key Learnings</h2>
      <div className="space-y-6 max-w-lg mx-auto">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-base font-medium text-yellow-300">{skill.emoji} {skill.name}</span>
              <span className="text-sm font-medium text-yellow-300">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-purple-500 to-yellow-400 h-2.5 rounded-full animate-fill-bar"
                style={{ width: skill.level, animationDelay: `${index * 150 + 200}ms` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsLearned;