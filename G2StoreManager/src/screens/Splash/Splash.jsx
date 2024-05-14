import { Text, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'

const Splash = () => {
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>


    </View>
  )

}

export default Splash