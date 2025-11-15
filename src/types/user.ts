export type UserRole = 
  | 'cxo'
  | 'ops-manager'
  | 'analyst'
  | 'relationship-manager'
  | 'compliance-officer'
  | 'branch-manager'
  | 'hr-manager'
  | 'engineering-manager';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  avatar?: string;
}

export const DEMO_USERS: Record<UserRole, User> = {
  'cxo': {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@bankdemo.com',
    role: 'cxo',
    department: 'Executive',
  },
  'ops-manager': {
    id: '2',
    name: 'Michael Rodriguez',
    email: 'michael.r@bankdemo.com',
    role: 'ops-manager',
    department: 'Operations',
  },
  'analyst': {
    id: '3',
    name: 'Priya Sharma',
    email: 'priya.s@bankdemo.com',
    role: 'analyst',
    department: 'Operations',
  },
  'relationship-manager': {
    id: '4',
    name: 'James Wilson',
    email: 'james.w@bankdemo.com',
    role: 'relationship-manager',
    department: 'Sales',
  },
  'compliance-officer': {
    id: '5',
    name: 'Emma Thompson',
    email: 'emma.t@bankdemo.com',
    role: 'compliance-officer',
    department: 'Compliance',
  },
  'branch-manager': {
    id: '6',
    name: 'David Kim',
    email: 'david.k@bankdemo.com',
    role: 'branch-manager',
    department: 'Branch Operations',
  },
  'hr-manager': {
    id: '7',
    name: 'Rachel Anderson',
    email: 'rachel.a@bankdemo.com',
    role: 'hr-manager',
    department: 'Human Resources',
  },
  'engineering-manager': {
    id: '8',
    name: 'Alex Chen',
    email: 'alex.c@bankdemo.com',
    role: 'engineering-manager',
    department: 'Engineering',
  },
};

export const ROLE_LABELS: Record<UserRole, string> = {
  'cxo': 'CXO / Decision Maker',
  'ops-manager': 'Operations Manager',
  'analyst': 'Operations Analyst',
  'relationship-manager': 'Relationship Manager',
  'compliance-officer': 'Compliance Officer',
  'branch-manager': 'Branch Manager',
  'hr-manager': 'HR Manager',
  'engineering-manager': 'Engineering Manager',
};
