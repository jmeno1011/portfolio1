"use client"
import { TechSkill } from "@/types";
import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

interface TechSkillCardProps {
  skill: TechSkill;
  index: number;
}

export default function TechSkillCard({ skill, index }: TechSkillCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-white/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {skill.name}
          </h3>
          <Badge
            variant="outline"
            className="text-xs border-gray-200 text-gray-600 bg-gray-50 group-hover:border-gray-300 transition-all duration-300"
          >
            {skill.category}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Proficiency</span>
            <span className="text-gray-800 font-medium">{skill.level}/5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
              style={{
                width: isVisible ? `${(skill.level / 5) * 100}%` : "0%",
                transitionDelay: `${index * 100 + 300}ms`,
              }}
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      </div>
    </div>
  );
}
