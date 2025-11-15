import { Users, UserPlus, TrendingDown, Clock, Briefcase, GraduationCap, Heart, Award } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { mockHRMetrics, mockEmployeeData, mockDepartmentStats } from '@/data/mockData';

const HRDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">HR Dashboard</h1>
        <p className="text-muted-foreground">Workforce analytics and employee management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Employees"
          value={mockHRMetrics.totalEmployees}
          icon={Users}
          trend="neutral"
        />
        <MetricCard
          title="New Hires (This Month)"
          value={mockHRMetrics.newHires}
          change={15}
          icon={UserPlus}
          trend="up"
        />
        <MetricCard
          title="Attrition Rate"
          value={`${mockHRMetrics.attritionRate}%`}
          change={-2.3}
          icon={TrendingDown}
          trend="up"
          subtitle="Year to date"
        />
        <MetricCard
          title="Avg. Tenure"
          value={`${mockHRMetrics.avgTenure} yrs`}
          icon={Clock}
          trend="neutral"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Open Positions"
          value={mockHRMetrics.openPositions}
          icon={Briefcase}
          trend="neutral"
        />
        <MetricCard
          title="Training Completion"
          value={`${mockHRMetrics.trainingCompletion}%`}
          change={5}
          icon={GraduationCap}
          trend="up"
        />
        <MetricCard
          title="Employee Satisfaction"
          value={`${mockHRMetrics.employeeSatisfaction}/5`}
          change={3.2}
          icon={Heart}
          trend="up"
        />
        <MetricCard
          title="Performance Reviews Done"
          value={`${mockHRMetrics.performanceReviews}%`}
          icon={Award}
          trend="neutral"
          subtitle="Q4 2024"
        />
      </div>

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Employee Overview</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Department</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tenure (yrs)</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Performance</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Satisfaction</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Training %</th>
                  </tr>
                </thead>
                <tbody>
                  {mockEmployeeData.map((employee) => (
                    <tr key={employee.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{employee.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{employee.department}</td>
                      <td className="py-3 px-4 text-muted-foreground">{employee.role}</td>
                      <td className="py-3 px-4 text-muted-foreground">{employee.tenure}</td>
                      <td className="py-3 px-4">
                        <Badge variant={employee.performance >= 90 ? 'default' : 'secondary'}>
                          {employee.performance}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{employee.satisfaction}/5</td>
                      <td className="py-3 px-4">
                        <Badge variant={employee.trainingCompleted >= 90 ? 'default' : 'secondary'}>
                          {employee.trainingCompleted}%
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Department Statistics</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Department</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Headcount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Avg Performance</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Attrition %</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Open Positions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDepartmentStats.map((dept) => (
                    <tr key={dept.department} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{dept.department}</td>
                      <td className="py-3 px-4 text-muted-foreground">{dept.headcount}</td>
                      <td className="py-3 px-4">
                        <Badge variant={dept.avgPerformance >= 90 ? 'default' : 'secondary'}>
                          {dept.avgPerformance}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={dept.attrition > 10 ? 'destructive' : 'secondary'}>
                          {dept.attrition}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{dept.openings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HRDashboard;
