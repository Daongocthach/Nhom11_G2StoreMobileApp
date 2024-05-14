import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function ButtonTab({ setOrders }) {
    const [selectedButton, setSelectedButton] = useState('all')
    const orders = useSelector(state => state.orders.orders)
    const handleGetOrders = (button) => {
        setSelectedButton(button)
        let filteredOrders = []
        if (button === 'pending') {
            filteredOrders = orders.filter(order => order.orderStatus === 'PENDING')
        } else if (button === 'confirmed') {
            filteredOrders = orders.filter(order => order.orderStatus === 'CONFIRMED')
        } else if (button === 'on_delivery') {
            filteredOrders = orders.filter(order => order.orderStatus === 'ON_DELIVERY')
        } else if (button === 'cancel') {
            filteredOrders = orders.filter(order => order.orderStatus === 'CANCEL')
        } else if (button === 'success') {
            filteredOrders = orders.filter(order => order.orderStatus === 'SUCCESS')
        } else if (button === 'all') {
            filteredOrders = orders
        }
    }

    return (
        <View className='flex-row items-center justify-between bg-white p-2 mt-2'>
            <TouchableOpacity className='items-center gap-1 flex-1' onPress={() => handleGetOrders('all')} >
                <Icon name='checkbox-marked' size={25} color={selectedButton === 'all' ? '#3CB371' : 'gray'} />
                <Text className='text-xs text-gray-500 w-14 h-10 text-center' style={{ color: selectedButton === 'all' ? '#3CB371' : 'gray' }}>Tất cả đơn</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center gap-1 flex-1' onPress={() => handleGetOrders('pending')} >
                <Icon name='calendar-check' size={25} color={selectedButton === 'pending' ? '#3CB371' : 'gray'} />
                <Text className='text-xs text-gray-500 w-14 h-10 text-center' style={{ color: selectedButton === 'pending' ? '#3CB371' : 'gray' }}>Đã đặt hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center gap-1 flex-1' onPress={() => handleGetOrders('confirmed')} >
                <Icon name='calendar-check' size={25} color={selectedButton === 'confirmed' ? '#3CB371' : 'gray'} />
                <Text className='text-xs text-gray-500 w-14 h-10 text-center' style={{ color: selectedButton === 'confirmed' ? '#3CB371' : 'gray' }}>Đã đặt hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center gap-1 flex-1' onPress={() => handleGetOrders('on_delivery')}>
                <Icon name='truck-delivery' size={25} color={selectedButton === 'on_delivery' ? '#3CB371' : 'gray'} />
                <Text className='text-xs text-gray-500 w-14 h-10 text-center' style={{ color: selectedButton === 'on_delivery' ? '#3CB371' : 'gray' }}>Đang giao hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center gap-1 flex-1' onPress={() => handleGetOrders('cancel')} >
                <Icon name='archive-cancel' size={25} color={selectedButton === 'cancel' ? '#3CB371' : 'gray'} />
                <Text className='text-xs text-gray-500 w-14 h-10 text-center' style={{ color: selectedButton === 'cancel' ? '#3CB371' : 'gray' }}>Đã hủy đơn</Text>
            </TouchableOpacity>
            <TouchableOpacity className='items-center gap-1 flex-1' onPress={() => handleGetOrders('success')} >
                <Icon name='checkbox-marked' size={25} color={selectedButton === 'success' ? '#3CB371' : 'gray'} />
                <Text className='text-xs text-gray-500 w-14 h-10 text-center' style={{ color: selectedButton === 'success' ? '#3CB371' : 'gray' }}>Thành công</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonTab