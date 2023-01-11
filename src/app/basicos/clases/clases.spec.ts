import { Jugador } from "../helpers/jugador";

describe('clases pruebas', () => {

    const jugador = new Jugador();

    beforeAll(() => {

    })

    beforeEach(() => {

    })

    afterEach(() => {

    })

    afterEach(() => {
        jugador.hp = 100
    })

    it('debe retornar 80 de hp, si recibe  20 de dano ', () => {
 
        const resp = jugador.recibirDamage(20)
        console.log(resp);
        
        expect(resp).toBe(80)
    })

    // it('debe retornar 50 de hp, si recibe 50 de dano ', () => {
    //     const jugador = new Jugador();
    //     const resp = jugador.recibirDamage(50)
    //     expect(resp).toBe(50)
    // })


});