import React, { useEffect, useState } from 'react';
import { View, Modal, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Audio } from 'expo-av';
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: any
  estilo?: any
}

export const CustomModal: React.FC<ModalProps> = ({ visible, onClose, estilo, children }:any) => {
  
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('../../assets/sons/fecharModalCarta.mp3'));
    await sound.playAsync();
  }

  useEffect(()=>{},[])
  
    return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, estilo]}>
          <TouchableOpacity style={styles.closeButton} onPress={()=>{playSound(),onClose()}}>
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};