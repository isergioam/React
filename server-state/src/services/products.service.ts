export type Product = {
    id: number
    title: string
    price: number
}

type ProductsResponse = {
    products: Product[]
}

export type CreateProductInput = {
    title: string
    price: number
}

export type UpdateProductInput = {
    id: number
    title: string
    price: number
}

export async function getProducts(): Promise<Product[]> {
    const response = await fetch('https://dummyjson.com/products')

    if (!response.ok) {
        throw new Error('Error al cargar productos')
    }

    const data: ProductsResponse = await response.json()
    return data.products
}

export async function createProduct(input: CreateProductInput): Promise<Product> {
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })

    if (!response.ok) {
        throw new Error('Error al crear producto')
    }

    return response.json()
}

export async function updateProduct(input: UpdateProductInput): Promise<Product> {
    const response = await fetch(`https://dummyjson.com/products/${input.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: input.title,
            price: input.price
        })
    })

    if (!response.ok) {
        throw new Error('Error al actualizar producto')
    }

    return response.json()
}

export async function deleteProduct(productId: number): Promise<Product> {
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error('Error al borrar producto')
    }

    return response.json()
}