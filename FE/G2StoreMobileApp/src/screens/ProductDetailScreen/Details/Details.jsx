import { View, Text } from 'react-native'

function Details({ description }) {
  return (
    <View style={{ backgroundColor: 'white', padding: 5 }}>
        <Text className='text-lg font-bold text-gray-600' >Mô tả sản phẩm</Text>
        <Text className='text-sm font-bold text-gray-600' >{description}</Text>
    </View>
  )
}

export default Details