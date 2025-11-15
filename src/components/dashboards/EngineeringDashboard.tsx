import { Activity, Zap, Rocket, AlertTriangle, Bug, Code, Gauge, CheckCircle2 } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { mockEngineeringMetrics, mockSystemHealth, mockDeployments, mockIncidents } from '@/data/mockData';

const EngineeringDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Engineering Dashboard</h1>
        <p className="text-muted-foreground">System health and development metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="System Uptime"
          value={`${mockEngineeringMetrics.systemUptime}%`}
          change={0.2}
          icon={Activity}
          trend="up"
          subtitle="Last 30 days"
        />
        <MetricCard
          title="API Response Time"
          value={`${mockEngineeringMetrics.apiResponseTime}ms`}
          change={-8}
          icon={Zap}
          trend="up"
          subtitle="P95 latency"
        />
        <MetricCard
          title="Deployments"
          value={mockEngineeringMetrics.deploymentsThisWeek}
          icon={Rocket}
          trend="neutral"
          subtitle="This week"
        />
        <MetricCard
          title="Active Incidents"
          value={mockEngineeringMetrics.activeIncidents}
          icon={AlertTriangle}
          trend={mockEngineeringMetrics.activeIncidents > 0 ? 'down' : 'neutral'}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Bug Backlog"
          value={mockEngineeringMetrics.bugBacklog}
          change={-12}
          icon={Bug}
          trend="up"
        />
        <MetricCard
          title="Code Reviews Pending"
          value={mockEngineeringMetrics.codeReviewsPending}
          icon={Code}
          trend="neutral"
        />
        <MetricCard
          title="Technical Debt Score"
          value={mockEngineeringMetrics.technicalDebtScore}
          icon={Gauge}
          trend="neutral"
          subtitle="Out of 10"
        />
        <MetricCard
          title="Test Coverage"
          value={`${mockEngineeringMetrics.testCoverage}%`}
          change={3}
          icon={CheckCircle2}
          trend="up"
        />
      </div>

      <Tabs defaultValue="systems" className="space-y-4">
        <TabsList>
          <TabsTrigger value="systems">System Health</TabsTrigger>
          <TabsTrigger value="deployments">Deployments</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
        </TabsList>

        <TabsContent value="systems" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">System Health Overview</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">System</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Uptime %</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Response Time (ms)</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Requests/sec</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Error Rate %</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSystemHealth.map((system) => (
                    <tr key={system.system} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{system.system}</td>
                      <td className="py-3 px-4">
                        <Badge variant={system.uptime >= 99.5 ? 'default' : 'secondary'}>
                          {system.uptime}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{system.responseTime}</td>
                      <td className="py-3 px-4 text-muted-foreground">{system.requests}M</td>
                      <td className="py-3 px-4">
                        <Badge variant={system.errors < 0.1 ? 'default' : system.errors < 0.3 ? 'secondary' : 'destructive'}>
                          {system.errors}%
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="deployments" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Deployments</h3>
            <div className="space-y-4">
              {mockDeployments.map((deployment) => (
                <div key={deployment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{deployment.service}</h4>
                      <Badge variant="outline">{deployment.version}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Deployed by {deployment.deployedBy} • {deployment.deployedAt}
                    </p>
                  </div>
                  <Badge variant={deployment.status === 'success' ? 'default' : 'destructive'}>
                    {deployment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Active Incidents</h3>
            <div className="space-y-4">
              {mockIncidents.map((incident) => (
                <div key={incident.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      <h4 className="font-medium">{incident.title}</h4>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>Assigned to: {incident.assignee}</span>
                      <span>•</span>
                      <span>{incident.reportedAt}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={incident.severity === 'high' ? 'destructive' : 'secondary'}>
                      {incident.severity}
                    </Badge>
                    <Badge variant="outline">{incident.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EngineeringDashboard;
