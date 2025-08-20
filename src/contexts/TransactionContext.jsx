import { createContext, useContext, useState } from "react";

const transactionExample = {
    id: 0,
    description: '',
    amount: 0,
    category: '',
    created_at: ''
}

export const TransactionContext = createContext({
    transactions: [transactionExample],
    create: (data) => {}
})

export function TransactionProvider(props) {
    const [transactions, setTransactions] = useState([])
    
    function create(data) {
        const id = new Date().getTime()
        const created_at = new Date().toISOString()

        const newTransaction = {
            ...data,
            id,
            created_at
        }

        setTransactions(transctionsPrev => {
            return [...transctionsPrev, newTransaction]
        })
    }

    return <TransactionContext.Provider value={{ transactions, create }}>{props.children}</TransactionContext.Provider>
}

export function useTransaction() {
    const context = useContext(TransactionContext)

    return context
}