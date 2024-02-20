import { View, Text, StyleSheet } from 'react-native'
export function Title() {
  return (
    <View>
      <Text style={styles.titulo}>Bem-Vindo a Fernando de Noronha</Text>
      <Text style={styles.texto}>Descubra o paraíso das praias intocadas e águas cristalinas </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#018002',
    color: '#ffffff'
  },

  texto: {
    marginLeft: 10,
  }
})