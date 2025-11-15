import MetricCard from '@/components/dashboard/MetricCard';
import TaskList from '@/components/dashboard/TaskList';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  mockMetrics, 
  mockLeads, 
  mockRMTasks, 
  mockRMDocuments, 
  mockRMTeam,
  mockProductivityMetrics 
} from '@/data/mockData';
import { 
  Users, 
  Phone, 
  Target, 
  TrendingUp,
  ArrowRight,
  Upload,
  FileText,
  Clock,
  BarChart3,
  Calendar,
  CheckCircle2
} from 'lucide-react';

const RelationshipManagerDashboard = () => {
  const metrics = mockMetrics.rm;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'hot': return 'destructive';
      case 'warm': return 'warning';
      case 'cold': return 'secondary';
      default: return 'secondary';
    }
  };

  const getDocStatusColor = (status: string) => {
    switch (status) {
      case 'processed': return 'default';
      case 'processing': return 'secondary';
      case 'pending': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/20 text-success';
      case 'meeting': return 'bg-warning/20 text-warning';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Relationship Manager Dashboard</h1>
        <p className="text-muted-foreground">
          Lead management, sales tracking, and performance metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <MetricCard
          title="Leads Today"
          value={metrics.leadsToday}
          icon={Users}
          trend="neutral"
          subtitle="Active pipeline"
        />
        <MetricCard
          title="Calls Made"
          value={metrics.callsMade}
          icon={Phone}
          trend="neutral"
          subtitle={`${metrics.followUpsDue} follow-ups due`}
        />
        <MetricCard
          title="Conversion Rate"
          value={`${metrics.conversionRate}%`}
          change={5}
          icon={Target}
          trend="up"
          subtitle="Above target"
        />
        <MetricCard
          title="Revenue"
          value={`$${(metrics.revenue / 1000).toFixed(0)}K`}
          change={15}
          icon={TrendingUp}
          trend="up"
          subtitle="This month"
        />
        <MetricCard
          title="Accounts Opened"
          value={metrics.accountsOpened}
          change={12}
          icon={CheckCircle2}
          trend="up"
          subtitle="This month"
        />
        <MetricCard
          title="Deep Work"
          value={`${metrics.deepWorkToday}h`}
          icon={Clock}
          trend="neutral"
          subtitle="Today"
        />
      </div>

      {/* Tasks Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Today's Tasks</h2>
          <Badge variant="secondary">{mockRMTasks.length} tasks</Badge>
        </div>
        <TaskList tasks={mockRMTasks} />
      </Card>

      {/* Documents & Team Tabs */}
      <Tabs defaultValue="leads" className="space-y-6">
        <TabsList>
          <TabsTrigger value="leads">Active Leads</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="team">Team Performance</TabsTrigger>
          <TabsTrigger value="analytics">Productivity Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="leads">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Today's Leads</h2>
              <Badge variant="secondary">{mockLeads.length} active</Badge>
            </div>

            <div className="space-y-4">
              {mockLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-5 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{lead.name}</h3>
                        <Badge variant={getPriorityColor(lead.priority)}>
                          {lead.priority}
                        </Badge>
                        <Badge variant="outline">{lead.stage}</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Deal Value</p>
                          <p className="text-lg font-bold text-foreground">
                            ${(lead.value / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Last Contact</p>
                          <p className="text-sm text-foreground">{lead.lastContact}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4" />
                        <span>{lead.nextAction}</span>
                      </div>
                    </div>

                    <Button size="sm">
                      Take Action
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Document Management</h2>
              <Button size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>

            <div className="space-y-4">
              {mockRMDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 rounded-xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-sm font-semibold text-foreground">{doc.name}</h3>
                          <Badge variant={getDocStatusColor(doc.status)}>{doc.status}</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-xs text-muted-foreground">Client</p>
                            <p className="text-foreground font-medium">{doc.client}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Type</p>
                            <p className="text-foreground">{doc.type}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Deal Value</p>
                            <p className="text-foreground font-semibold">
                              ${(doc.dealValue / 1000).toFixed(0)}K
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Uploaded {doc.uploadedAt}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Process
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Team Performance</h2>
              <Badge variant="secondary">{mockRMTeam.length} members</Badge>
            </div>

            <div className="space-y-4">
              {mockRMTeam.map((member) => (
                <div
                  key={member.id}
                  className="p-5 rounded-xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                        <Badge variant="outline">{member.role}</Badge>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                          {member.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Deals</p>
                          <p className="text-lg font-bold text-foreground">{member.dealsThisMonth}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                          <p className="text-lg font-bold text-foreground">
                            ${(member.revenue / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Conversion</p>
                          <p className="text-lg font-bold text-foreground">{member.conversionRate}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Deep Work</p>
                          <p className="text-lg font-bold text-foreground">{member.deepWorkHours}h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Productivity Metrics</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Follow-up SLA Compliance</span>
                    <span className="text-sm font-bold text-foreground">
                      {mockProductivityMetrics.followUpSLA}%
                    </span>
                  </div>
                  <Progress value={mockProductivityMetrics.followUpSLA} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Lead Engagement Rate</span>
                    <span className="text-sm font-bold text-foreground">
                      {mockProductivityMetrics.leadEngagement}%
                    </span>
                  </div>
                  <Progress value={mockProductivityMetrics.leadEngagement} className="h-2" />
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Avg Task Completion</p>
                      <p className="text-2xl font-bold text-foreground">
                        {mockProductivityMetrics.avgTaskCompletionTime}h
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Meeting Load</p>
                      <p className="text-2xl font-bold text-foreground">
                        {mockProductivityMetrics.meetingLoad}h/day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Deep Work Hours (This Week)</h3>
              </div>
              
              <div className="space-y-4">
                {mockProductivityMetrics.deepWorkHours.map((data, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{data.day}</span>
                      <span className="text-sm font-bold text-foreground">{data.hours}h</span>
                    </div>
                    <Progress value={(data.hours / 8) * 100} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Weekly Average</span>
                  <span className="text-xl font-bold text-foreground">
                    {(mockProductivityMetrics.deepWorkHours.reduce((acc, d) => acc + d.hours, 0) / 5).toFixed(1)}h
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RelationshipManagerDashboard;
