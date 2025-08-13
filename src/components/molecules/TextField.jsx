import { Label } from "../atoms/Label";
import { Input } from '../atoms/Input';

import styles from './TextField.module.css'
// .class => compilar => .textfield_class.adefsbhu
// label => texto
// type'
// id 
// placeholder

export function TextField({ label, type, id, placeholder }) {
    return (
        <div className={styles.container}>
            <Label htmlFor={id}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder}  />
        </div>
    )
}