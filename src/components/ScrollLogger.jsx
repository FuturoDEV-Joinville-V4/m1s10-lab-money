import { useEffect } from "react"

export function ScrollLogger() {
    
    function onScroll() {
        console.log('Scroll detectado!')
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        // cleanup => limpeza de codigo

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div style={{ height: '200vh' }}>
            <h1>Scroll na página e veja no console.</h1>
        </div>
    )
}