import MetricCard from '@/components/dashboard/MetricCard';
import TaskList from '@/components/dashboard/TaskList';
import { mockMetrics, mockTasks, mockCustomerAnalytics, mockAnalystProductivity } from '@/data/mockData';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  CheckSquare, 
  Target, 
  TrendingUp, 
  Clock,
  FileText,
  Building2,
  BarChart3
} from 'lucide-react';

const AnalystDashboard = () => {
  const metrics = mockMetrics.analyst;
  const productivity = mockAnalystProductivity;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'pending': return 'secondary';
      case 'review': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Operations Analyst Dashboard</h1>
        <p className="text-muted-foreground">
          Your tasks, performance metrics, and productivity insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Documents Processed"
          value={metrics.documentsProcessed}
          icon={FileText}
          trend="up"
          subtitle={`${metrics.documentsThisWeek} this week`}
        />
        <MetricCard
          title="Loans Processed"
          value={metrics.loansProcessed}
          icon={Building2}
          trend="up"
          subtitle={`${metrics.loansThisWeek} this week`}
        />
        <MetricCard
          title="Accuracy Score"
          value={`${metrics.accuracy}%`}
          change={2}
          icon={Target}
          trend="up"
          subtitle="Above target"
        />
        <MetricCard
          title="Avg Processing Time"
          value={`${metrics.avgTime}m`}
          change={-8}
          icon={Clock}
          trend="up"
          subtitle="Faster completion"
        />
      </div>

      <Tabs defaultValue="customers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="customers">Customer Analytics</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="tasks">My Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Customer Processing Overview</h3>
              <Badge variant="outline">{mockCustomerAnalytics.length} Active Customers</Badge>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Account #</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Documents</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Loans</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Avg Time (min)</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Last Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCustomerAnalytics.map((customer) => (
                    <tr key={customer.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-medium text-foreground">{customer.customerName}</div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">{customer.accountNumber}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-foreground font-semibold">
                          <FileText className="w-4 h-4" />
                          {customer.documentsProcessed}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-foreground font-semibold">
                          <Building2 className="w-4 h-4" />
                          {customer.loansProcessed}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{customer.avgProcessingTime}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={getStatusColor(customer.status)}>{customer.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">{customer.lastActivity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="productivity" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Document Processing</h3>
              </div>
              <div className="space-y-4">
                {productivity.byDocumentType.map((type) => (
                  <div key={type.type} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{type.type}</span>
                      <span className="font-semibold text-foreground">{type.processed} processed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all" 
                          style={{ width: `${(type.processed / 32) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{type.avgTime}m avg</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-success/10">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Weekly Trend</h3>
              </div>
              <div className="space-y-4">
                {productivity.weeklyTrend.map((day) => (
                  <div key={day.day} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground w-12">{day.day}</span>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <FileText className="w-4 h-4 text-primary" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all" 
                            style={{ width: `${(day.documents / 25) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-foreground w-6">{day.documents}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <Building2 className="w-4 h-4 text-success" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-success transition-all" 
                            style={{ width: `${(day.loans / 6) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-foreground w-6">{day.loans}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Performance Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Avg Document Time</p>
                <p className="text-2xl font-bold text-foreground">{productivity.avgDocumentTime}m</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Avg Loan Time</p>
                <p className="text-2xl font-bold text-foreground">{productivity.avgLoanTime}m</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                <p className="text-2xl font-bold text-success">{productivity.accuracyRate}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold text-foreground">{productivity.documentsThisWeek + productivity.loansThisWeek}</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <TaskList tasks={mockTasks.filter(t => t.assignee === 'Priya Sharma')} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalystDashboard;
