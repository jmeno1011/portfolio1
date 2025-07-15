import TechStackSection from "@/components/TechStackSection";
import { Code } from "lucide-react";
import projects from "../../portfolio_projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div>
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
              &copy; 2024 John Developer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
