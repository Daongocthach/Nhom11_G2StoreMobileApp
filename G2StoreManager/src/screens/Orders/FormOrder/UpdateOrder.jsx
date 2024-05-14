import { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Dialog from 'react-native-dialog'
import orderApi from '../../../apis/orderApi'
import showAlertOk from '../../../components/Alert/AlertOk'
import DropdownMenu from '../../../components/DropdownMenu/DropdownMenu'


function UpdateOrder({ order, reRender, setReRender }) {
  const [orderStatus, setOrderStatus] = useState(order?.orderStatus)

  const [visible, setVisible] = useState(false)

  const showDialog = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleUpdate = () => {
    orderApi.updateOrderStatus(order?.id, orderStatus)
    .then(() => {
      setReRender(!reRender)
      showAlertOk('Cập nhật đơn thành công', 'Bấm Ok để tiếp tục')
    })
    .catch(error => {
      console.log(error)
      showAlertOk('Thất bại', 'Bấm Ok để tiếp tục')
    })
    setVisible(false)
  }
  return (
    <View>
      <TouchableOpacity className='rounded-xl bg-red-500 p-2' onPress={showDialog}>
        <Text className='font-bold text-base text-white' >Cập nhật</Text>
      </TouchableOpacity>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Cập nhật đơn hàng</Dialog.Title>
        <Text className='text-base'>Trạng thái</Text>
        <DropdownMenu items={orderStatusData} value={orderStatus} setValue={setOrderStatus} />
        <Text className='text-base'></Text>
        <Text className='text-base'></Text>
        <Text className='text-base'></Text>
        <Text className='text-base'></Text>
        <Text className='text-base'></Text>
        <Text className='text-base'></Text>
        <Text className='text-base'></Text>
        <Dialog.Button label="Hủy" onPress={handleCancel} />
        <Dialog.Button label="Cập nhật" onPress={handleUpdate} />
      </Dialog.Container>
    </View>
  )
}

export default UpdateOrder
const orderStatusData = [
  { label: 'Đã xác nhận', value: 'CONFIRMED' },
  { label: 'Đang giao hàng', value: 'ON_DELIVERY' },
  { label: 'Thành công', value: 'SUCCESS' },
  { label: 'Đã hủy', value: 'CANCEL' }
];
