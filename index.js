export function calculateSalesTax(subTotal, taxRate){
    return (
      Number (subTotal*taxRate).toFixed(2))
    
}

export function factorial (num){
    return (
        (num< 1)? 1: num * factorial(num-1)
    )
}

