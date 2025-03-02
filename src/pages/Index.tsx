import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  LineChart, 
  Users, 
  Trophy,
  Globe,
  Target,
  Lightbulb,
  Search,
  Star,
  Clock,
  BookOpen,
  Shield,
  Users as User
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const businessFeatures = [
    {
      title: "Strategic Consulting",
      description: "Transform your business with expert strategic guidance and innovation.",
      icon: Briefcase,
      features: [
        "Business Model Innovation",
        "Digital Strategy",
        "Market Expansion",
        "Performance Optimization"
      ]
    },
    {
      title: "Digital Solutions",
      description: "Leverage cutting-edge technology to drive growth and efficiency.",
      icon: LineChart,
      features: [
        "Digital Transformation",
        "Cloud Integration",
        "Custom Software",
        "Data Analytics"
      ]
    },
    {
      title: "Global Excellence",
      description: "Connect with international markets and opportunities.",
      icon: Globe,
      features: [
        "International Markets",
        "Cross-border Operations",
        "Global Partnerships",
        "Market Research"
      ]
    }
  ];

  const educationFeatures = [
    {
      title: "Premium Tutoring",
      description: "Learn from Tunisia's leading experts in academia and industry.",
      icon: GraduationCap,
      features: [
        "Advanced Mathematics",
        "Engineering Sciences",
        "Business Studies",
        "Language Mastery"
      ]
    },
    {
      title: "Personalized Learning",
      description: "Tailored educational programs designed for your success.",
      icon: Target,
      features: [
        "Individual Attention",
        "Flexible Scheduling",
        "Progress Tracking",
        "Custom Curriculum"
      ]
    },
    {
      title: "Innovation Hub",
      description: "Access to cutting-edge learning resources and methodologies.",
      icon: Lightbulb,
      features: [
        "Digital Learning Tools",
        "Interactive Sessions",
        "Project-Based Learning",
        "Research Support"
      ]
    }
  ];

  const achievements = [
    {
      number: "1000+",
      label: "Satisfied Clients",
      icon: Trophy
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: Target
    },
    {
      number: "50+",
      label: "Expert Consultants",
      icon: Users
    }
  ];

  const featuredCourses = [
    {
      title: "Advanced Business Strategy",
      instructor: "replace with the name of the instructor example:zwanski",
      rating: 4.8,
      students: 1243,
      duration: "12 weeks",
      level: "Advanced",
      category: "Business"
    },
    {
      title: "Mathematics for Engineers",
      instructor: "replace with the name of the instructor example:zwanski",
      rating: 4.9,
      students: 978,
      duration: "10 weeks",
      level: "Intermediate",
      category: "Engineering"
    },
    {
      title: "French for Professionals",
      instructor: "replace with the name of the instructor example:zwanski",
      rating: 4.7,
      students: 815,
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      category: "Languages"
    },
    {
      title: "Data Science Fundamentals",
      instructor: "replace with the name of the instructor example:zwanski",
      rating: 4.9,
      students: 1562,
      duration: "14 weeks",
      level: "Intermediate",
      category: "Technology"
    }
  ];

  const categories = [
    { name: "Business", count: 153, icon: Briefcase },
    { name: "Mathematics", count: 87, icon: Target },
    { name: "Computer Science", count: 124, icon: LineChart },
    { name: "Engineering", count: 98, icon: GraduationCap },
    { name: "Languages", count: 76, icon: Globe },
    { name: "Science", count: 110, icon: Lightbulb }
  ];

  const topInstructors = [
    {
      name: "Dr. Afef",
      specialty: "Business Strategy",
      courses: 12,
      students: 4500,
      rating: 4.9,
      image: "/lovable-uploads/5d1618ae-a48b-44bd-8480-e173abb8e89c.png",
      languages: ["English", "Arabic", "French"]
    },
    {
      name: "Prof. Amina Belhadj",
      specialty: "Applied Mathematics",
      courses: 8,
      students: 3200,
      rating: 4.8,
      image: null,
      languages: ["Arabic", "French", "English"]
    },
    {
      name: "Dr. Tarek Mansour",
      specialty: "Languages & Communication",
      courses: 15,
      students: 5600,
      rating: 4.7,
      image: null,
      languages: ["French", "Arabic", "English", "German"]
    }
  ];
  

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
        <div className="relative container max-w-7xl mx-auto px-4 text-center space-y-8">
          <div className="animate-fade-in flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              International House of Sciences
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering Excellence in Business and Education
            </p>
            
            {/* Search Bar - Udemy-inspired */}
            <div className="w-full max-w-2xl mt-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input 
                  type="search" 
                  className="w-full p-4 pl-10 text-sm rounded-lg border border-input bg-background" 
                  placeholder="What do you want to learn today?" 
                />
                <Button className="absolute right-2.5 bottom-2.5">
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link to="/ishtgroup">Business Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px]">
              <Link to="/tutoring">Online Tutoring</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Browsing - Udemy-inspired */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link to="/tutoring/courses" key={index} className="block">
                <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all text-center hover:-translate-y-1">
                  <category.icon className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                  <span className="text-sm text-muted-foreground">{category.count} courses</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses - Udemy-inspired */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Button asChild variant="outline">
              <Link to="/tutoring/courses">View All Courses</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg">
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
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-amber-500' : 'text-muted'}`} fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'} />
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
        </div>
      </section>

      {/* User Portal Access Section - New */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Access User Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Admin Portal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access the administration dashboard to manage users, courses, and platform settings.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/admin/dashboard">Access Admin Portal</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Parent Portal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Monitor your children's progress, manage enrollments, and communicate with tutors.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/parent/dashboard">Access Parent Portal</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Student Portal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access your courses, track your progress, and engage with learning materials.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/dashboard">Access Student Portal</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <achievement.icon className="h-12 w-12 text-primary mb-4" />
                <span className="text-4xl font-bold text-primary mb-2">{achievement.number}</span>
                <span className="text-muted-foreground">{achievement.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors - Advanced Cards */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Top Instructors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topInstructors.map((instructor, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden">
                  {instructor.image ? (
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary/70" />
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{instructor.name}</CardTitle>
                  <p className="text-primary">{instructor.specialty}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-amber-500 font-medium mr-1">{instructor.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(instructor.rating) ? 'text-amber-500' : 'text-muted'}`} 
                          fill={i < Math.floor(instructor.rating) ? 'currentColor' : 'none'} 
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 rounded-md p-3 text-center">
                      <p className="font-semibold text-lg text-foreground">{instructor.courses}</p>
                      <p className="text-sm text-muted-foreground">Courses</p>
                    </div>
                    <div className="bg-muted/30 rounded-md p-3 text-center">
                      <p className="font-semibold text-lg text-foreground">{instructor.students.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Students</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.languages.map((language, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/tutoring/tutors">View All Instructors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Business Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses with innovative solutions and strategic guidance for sustainable growth and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Educational Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your learning journey with personalized education programs and expert guidance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses and educational journeys with IHST Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
