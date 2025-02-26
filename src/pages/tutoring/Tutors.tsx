
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Tutors() {
  const categories = [
    {
      subject: "Mathematics",
      tutors: [
        {
          name: "Dr. Sarah Johnson",
          specialization: "Advanced Mathematics",
          experience: "15 years",
          qualifications: "Ph.D. in Mathematics"
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
          qualifications: "Ph.D. in Physics"
        }
      ]
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Tutors</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Meet our experienced and qualified tutors
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <section key={index} className="space-y-6">
              <h2 className="text-2xl font-semibold">{category.subject}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.tutors.map((tutor, tutorIndex) => (
                  <Card key={tutorIndex}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>
                          {tutor.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle>{tutor.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div>
                          <dt className="font-medium">Specialization</dt>
                          <dd className="text-muted-foreground">{tutor.specialization}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Experience</dt>
                          <dd className="text-muted-foreground">{tutor.experience}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Qualifications</dt>
                          <dd className="text-muted-foreground">{tutor.qualifications}</dd>
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
