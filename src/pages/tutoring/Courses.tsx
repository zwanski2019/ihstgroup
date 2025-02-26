
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Courses() {
  const categories = [
    {
      name: "Academic Subjects",
      courses: [
        {
          title: "Advanced Mathematics",
          level: "High School/University",
          duration: "12 weeks",
          format: "Online/Live Sessions"
        },
        {
          title: "Physics Fundamentals",
          level: "High School",
          duration: "10 weeks",
          format: "Online/Interactive"
        },
        {
          title: "Chemistry Lab",
          level: "University",
          duration: "16 weeks",
          format: "Hybrid"
        }
      ]
    },
    {
      name: "Language Courses",
      courses: [
        {
          title: "Business English",
          level: "Intermediate/Advanced",
          duration: "8 weeks",
          format: "Online/Group Sessions"
        },
        {
          title: "French for Beginners",
          level: "Beginner",
          duration: "12 weeks",
          format: "Online/Individual"
        }
      ]
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Courses</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore our comprehensive selection of courses
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <section key={index} className="space-y-6">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.courses.map((course, courseIndex) => (
                  <Card key={courseIndex}>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div>
                          <dt className="font-medium">Level</dt>
                          <dd className="text-muted-foreground">{course.level}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Duration</dt>
                          <dd className="text-muted-foreground">{course.duration}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Format</dt>
                          <dd className="text-muted-foreground">{course.format}</dd>
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
