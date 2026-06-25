type GreetingProps = {
    name: string
}

export default function Greeting({ name }: GreetingProps) {
    return <h1>Hola, {name}</h1>
}