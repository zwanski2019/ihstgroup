
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const subjectCategories = [
    {
      title: "Langues et Littérature",
      subjects: [
        "Apprentissage des langues (anglais, espagnol, français, etc.)",
        "Littérature classique et moderne",
        "Grammaire et orthographe",
        "Rédaction et expression écrite"
      ]
    },
    {
      title: "Mathématiques",
      subjects: [
        "Arithmétique",
        "Géométrie",
        "Algèbre",
        "Calcul mental",
        "Statistiques et probabilité"
      ]
    },
    {
      title: "Sciences",
      subjects: [
        "Biologie",
        "Chimie",
        "Physique",
        "Astronomie",
        "Sciences de la Terre"
      ]
    },
    {
      title: "Technologie et Informatique",
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
          <h1 className="text-4xl font-bold tracking-tight">Nos Services</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Qu'est-ce que nous offrons à nos chers étudiants ?
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">
            Nous offrons une panoplie de prestations, selon notre public cible (enfants, étudiants, adultes, 
            professionnels, etc.). Ces sujets peuvent être adaptés pour différents niveaux, du primaire à 
            l'université, ou même pour des formations professionnelles. Le contenu peut aussi inclure des 
            outils interactifs, des quiz, des vidéos, et des forums de discussion pour engager les utilisateurs.
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
