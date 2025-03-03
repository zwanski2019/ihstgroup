
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('mathTutoring'),
      description: t('mathTutoringDesc'),
      subjects: ["Algebra", "Calculus", "Geometry", "Statistics"]
    },
    {
      title: t('scienceCourses'),
      description: t('scienceCoursesDesc'),
      subjects: ["Physics", "Chemistry", "Biology", "Environmental Science"]
    },
    {
      title: t('languageLearning'),
      description: t('languageLearningDesc'),
      subjects: ["English", "French", "Arabic", "German"]
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{t('welcomeTutoring')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('personalizedLearning')}
          </p>
          <Button asChild size="lg">
            <Link to="/tutoring/courses">{t('browseCourses')}</Link>
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
