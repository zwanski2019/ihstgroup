import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BookMarked, Calendar, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

export default function StudentDashboard() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect unauthenticated users to login
    if (!user) {
      toast.error("Please sign in to access the student dashboard");
      navigate('/auth/login');
    }
  }, [user, navigate]);

  // Sample data for the dashboard
  const enrolledCourses = [
    { 
      id: 1, 
      title: "Advanced Mathematics", 
      progress: 45,
      nextLesson: "Calculus Fundamentals",
      instructor: "Prof. Amina Belhadj" 
    },
    { 
      id: 2, 
      title: "Business Strategy", 
      progress: 72,
      nextLesson: "Market Analysis",
      instructor: "Dr. Afef" 
    },
    { 
      id: 3, 
      title: "French for Professionals", 
      progress: 30,
      nextLesson: "Business Vocabulary",
      instructor: "Dr. Tarek Mansour" 
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Mathematics Exam",
      date: "2024-05-20",
      time: "10:00 AM",
      type: "Exam"
    },
    {
      id: 2,
      title: "Business Strategy Project Due",
      date: "2024-05-15",
      time: "11:59 PM",
      type: "Assignment"
    },
    {
      id: 3,
      title: "French Conversation Practice",
      date: "2024-05-10",
      time: "2:00 PM",
      type: "Session"
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('studentDashboard')}</h1>
            <p className="text-muted-foreground">{t('welcomeStudent')}, {user?.email}</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">{t('overview')}</TabsTrigger>
            <TabsTrigger value="courses">{t('myCourses')}</TabsTrigger>
            <TabsTrigger value="schedule">{t('schedule')}</TabsTrigger>
            <TabsTrigger value="resources">{t('resources')}</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('enrolledCourses')}
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('averageProgress')}
                  </CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('upcomingEvents')}
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingEvents.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t('completedLessons')}
                  </CardTitle>
                  <BookMarked className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>{t('enrolledCourses')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {enrolledCourses.map(course => (
                      <div key={course.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          </div>
                          <span className="text-primary font-bold">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mb-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center text-sm mt-2">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">{t('nextLesson')}: {course.nextLesson}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>{t('upcomingEvents')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map(event => (
                      <div key={event.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                              <Clock className="h-4 w-4 ml-2 mr-1" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('myCourses')}</CardTitle>
                <CardDescription>{t('allEnrolledCourses')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {enrolledCourses.map(course => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg">
                        <BookOpen className="h-16 w-16 text-muted-foreground/50" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">{t('progress')}</span>
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <Button className="w-full mt-4">{t('continueCourse')}</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('schedule')}</CardTitle>
                <CardDescription>{t('upcomingSchedule')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                            <Clock className="h-4 w-4 ml-2 mr-1" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('resources')}</CardTitle>
                <CardDescription>{t('learningMaterials')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t('noResourcesYet')}</p>
                <Button>{t('browseResources')}</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
