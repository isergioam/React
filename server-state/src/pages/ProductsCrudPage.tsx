import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct
} from '../services/products.service'

export default function ProductsCrudPage() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const queryClient = useQueryClient()

    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })

    const createProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            setTitle('')
            setPrice(0)
        }
    })

    const updateProductMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })

    const deleteProductMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })

    if (productsQuery.isLoading) {
        return <p>Cargando productos...</p>
    }

    if (productsQuery.isError) {
        return <p>No se pudieron cargar los productos.</p>
    }

    return (
        <section>
            <h1>Productos</h1>

            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    createProductMutation.mutate({ title, price })
                }}
            >
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Nombre del producto"
                />

                <input
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(Number(event.target.value))}
                    placeholder="Precio"
                />

                <button type="submit" disabled={createProductMutation.isPending}>
                    {createProductMutation.isPending ? 'Creando...' : 'Crear producto'}
                </button>
            </form>

            {createProductMutation.isError ? <p>Error al crear producto.</p> : null}
            {createProductMutation.isSuccess ? <p>Producto creado correctamente.</p> : null}

            <ul>
                {productsQuery.data.map((product) => (
                    <li key={product.id}>
                        {product.title} · {product.price} €

                        <button
                            type="button"
                            onClick={() =>
                                updateProductMutation.mutate({
                                    id: product.id,
                                    title: `${product.title} actualizado`,
                                    price: product.price
                                })
                            }
                            disabled={updateProductMutation.isPending}
                        >
                            Editar
                        </button>

                        <button
                            type="button"
                            onClick={() => deleteProductMutation.mutate(product.id)}
                            disabled={deleteProductMutation.isPending}
                        >
                            Borrar
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}