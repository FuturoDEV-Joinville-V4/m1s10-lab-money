import { createContext, useContext, useState } from "react"
// Crio o contexto
export const AuthContext = createContext({
    usuario: {
        id: "",
        nome: "",
        email: ""
    },
    login: (dados) => {},
    logout: () => {}
})
// Criar o provedor 
export function AuthProvider(props) {
    const [usuario, setUsuario] = useState(null)

    function login(dados) {
        console.log(dados)
    }

    function logout() {
        console.log("deslogando usuário")
    }

    return <AuthContext.Provider value={{ usuario, login, logout }}>{props.children}</AuthContext.Provider>
}

// criar um hook customizado para utilizar o contexto
export function useAuth() {
    const contexto = useContext(AuthContext)
    
    return contexto
}