import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { alerts } from '../utils/alertsData';

type Props = NativeStackScreenProps<RootStackParamList, 'AlertDetail'>;

export default function AlertDetailScreen({ route }: Props) {
  const { alertId } = route.params;
  const alert = alerts.find(a => a.id === alertId);

  const [status, setStatus] = useState<
    'Pending' | 'Safe' | 'Flagged' | 'Escalated'
  >('Pending');

  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  if (!alert) {
    return (
      <View style={styles.container}>
        <Text>Alert not found.</Text>
      </View>
    );
  }

  const onMarkSafe = () => {
    setStatus('Safe');
    Alert.alert('Marked as Safe', 'This alert is now marked as safe.');
  };

  const onFlagReview = () => {
    setStatus('Flagged');
    Alert.alert(
      'Flagged for Review',
      'This alert has been flagged for review.',
    );
  };

  const onEscalate = () => {
    setStatus('Escalated');
    Alert.alert('Escalated', 'This alert has been escalated.');
  };

  const onSubmitFeedback = () => {
    if (feedbackText.trim() === '') {
      Alert.alert('Feedback', 'Please enter your feedback before submitting.');
      return;
    }
    Alert.alert('Feedback Received', 'Thank you for your feedback!');
    setFeedbackText('');
    setFeedbackVisible(false);
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 16 }}
      >
        <Text style={styles.title}>{alert.title}</Text>
        <Text style={styles.status}>Status: {status}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.sectionContent}>{alert.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transaction ID</Text>
          <Text style={styles.sectionContent}>{alert.transactionId}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User ID</Text>
          <Text style={styles.sectionContent}>{alert.userId}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device ID</Text>
          <Text style={styles.sectionContent}>{alert.deviceId}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.actionButton}>
            <Button title="Mark as Safe" onPress={onMarkSafe} color="#28a745" />
          </View>
          <View style={styles.actionButton}>
            <Button
              title="Flag for Review"
              onPress={onFlagReview}
              color="#ffc107"
            />
          </View>
          <View style={styles.actionButton}>
            <Button title="Escalate" onPress={onEscalate} color="#dc3545" />
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <Button
            title="Give Feedback"
            onPress={() => setFeedbackVisible(true)}
            color="#007bff"
          />
        </View>
      </ScrollView>

      {/* Feedback Modal */}
      <Modal
        visible={feedbackVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setFeedbackVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Give Feedback</Text>
            <TextInput
              style={styles.feedbackInput}
              multiline
              placeholder="Enter your feedback here..."
              value={feedbackText}
              onChangeText={setFeedbackText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#6c757d' }]}
                onPress={() => setFeedbackVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#007bff' }]}
                onPress={onSubmitFeedback}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#495057',
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 1,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  sectionContent: {
    color: '#555',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(33,33,33,0.6)',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  feedbackInput: {
    minHeight: 100,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 14,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
