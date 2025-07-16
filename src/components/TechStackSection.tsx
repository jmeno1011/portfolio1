import { Badge } from "./ui/badge";
import { techCategories } from "@/lib/tech-stack-data";

export default function TechStackSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {
            "Every skill here reflects something I’ve built, learned, and grown with. I’m always exploring new technologies to solve real problems."
          }
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge
            className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
          >
            Full-Stack
          </Badge>
          {techCategories.map((category) => (
            <Badge key={category} variant="tech-category" className="text-sm">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
