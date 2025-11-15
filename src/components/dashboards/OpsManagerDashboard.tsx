import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockMetrics, mockTeamPerformance } from '@/data/mockData';
import { 
  Users, 
  CheckCircle, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';

const OpsManagerDashboard = () => {
  const metrics = mockMetrics.opsManager;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Operations Manager Dashboard</h1>
        <p className="text-muted-foreground">
          Team performance monitoring and workflow optimization
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Team Efficiency"
          value={`${metrics.teamEfficiency}%`}
          change={6}
          icon={Users}
          trend="up"
          subtitle="vs. last week"
        />
        <MetricCard
          title="Tasks Completed"
          value={metrics.tasksCompleted}
          change={12}
          icon={CheckCircle}
          trend="up"
          subtitle="This week"
        />
        <MetricCard
          title="Avg TAT"
          value={`${metrics.avgTAT}h`}
          change={-10}
          icon={Clock}
          trend="up"
          subtitle="18% faster"
        />
        <MetricCard
          title="Active Bottlenecks"
          value={metrics.bottlenecks}
          icon={AlertTriangle}
          trend="neutral"
          subtitle="Needs attention"
        />
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Team Performance</h2>
          <Badge variant="secondary">{mockTeamPerformance.length} members</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Role</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">Tasks</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">Accuracy</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">Avg TAT</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTeamPerformance.map((member) => (
                <tr key={member.name} className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">{member.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{member.role}</td>
                  <td className="py-4 px-4 text-right font-semibold text-foreground">{member.tasksCompleted}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`font-semibold ${member.accuracy >= 95 ? 'text-success' : 'text-foreground'}`}>
                      {member.accuracy}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-foreground">{member.avgTAT}h</td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                      {member.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default OpsManagerDashboard;
