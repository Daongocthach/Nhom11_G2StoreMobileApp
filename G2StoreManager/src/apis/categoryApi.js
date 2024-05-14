import axios from 'axios'

const categoryApi = {
    getAllCategories() {
        const url = `${process.env.expo_public_api_url}admin/categories`
        return axios.get(url)
    },
    getCategoryById(id) {
        const url = `${process.env.expo_public_api_url}category/${id}`
        return axios.get(url)
    },
    addCategory(name) {
        const url = `${process.env.expo_public_api_url}admin/add-category`
        return axios.post(url, { name });
    },
    updateCategory(id, name, enabled) {
        const url = `${process.env.expo_public_api_url}admin/update-category`
        return axios.put(url, { id, name, enabled });
    },
    deleteCategory(id) {
        const url = `${process.env.expo_public_api_url}admin/delete-category/${id}`
        return axios.put(url)
    }
}

export default categoryApi
