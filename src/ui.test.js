describe("Preuba UI", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html", "utf8");
      require("./presenter.js");
    });
  //no dio tiempo, pero basicamente solo tenia que poner los datos en los campos, hacer "click en el boton" y esperar que me salga 5 en la pantalla como el anterior test
  });
  