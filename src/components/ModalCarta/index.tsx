import React, { useEffect, useState } from 'react';
import { View, Modal, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const CustomModal: React.FC<ModalProps> = ({ visible, onClose, children }:any) => {
  
  useEffect(()=>{},[])
  
    return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text>X</Text>
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};