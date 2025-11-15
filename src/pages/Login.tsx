import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { UserRole, ROLE_LABELS } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, Users, FileText, TrendingUp, Shield, Store, UserCog, Code } from 'lucide-react';

const roleIcons: Record<UserRole, any> = {
  'cxo': Building2,
  'ops-manager': Users,
  'analyst': FileText,
  'relationship-manager': TrendingUp,
  'compliance-officer': Shield,
  'branch-manager': Store,
  'hr-manager': UserCog,
  'engineering-manager': Code,
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleLogin = () => {
    if (selectedRole) {
      login(selectedRole);
      navigate('/dashboard');
    }
  };

  const roles: UserRole[] = [
    'cxo',
    'ops-manager',
    'analyst',
    'relationship-manager',
    'compliance-officer',
    'branch-manager',
    'hr-manager',
    'engineering-manager',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <Building2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">BankFlow Pro</h1>
          <p className="text-muted-foreground text-lg">
            AI-Powered Productivity Platform for Banking Teams
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Select Your Role to Continue
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {roles.map((role) => {
              const Icon = roleIcons[role];
              const isSelected = selectedRole === role;
              
              return (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`p-6 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                  <h3 className="font-semibold text-foreground mb-1">
                    {ROLE_LABELS[role]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {getRoleDescription(role)}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleLogin}
              disabled={!selectedRole}
              className="px-12"
            >
              Continue to Dashboard
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            This is a demo environment with mock data for testing purposes
          </p>
        </Card>
      </div>
    </div>
  );
};

const getRoleDescription = (role: UserRole): string => {
  const descriptions: Record<UserRole, string> = {
    'cxo': 'Executive view with company-wide analytics',
    'ops-manager': 'Team oversight and performance monitoring',
    'analyst': 'Task execution and document processing',
    'relationship-manager': 'Lead management and sales tracking',
    'compliance-officer': 'Document verification and audit management',
    'branch-manager': 'Branch operations and team coordination',
    'hr-manager': 'Workforce analytics and employee management',
    'engineering-manager': 'System health and development metrics',
  };
  return descriptions[role];
};

export default Login;
