import MetricCard from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockMetrics, mockDocuments } from '@/data/mockData';
import { 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Shield,
  Upload
} from 'lucide-react';

const ComplianceDashboard = () => {
  const metrics = mockMetrics.compliance;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'default';
      case 'pending': return 'secondary';
      case 'flagged': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Compliance Officer Dashboard</h1>
        <p className="text-muted-foreground">
          Document verification, KYC/AML management, and audit readiness
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Docs Reviewed"
          value={metrics.docsReviewed}
          icon={FileCheck}
          trend="neutral"
          subtitle="This week"
        />
        <MetricCard
          title="Flagged Issues"
          value={metrics.flaggedIssues}
          icon={AlertTriangle}
          trend="neutral"
          subtitle="Needs review"
        />
        <MetricCard
          title="Completeness"
          value={`${metrics.completenessScore}%`}
          change={4}
          icon={CheckCircle2}
          trend="up"
          subtitle="Document accuracy"
        />
        <MetricCard
          title="Audit Readiness"
          value={`${metrics.auditReadiness}%`}
          change={6}
          icon={Shield}
          trend="up"
          subtitle="Compliance score"
        />
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Document Review Queue</h2>
          <Button size="sm" className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>

        <div className="space-y-4">
          {mockDocuments.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-xl border border-border hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{doc.name}</h3>
                    <Badge variant={getStatusColor(doc.status)}>
                      {doc.status}
                    </Badge>
                    <Badge variant="outline">{doc.type}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    Uploaded at {doc.uploadedAt}
                  </p>

                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Completeness</span>
                      <span className="font-semibold text-foreground">{doc.completeness}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          doc.completeness >= 90 
                            ? 'bg-success' 
                            : doc.completeness >= 70 
                            ? 'bg-warning' 
                            : 'bg-destructive'
                        }`}
                        style={{ width: `${doc.completeness}%` }}
                      />
                    </div>
                  </div>

                  {doc.issues.length > 0 && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <p className="text-sm font-semibold text-destructive mb-2">
                        Issues Found ({doc.issues.length})
                      </p>
                      <ul className="space-y-1">
                        {doc.issues.map((issue, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="default">
                    Review
                  </Button>
                  {doc.status === 'flagged' && (
                    <Button size="sm" variant="outline">
                      Request Resubmit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ComplianceDashboard;
