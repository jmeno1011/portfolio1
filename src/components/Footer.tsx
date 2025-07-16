import { Code } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
