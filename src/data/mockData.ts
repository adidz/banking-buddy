export const mockTasks = [
  {
    id: '1',
    title: 'Review KYC Documents - Corporate Account #4521',
    priority: 'high' as const,
    status: 'in-progress' as const,
    dueTime: '2:00 PM',
    timeSpent: 35,
    assignee: 'Priya Sharma',
  },
  {
    id: '2',
    title: 'Process Loan Application - SME Business',
    priority: 'medium' as const,
    status: 'pending' as const,
    dueTime: '4:00 PM',
    timeSpent: 0,
    assignee: 'Priya Sharma',
  },
  {
    id: '3',
    title: 'Verify AML Check - Transaction #8832',
    priority: 'high' as const,
    status: 'pending' as const,
    dueTime: '1:30 PM',
    timeSpent: 0,
    assignee: 'Emma Thompson',
  },
];

export const mockLeads = [
  {
    id: '1',
    name: 'Acme Corporation',
    priority: 'hot' as const,
    value: 250000,
    nextAction: 'Follow-up call scheduled',
    lastContact: '2 hours ago',
    stage: 'Negotiation',
  },
  {
    id: '2',
    name: 'TechStart Inc.',
    priority: 'warm' as const,
    value: 120000,
    nextAction: 'Send proposal',
    lastContact: '1 day ago',
    stage: 'Proposal',
  },
  {
    id: '3',
    name: 'Global Imports Ltd',
    priority: 'cold' as const,
    value: 80000,
    nextAction: 'Initial outreach',
    lastContact: '5 days ago',
    stage: 'Prospecting',
  },
];

export const mockMetrics = {
  cxo: {
    productivityScore: 82,
    costSavings: 24,
    turnaroundTime: 18,
    complianceScore: 94,
    deepWorkHours: 6.2,
    meetingHours: 2.1,
  },
  opsManager: {
    teamEfficiency: 78,
    tasksCompleted: 142,
    avgTAT: 4.2,
    errorRate: 2.1,
    bottlenecks: 3,
  },
  analyst: {
    tasksToday: 8,
    completed: 5,
    accuracy: 96,
    avgTime: 42,
    deepWorkToday: 4.5,
  },
  rm: {
    leadsToday: 12,
    callsMade: 8,
    followUpsDue: 5,
    conversionRate: 18,
    revenue: 450000,
  },
  compliance: {
    docsReviewed: 34,
    flaggedIssues: 7,
    completenessScore: 91,
    auditReadiness: 88,
    pendingReviews: 12,
  },
  branchManager: {
    teamSize: 15,
    dailyThroughput: 187,
    customerSatisfaction: 4.6,
    slaCompliance: 92,
    activeIssues: 4,
  },
};

export const mockTeamPerformance = [
  {
    name: 'Priya Sharma',
    role: 'Operations Analyst',
    tasksCompleted: 28,
    accuracy: 96,
    avgTAT: 3.8,
    status: 'active',
  },
  {
    name: 'Raj Patel',
    role: 'Operations Analyst',
    tasksCompleted: 32,
    accuracy: 94,
    avgTAT: 4.1,
    status: 'active',
  },
  {
    name: 'Lisa Chen',
    role: 'Compliance Officer',
    tasksCompleted: 24,
    accuracy: 98,
    avgTAT: 5.2,
    status: 'meeting',
  },
  {
    name: 'James Wilson',
    role: 'Relationship Manager',
    tasksCompleted: 18,
    accuracy: 92,
    avgTAT: 6.5,
    status: 'active',
  },
];

export const mockDepartmentData = [
  { name: 'Operations', productivity: 82, deepWork: 6.5, meetings: 2.1 },
  { name: 'Sales', productivity: 76, deepWork: 5.8, meetings: 3.2 },
  { name: 'Compliance', productivity: 88, deepWork: 7.1, meetings: 1.5 },
  { name: 'Branch Ops', productivity: 79, deepWork: 6.2, meetings: 2.4 },
];

export const mockDocuments = [
  {
    id: '1',
    name: 'KYC_Corporate_4521.pdf',
    type: 'KYC',
    uploadedAt: '10:30 AM',
    status: 'pending',
    completeness: 85,
    issues: ['ID expiry date unclear', 'Missing proof of address'],
  },
  {
    id: '2',
    name: 'AML_Check_8832.pdf',
    type: 'AML',
    uploadedAt: '9:15 AM',
    status: 'approved',
    completeness: 100,
    issues: [],
  },
  {
    id: '3',
    name: 'Loan_Application_SME.pdf',
    type: 'Loan',
    uploadedAt: '11:45 AM',
    status: 'flagged',
    completeness: 70,
    issues: ['Financial statements missing', 'Tax returns incomplete'],
  },
];
