import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
    
)};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 32,
    flex: 1,
    backgroundColor: '#262626',
  },
});
