import { useState } from 'react'
import { Fab, Button, Divider, Avatar, Dialog, DialogTitle, DialogContent, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Box, Select, MenuItem, useMediaQuery } from '@mui/material'
import { PlusIcon } from 'lucide-react';

import styles from './styles.module.css'

const categories = [
  { id: 1, name: "Alimentação" },
  { id: 2, name: "Transporte" },
  { id: 3, name: "Moradia" },
  { id: 4, name: "Saúde" },
  { id: 5, name: "Educação" },
  { id: 6, name: "Lazer" },
  { id: 7, name: "Vestuário" },
  { id: 8, name: "Contas e Serviços" },
  { id: 9, name: "Trabalho" },
  { id: 10, name: "Vendas" },
  { id: 11, name: "Investimentos" },
  { id: 12, name: "Outros" }
];


export function Header() {
    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const isMobile = useMediaQuery('(max-width: 600px)')

    function handleSubmit(event) {
        event.preventDefault()

        console.log('[DADOS DA TRANSAÇÃO]', {
            description,
            amount,
            category
        })

        setOpen(false)
    }

    return (
        <header className={styles.container}>
            <div className={styles.navigationContainer}>
                <div>
                    <img src="/logotipo.png" alt="LabMoney" />
                </div>
                <div className={styles.actions}>
                    <Button size='large' variant='contained' onClick={() => setOpen(true)}>Nova transação</Button>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <div className={styles.avatar}>
                        <Avatar variant="rounded" src='https://github.com/nicholasmacedoo.png'>NM</Avatar>
                        <strong>Nicholas Macedo</strong>
                    </div>
                </div>
            </div>
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Nova transação</DialogTitle>
                <DialogContent style={{ paddingTop: 16 }}>
                    <form onSubmit={handleSubmit}>
                        <Box display={"flex"} flexDirection={"column"} gap={2}>
                            <TextField 
                                placeholder='Ex.: Desenvolvimento de sites' 
                                label="Descrição" 
                                value={description}
                                onChange={(event) => setDescription(event.target.value)} 
                            />
                            <FormControl>
                                <InputLabel>Valor</InputLabel>
                                <OutlinedInput 
                                    value={amount}
                                    onChange={(event) => setAmount(+event.target.value)} 
                                    label="Valor" 
                                    placeholder='5.000' 
                                    type='number'
                                    startAdornment={<InputAdornment position='start' >R$</InputAdornment>} 
                                />
                            </FormControl>
                            
                            <FormControl fullWidth>
                                <InputLabel id="select-categories">Categoria</InputLabel>
                                <Select 
                                    label="Categoria" id='select-categories' 
                                    onChange={(event) => setCategory(event.target.value)}
                                    value={category}
                                >
                                    {categories.map((category) => (
                                        <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Button type='submit' variant='contained' size='large'>Cadastrar</Button>
                        </Box>
                        
                    </form>
                </DialogContent>
            </Dialog>
            
            {
                isMobile && (
                    <Fab onClick={() => setOpen(true)} color="primary" aria-label="add" style={{ position: 'fixed', bottom: 32, right: 24 }}>
                        <PlusIcon />
                    </Fab>
                )
            }
        </header>
    )
}