import { Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'
import { mockData } from '../../apis/mockdata'
import ProductHomeSale from '../../components/Product/ProductHomeSale'
import Header from '../../components/Header/Header'

const ProductsScreen = () => {
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Header />
        <View style={{ flex: 1, paddingLeft: 20, paddingBottom: 3 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30 }}>
            <Text className='text-xl font-bold' >Sản phẩm</Text>
            <Icon name='filter' size={30} />
          </View>
          <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              {mockData?.products.map((product, index) => (
                <ProductHomeSale product={product} key={index} />
              ))
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </View >
  )

}

export default ProductsScreen
