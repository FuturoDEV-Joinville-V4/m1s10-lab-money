import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import styles from "./styles.module.css"
import { useState } from 'react'

const mockuUser = {
    email: "nicholas@amoratec.com.br",
    password: 123123,
}

function api() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
} 

export function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        /** 
         * Testes de validação
         */
        if(!email) {
            return alert("Informe o seu e-mail")
        }

        if(!password) {
            return alert("Informe sua senha")
        }

        if(mockuUser.email !== email || mockuUser.password !== +password) {
            return alert("Email/Senha inválidos")
        }
        const resposta = await api()
        /** Sucesso! */
        navigate("/dashboard")

        setIsLoading(false)
    }

    return (
        <div className={styles.container}>
            <form className={styles.login_form} onSubmit={handleSubmit}>
                <img src="/logotipo.png" height={61} width={210} />
                <h1>Efetuar login</h1>
                {/* E-mail */}
                <TextField 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    type="email" 
                    label="Email" id="field-email" 
                    placeholder="Informe seu email" 
                />
                {/* Senha */}
                <TextField 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    type="password" 
                    label="Senha" 
                    id="field-password" 
                    placeholder="Informe sua senha" 
                />

                <Button size='large' type='submit' variant='contained' loading={isLoading}>Entrar</Button>
            </form>
        </div>
    )
}