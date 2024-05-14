import axios from 'axios'

const orderApi = {
  getAllOrders() {
    const url = `${process.env.EXPO_PUBLIC_API_URL}admin/orders`
    return axios.get(url)
  },
  getOrderById(orderId) {
    const url = `${process.env.EXPO_PUBLIC_API_URL}order/${orderId}`
    return axios.get(url)
  },
  updateOrderStatus(id, orderStatus) {
    if (orderStatus > 4) {
      return
    }
    const url = `${process.env.EXPO_PUBLIC_API_URL}update-order-status`
    return axios.put(url, { id, orderStatus })
  },
  addOrder(order) {
    const url = `${process.env.EXPO_PUBLIC_API_URL}add-order`
    return axios.post(url, order)
  },
  deleteOrder(orderId) {
    const url = `${process.env.EXPO_PUBLIC_API_URL}delete-order/${orderId}`
    return axios.put(url)
  }
}

export default orderApi
