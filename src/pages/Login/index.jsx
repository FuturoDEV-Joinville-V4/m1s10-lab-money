import { useForm } from "react-hook-form"
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router'
import styles from "./styles.module.css"

const mockuUser = {
    email: "nicholas@amoratec.com.br",
    password: 123123,
}

function api() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
} 

export function LoginPage() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(data) {
               
        if(mockuUser.email !== data.email || mockuUser.password !== +data.password) {
            return alert("Email/Senha inválidos")
        }
        const resposta = await api()
        /** Sucesso! */
        navigate("/dashboard")

    }
    

    return (
        <div className={styles.container}>
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
                <img src="/logotipo.png" height={61} width={210} />
                <h1>Efetuar login</h1>
                {/* E-mail */}
                <TextField 
                    type="email" 
                    label="Email" id="field-email" 
                    placeholder="Informe seu email" 
                    error={!!formState.errors.email}
                    helperText={formState.errors.email && "Campo obrigatório"}
                    {...register("email", { required: true })}
                />
                
                {/* Senha */}
                <TextField 
                    type="password" 
                    label="Senha" 
                    id="field-password" 
                    placeholder="Informe sua senha" 
                    error={!!formState.errors.password}
                    helperText={formState.errors.password && formState.errors.password.message}
                    {...register("password", { 
                        required: {
                            value: true,
                            message: "Este campo é obrigatório"
                        },
                        minLength: {
                            value: 3,
                            message: "O minimo de caracteres para senha é de 3"
                        },
                        maxLength: {
                            value: 16,
                            message: "O Maximo de caractes para senha e de 16"
                        }
                    })}
                />

                <Button size='large' type='submit' variant='contained' loading={formState.isSubmitting}>Entrar</Button>
            </form>
        </div>
    )
}