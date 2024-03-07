import { View, StyleSheet } from 'react-native';

export default function CongratulationsCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}



const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#EBFDFE',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderWidth: 2,
    height: 200,
    width: 350,


  },
});
