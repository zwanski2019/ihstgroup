
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Tutors() {
  const { t } = useLanguage();

  const categories = [
    {
      subject: "Mathematics",
      tutors: [
        {
          name: "Dr. Sarah Johnson",
          specialization: "Advanced Mathematics",
          experience: "15 years",
          qualifications: "Ph.D. in Mathematics",
          languages: ["English", "French"],
          rating: 4.9
        },
        {
          name: "Prof. Ahmed Khalil",
          specialization: "Statistics & Calculus",
          experience: "12 years",
          qualifications: "Ph.D. in Applied Mathematics",
          languages: ["Arabic", "English", "French"],
          rating: 4.7
        }
      ]
    },
    {
      subject: "Sciences",
      tutors: [
        {
          name: "Prof. Michael Chen",
          specialization: "Physics",
          experience: "12 years",
          qualifications: "Ph.D. in Physics",
          languages: ["English", "Mandarin"],
          rating: 4.8
        },
        {
          name: "Dr. Leila Ben Salah",
          specialization: "Chemistry",
          experience: "10 years",
          qualifications: "Ph.D. in Chemistry",
          languages: ["Arabic", "French", "English"],
          rating: 4.6
        }
      ]
    },
    {
      subject: "Languages",
      tutors: [
        {
          name: "Dr. Mohamed Zwanski",
          specialization: "Business Communication",
          experience: "15 years",
          qualifications: "Ph.D. in Communication",
          languages: ["Arabic", "French", "English", "Spanish"],
          rating: 4.9
        }
      ]
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">{t('ourTutors')}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t('meetTutors')}
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <section key={index} className="space-y-6">
              <h2 className="text-2xl font-semibold">{category.subject}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.tutors.map((tutor, tutorIndex) => (
                  <Card key={tutorIndex} className="group hover:shadow-md transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {tutor.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{tutor.name}</CardTitle>
                        <p className="text-primary">{tutor.specialization}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-amber-500 font-medium mr-1">{tutor.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < Math.floor(tutor.rating) ? 'text-amber-500' : 'text-muted'}`} 
                                fill={i < Math.floor(tutor.rating) ? 'currentColor' : 'none'} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div>
                          <dt className="font-medium">{t('experience')}</dt>
                          <dd className="text-muted-foreground">{tutor.experience}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">{t('qualifications')}</dt>
                          <dd className="text-muted-foreground">{tutor.qualifications}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">{t('languages')}</dt>
                          <dd className="flex flex-wrap gap-1 mt-1">
                            {tutor.languages.map((language, i) => (
                              <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                                {language}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
