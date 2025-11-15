import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { mockMetrics, mockDepartmentData } from '@/data/mockData';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Shield, 
  Briefcase, 
  Users 
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const CXODashboard = () => {
  const metrics = mockMetrics.cxo;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Executive Overview</h1>
        <p className="text-muted-foreground">
          Company-wide productivity and performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Productivity Score"
          value={`${metrics.productivityScore}%`}
          change={8}
          icon={TrendingUp}
          trend="up"
          subtitle="vs. last month"
        />
        <MetricCard
          title="Cost Savings"
          value={`${metrics.costSavings}%`}
          change={5}
          icon={DollarSign}
          trend="up"
          subtitle="operational efficiency"
        />
        <MetricCard
          title="Avg TAT Improvement"
          value={`${metrics.turnaroundTime}%`}
          change={12}
          icon={Clock}
          trend="up"
          subtitle="faster processing"
        />
        <MetricCard
          title="Compliance Score"
          value={`${metrics.complianceScore}%`}
          change={3}
          icon={Shield}
          trend="up"
          subtitle="audit readiness"
        />
        <MetricCard
          title="Deep Work Hours"
          value={`${metrics.deepWorkHours}h`}
          icon={Briefcase}
          trend="up"
          subtitle="per employee/day"
        />
        <MetricCard
          title="Meeting Time"
          value={`${metrics.meetingHours}h`}
          change={-15}
          icon={Users}
          trend="up"
          subtitle="25% reduction"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Department Productivity
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockDepartmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend />
              <Bar dataKey="productivity" fill="hsl(var(--primary))" name="Productivity %" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Deep Work vs Meetings
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockDepartmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend />
              <Bar dataKey="deepWork" fill="hsl(var(--success))" name="Deep Work (hrs)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="meetings" fill="hsl(var(--warning))" name="Meetings (hrs)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Key Insights</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-success/10 border border-success/20">
            <h3 className="font-semibold text-success mb-1">Productivity Up 8%</h3>
            <p className="text-sm text-foreground">
              Company-wide productivity increased through optimized deep-work scheduling and automated workflows
            </p>
          </div>
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <h3 className="font-semibold text-primary mb-1">Meeting Time Reduced 25%</h3>
            <p className="text-sm text-foreground">
              AI-powered meeting optimization saved 2.5 hours per employee per week
            </p>
          </div>
          <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
            <h3 className="font-semibold text-accent mb-1">Compliance Excellence</h3>
            <p className="text-sm text-foreground">
              94% compliance score with automated document verification and audit trails
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CXODashboard;
