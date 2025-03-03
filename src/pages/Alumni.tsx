
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Alumni() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Mays",
      age: "16 ans",
      testimonial: "Grâce à l'accompagnement du Centre, mes notes en mathématiques sont passées de 12 à 17/20 en quelques mois. J'ai maintenant plus confiance en mes capacités."
    },
    {
      name: "Youssef",
      age: "17 ans",
      testimonial: "Je suis passé de la moyenne en français à des résultats excellents. L'approche personnalisée m'a permis de surmonter mes difficultés et de progresser à mon rythme."
    }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">{t('ourAlumni')}</h1>
        
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('exceptionalPerformance')}</h2>
            <p className="text-muted-foreground">
              {t('performanceDescription')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('impressiveResults')}</h2>
            <p className="text-muted-foreground">
              {t('resultsDescription')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('followUpProgress')}</h2>
            <p className="text-muted-foreground">
              {t('progressDescription')}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li><span className="font-medium">{t('academicResults')} :</span> {t('academicResultsDetail')}</li>
              <li><span className="font-medium">{t('selfConfidence')} :</span> {t('selfConfidenceDetail')}</li>
              <li><span className="font-medium">{t('problemSolving')} :</span> {t('problemSolvingDetail')}</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              {t('potential')}
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('testimonials')}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <blockquote className="italic text-muted-foreground">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <p className="text-right mt-4 font-medium">{testimonial.name}, {testimonial.age}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 p-6 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-semibold">{t('joinUs')}</h2>
          <p className="text-muted-foreground">
            {t('joinUsDescription')}
          </p>
          <p className="font-medium">
            {t('contactToday')}
          </p>
        </section>
      </div>
    </Layout>
  );
}
