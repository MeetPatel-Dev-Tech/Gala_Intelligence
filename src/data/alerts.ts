import { AlertItem } from '../types/Alert';

const alerts: AlertItem[] = [
  {
    id: 1,
    title: 'Suspicious Login Attempt',
    severity: 'High',
    timestamp: '2025-07-19 10:23 AM',
    transactionId: 'TXN123456',
    userId: 'USR78910',
    deviceInfo: 'iPhone 14 Pro, iOS 17.5',
  },
  {
    id: 2,
    title: 'Multiple Failed Transactions',
    severity: 'Medium',
    timestamp: '2025-07-18 9:00 PM',
    transactionId: 'TXN456789',
    userId: 'USR56789',
    deviceInfo: 'Samsung S22, Android 14',
  },
];

export default alerts;
