
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">À Propos de Nous</h1>
        
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">Qui Sommes-Nous</TabsTrigger>
            <TabsTrigger value="mission">Notre Mission</TabsTrigger>
            <TabsTrigger value="location">Localisation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Qui Sommes-Nous ?</h2>
            <p className="text-muted-foreground">
              Nous sommes un Centre de support éducatif dédié à accompagner les écoles, qu'elles soient internationales 
              ou étatiques, dans l'amélioration de la qualité de leur enseignement. Notre mission est de fournir des 
              solutions pédagogiques sur mesure, des ressources et des formations afin de soutenir les enseignants 
              et les étudiants dans leur développement et leur réussite.
            </p>
            <h2 className="text-2xl font-semibold mb-4 mt-6">International House of Sciences</h2>
            <p className="text-muted-foreground">
              International House of Sciences est un centre de support éducatif de premier plan à Lac 1, Tunis,
              dédié à fournir des solutions éducatives complètes et des services de conseil aux entreprises.
              Établi en 2021, nous sommes rapidement devenus un nom de confiance dans l'excellence éducative.
            </p>
          </TabsContent>
          
          <TabsContent value="mission" className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground">
              Autonomiser les étudiants et les éducateurs grâce à des solutions d'apprentissage personnalisées 
              tout en fournissant des services de conseil aux entreprises innovants aux organisations cherchant 
              la croissance et l'excellence.
            </p>
            <h2 className="text-2xl font-semibold mb-4 mt-6">Que Fournissons-Nous ?</h2>
            <p className="text-muted-foreground">
              Nous offrons une large gamme de services et de solutions pour répondre aux besoins des écoles 
              internationales et étatiques : CAMBRIDGE, Système Français
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium">Des formations professionnelles :</span> Des programmes de formation 
                pour les enseignants et le personnel éducatif, afin d'améliorer les pratiques pédagogiques et 
                d'intégrer les nouvelles technologies et méthodes d'enseignement.
              </li>
              <li>
                <span className="font-medium">Un support pédagogique :</span> Des ressources et des outils adaptés 
                pour aider à l'élaboration de programmes éducatifs de qualité, en tenant compte des besoins 
                spécifique étudient, qu'il s'agisse de l'adaptation de stratégies pédagogiques ou de la gestion 
                de classes multilingues et multiculturelles.
              </li>
              <li>
                <span className="font-medium">Un soutien aux élèves :</span> Des programmes d'accompagnement 
                individualisés pour les élèves ayant des besoins spécifiques, afin de leur assurer un environnement 
                d'apprentissage optimal.
              </li>
            </ul>
          </TabsContent>
          
          <TabsContent value="location" className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Où Sommes-Nous ?</h2>
            <p className="text-muted-foreground">
              Nous sommes situés aux Berges des Lac, Tunis. Vous pouvez également nous rendre visite durant 
              nos heures d'ouverture, nous sommes disponibles 7 jours/7 de 10h à 20h.
            </p>
            <div className="mt-4">
              <h3 className="font-medium">Heures d'ouverture</h3>
              <p className="text-muted-foreground">7 jours/7 de 10h à 20h</p>
            </div>
          </TabsContent>
        </Tabs>

        <section className="space-y-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Nos Programmes</h2>
          <p className="text-muted-foreground">
            Nous vous proposons :
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Plateformes d'apprentissage en ligne :</h3>
              <p className="text-muted-foreground">
                Google Classroom : Une plateforme gratuite pour gérer les tâches, organiser les cours et faciliter 
                la communication entre enseignants et élèves.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Réservez une séance en ligne ?</h3>
              <p className="text-muted-foreground">
                Visitez notre page de réservation sur votre site, sélectionnez le type de séance que vous souhaitez 
                réserver, remplissez vos informations personnelles et effectuez le paiement.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Moyens de paiement</h3>
              <p className="text-muted-foreground">
                Grâce à notre système fluide et efficace, vous pouvez également payer en toute sécurité 
                vos séances en ligne via:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>Carte Bancaire</li>
                <li>Carte E Dinar Smart</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Après la réservation, un email de confirmation automatique vous sera envoyé en un clin d'œil!
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
