import { PortfolioProject } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Zap } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ProjectDetailDialogProps {
  project: PortfolioProject;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold mb-3 text-lg flex items-center">
    <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-3" />
    {children}
  </h3>
);

export default function ProjectDetailDialog({ project }: ProjectDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
          <Zap className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl w-[90vw] h-[80vh] overflow-y-auto border-0 bg-white/95 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-2xl">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {project.Title}
            </span>
            <Badge variant="project-period">
              {project.Period}
            </Badge>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed view of {project.Title}
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
              <SectionTitle>Overview</SectionTitle>
              <p className="text-gray-600 leading-relaxed">
                {project.Overview}
              </p>
            </div>
            <div>
              <SectionTitle>My Notes</SectionTitle>
              <p className="text-gray-600 leading-relaxed">
                {project.MyNotes}
              </p>
            </div>
            <div>
              <SectionTitle>Tech Stack</SectionTitle>
              <div className="flex flex-wrap gap-3">
                {project.TechStack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="tech-stack-detail">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
