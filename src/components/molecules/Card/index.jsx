import { Box, Typography } from "@mui/material"
import { CircleChevronUp, CircleChevronDown, DollarSign } from 'lucide-react'
import { formattedAmountReal } from "../../../utils/formattedValues"

const typesIcons = {
    input: <CircleChevronUp size={32} color="green" />,
    output: <CircleChevronDown size={32} color="red" />,
    total: <DollarSign size={32} color="white" />,
}

/**
 * @param {object} props Propriedade do componente `Card`
 * @param {string} props.title Titulo do tipo de transação
 * @param {string} props.type Tipo de transação
 * @param {number} props.amount Valor 
 * @returns 
 */
export function Card({ title, type, amount }) {

    const icon = typesIcons[type] ? typesIcons[type] : typesIcons.total
    const bgColor = type === 'total' ? '#2196F3' : '#fff'
    const textColor = type === 'total' ? '#fff' : '#323238'
    const amountFormatted = formattedAmountReal(amount)

    return (
         <Box bgcolor={bgColor} padding={3} borderRadius={"6px"}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontSize={16} color={textColor}>{title}</Typography>
                {icon}
            </Box>
            <Typography fontSize={32} fontWeight="bold" color={textColor}>{amountFormatted}</Typography>
         </Box>
    )
}