import { View, Modal, Text, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import { styles } from './styles';
import { Audio } from 'expo-av';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  estilo?: StyleProp<ViewStyle>;
}

export const CustomModal: React.FC<ModalProps> = ({ visible, onClose, estilo, children }) => {
  
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('../../assets/sons/fecharModalCarta.mp3'));
    await sound.playAsync();
  }
  
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