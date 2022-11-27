import { Text, View } from 'react-native';
import { styles } from './styles';


export default function Header() {
    
    return(
        <View style={styles.container}>
            <Text style={styles.textPrimary}>Novo Evento</Text>
            <Text style={styles.textSecundary}>25 de novembro, 2022.</Text>
        </View>
    );
}