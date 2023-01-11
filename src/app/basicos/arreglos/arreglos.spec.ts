import { obtenerUsuarios } from "../helpers/generico.helpers";


describe('arreglos pruebas', () => {

    it('should return about 3 users ', () => {
        const resp = obtenerUsuarios()
        expect(resp.length).toBeGreaterThanOrEqual(3)
    })

    it('should exist dalton y  diego ', () => {
        const resp = obtenerUsuarios()
        expect(resp).toContain('dalton')
        expect(resp).toContain('diego')
    })

});