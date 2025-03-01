
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Calendar, BookOpen, GraduationCap, Clock } from 'lucide-react';
import { toast } from 'sonner';

// Mock data for the parent dashboard
const mockChildren = [
  { 
    id: 1, 
    name: 'Alex Doe', 
    age: 12, 
    grade: '7th Grade', 
    courses: ['Mathematics', 'Science'],
    progress: 75,
    nextSession: 'Monday, 3:00 PM' 
  },
  { 
    id: 2, 
    name: 'Emma Doe', 
    age: 15, 
    grade: '10th Grade', 
    courses: ['Physics', 'Chemistry', 'Literature'],
    progress: 82,
    nextSession: 'Wednesday, 4:30 PM' 
  },
];

const mockUpcomingSessions = [
  { id: 1, child: 'Alex Doe', subject: 'Mathematics', tutor: 'Dr. Emily Adams', date: 'Monday, 3:00 PM', duration: '1 hour' },
  { id: 2, child: 'Emma Doe', subject: 'Physics', tutor: 'Prof. Michael Brown', date: 'Wednesday, 4:30 PM', duration: '1.5 hours' },
  { id: 3, child: 'Emma Doe', subject: 'Chemistry', tutor: 'Dr. Sarah Wilson', date: 'Friday, 3:30 PM', duration: '1 hour' },
];

const mockPayments = [
  { id: 1, date: '2023-06-01', amount: '$120', status: 'Paid', description: 'Mathematics - 4 sessions' },
  { id: 2, date: '2023-06-15', amount: '$180', status: 'Paid', description: 'Physics & Chemistry - 6 sessions' },
  { id: 3, date: '2023-07-01', amount: '$150', status: 'Pending', description: 'Literature & Mathematics - 5 sessions' },
];

export default function ParentDashboard() {
  const { user, isParent } = useAuth();
  const navigate = useNavigate();

  // Redirect if not parent
  if (!isParent()) {
    toast.error('You do not have permission to access this page');
    setTimeout(() => navigate('/'), 1000);
    return null;
  }

  return (
    <Layout section="tutoring">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
            <p className="text-muted-foreground">Monitor your children's educational progress</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => toast.info('Settings panel would open here')}>
              Settings
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user?.email?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Children</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockChildren.length}</div>
              <p className="text-xs text-muted-foreground">Registered in our system</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Across all children</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUpcomingSessions.length}</div>
              <p className="text-xs text-muted-foreground">Next 7 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(mockChildren.reduce((sum, child) => sum + child.progress, 0) / mockChildren.length)}%
              </div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="children" className="space-y-4">
          <TabsList>
            <TabsTrigger value="children">Children</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="children" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockChildren.map((child) => (
                <Card key={child.id}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {child.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{child.name}</CardTitle>
                        <CardDescription>{child.age} years old • {child.grade}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Enrolled Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {child.courses.map((course, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Overall Progress</h4>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${child.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{child.progress}% complete</span>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Next Session</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{child.nextSession}</span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" className="w-full" 
                        onClick={() => toast.info(`Viewing detailed profile for ${child.name}`)}>
                        View Full Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full">
                <div className="text-center space-y-4">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="font-medium">Add Another Child</h3>
                  <p className="text-sm text-muted-foreground">Register another child to your account</p>
                  <Button onClick={() => toast.info('Child registration form would open here')}>
                    Add Child
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Scheduled tutoring sessions for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Child</th>
                        <th className="py-3 px-4 text-left font-medium">Subject</th>
                        <th className="py-3 px-4 text-left font-medium">Tutor</th>
                        <th className="py-3 px-4 text-left font-medium">Date & Time</th>
                        <th className="py-3 px-4 text-left font-medium">Duration</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUpcomingSessions.map((session) => (
                        <tr key={session.id} className="border-b">
                          <td className="py-3 px-4">{session.child}</td>
                          <td className="py-3 px-4">{session.subject}</td>
                          <td className="py-3 px-4">{session.tutor}</td>
                          <td className="py-3 px-4">{session.date}</td>
                          <td className="py-3 px-4">{session.duration}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => toast.info(`Details for ${session.subject} session`)}>
                                Details
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => toast.info(`Rescheduling ${session.subject} session`)}>
                                Reschedule
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => toast.info('Full calendar view would open here')}>
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View and manage your payment information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Description</th>
                        <th className="py-3 px-4 text-left font-medium">Amount</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockPayments.map((payment) => (
                        <tr key={payment.id} className="border-b">
                          <td className="py-3 px-4">{payment.date}</td>
                          <td className="py-3 px-4">{payment.description}</td>
                          <td className="py-3 px-4">{payment.amount}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs ${
                              payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm" onClick={() => toast.info(`Receipt for ${payment.description}`)}>
                              Receipt
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => toast.info('Payment methods management would open here')}>
                    Manage Payment Methods
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
