import React from 'react'
import styles from '../styles/Styles'
import {
    Image,
    Text
  } from 'react-native'

const Error = () => {
  return (
    <Text style={styles.errorValidate}>
      Todos los campos son obligatorios
    </Text>
  )
}

export default Error
