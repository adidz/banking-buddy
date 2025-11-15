import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { mockMetrics, mockTeamPerformance } from '@/data/mockData';
import { 
  Users, 
  TrendingUp, 
  Star, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BranchManagerDashboard = () => {
  const metrics = mockMetrics.branchManager;

  const weeklyData = [
    { day: 'Mon', throughput: 165 },
    { day: 'Tue', throughput: 178 },
    { day: 'Wed', throughput: 192 },
    { day: 'Thu', throughput: 187 },
    { day: 'Fri', throughput: 195 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Branch Manager Dashboard</h1>
        <p className="text-muted-foreground">
          Branch operations, team coordination, and performance tracking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Team Size"
          value={metrics.teamSize}
          icon={Users}
          trend="neutral"
          subtitle="Active members"
        />
        <MetricCard
          title="Daily Throughput"
          value={metrics.dailyThroughput}
          change={8}
          icon={TrendingUp}
          trend="up"
          subtitle="Tasks completed"
        />
        <MetricCard
          title="Customer Sat."
          value={metrics.customerSatisfaction}
          change={3}
          icon={Star}
          trend="up"
          subtitle="Out of 5.0"
        />
        <MetricCard
          title="SLA Compliance"
          value={`${metrics.slaCompliance}%`}
          change={5}
          icon={CheckCircle}
          trend="up"
          subtitle="On-time delivery"
        />
        <MetricCard
          title="Active Issues"
          value={metrics.activeIssues}
          icon={AlertCircle}
          trend="neutral"
          subtitle="Needs attention"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Weekly Throughput Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
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
              <Bar 
                dataKey="throughput" 
                fill="hsl(var(--primary))" 
                radius={[8, 8, 0, 0]}
                name="Tasks Completed"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Top Performers This Week
          </h2>
          <div className="space-y-4">
            {mockTeamPerformance.slice(0, 3).map((member, idx) => (
              <div key={member.name} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  #{idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">{member.tasksCompleted}</p>
                  <p className="text-xs text-muted-foreground">tasks</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-success">{member.accuracy}%</p>
                  <p className="text-xs text-muted-foreground">accuracy</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BranchManagerDashboard;
