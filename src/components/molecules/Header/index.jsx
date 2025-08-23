import { useState } from 'react'
import { Link } from "react-router"
import { useForm } from 'react-hook-form';
import { Fab, Button, Divider, Avatar, Dialog, DialogTitle, DialogContent, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Box, Select, MenuItem, useMediaQuery, FormHelperText } from '@mui/material'
import { PlusIcon } from 'lucide-react';
import { useTransaction } from '../../../contexts/TransactionContext'
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
    const isMobile = useMediaQuery('(max-width: 600px)')
    const { create } = useTransaction()
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            description: "",
            amount: 0,
            category: ""
        }
    })

    const [open, setOpen] = useState(false)
    

    function onSubmit(data) {
        create(data)

        setOpen(false)
    }

    return (
        <header className={styles.container}>
            <div className={styles.navigationContainer}>
                <div>
                    <Link to="/dashboard">
                        <img src="/logotipo.png" alt="LabMoney" />
                    </Link>
                </div>
                <div className={styles.actions}>
                    <Button size='large' variant='contained' onClick={() => setOpen(true)}>Nova transação</Button>
                    <Divider orientation='vertical' variant='middle' flexItem />
             
                    <Link to="/dashboard/profile" className={styles.avatar}>
                        <Avatar variant="rounded" src='https://github.com/nicholasmacedoo.png'>NM</Avatar>
                        <strong>Nicholas Macedo</strong>
                    </Link>
      
                </div>
            </div>
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Nova transação</DialogTitle>
                <DialogContent style={{ paddingTop: 16 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box display={"flex"} flexDirection={"column"} gap={2}>
                            <TextField 
                                placeholder='Ex.: Desenvolvimento de sites' 
                                label="Descrição" 
                                error={!!formState.errors.description}
                                helperText={formState.errors.description && formState.errors.description.message}
                                {...register("description", { 
                                    required: {
                                        value: true,
                                        message: "Este campo é obrigatório"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "A descrição deve ter pelo menos 3 caracteres"
                                    }
                                })}
                            />
                            <FormControl>
                                <InputLabel>Valor</InputLabel>
                                <OutlinedInput 
                                    label="Valor" 
                                    placeholder='5.000' 
                                    type='number'
                                    startAdornment={<InputAdornment position='start' >R$</InputAdornment>} 
                                    error={!!formState.errors.amount}
                                    {...register("amount", { 
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "O valor deve ter no minimo R$ 1"
                                        }
                                    })}
                                />
                                {/* {formState.errors.amount && <FormHelperText>{formState.errors.amount}</FormHelperText>} */}
                                
                            </FormControl>
                            
                            <FormControl fullWidth>
                                <InputLabel id="select-categories">Categoria</InputLabel>
                                <Select 
                                    label="Categoria" id='select-categories' 
                                   {...register("category", {
                                        required: {
                                            value: true,
                                            message: "Categoria é obrigatória."
                                        }
                                   })}
                                   error={!!formState.errors.category}
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