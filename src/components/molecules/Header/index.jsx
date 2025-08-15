import { Button, Divider, Avatar } from '@mui/material'
import styles from './styles.module.css'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.navigationContainer}>
                <div>
                    <img src="/logotipo.png" alt="LabMoney" />
                </div>
                <div className={styles.actions}>
                    <Button size='large' variant='contained'>Nova transação</Button>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <div className={styles.avatar}>
                        <Avatar variant="rounded" src='https://github.com/nicholasmacedoo.png'>NM</Avatar>
                        <strong>Nicholas Macedo</strong>
                    </div>
                </div>
            </div>
        </header>
    )
}