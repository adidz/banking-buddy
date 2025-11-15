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

export const mockRMTasks = [
  {
    id: '1',
    title: 'Follow-up call with Acme Corporation',
    priority: 'high' as const,
    status: 'pending' as const,
    dueTime: '11:00 AM',
    timeSpent: 0,
    assignee: 'James Wilson',
    type: 'call',
  },
  {
    id: '2',
    title: 'Send proposal to TechStart Inc.',
    priority: 'high' as const,
    status: 'in-progress' as const,
    dueTime: '2:00 PM',
    timeSpent: 25,
    assignee: 'James Wilson',
    type: 'document',
  },
  {
    id: '3',
    title: 'Review loan documentation - Manufacturing Co.',
    priority: 'medium' as const,
    status: 'pending' as const,
    dueTime: '4:00 PM',
    timeSpent: 0,
    assignee: 'James Wilson',
    type: 'review',
  },
  {
    id: '4',
    title: 'Initial outreach - Global Imports Ltd',
    priority: 'low' as const,
    status: 'pending' as const,
    dueTime: 'Tomorrow',
    timeSpent: 0,
    assignee: 'James Wilson',
    type: 'call',
  },
];

export const mockRMDocuments = [
  {
    id: '1',
    name: 'Acme_Corp_Financial_Statements.pdf',
    type: 'Financial',
    uploadedAt: '10:30 AM',
    status: 'processed',
    client: 'Acme Corporation',
    dealValue: 250000,
  },
  {
    id: '2',
    name: 'TechStart_Business_Plan.pdf',
    type: 'Business Plan',
    uploadedAt: '9:15 AM',
    status: 'processing',
    client: 'TechStart Inc.',
    dealValue: 120000,
  },
  {
    id: '3',
    name: 'Global_Imports_KYC.pdf',
    type: 'KYC',
    uploadedAt: 'Yesterday',
    status: 'pending',
    client: 'Global Imports Ltd',
    dealValue: 80000,
  },
];

export const mockRMTeam = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Senior RM',
    avatar: '',
    status: 'active',
    dealsThisMonth: 8,
    revenue: 850000,
    conversionRate: 22,
    deepWorkHours: 5.8,
  },
  {
    id: '2',
    name: 'Alex Kumar',
    role: 'Relationship Manager',
    avatar: '',
    status: 'meeting',
    dealsThisMonth: 5,
    revenue: 520000,
    conversionRate: 18,
    deepWorkHours: 6.2,
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Relationship Manager',
    avatar: '',
    status: 'active',
    dealsThisMonth: 6,
    revenue: 450000,
    conversionRate: 18,
    deepWorkHours: 5.5,
  },
];

export const mockProductivityMetrics = {
  deepWorkHours: [
    { day: 'Mon', hours: 5.2 },
    { day: 'Tue', hours: 6.1 },
    { day: 'Wed', hours: 5.8 },
    { day: 'Thu', hours: 5.5 },
    { day: 'Fri', hours: 4.9 },
  ],
  followUpSLA: 87,
  leadEngagement: 92,
  avgTaskCompletionTime: 3.2,
  meetingLoad: 2.1,
};

export const mockCustomerAnalytics = [
  {
    id: '1',
    customerName: 'Acme Corporation',
    accountNumber: 'ACC-4521',
    documentsProcessed: 12,
    loansProcessed: 2,
    avgProcessingTime: 38,
    status: 'active',
    lastActivity: '2 hours ago',
  },
  {
    id: '2',
    customerName: 'TechStart Inc.',
    accountNumber: 'ACC-8832',
    documentsProcessed: 8,
    loansProcessed: 1,
    avgProcessingTime: 45,
    status: 'pending',
    lastActivity: '5 hours ago',
  },
  {
    id: '3',
    customerName: 'Global Imports Ltd',
    accountNumber: 'ACC-2341',
    documentsProcessed: 15,
    loansProcessed: 3,
    avgProcessingTime: 35,
    status: 'active',
    lastActivity: '1 hour ago',
  },
  {
    id: '4',
    customerName: 'Metro Retailers',
    accountNumber: 'ACC-6754',
    documentsProcessed: 6,
    loansProcessed: 0,
    avgProcessingTime: 52,
    status: 'review',
    lastActivity: '3 hours ago',
  },
  {
    id: '5',
    customerName: 'BuildRight Construction',
    accountNumber: 'ACC-9021',
    documentsProcessed: 10,
    loansProcessed: 2,
    avgProcessingTime: 40,
    status: 'active',
    lastActivity: '30 mins ago',
  },
];

export const mockAnalystProductivity = {
  documentsToday: 18,
  documentsThisWeek: 94,
  loansToday: 4,
  loansThisWeek: 22,
  avgDocumentTime: 38,
  avgLoanTime: 125,
  accuracyRate: 96,
  byDocumentType: [
    { type: 'KYC', processed: 32, avgTime: 35 },
    { type: 'AML', processed: 28, avgTime: 30 },
    { type: 'Loan', processed: 22, avgTime: 125 },
    { type: 'Other', processed: 12, avgTime: 45 },
  ],
  weeklyTrend: [
    { day: 'Mon', documents: 15, loans: 3 },
    { day: 'Tue', documents: 18, loans: 5 },
    { day: 'Wed', documents: 22, loans: 4 },
    { day: 'Thu', documents: 19, loans: 6 },
    { day: 'Fri', documents: 20, loans: 4 },
  ],
};

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
    documentsProcessed: 18,
    loansProcessed: 4,
    documentsThisWeek: 94,
    loansThisWeek: 22,
  },
  rm: {
    leadsToday: 12,
    callsMade: 8,
    followUpsDue: 5,
    conversionRate: 18,
    revenue: 450000,
    accountsOpened: 6,
    deepWorkToday: 5.5,
    meetingHours: 2.1,
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

export const mockHRMetrics = {
  totalEmployees: 247,
  newHires: 12,
  attritionRate: 8.5,
  avgTenure: 3.2,
  openPositions: 8,
  trainingCompletion: 87,
  employeeSatisfaction: 4.2,
  performanceReviews: 92,
};

export const mockEmployeeData = [
  { id: '1', name: 'Sarah Chen', department: 'Executive', role: 'CXO', tenure: 5.2, performance: 95, satisfaction: 4.8, trainingCompleted: 100 },
  { id: '2', name: 'Michael Rodriguez', department: 'Operations', role: 'Manager', tenure: 4.1, performance: 88, satisfaction: 4.5, trainingCompleted: 92 },
  { id: '3', name: 'Priya Sharma', department: 'Operations', role: 'Analyst', tenure: 2.3, performance: 92, satisfaction: 4.3, trainingCompleted: 85 },
  { id: '4', name: 'James Wilson', department: 'Sales', role: 'RM', tenure: 3.5, performance: 86, satisfaction: 4.1, trainingCompleted: 88 },
  { id: '5', name: 'Emma Thompson', department: 'Compliance', role: 'Officer', tenure: 4.8, performance: 94, satisfaction: 4.6, trainingCompleted: 98 },
  { id: '6', name: 'David Kim', department: 'Branch Ops', role: 'Manager', tenure: 6.1, performance: 89, satisfaction: 4.4, trainingCompleted: 95 },
];

export const mockDepartmentStats = [
  { department: 'Operations', headcount: 52, avgPerformance: 88, attrition: 6.5, openings: 2 },
  { department: 'Sales', headcount: 68, avgPerformance: 84, attrition: 12.3, openings: 3 },
  { department: 'Compliance', headcount: 28, avgPerformance: 92, attrition: 4.2, openings: 1 },
  { department: 'Branch Ops', headcount: 85, avgPerformance: 86, attrition: 8.1, openings: 2 },
  { department: 'Engineering', headcount: 14, avgPerformance: 91, attrition: 5.5, openings: 0 },
];

export const mockEngineeringMetrics = {
  systemUptime: 99.8,
  apiResponseTime: 142,
  deploymentsThisWeek: 12,
  activeIncidents: 2,
  bugBacklog: 23,
  codeReviewsPending: 8,
  technicalDebtScore: 6.2,
  testCoverage: 84,
};

export const mockSystemHealth = [
  { system: 'Core Banking API', uptime: 99.9, responseTime: 125, requests: 2.4, errors: 0.02 },
  { system: 'Document Processing', uptime: 99.5, responseTime: 380, requests: 1.2, errors: 0.15 },
  { system: 'Authentication Service', uptime: 100, responseTime: 45, requests: 5.1, errors: 0 },
  { system: 'Payment Gateway', uptime: 99.7, responseTime: 210, requests: 0.8, errors: 0.08 },
  { system: 'Data Analytics', uptime: 98.9, responseTime: 520, requests: 0.3, errors: 0.35 },
];

export const mockDeployments = [
  { id: '1', version: 'v2.4.1', service: 'Core Banking API', deployedAt: '2 hours ago', status: 'success', deployedBy: 'Alex Chen' },
  { id: '2', version: 'v1.8.3', service: 'Document Processing', deployedAt: '5 hours ago', status: 'success', deployedBy: 'Sarah Park' },
  { id: '3', version: 'v3.1.0', service: 'Mobile App', deployedAt: '1 day ago', status: 'success', deployedBy: 'Mike Johnson' },
  { id: '4', version: 'v1.5.2', service: 'Analytics Dashboard', deployedAt: '2 days ago', status: 'rollback', deployedBy: 'Alex Chen' },
];

export const mockIncidents = [
  { id: '1', title: 'API latency spike in document processing', severity: 'medium', status: 'investigating', reportedAt: '1 hour ago', assignee: 'Sarah Park' },
  { id: '2', title: 'Database connection timeout', severity: 'high', status: 'in-progress', reportedAt: '3 hours ago', assignee: 'Mike Johnson' },
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
