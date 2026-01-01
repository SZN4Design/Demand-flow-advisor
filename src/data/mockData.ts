// Mock data for Market Demand Forecaster

export const cities = [
  { id: 'toronto', name: 'Toronto', province: 'ON' },
  { id: 'vancouver', name: 'Vancouver', province: 'BC' },
  { id: 'calgary', name: 'Calgary', province: 'AB' },
  { id: 'montreal', name: 'Montreal', province: 'QC' },
  { id: 'ottawa', name: 'Ottawa', province: 'ON' },
];

export const forecastSummary = {
  demandIndex: 73,
  inventoryRisk: 'Medium' as const,
  topSegment: 'Compact SUVs',
  confidence: 'High' as const,
  lastUpdated: 'Today at 9:12 AM',
};

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  segment: string;
  sellProbability: number;
  daysToSell: number;
  trend: 'up' | 'down' | 'stable';
  confidence: 'High' | 'Medium' | 'Low';
  demandDrivers: string[];
  priceRange: { min: number; max: number };
  suggestedTrims: string[];
  factors: {
    name: string;
    weight: number;
    direction: 'up' | 'down';
  }[];
  buyerPersona: {
    ageRange: string;
    householdType: string;
    income: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'RAV4 Hybrid',
    year: 2023,
    segment: 'Compact SUV',
    sellProbability: 94,
    daysToSell: 8,
    trend: 'up',
    confidence: 'High',
    demandDrivers: ['Gas ↑', 'Search ↑', 'Low supply'],
    priceRange: { min: 38000, max: 45000 },
    suggestedTrims: ['XLE', 'XLE Premium', 'Limited'],
    factors: [
      { name: 'Search interest up 18%', weight: 85, direction: 'up' },
      { name: 'Fuel price increase favors hybrid', weight: 78, direction: 'up' },
      { name: 'Low supply in city', weight: 72, direction: 'up' },
      { name: 'Median income aligns with price band', weight: 65, direction: 'up' },
      { name: 'Lease expiries rising in this segment', weight: 58, direction: 'up' },
    ],
    buyerPersona: { ageRange: '35-50', householdType: 'Family with children', income: '$85,000 - $120,000' },
  },
  {
    id: '2',
    make: 'Honda',
    model: 'CR-V',
    year: 2023,
    segment: 'Compact SUV',
    sellProbability: 91,
    daysToSell: 10,
    trend: 'up',
    confidence: 'High',
    demandDrivers: ['Lease expiries ↑', 'Search ↑', 'Winter AWD'],
    priceRange: { min: 35000, max: 42000 },
    suggestedTrims: ['EX-L', 'Touring'],
    factors: [
      { name: 'Lease expiries spike detected', weight: 82, direction: 'up' },
      { name: 'Strong search interest momentum', weight: 75, direction: 'up' },
      { name: 'AWD demand rising for winter', weight: 70, direction: 'up' },
      { name: 'Competitive pricing vs market', weight: 62, direction: 'up' },
      { name: 'High retention rate from brand', weight: 55, direction: 'up' },
    ],
    buyerPersona: { ageRange: '30-45', householdType: 'Young family', income: '$75,000 - $100,000' },
  },
  {
    id: '3',
    make: 'Hyundai',
    model: 'Tucson',
    year: 2024,
    segment: 'Compact SUV',
    sellProbability: 88,
    daysToSell: 11,
    trend: 'up',
    confidence: 'High',
    demandDrivers: ['Price value ↑', 'New model', 'Low supply'],
    priceRange: { min: 32000, max: 39000 },
    suggestedTrims: ['Preferred', 'Ultimate'],
    factors: [
      { name: 'Strong value perception vs competitors', weight: 80, direction: 'up' },
      { name: 'New model year driving interest', weight: 73, direction: 'up' },
      { name: 'Limited dealer inventory', weight: 68, direction: 'up' },
      { name: 'Feature-rich at price point', weight: 60, direction: 'up' },
      { name: 'Positive reviews driving traffic', weight: 52, direction: 'up' },
    ],
    buyerPersona: { ageRange: '28-42', householdType: 'Couples / Small family', income: '$65,000 - $90,000' },
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model Y',
    year: 2024,
    segment: 'Electric SUV',
    sellProbability: 86,
    daysToSell: 12,
    trend: 'stable',
    confidence: 'Medium',
    demandDrivers: ['EV incentives', 'Gas ↑', 'Tech demand'],
    priceRange: { min: 52000, max: 68000 },
    suggestedTrims: ['Long Range', 'Performance'],
    factors: [
      { name: 'Federal EV incentives active', weight: 78, direction: 'up' },
      { name: 'High gas prices favor EVs', weight: 72, direction: 'up' },
      { name: 'Tech-forward buyer segment growing', weight: 65, direction: 'up' },
      { name: 'Supercharger network advantage', weight: 58, direction: 'up' },
      { name: 'Used Model 3 buyers upgrading', weight: 50, direction: 'up' },
    ],
    buyerPersona: { ageRange: '32-48', householdType: 'Urban professionals', income: '$110,000 - $150,000' },
  },
  {
    id: '5',
    make: 'Mazda',
    model: 'CX-5',
    year: 2023,
    segment: 'Compact SUV',
    sellProbability: 84,
    daysToSell: 13,
    trend: 'up',
    confidence: 'High',
    demandDrivers: ['Premium feel', 'Winter AWD', 'Search ↑'],
    priceRange: { min: 33000, max: 40000 },
    suggestedTrims: ['GS', 'GT'],
    factors: [
      { name: 'Premium interior appeal', weight: 75, direction: 'up' },
      { name: 'AWD standard attracting winter buyers', weight: 70, direction: 'up' },
      { name: 'Search interest trending upward', weight: 65, direction: 'up' },
      { name: 'Reliability reputation strong', weight: 58, direction: 'up' },
      { name: 'Competitive lease rates', weight: 48, direction: 'up' },
    ],
    buyerPersona: { ageRange: '35-55', householdType: 'Empty nesters / Professionals', income: '$80,000 - $110,000' },
  },
  {
    id: '6',
    make: 'Ford',
    model: 'Bronco Sport',
    year: 2024,
    segment: 'Compact SUV',
    sellProbability: 82,
    daysToSell: 14,
    trend: 'up',
    confidence: 'Medium',
    demandDrivers: ['Lifestyle appeal', 'Winter AWD', 'Low supply'],
    priceRange: { min: 36000, max: 44000 },
    suggestedTrims: ['Big Bend', 'Badlands'],
    factors: [
      { name: 'Strong lifestyle brand appeal', weight: 72, direction: 'up' },
      { name: 'Off-road capability for winter', weight: 68, direction: 'up' },
      { name: 'Limited inventory driving urgency', weight: 63, direction: 'up' },
      { name: 'Unique styling differentiation', weight: 55, direction: 'up' },
      { name: 'Adventure segment growing', weight: 45, direction: 'up' },
    ],
    buyerPersona: { ageRange: '28-40', householdType: 'Active lifestyle', income: '$70,000 - $95,000' },
  },
  {
    id: '7',
    make: 'Subaru',
    model: 'Outback',
    year: 2023,
    segment: 'Midsize SUV',
    sellProbability: 80,
    daysToSell: 15,
    trend: 'stable',
    confidence: 'High',
    demandDrivers: ['Winter AWD', 'Safety ↑', 'Loyalty'],
    priceRange: { min: 38000, max: 46000 },
    suggestedTrims: ['Limited', 'Premier'],
    factors: [
      { name: 'AWD expertise for Canadian winters', weight: 80, direction: 'up' },
      { name: 'Top safety ratings driving families', weight: 72, direction: 'up' },
      { name: 'Exceptional brand loyalty rates', weight: 65, direction: 'up' },
      { name: 'Outdoor lifestyle alignment', weight: 55, direction: 'up' },
      { name: 'Stable resale value', weight: 48, direction: 'up' },
    ],
    buyerPersona: { ageRange: '40-60', householdType: 'Outdoor enthusiasts', income: '$85,000 - $120,000' },
  },
  {
    id: '8',
    make: 'Kia',
    model: 'Sportage',
    year: 2024,
    segment: 'Compact SUV',
    sellProbability: 78,
    daysToSell: 16,
    trend: 'up',
    confidence: 'Medium',
    demandDrivers: ['Value ↑', 'Design', 'Warranty'],
    priceRange: { min: 32000, max: 40000 },
    suggestedTrims: ['EX', 'SX'],
    factors: [
      { name: 'Strong value proposition', weight: 75, direction: 'up' },
      { name: 'Bold new design attracting buyers', weight: 68, direction: 'up' },
      { name: 'Industry-leading warranty', weight: 62, direction: 'up' },
      { name: 'Tech features at price point', weight: 55, direction: 'up' },
      { name: 'First-time buyer segment growing', weight: 45, direction: 'up' },
    ],
    buyerPersona: { ageRange: '25-40', householdType: 'First-time SUV buyers', income: '$55,000 - $80,000' },
  },
  {
    id: '9',
    make: 'Chevrolet',
    model: 'Equinox EV',
    year: 2024,
    segment: 'Electric SUV',
    sellProbability: 75,
    daysToSell: 18,
    trend: 'up',
    confidence: 'Medium',
    demandDrivers: ['EV incentives', 'Price value', 'New model'],
    priceRange: { min: 45000, max: 55000 },
    suggestedTrims: ['2LT', '3RS'],
    factors: [
      { name: 'Competitive EV pricing', weight: 72, direction: 'up' },
      { name: 'Federal incentives applicable', weight: 68, direction: 'up' },
      { name: 'New model curiosity driving traffic', weight: 60, direction: 'up' },
      { name: 'Familiar brand for EV hesitant', weight: 52, direction: 'up' },
      { name: 'GM charging network expansion', weight: 42, direction: 'up' },
    ],
    buyerPersona: { ageRange: '35-50', householdType: 'Suburban families', income: '$90,000 - $130,000' },
  },
  {
    id: '10',
    make: 'Volkswagen',
    model: 'Tiguan',
    year: 2024,
    segment: 'Compact SUV',
    sellProbability: 72,
    daysToSell: 19,
    trend: 'stable',
    confidence: 'Medium',
    demandDrivers: ['European feel', '3rd row', 'Search ↑'],
    priceRange: { min: 35000, max: 45000 },
    suggestedTrims: ['Comfortline', 'Highline'],
    factors: [
      { name: 'European driving dynamics appeal', weight: 68, direction: 'up' },
      { name: 'Available 3rd row rare in segment', weight: 62, direction: 'up' },
      { name: 'Search interest improving', weight: 55, direction: 'up' },
      { name: 'Interior quality perception', weight: 48, direction: 'up' },
      { name: 'AWD standard on most trims', weight: 40, direction: 'up' },
    ],
    buyerPersona: { ageRange: '35-50', householdType: 'Growing families', income: '$75,000 - $105,000' },
  },
];

export const demandDrivers = [
  {
    id: 'gas',
    name: 'Gas Price Trend',
    direction: 'up' as const,
    value: '+12%',
    description: 'Rising fuel costs are shifting demand toward hybrids and fuel-efficient vehicles.',
    sparklineData: [45, 48, 52, 55, 58, 62, 65, 68, 72, 75],
  },
  {
    id: 'rates',
    name: 'Interest Rates',
    direction: 'up' as const,
    value: '+0.25%',
    description: 'Higher rates are increasing monthly payments, pushing buyers toward lower price points.',
    sparklineData: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  },
  {
    id: 'search',
    name: 'Search Interest',
    direction: 'up' as const,
    value: '+24%',
    description: 'Online vehicle searches in Toronto are up significantly, indicating strong buyer intent.',
    sparklineData: [30, 35, 40, 48, 55, 60, 68, 72, 78, 82],
  },
  {
    id: 'season',
    name: 'Seasonal Shift',
    direction: 'up' as const,
    value: 'Winter → AWD',
    description: 'Approaching winter is driving increased demand for all-wheel-drive vehicles.',
    sparklineData: [20, 25, 30, 38, 45, 55, 65, 75, 82, 88],
  },
  {
    id: 'lease',
    name: 'Lease Expirations',
    direction: 'up' as const,
    value: '+18%',
    description: 'A wave of 3-year leases from 2021 are expiring, creating replacement demand.',
    sparklineData: [40, 42, 45, 50, 55, 62, 70, 78, 85, 90],
  },
  {
    id: 'income',
    name: 'Income Bracket Demand',
    direction: 'stable' as const,
    value: 'Stable',
    description: 'Local income distribution continues to favor mid-market SUVs ($35-50K range).',
    sparklineData: [60, 61, 60, 62, 61, 63, 62, 64, 63, 65],
  },
];

export const actionPlan = [
  {
    id: '1',
    priority: 'High' as const,
    action: 'Acquire 6–10 compact hybrid SUVs under $38k',
    impact: 'Est. +15-20 leads/month',
    description: 'Hybrid compact SUVs are showing the highest demand signals. Prioritize Toyota RAV4 Hybrid, Honda CR-V Hybrid, and Hyundai Tucson Hybrid.',
  },
  {
    id: '2',
    priority: 'High' as const,
    action: 'Stock AWD vehicles ahead of winter',
    impact: 'Est. +12 leads/month',
    description: 'Winter demand for AWD is accelerating. Focus on Subaru, Mazda, and other brands with strong AWD reputation.',
  },
  {
    id: '3',
    priority: 'Medium' as const,
    action: 'Reduce pricing on oversized trucks by 3–5%',
    impact: 'Est. +8 leads/month',
    description: 'Full-size truck demand is softening due to fuel prices. Consider strategic price adjustments to move inventory.',
  },
  {
    id: '4',
    priority: 'Medium' as const,
    action: 'Target lease expiry customers with trade-in offers',
    impact: 'Est. +10 leads/month',
    description: 'Lease expirations from 2021 are creating a pool of buyers looking to upgrade or replace vehicles.',
  },
  {
    id: '5',
    priority: 'Low' as const,
    action: 'Avoid high-mileage luxury sedans',
    impact: 'Risk mitigation',
    description: 'Demand for used luxury sedans is soft. Insurance and maintenance costs are deterring buyers in this segment.',
  },
];

export const alerts = [
  {
    id: '1',
    severity: 'High' as const,
    timestamp: '2 hours ago',
    title: 'Gas prices jumped 9% this week',
    event: 'Fuel price spike detected across GTA region',
    affectedSegments: ['Full-size trucks', 'Large SUVs'],
    recommendation: 'Increase focus on hybrid and fuel-efficient inventory',
    isRead: false,
  },
  {
    id: '2',
    severity: 'High' as const,
    timestamp: '5 hours ago',
    title: 'Compact SUV inventory tightening',
    event: 'Supply disruption detected for compact SUV segment',
    affectedSegments: ['Compact SUVs', 'Crossovers'],
    recommendation: 'Expedite acquisition of available compact SUV units',
    isRead: false,
  },
  {
    id: '3',
    severity: 'Medium' as const,
    timestamp: '1 day ago',
    title: 'Bank of Canada rate increase',
    event: 'Interest rates increased by 0.25% effective next week',
    affectedSegments: ['All segments'],
    recommendation: 'Review pricing strategy for higher price-point vehicles',
    isRead: true,
  },
  {
    id: '4',
    severity: 'Medium' as const,
    timestamp: '2 days ago',
    title: 'New EV incentive program announced',
    event: 'Provincial government expanding EV rebate program',
    affectedSegments: ['Electric vehicles', 'Plug-in hybrids'],
    recommendation: 'Increase EV marketing and stock eligible models',
    isRead: true,
  },
  {
    id: '5',
    severity: 'Low' as const,
    timestamp: '3 days ago',
    title: 'Search trends shifting toward hybrids',
    event: 'Google Trends showing 24% increase in hybrid searches',
    affectedSegments: ['Hybrid vehicles'],
    recommendation: 'Optimize listings for hybrid-related keywords',
    isRead: true,
  },
  {
    id: '6',
    severity: 'Low' as const,
    timestamp: '4 days ago',
    title: 'Competitor pricing adjustment detected',
    event: 'Major competitor reduced SUV prices by 2%',
    affectedSegments: ['Compact SUVs', 'Midsize SUVs'],
    recommendation: 'Monitor competitive pricing and adjust if needed',
    isRead: true,
  },
];

export const dataSources = [
  {
    id: 'google-trends',
    name: 'Google Trends',
    description: 'Search interest and keyword trends for vehicle models',
    status: 'connected' as const,
    lastSync: '15 minutes ago',
    isMock: true,
  },
  {
    id: 'macro-data',
    name: 'Macro Economic Data',
    description: 'Gas prices, interest rates, and economic indicators',
    status: 'connected' as const,
    lastSync: '1 hour ago',
    isMock: true,
  },
  {
    id: 'marketplace',
    name: 'Marketplace Data',
    description: 'Leads, saves, and engagement metrics from listings',
    status: 'not-connected' as const,
    lastSync: null,
    isMock: false,
  },
  {
    id: 'registrations',
    name: 'Vehicle Registrations',
    description: 'New and used vehicle registration data by region',
    status: 'connected' as const,
    lastSync: '6 hours ago',
    isMock: true,
  },
  {
    id: 'inventory',
    name: 'Dealer Inventory',
    description: 'Real-time inventory levels across the network',
    status: 'not-connected' as const,
    lastSync: null,
    isMock: false,
  },
];

export const scenarioDefaults = {
  gasPrice: 0,
  interestRate: 0,
  consumerConfidence: 'Medium' as const,
  supplyLevel: 'Normal' as const,
  season: 'Winter' as const,
};

export const scenarioWinners = [
  { vehicle: 'Toyota RAV4 Hybrid', change: '+8%', reason: 'Fuel efficiency gains value' },
  { vehicle: 'Honda CR-V Hybrid', change: '+6%', reason: 'Similar hybrid advantage' },
  { vehicle: 'Tesla Model Y', change: '+5%', reason: 'EV demand increases' },
];

export const scenarioLosers = [
  { vehicle: 'Ford F-150', change: '-12%', reason: 'Fuel costs hurt demand' },
  { vehicle: 'Chevrolet Silverado', change: '-10%', reason: 'Full-size truck softness' },
  { vehicle: 'RAM 1500', change: '-9%', reason: 'Similar truck segment impact' },
];
