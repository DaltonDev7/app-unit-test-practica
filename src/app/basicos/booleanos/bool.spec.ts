import { usuarioIngresado } from "../helpers/generico.helpers";



describe('bool pruebas', () => {

    it('should return true ', () => {
        const resp = usuarioIngresado()
        expect(resp).toBeTrue()
    })



});