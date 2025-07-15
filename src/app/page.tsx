"use client";
import TechStackSection from "@/components/TechStackSection";
import { Code, ExternalLink, FileText, Github, Mail, MapPin, Phone } from "lucide-react";
import projects from "../../portfolio_projects.json";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    setHeaderVisible(true)
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transform transition-all duration-1000 ease-out ${headerVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
        >
          <div className="text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              Developer KIM DO HYOUNG
            </h1>
            <p className="text-xl text-gray-600 mb-6 font-medium">
              Solving problems with empathy, building for real users.
            </p>
            <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center hover:text-purple-600 transition-colors duration-300">
                <a className="flex items-center" href="mailto:whltn8282@gmail.com"><Mail className="h-4 w-4 mr-2" />
                  whltn8282@gmail.com</a>
              </div>
              <div className="flex items-center hover:text-purple-600 transition-colors duration-300">
                <Phone className="h-4 w-4 mr-2" />
                +82 10-4024-3659
              </div>
              <div className="flex items-center hover:text-purple-600 transition-colors duration-300">
                <MapPin className="h-4 w-4 mr-2" />
                Seoul, South Korea
              </div>

            </div>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg bg-transparent"
              >
                <a href="https://github.com/jmeno1011" target="_blank" className="flex items-center" >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg bg-transparent"
              >
                <a href="https://www.linkedin.com/in/dohyoungkim1011/" target="_blank" className="flex items-center" ><ExternalLink className="h-4 w-4 mr-2" />
                  LinkedIn</a>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a className="flex items-center" href="https://rust-report-764.notion.site/Do-Hyoung-Kim-1c2f277a746780829203e37c82f0ac8c" target="_blank">
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {
              "Here are some of the projects I've worked on, showcasing my journey as a developer and the technologies I've mastered along the way. Each project represents a unique challenge and learning experience."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Developer KIM DO HYOUNG
              </span>
            </div>
            <p className="text-gray-500 mb-4">
              Crafting digital experiences with passion and precision
            </p>
            <p className="text-sm text-gray-400">
              &copy; 2025 Developer KIM DO HYOUNG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
