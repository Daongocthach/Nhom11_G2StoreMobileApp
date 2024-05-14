import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState, useEffect } from 'react'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import orderApi from '../../apis/orderApi'
import { listOrders } from '../../redux/actions/orders'

const Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)

  useEffect(() => {
    orderApi.getAllOrders()
      .then((response) => {
        dispatch(listOrders(response?.data))
      })
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Header />
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='clipboard-list' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý đơn hàng</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='account-group' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý người dùng</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='package-variant-closed' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý sản phẩm</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='format-list-bulleted' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý danh mục</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='playlist-plus' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý danh mục con</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='sale' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý khuyến mãi</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center pl-5 mt-3' onPress={() => navigation.navigate('Orders')}>
          <View className='flex-row items-center gap-5'>
            <Icon name='truck' size={30} />
            <Text className='text-xl font-semibold text-gray-600'>Quản lý nhà cung cấp</Text>
          </View>
          <Icon name='chevron-right' size={30} style={{ marginRight: 20, color: '#444444' }} />
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default Home
