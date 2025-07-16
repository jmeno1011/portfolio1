"use client"
import { PortfolioProject } from "@/types";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ImageGallery from './ImageGallery';
import { Badge } from "./ui/badge";
import { Code, Sparkles } from "lucide-react";
import ProjectDetailDialog from "./ProjectDetailDialog";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <Card className="h-full flex flex-col group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-2 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
              {project.Title}
            </CardTitle>
            <Badge variant="project-period">
              {project.Period}
            </Badge>
          </div>
          <CardDescription className="text-sm text-gray-600 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
            {project.Overview}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col relative z-10">
          <ImageGallery images={project.images} projectTitle={project.Title} />

          <div className="mt-6 flex-1">
            <div className="flex items-center mb-2">
              <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
              <h4 className="font-semibold text-sm text-gray-800">My Notes</h4>
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2">
              {project.MyNotes}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center mb-3">
              <Code className="h-4 w-4 text-blue-500 mr-2" />
              <h4 className="font-semibold text-sm text-gray-800">
                Tech Stack
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.TechStack.map((tech, techIndex) => (
                <Badge key={techIndex} variant="tech-stack">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <ProjectDetailDialog project={project} />
        </CardContent>
      </Card>
    </div>
  );
}
