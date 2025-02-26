
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "Math Tutoring",
      description: "Expert tutors for all levels of mathematics",
      subjects: ["Algebra", "Calculus", "Geometry", "Statistics"]
    },
    {
      title: "Science Courses",
      description: "Comprehensive courses in various scientific disciplines",
      subjects: ["Physics", "Chemistry", "Biology", "Environmental Science"]
    },
    {
      title: "Language Learning",
      description: "Master new languages with experienced instructors",
      subjects: ["English", "French", "Arabic", "German"]
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Online Tutoring</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized learning experiences for academic success
          </p>
          <Button asChild size="lg">
            <Link to="/tutoring/courses">Browse Our Courses</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.subjects.map((subject, subjectIndex) => (
                    <li key={subjectIndex} className="flex items-center">
                      <span className="mr-2">•</span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
