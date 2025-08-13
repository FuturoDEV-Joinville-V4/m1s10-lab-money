import styles from './Input.module.css'

export function Input(props) {
    return <input className={styles.container} {...props} />
}