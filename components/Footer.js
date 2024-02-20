import { View, Text, StyleSheet } from 'react-native'
export function Footer() {
  return (
    <View>
      <Text style={styles.texto}>2024 Fernando de Noronha Turismo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  texto: {
    marginTop: 25,
    marginLeft: 55
  }
})