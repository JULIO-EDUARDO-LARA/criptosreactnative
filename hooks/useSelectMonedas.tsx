import React, {useState} from 'react'
import styles from '../styles/Styles'

import {
    View, 
    Text, 
    TouchableOpacity,
    Image
} from 'react-native'

const useSelectMonedas = ({ text }: { text: string }, opcionesMonedas: { id: string; nombre: string }[]) => {
    
    const imgDropDown = '../assets/img/btn_icon/arrow-dropDown.png'

    const [openDropDown, setOpenDropdown] = useState<boolean>(false)

    const [state, setState] = useState('')
    const [nameMoneda, setNameMoneda] = useState(text)

    const selectMonedas = () => (
        <View>
            <Text style={styles.textLabel}>{text}</Text>
            {/* CAMPO SELECT */}
            <TouchableOpacity
                style={styles.select}
                onPress={()=>{setOpenDropdown(!openDropDown)}}
            >
                <Text>{nameMoneda}</Text>
                <Image
                    style={styles.imgBtnDropDown}
                    source={require(imgDropDown)}
                />
            </TouchableOpacity>
            {openDropDown && 
                <View 
                    style={styles.optionVisibility}
                >
                
                {opcionesMonedas.map(OpcionMoneda => (
                    <TouchableOpacity
                        key={OpcionMoneda.id}
                        onPress={()=>{
                            setState(OpcionMoneda.id),
                            
                            setNameMoneda(OpcionMoneda.nombre),
                            setOpenDropdown(!openDropDown)
                        }}             
                    >
                        <Text>{OpcionMoneda.nombre}</Text>
                        
                    </TouchableOpacity>
                ))} 
                </View>
            }
        </View>
    )
    return [state, selectMonedas]
}

export default useSelectMonedas
