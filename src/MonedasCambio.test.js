import Cambio from "./monedasCambio";
describe("Prueba monedas", () => {
  it("Si tengo 0 de cambio las monedas deberian salir 0", () => {
    expect(Cambio(0)).toEqual(0);
  });
  it("Si tengo 1 de cambio las monedas deberian salir 1", () => {
    expect(Cambio(1)).toEqual([1]);
  });
  it("Si tengo 3 de cambio las monedas deberian salir 1,2", () => {
    expect(Cambio(3)).toEqual([1,2]);
  });
});
//com