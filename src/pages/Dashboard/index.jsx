import { 
    Container, 
    Grid, 
    Box, 
    TextField, 
    Button,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow
 } from '@mui/material'

import { Header } from '../../components/molecules/Header'
import { Card } from '../../components/molecules/Card'
import { formattedAmountReal, formattedDate } from '../../utils/formattedValues'
import { useTransaction } from '../../contexts/TransactionContext'

export function DashboardPage() {
    const { transactions } = useTransaction()

    return (
        <>
            <Header />
            <Container style={{ marginTop: -75 }}>
                {/* 12 columns */}
                {/* Indicadores */}
                <Grid container spacing={4}>
                    {/* size = 4 columns */}
                    <Grid size={{ lg: 4, xs: 12 }}>
                       <Card title='Entradas' amount={5000} type='input' />
                    </Grid>
                     <Grid size={{ lg: 4, xs: 12 }}>
                       <Card title='Saídas' amount={200} type='output' />
                    </Grid>
                     <Grid size={{ lg: 4, xs: 12 }}>
                       <Card title='Total' amount={4800} type='total' />
                    </Grid>
                </Grid>
                {/* Formulário de pesquisa */}
                <Box display="flex" alignItems={"center"} gap={4} marginTop={6}>
                    <TextField placeholder='Filtre pelo nome da transação' fullWidth label="Transação" size='small' />
                    <Button variant='contained' size='large'>Buscar</Button>
                </Box>
                {/* Tabela */}
                <Box marginTop={4}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Categoria</TableCell>
                                    <TableCell>Data de criação</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((transaction) => (
                                    <TableRow key={transaction.id}>
                                        <TableCell>{transaction.description}</TableCell>
                                        <TableCell 
                                            style={{ 
                                                color: transaction.type ===  'output' ? 'red' : 'green',
                                            }}
                                        >
                                            {`${transaction.type ===  'output' ? '-' : ''} ${formattedAmountReal(transaction.amount)}`}
                                        </TableCell>
                                        <TableCell>{transaction.category}</TableCell>
                                        <TableCell>{formattedDate(transaction.created_at)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    )
}