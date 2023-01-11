import { incrementar } from "../helpers/generico.helpers";


describe('Numeros pruebas', () => {
  
  it('should return 100 if the number given is greater to 100  ', () => {
    const resp = incrementar(300)
    expect( resp).toBe(100)
  })

  it('should return the number given + 1, if not greater to 100  ', () => {
    const resp = incrementar(90)
    expect( resp).toBe(91)
  })


});