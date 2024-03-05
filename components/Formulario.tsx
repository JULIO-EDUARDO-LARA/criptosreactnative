import React, {useState, useEffect} from 'react'
import styles from '../styles/Styles'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from '../components/Error'
import {monedas} from '../data/monedas'
import {
    SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native'

interface FormularioProps {
  setMonedas: React.Dispatch<React.SetStateAction<Object>>;
}

const Formulario: React.FC<FormularioProps> = ({setMonedas}) => {

  const [error, setError] = useState<boolean>(false)
  const [criptos, setCriptos ] = useState([])
  const [moneda, SelectMonedas ] = useSelectMonedas({text:'Elige tu moneda'},monedas)
  const [criptomoneda, SelectCriptomonedas ] = useSelectMonedas({text:'Elige tu criptomoneda'},criptos)

      useEffect(() => {
        const consultarAPI = async () => {
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=4&tsym=USD"
          const respuesta = await fetch(url)

          const resultado = await respuesta.json()

          const arrayCriptos = resultado.Data.map((cripto: { CoinInfo: { Name: string; FullName: string } }) => {

            const objeto = {
              id: cripto.CoinInfo.Name,
              nombre: cripto.CoinInfo.FullName
            }
            return objeto
          })
          setCriptos(arrayCriptos)
        }
        consultarAPI()
      },[])

  const RendStateMoneda = typeof moneda === 'function' ? moneda() : moneda;
  const RendStateCriptomoneda = typeof criptomoneda === 'function' ? criptomoneda() : criptomoneda;

  const addMonedas = () => {

    if([RendStateMoneda, RendStateCriptomoneda].includes('')){
      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
    
  }    
  return (
    <SafeAreaView>
      {error && <Error/>}
      <View style={styles.formulario}>

        <SelectMonedas/>
        <SelectCriptomonedas/>

        <TouchableOpacity
          onPress={addMonedas}
          style={styles.inputSubmit}
        >
            <Text style={styles.textSubmit}>Cotizar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Formulario
