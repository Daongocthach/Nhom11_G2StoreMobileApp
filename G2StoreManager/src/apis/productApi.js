import axios from 'axios'

const productApi = {
    getAllProducts() {
        const url = `${process.env.expo_public_api_url}admin/products`
        return axios.get(url)
    },
    getProductById(id) {
        const url = `${process.env.expo_public_api_url}product/${id}`
        return axios.get(url)
    },
    addProduct(name, price, description, discount, subCategoryId, providerId, image) {
        const url = `${process.env.expo_public_api_url}admin/add-product`
        return axios.post(url, { name, price, description, discount, subCategory: { id: subCategoryId }, provider: { id: providerId }, image })
    },
    updateProduct(id, name, price, description, discount, subCategoryId, providerId, image, enabled) {
        const url = `${process.env.expo_public_api_url}admin/update-product`
        return axios.put(url, { id, name, price, description, discount, subCategory: { id: subCategoryId }, provider: { id: providerId }, image, enabled })
    },
    deleteProduct(id) {
        const url = `${process.env.expo_public_api_url}admin/del-product/${id}`
        return axios.put(url)
    }
}

export default productApi
