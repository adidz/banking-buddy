import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CXODashboard from '@/components/dashboards/CXODashboard';
import OpsManagerDashboard from '@/components/dashboards/OpsManagerDashboard';
import AnalystDashboard from '@/components/dashboards/AnalystDashboard';
import RelationshipManagerDashboard from '@/components/dashboards/RelationshipManagerDashboard';
import ComplianceDashboard from '@/components/dashboards/ComplianceDashboard';
import BranchManagerDashboard from '@/components/dashboards/BranchManagerDashboard';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  const renderDashboard = () => {
    switch (user.role) {
      case 'cxo':
        return <CXODashboard />;
      case 'ops-manager':
        return <OpsManagerDashboard />;
      case 'analyst':
        return <AnalystDashboard />;
      case 'relationship-manager':
        return <RelationshipManagerDashboard />;
      case 'compliance-officer':
        return <ComplianceDashboard />;
      case 'branch-manager':
        return <BranchManagerDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <DashboardLayout>
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard;
