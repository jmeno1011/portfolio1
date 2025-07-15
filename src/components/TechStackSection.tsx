import { Button } from "./ui/button";

const categories = [
  "AWS Cloudfront",
  "AWS EC2",
  "AWS Lambda",
  "AWS RDS",
  "AWS S3",
  "ApexCharts",
  "Azure App services Web/Apps",
  "Azure Functions",
  "CSS",
  "ChartJS",
  "D3",
  "Express",
  "FCM",
  "Github-Actions CI/CD",
  "HTML",
  "Javascript",
  "MySQL",
  "NextJS_13",
  "Power BI",
  "Python",
  "React",
  "SWR",
  "Shadcn",
  "TailwindCss",
  "Tanstack-table",
  "Typescript",
  "Vite",
  "Webpack",
  "i18n",
  "vercel"
];

export default function TechStackSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {
            "Technologies and tools I've mastered throughout my development journey. Each skill represents hands-on experience and continuous learning."
          }
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={"default"}
            size="sm"
            className={
              "transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
            }
          >
            Full-Stack
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={"outline"}
              size="sm"
              className={
                "ransition-all duration-300 border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-600"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
