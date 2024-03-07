import { View, StyleSheet , Text} from 'react-native';

export default function TitleCard({ children }) {
  return <View style={styles.card}>
    <Text style={styles.text}>
    {children}
    </Text>
    </View>;
}


const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#EBFDFE',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    height: 80,
    width: 360,
    borderWidth: 2,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});
