let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let numeroIngresado = Number(prompt("Ingrese un numero"));
  if (numeroIngresado == 0) {
    console.log("El Numero Ingresado es 0");
  } else {
    if (numeroIngresado % 2 == 0) {
      console.log("El Numero Ingresado es Par");
    } else console.log("El Numero Ingresado es Impar");
  }
});
