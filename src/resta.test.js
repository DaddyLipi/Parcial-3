import restar from "./resta.js";

describe("Prueba ventas", () => {
  it("El monto efectivo deberia restar el monto efectivo (0,0)", () => {
    expect(restar(0, 0)).toEqual(0);
  });
  it("El monto efectivo deberia restar el monto efectivo (10,5)", () => {
    expect(restar(10, 15)).toEqual(5);
  });
});
//comentario para probar el npm install y git
