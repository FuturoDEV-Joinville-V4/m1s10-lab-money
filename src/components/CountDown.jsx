import { useEffect, useState } from "react"

export function CountDown() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setContador(prev => prev + 1)
        }, 1000)
        
        return () => {
            clearInterval(id)
            console.log('limpeza')
        }
    }, [])

    return (
        <div>
            <strong>Limite de tempo!</strong>
            <h2>Contador: {contador}</h2>
        </div>
    )
}