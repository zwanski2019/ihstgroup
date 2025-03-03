
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Alumni() {
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
        <h1 className="text-4xl font-bold tracking-tight">Nos Anciens Élèves</h1>
        
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Des Performances Exceptionnelles</h2>
            <p className="text-muted-foreground">
              Au sein de notre Centre de Support Éducatif, nous sommes fiers de compter parmi nos élèves 
              certains des meilleurs talents. Grâce à notre méthode d'enseignement individualisée et à 
              l'accompagnement personnalisé que nous offrons, nos élèves progressent de manière remarquable, 
              tant sur le plan académique que personnel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Nos Résultats Impressionnants !</h2>
            <p className="text-muted-foreground">
              Les notes de nos élèves témoignent de leur engagement et des progrès accomplis. 
              En moyenne, nos élèves améliorent leurs résultats significativement en quelques mois seulement. 
              Que ce soit en mathématiques, en sciences, en langues ou dans d'autres disciplines, 
              leurs notes s'élèvent continuellement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Suivi et Progrès</h2>
            <p className="text-muted-foreground">
              Nous suivons de près l'évolution de chaque élève et nous mesurons régulièrement leur 
              avancement à travers des évaluations personnalisées qui permettent de voir leurs points 
              forts et les domaines à renforcer. Grâce à cette approche, nous avons pu observer des 
              améliorations significatives dans :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li><span className="font-medium">Les résultats scolaires :</span> Une hausse constante des moyennes de nos élèves.</li>
              <li><span className="font-medium">La confiance en soi :</span> Les élèves deviennent plus autonomes et motivés.</li>
              <li><span className="font-medium">Les compétences en résolution de problèmes :</span> Ils acquièrent des outils solides pour aborder les défis scolaires.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Nous sommes convaincus que chaque élève a le potentiel de réussir, et nous mettons tout en œuvre 
              pour l'aider à atteindre ses objectifs. Nos résultats en témoignent : les élèves de notre centre 
              se classent régulièrement parmi les meilleurs de leur niveau.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Témoignages</h2>
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
          <h2 className="text-2xl font-semibold">Rejoignez-nous !</h2>
          <p className="text-muted-foreground">
            Nous sommes impatients de vous aider à atteindre votre plein potentiel. 
            Venez découvrir comment nous pouvons vous accompagner dans votre parcours éducatif.
          </p>
          <p className="font-medium">
            Contactez-nous dès aujourd'hui pour garantir vos places et commencez à voir la différence !
          </p>
        </section>
      </div>
    </Layout>
  );
}
