
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, UserPlus, UserCheck, Shield, Settings, Database,
  BookOpen, School, GraduationCap, Calendar 
} from 'lucide-react';
import { toast } from 'sonner';

// Mock data for the admin dashboard
const mockStudents = [
  { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Mathematics', progress: 75 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Physics', progress: 60 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', course: 'Chemistry', progress: 85 },
];

const mockTutors = [
  { id: 1, name: 'Dr. Emily Adams', email: 'emily@example.com', subject: 'Mathematics', students: 12 },
  { id: 2, name: 'Prof. Michael Brown', email: 'michael@example.com', subject: 'Physics', students: 8 },
  { id: 3, name: 'Dr. Sarah Wilson', email: 'sarah@example.com', subject: 'Chemistry', students: 15 },
];

const mockParents = [
  { id: 1, name: 'Robert Doe', email: 'robert@example.com', children: 2, lastLogin: '2 days ago' },
  { id: 2, name: 'Mary Smith', email: 'mary@example.com', children: 1, lastLogin: '1 week ago' },
  { id: 3, name: 'Thomas Johnson', email: 'thomas@example.com', children: 3, lastLogin: 'Yesterday' },
];

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      toast.error('Please sign in to access the admin dashboard');
      navigate('/auth/login');
      return;
    }
    
    // Check if user has admin role
    if (!isAdmin()) {
      toast.error('You need administrator permissions to access this page');
      navigate('/');
    }
  }, [user, isAdmin, navigate]);

  const handleAddUser = (type: string) => {
    toast.success(`New ${type} account creation form would open here`);
  };

  return (
    <Layout section="ishtgroup">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users, courses, and system settings</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => toast.info('Settings panel would open here')}>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user?.email?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-5 gap-4 bg-muted p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="tutors">Tutors</TabsTrigger>
            <TabsTrigger value="parents">Parents</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">412</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Tutors</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+2 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Parent Accounts</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">287</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">36</div>
                  <p className="text-xs text-muted-foreground">+4 this month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest actions across the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10">
                            {String.fromCharCode(64 + item)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {['New student registration', 'Course enrollment', 'Tutor schedule updated', 'Parent account created', 'Payment received'][item - 1]}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {`${item * 10} minutes ago`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used admin functions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button onClick={() => handleAddUser('student')} className="flex flex-col items-center justify-center h-24 space-y-2">
                      <UserPlus className="h-8 w-8" />
                      <span>Add Student</span>
                    </Button>
                    <Button onClick={() => handleAddUser('tutor')} className="flex flex-col items-center justify-center h-24 space-y-2">
                      <UserPlus className="h-8 w-8" />
                      <span>Add Tutor</span>
                    </Button>
                    <Button onClick={() => handleAddUser('parent')} className="flex flex-col items-center justify-center h-24 space-y-2">
                      <UserPlus className="h-8 w-8" />
                      <span>Add Parent</span>
                    </Button>
                    <Button onClick={() => toast.info('New course creation form would open here')} className="flex flex-col items-center justify-center h-24 space-y-2">
                      <BookOpen className="h-8 w-8" />
                      <span>Add Course</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Students Management</CardTitle>
                  <CardDescription>View and manage all student accounts</CardDescription>
                </div>
                <Button onClick={() => handleAddUser('student')}>
                  <UserPlus className="mr-2 h-4 w-4" /> Add Student
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Email</th>
                        <th className="py-3 px-4 text-left font-medium">Course</th>
                        <th className="py-3 px-4 text-left font-medium">Progress</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockStudents.map((student) => (
                        <tr key={student.id} className="border-b">
                          <td className="py-3 px-4">{student.name}</td>
                          <td className="py-3 px-4">{student.email}</td>
                          <td className="py-3 px-4">{student.course}</td>
                          <td className="py-3 px-4">
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div 
                                className="bg-primary h-2.5 rounded-full" 
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-muted-foreground">{student.progress}%</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => toast.info(`View ${student.name}'s profile`)}>
                                View
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => toast.info(`Edit ${student.name}'s profile`)}>
                                Edit
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutors" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Tutors Management</CardTitle>
                  <CardDescription>View and manage all tutor accounts</CardDescription>
                </div>
                <Button onClick={() => handleAddUser('tutor')}>
                  <UserPlus className="mr-2 h-4 w-4" /> Add Tutor
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Email</th>
                        <th className="py-3 px-4 text-left font-medium">Subject</th>
                        <th className="py-3 px-4 text-left font-medium">Students</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTutors.map((tutor) => (
                        <tr key={tutor.id} className="border-b">
                          <td className="py-3 px-4">{tutor.name}</td>
                          <td className="py-3 px-4">{tutor.email}</td>
                          <td className="py-3 px-4">{tutor.subject}</td>
                          <td className="py-3 px-4">{tutor.students}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => toast.info(`View ${tutor.name}'s profile`)}>
                                View
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => toast.info(`Edit ${tutor.name}'s profile`)}>
                                Edit
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parents" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Parents Management</CardTitle>
                  <CardDescription>View and manage all parent accounts</CardDescription>
                </div>
                <Button onClick={() => handleAddUser('parent')}>
                  <UserPlus className="mr-2 h-4 w-4" /> Add Parent
                </Button>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Email</th>
                        <th className="py-3 px-4 text-left font-medium">Children</th>
                        <th className="py-3 px-4 text-left font-medium">Last Login</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockParents.map((parent) => (
                        <tr key={parent.id} className="border-b">
                          <td className="py-3 px-4">{parent.name}</td>
                          <td className="py-3 px-4">{parent.email}</td>
                          <td className="py-3 px-4">{parent.children}</td>
                          <td className="py-3 px-4">{parent.lastLogin}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => toast.info(`View ${parent.name}'s profile`)}>
                                View
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => toast.info(`Edit ${parent.name}'s profile`)}>
                                Edit
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Courses Management</CardTitle>
                  <CardDescription>View and manage all courses</CardDescription>
                </div>
                <Button onClick={() => toast.info('New course creation form would open here')}>
                  <BookOpen className="mr-2 h-4 w-4" /> Add Course
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Literature'].map((course, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-muted-foreground">
                          <p>Students: {20 + i * 5}</p>
                          <p>Tutors: {1 + Math.floor(i/2)}</p>
                          <p>Sessions: {12 + i * 2} / week</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => toast.info(`View ${course} details`)}>
                            View
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => toast.info(`Edit ${course} details`)}>
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
