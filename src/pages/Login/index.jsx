import { TextField, Button } from '@mui/material'

import styles from "./styles.module.css"

export function LoginPage() {
    return (
        <div className={styles.container}>
            <form className={styles.login_form}>
                <img src="/logotipo.png" height={61} width={210} />
                <h1>Efetuar login</h1>
                {/* E-mail */}
                <TextField type="email" label="Email" id="field-email" placeholder="Informe seu email" />
                {/* Senha */}
                <TextField type="password" label="Senha" id="field-password" placeholder="Informe sua senha" />

                <Button size='large' variant='contained'>Entrar</Button>
            </form>
        </div>
    )
}