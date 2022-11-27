import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
    name: string,
    onRemove: () => void;
}
export default function Participant({ name, onRemove }: Props) {
    
    return(
        <View style={styles.container}>
            <View style={styles.containerName}>
                <Text style={styles.participantText}>{name}</Text>
            </View>
            <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
};