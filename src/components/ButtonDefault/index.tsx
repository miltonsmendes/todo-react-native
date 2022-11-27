import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
    onAddPress: () => void;
}

export default function Header({onAddPress}: Props ) {
    
    return(
        <TouchableOpacity style={styles.container} onPress={onAddPress}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
}