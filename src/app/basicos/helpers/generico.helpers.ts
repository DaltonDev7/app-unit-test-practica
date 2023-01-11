

export function Saludo(nombre: string) {
    return `Saludos ${nombre}`
}

export function incrementar(numero: number) {
    if (numero > 100) return 100
    else return numero + 1
}

export function usuarioIngresado() {
    return true
}
export function obtenerUsuarios() {
    return ['dalton', 'diego', 'melani']
}