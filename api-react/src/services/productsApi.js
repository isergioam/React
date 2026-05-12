const API_URL = 'https://dummyjson.com/products'

async function request(url) {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`)
    }

    return response.json()
}

export async function getProducts() {
    const data = await request(API_URL)
    return data.products
}

export async function getProductById(productId) {
    return request(`${API_URL}/${productId}`)
}