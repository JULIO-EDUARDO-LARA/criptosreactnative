import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles/Styles'


const Resultado = ({resultado}) => {
  console.log('desde resultado')
  console.log(resultado.PRICE)
  console.log(resultado.IMAGEURL)
  return (
    <View style={styles.contenedorResultado}>
      <View style={styles.contenedorResultadoRow}>
        <Text style={styles.textResultadoTitle}>{"PRICE: "}</Text>
        <Text>{resultado.PRICE}</Text>
      </View>
      <View style={styles.contenedorResultadoRow}>
        <Text style={styles.textResultadoTitle}>{"HIGHDAY: "}</Text>
        <Text>{resultado.HIGHDAY}</Text>
      </View>
      <View style={styles.contenedorResultadoRow}>
        <Text style={styles.textResultadoTitle}>{"LOWDAY: "}</Text>
        <Text>{resultado.LOWDAY}</Text>
      </View>
      <View style={styles.contenedorResultadoRow}>
        <Text style={styles.textResultadoTitle}>{"HIGHDAY: "}</Text>
        <Text>{resultado.CHANGEPCT24HOUR}</Text>
      </View>
      <View style={styles.contenedorResultadoRow}>
        <Text style={styles.textResultadoTitle}>{"LASTUPDATE: "}</Text>
        <Text>{resultado.LASTUPDATE}</Text>
      </View>
      <View style={styles.contenedorResultadoRow}>
        <Text style={styles.textResultadoTitle}>{"IMAGEURL: "}</Text>
        <Text>{resultado.IMAGEURL}</Text>
      </View>
    </View>

  )
}

export default Resultado
