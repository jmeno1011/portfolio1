"use client";
import { useState, useEffect } from 'react';
import { Code, ExternalLink, FileText, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, text: "whltn8282@gmail.com", href: "mailto:whltn8282@gmail.com" },
  { icon: Phone, text: "+82 10-4024-3659" },
  { icon: MapPin, text: "Seoul, South Korea" },
];

const socialLinks = [
  { icon: Github, text: "GitHub", href: "https://github.com/jmeno1011", variant: "social" as const },
  { icon: ExternalLink, text: "LinkedIn", href: "https://www.linkedin.com/in/dohyoungkim1011/", variant: "social" as const },
  { icon: FileText, text: "Resume", href: "https://rust-report-764.notion.site/Do-Hyoung-Kim-1c2f277a746780829203e37c82f0ac8c", variant: "default" as const },
];

export default function Header() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  return (
    <header className="relative z-10 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transform transition-all duration-1000 ease-out ${
          headerVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Code className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Developer DO HYOUNG KIM
          </h1>
          <p className="text-xl text-gray-600 mb-6 font-medium">
            I love solving problems and building user-friendly experiences.
          </p>
          <p className="text-l mb-6 font-medium">
            <span className='text-purple-700'>Frontend developer with 4+ years</span> | <span className='text-emerald-600'>QA Engineer with 1+ years</span>
          </p>
          <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-500 mb-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center hover:text-purple-600 transition-colors duration-300">
                {item.href ? (
                  <a className="flex items-center" href={item.href}>
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.text}
                  </a>
                ) : (
                  <>
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.text}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant={link.variant}
                size="sm"
              >
                <a href={link.href} target="_blank" className="flex items-center">
                  <link.icon className="h-4 w-4 mr-2" />
                  {link.text}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
