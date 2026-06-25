type ProductCardProps = {
    title: string
    price: number
    available: boolean
}

export default function ProductCard({ title, price, available }: ProductCardProps) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{price} €</p>
            {available ? <p>Disponible</p> : <p>Agotado</p>}
            <button disabled={!available}>Comprar</button>
        </article>
    )
}