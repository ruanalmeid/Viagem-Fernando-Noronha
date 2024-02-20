import { View, Text, StyleSheet } from 'react-native'
export function Button() {
  return (
    <View>
      <Text style={styles.titulo}>Reserve sua Viagem</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  titulo: {
    backgroundColor: '#c6e0f2',
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 25,
    marginRight: 25,
    marginTop: 30,
    marginLeft: 25,
    color: '#0001ff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})