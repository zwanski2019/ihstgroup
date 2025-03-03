import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Clock,
  Search,
  Star,
  Target,
  Users
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Courses() {
  const { t } = useLanguage();
  
  const categories = [
    {
      name: "Academic",
      icon: BookOpen,
      count: 45,
      color: "bg-blue-100"
    },
    {
      name: "Languages",
      icon: Users,
      count: 32,
      color: "bg-green-100"
    },
    {
      name: "Science",
      icon: Target,
      count: 28,
      color: "bg-amber-100"
    },
    {
      name: "Mathematics",
      icon: BookOpen,
      count: 24,
      color: "bg-red-100"
    },
    {
      name: "Engineering",
      icon: Target,
      count: 19,
      color: "bg-purple-100"
    },
    {
      name: "Computer Science",
      icon: BookOpen,
      count: 22,
      color: "bg-teal-100"
    }
  ];

  const featuredCourses = [
    {
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      level: "Advanced",
      duration: "12 weeks",
      format: "Online/Live Sessions",
      rating: 4.9,
      students: 856,
      image: null
    },
    {
      title: "Physics Fundamentals",
      instructor: "Prof. Michael Chen",
      level: "High School",
      duration: "10 weeks",
      format: "Online/Interactive",
      rating: 4.7,
      students: 642,
      image: null
    },
    {
      title: "Chemistry Lab",
      instructor: "Dr. Emily Rodriguez",
      level: "University",
      duration: "16 weeks",
      format: "Hybrid",
      rating: 4.8,
      students: 528,
      image: null
    },
    {
      title: "Business English",
      instructor: "Sophie Martin",
      level: "Intermediate/Advanced",
      duration: "8 weeks",
      format: "Online/Group Sessions",
      rating: 4.5,
      students: 735,
      image: null
    }
  ];

  const topInstructors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Mathematics",
      courses: 12,
      students: 3500,
      rating: 4.9,
      image: null
    },
    {
      name: "Prof. Michael Chen",
      specialty: "Physics",
      courses: 8,
      students: 2800,
      rating: 4.8,
      image: null
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Chemistry",
      courses: 10,
      students: 3200,
      rating: 4.8,
      image: null
    }
  ];

  return (
    <Layout section="tutoring">
      <div className="space-y-10">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">{t('exploreCourses')}</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('findPerfectCourse')}
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input 
              placeholder={t('searchCourses')} 
              className="pl-10"
            />
            <Button className="absolute right-0 top-0 bottom-0 rounded-l-none">
              {t('search')}
            </Button>
          </div>
        </div>

        {/* Browse Categories Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{t('browseCategories')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className={`flex flex-col items-center p-6 ${category.color} rounded-lg hover:shadow-md transition-all cursor-pointer hover:-translate-y-1`}>
                <category.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-medium text-center">{category.name}</h3>
                <span className="text-sm text-muted-foreground">{category.count} courses</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{t('featuredCourses')}</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">{t('all')}</TabsTrigger>
                <TabsTrigger value="popular">{t('popular')}</TabsTrigger>
                <TabsTrigger value="new">{t('newest')}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-muted-foreground/50" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <span className="text-amber-500 font-medium mr-1">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-amber-500 fill-amber-500' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">({course.students})</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground space-x-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button>{t('viewAllCourses')}</Button>
          </div>
        </section>

        {/* Top Instructors Section */}
        <section className="bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('topInstructors')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topInstructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary/70" />
                  </div>
                  <CardTitle>{instructor.name}</CardTitle>
                  <p className="text-primary">{instructor.specialty}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(instructor.rating) ? 'text-amber-500 fill-amber-500' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-around text-sm">
                    <div>
                      <p className="font-semibold">{instructor.courses}</p>
                      <p className="text-muted-foreground">Courses</p>
                    </div>
                    <div>
                      <p className="font-semibold">{instructor.students.toLocaleString()}</p>
                      <p className="text-muted-foreground">Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Original course listings */}
        <section className="border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">{t('allCourses')}</h2>
          <div className="space-y-12">
            {/* Academic Subjects */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('academicSubjects')}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Mathematics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-medium">Level</dt>
                        <dd className="text-muted-foreground">High School/University</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Duration</dt>
                        <dd className="text-muted-foreground">12 weeks</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Format</dt>
                        <dd className="text-muted-foreground">Online/Live Sessions</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Physics Fundamentals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-medium">Level</dt>
                        <dd className="text-muted-foreground">High School</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Duration</dt>
                        <dd className="text-muted-foreground">10 weeks</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Format</dt>
                        <dd className="text-muted-foreground">Online/Interactive</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Chemistry Lab</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-medium">Level</dt>
                        <dd className="text-muted-foreground">University</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Duration</dt>
                        <dd className="text-muted-foreground">16 weeks</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Format</dt>
                        <dd className="text-muted-foreground">Hybrid</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Language Courses */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('languageCourses')}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Business English</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-medium">Level</dt>
                        <dd className="text-muted-foreground">Intermediate/Advanced</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Duration</dt>
                        <dd className="text-muted-foreground">8 weeks</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Format</dt>
                        <dd className="text-muted-foreground">Online/Group Sessions</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>French for Beginners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-medium">Level</dt>
                        <dd className="text-muted-foreground">Beginner</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Duration</dt>
                        <dd className="text-muted-foreground">12 weeks</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Format</dt>
                        <dd className="text-muted-foreground">Online/Individual</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
