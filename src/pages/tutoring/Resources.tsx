
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Resources() {
  const { t } = useLanguage();
  
  const categories = [
    {
      title: t('studyMaterials'),
      items: ["Practice Tests", "Video Lectures", "Interactive Exercises", "Study Guides"]
    },
    {
      title: t('tools'),
      items: ["Scientific Calculator", "Formula Sheet", "Writing Guidelines", "Citation Tools"]
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">{t('learningResources')}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t('accessResources')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="mr-2">•</span>
                      {item}
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
