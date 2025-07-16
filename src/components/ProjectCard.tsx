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
import { Code, Sparkles, Zap } from "lucide-react";
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";

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
            <Badge
              variant="outline"
              className="text-xs border-purple-200 text-purple-700 bg-purple-50 group-hover:border-purple-300 group-hover:bg-purple-100 transition-all duration-300"
            >
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
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 hover:from-purple-100 hover:to-blue-100 border-0 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <Zap className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </DialogTrigger>
            {/* max-w-4xl === max-w-[896px] */}
            <DialogContent className="sm:max-w-4xl w-[90vw] h-[80vh] overflow-y-auto border-0 bg-white/95 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between text-2xl">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {project.Title}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-purple-200 text-purple-700 bg-purple-50"
                  >
                    {project.Period}
                  </Badge>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  No Description
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  {project.images?.map((image, imageIndex) => (
                    <div key={imageIndex} className="group overflow-hidden rounded-[8px] border-[1px] border-gray-200">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.Title} screenshot ${imageIndex + 1}`}
                        width={600}
                        height={192}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={imageIndex === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-3" />
                      Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.Overview}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-3" />
                      My Notes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.MyNotes}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-3" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.TechStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 border-0 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
