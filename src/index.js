const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-menssage");

function buttonEncriptar(){
  const textEncriptado = encriptar(textArea.value);
  mensaje.value = textEncriptado;
  
}

function encriptar(stringEncriptado){
  let matrisCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat "]];
  stringEncriptado = stringEncriptado.toLowerCase()
  
  for (let index = 0; index < matrisCodigo.length; index++) {
    if (stringEncriptado.includes(matrisCodigo[index][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrisCodigo[index][0], matrisCodigo[index][1])
    }
  }
  return stringEncriptado;
}

function buttonDesencriptar(){
  const textDesencriptado = desencriptar(textArea.value);
  mensaje.value = textDesencriptado;
 
}

function desencriptar(stringDesencriptado){
  let matrisCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat "]];
  stringDesencriptado = stringDesencriptado.toLowerCase()
  
  for (let index = 0; index < matrisCodigo.length; index++) {
    if (stringDesencriptado.includes(matrisCodigo[index][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrisCodigo[index][1], matrisCodigo[index][0])
    }
  }
  return stringDesencriptado;
}