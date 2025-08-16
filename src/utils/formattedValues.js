/**
 * Frunção responsavel por formatar valor em valor monetário. ex.: 3000 => R$ 3.000
 * @param {number} value Valor a ser formatado
 * @returns {string} 
 */
export function formattedAmountReal(value) {
    const valueFormatted = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(value)

    return valueFormatted
}

/**
 * Função responsavel por formatar valores de string em data.
 * @param {string} value Data a ser formatada
 * @returns {string}
 */
export function formattedDate(value) {
    const dateFormatted = new Intl.DateTimeFormat('pt-br').format(new Date(value))

    return dateFormatted
}