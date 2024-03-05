import React, {useState, useEffect} from 'react';
import styles from './styles/Styles';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import {
  Image,
  View,
  Text
} from 'react-native'

interface Monedas {
  moneda?: any;
  criptomoneda?: any;
}
  // ESTRUCTURA DEL OBJETO RESULTADO
interface ResultadoData {
  PRICE: string;
  HIGHDAY: string;
  LOWDAY: string;
  CHANGEPCT24HOUR: string;
  LASTUPDATE: string;
  IMAGEURL: string;
}

export default function App() {
  // OBJETO moneda QUE ALMACENARÁ LA MONEDA Y CRIPTOMONEDA SELECCIONADA
  const [ monedas, setMonedas ] = useState<Monedas>({})
  // OBJETO resultado QUE ALMACENARÁ on objeto consumido de la API
  const [resultado, setResultado] = useState<ResultadoData | null>(null)

  // ESCUCHAMOS POR LOS CAMBIOS QUE OCURRAN EN EL OBJETO moneda
  useEffect(() => {

    if(Object.keys(monedas).length > 0){
      const CotizarCripto = async () => {

        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultadito = await respuesta.json()

        setResultado(resultadito.DISPLAY[criptomoneda][moneda])
      }
      CotizarCripto()
    }
  }, [monedas])

  //RETURN QUE SE MUESTRA EN EL FRONT
  return (
    <View style={styles.body}>
      <Image
        style={styles.imagen}
        source={require('./assets/img/imagen-criptos.png')}
      />
      <View>
          <Text style={styles.heading1}>Cotiza Criptomonedas con </Text>
          <Text style={styles.heading1B}>Cripto
          <Text style={styles.heading1C}>Compare 
            <Text style={styles.heading1Api}>API</Text> 
            </Text>
          </Text>
          
          
          
        
        <View style={styles.pseudoBarra}/>
        {/* PASAMOS EL setMonedas COMO UN PROPS DE <Formulario /> */}
        <Formulario 
          setMonedas={setMonedas}
        />
        
        {/* VALIDAMOS SI resultado EXISTE COMO UN CONDICIONANTE PARA MOSTRAR EL RESULTADO DE LA COTIZACION */}
        {resultado && 
          <Resultado
            resultado={resultado}
          />
        }
      </View>

    </View>
  )
}