export type Alert = {
  id: string;
  title: string;
  severity: 'Low' | 'Medium' | 'High';
  timestamp: string;
  transactionId: string;
  userId: string;
  deviceId: string;
  description: string;
};

export const alerts: Alert[] = [
  {
    id: '1',
    title: 'Unusual Login Location',
    severity: 'High',
    timestamp: '2025-07-18T12:34:56Z',
    transactionId: 'TX123456',
    userId: 'User987',
    deviceId: 'DeviceABC',
    description: 'Login detected from an unrecognized country/IP.',
  },
  {
    id: '2',
    title: 'Multiple Failed Transactions',
    severity: 'Medium',
    timestamp: '2025-07-18T08:20:00Z',
    transactionId: 'TX654321',
    userId: 'User123',
    deviceId: 'DeviceXYZ',
    description: 'Multiple failed payment attempts within 10 minutes.',
  },
  {
    id: '3',
    title: 'High-Value Transaction',
    severity: 'Low',
    timestamp: '2025-07-17T15:45:10Z',
    transactionId: 'TX789012',
    userId: 'User456',
    deviceId: 'DeviceLMN',
    description: 'Transaction amount exceeds normal threshold for user.',
  },
];
