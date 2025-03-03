
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  const subjectCategories = [
    {
      title: t('categories.languagesLiterature'),
      subjects: [
        "Apprentissage des langues (anglais, espagnol, français, etc.)",
        "Littérature classique et moderne",
        "Grammaire et orthographe",
        "Rédaction et expression écrite"
      ]
    },
    {
      title: t('categories.mathematics'),
      subjects: [
        "Arithmétique",
        "Géométrie",
        "Algèbre",
        "Calcul mental",
        "Statistiques et probabilité"
      ]
    },
    {
      title: t('categories.sciences'),
      subjects: [
        "Biologie",
        "Chimie",
        "Physique",
        "Astronomie",
        "Sciences de la Terre"
      ]
    },
    {
      title: t('categories.technologyComputing'),
      subjects: [
        "Programmation (Python, Java, HTML, etc.)",
        "Cyber sécurité",
        "Développement web",
        "Intelligence artificielle",
        "Logiciels et outils numériques"
      ]
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">{t('ourServices')}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t('whatWeOffer')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {subjectCategories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {category.subjects.map((subject, subjectIndex) => (
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
