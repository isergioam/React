const API_URL = 'https://dummyjson.com/products'

async function request(url, options = {}) {
    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`)
    }

    return response.json()
}

export async function getProducts() {
    const data = await request(API_URL)
    return data.products
}

export async function searchProducts(query) {
    const cleanQuery = query.trim()

    if (!cleanQuery) {
        return getProducts()
    }

    const data = await request(`${API_URL}/search?q=${encodeURIComponent(cleanQuery)}`)
    return data.products
}

export async function getProductById(productId) {
    return request(`${API_URL}/${productId}`)
}

export async function createProduct(productData) {
    return request(`${API_URL}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
}

export async function updateProduct(productId, productData) {
    return request(`${API_URL}/${productId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
}

export async function deleteProduct(productId) {
    return request(`${API_URL}/${productId}`, {
        method: 'DELETE'
    })
}