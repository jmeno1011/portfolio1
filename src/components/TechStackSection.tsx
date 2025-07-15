"use client"
import { useState } from 'react'
import { Button } from './ui/button'
import { TechSkill } from '@/types'
import TechSkillCard from './TechSkillCard'

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Tools",
  "Analytics",
  "Visualization",
  "Real-time",
  "AI",
]



const techSkills: TechSkill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 5, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", category: "Frontend", level: 5, color: "from-gray-700 to-gray-900" },
  // { name: "Vue.js", category: "Frontend", level: 4, color: "from-green-400 to-green-600" },
  { name: "TypeScript", category: "Frontend", level: 5, color: "from-blue-500 to-blue-700" },
  { name: "HTML", category: "Frontend", level: 5, color: "from-orange-400 to-orange-600" },
  { name: "CSS", category: "Frontend", level: 5, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", category: "Frontend", level: 5, color: "from-cyan-400 to-cyan-600" },

  // Backend
  { name: "Node.js", category: "Backend", level: 4, color: "from-green-500 to-green-700" },
  { name: "Python", category: "Backend", level: 4, color: "from-yellow-400 to-yellow-600" },
  // { name: "Django", category: "Backend", level: 3, color: "from-green-600 to-green-800" },
  { name: "Express", category: "Backend", level: 4, color: "from-gray-600 to-gray-800" },

  // Database
  // { name: "MongoDB", category: "Database", level: 2, color: "from-green-500 to-green-700" },
  // { name: "PostgreSQL", category: "Database", level: 2, color: "from-blue-500 to-blue-700" },
  { name: "MySQL", category: "Database", level: 2, color: "from-blue-500 to-blue-700" },
  { name: "Firebase", category: "Database", level: 2, color: "from-yellow-400 to-orange-500" },
  // { name: "Supabase", category: "Database", level: 1, color: "from-green-400 to-green-600" },

  // Tools & Others
  { name: "AWS EC2", category: "Cloud", level: 3, color: "from-orange-400 to-orange-600" },
  // { name: "Docker", category: "DevOps", level: 3, color: "from-blue-400 to-blue-600" },
  { name: "Git", category: "Tools", level: 4, color: "from-red-400 to-red-600" },
  { name: "Power BI", category: "Analytics", level: 1, color: "from-yellow-400 to-yellow-600" },
  { name: "Chart.js", category: "Visualization", level: 4, color: "from-pink-400 to-pink-600" },
  // { name: "Socket.io", category: "Real-time", level: 2, color: "from-gray-600 to-gray-800" },
  // { name: "WebRTC", category: "Real-time", level: 0, color: "from-purple-400 to-purple-600" },
  // { name: "OpenAI API", category: "AI", level: 1, color: "from-green-400 to-green-600" },
]

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSkills =
    selectedCategory === "All" ? techSkills : techSkills.filter((skill) => skill.category === selectedCategory)

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {"Technologies and tools I've mastered throughout my development journey. Each skill represents hands-on experience and continuous learning."}
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("All")}
            className={`transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-600"
            }`}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <TechSkillCard key={`${skill.name}-${selectedCategory}`} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}
