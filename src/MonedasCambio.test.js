describe("Prueba monedas", () => {
  it("Si tengo 0 de cambio las monedas deberian salir 0", () => {
    expect(Cambio(0)).toEqual(0);
  });
});
//com