import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { alerts, Alert as AlertType } from '../utils/alertsData';

type Props = NativeStackScreenProps<RootStackParamList, 'AlertsList'>;

const severityLevels: (AlertType['severity'] | 'All')[] = [
  'All',
  'Low',
  'Medium',
  'High',
];

export default function AlertsListScreen({ navigation }: Props) {
  const [filter, setFilter] = useState<'All' | AlertType['severity']>('All');

  const filteredAlerts =
    filter === 'All' ? alerts : alerts.filter(a => a.severity === filter);

  const renderSeverityColor = (severity: AlertType['severity']) => {
    switch (severity) {
      case 'High':
        return '#dc3545';
      case 'Medium':
        return '#ffc107';
      case 'Low':
        return '#28a745';
      default:
        return '#6c757d';
    }
  };

  return (
    <View style={styles.container}>
      {/* Filter buttons */}
      <View style={styles.filterContainer}>
        {severityLevels.map(level => (
          <TouchableOpacity
            key={level}
            style={[
              styles.filterButton,
              filter === level && styles.filterButtonActive,
            ]}
            onPress={() => setFilter(level)}
          >
            <Text
              style={[
                styles.filterText,
                filter === level && styles.filterTextActive,
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredAlerts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.alertItem}
            onPress={() =>
              navigation.navigate('AlertDetail', { alertId: item.id })
            }
          >
            <View style={styles.left}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.timestamp}>
                {new Date(item.timestamp).toLocaleString()}
              </Text>
            </View>
            <View
              style={[
                styles.severityBadge,
                { backgroundColor: renderSeverityColor(item.severity) },
              ]}
            >
              <Text style={styles.severityText}>{item.severity}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No alerts found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 12,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#6c757d',
    marginHorizontal: 6,
    marginVertical: 4,
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  filterText: {
    color: '#6c757d',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#fff',
  },
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  left: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  timestamp: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 4,
  },
  severityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  severityText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
