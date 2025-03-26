export const addNumber = (value) => ({
    type:"ADD",
    payload : value,
})

export const subractNumber = (value)=>({
    type: "SUBTRACT",
    payload: value
})

export const mulNumber = (value) => ({
    type:"MULTIPLY",
    payload : value,
})

export const divNumber = (value)=>({
    type: "DIVIDE",
    payload: value
})

export const modNumber = (value)=>({
    type: "MODULUS",
    payload: value
})

export const pwrNumber = (value)=>({
    type: "POWER",
    payload: value
})
