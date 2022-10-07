
document.addEventListener('DOMContentLoaded', () => {
  //constantes globales//
  let valorDesplazamientoH = 10;
  let valorDesplazamientoV = 10;
  let valorBlurRadius = 5;
  let valorSpreadRadius = 5;
  let valorColorSombra = "#87807E";
  let valorTamaño = 0;
  let valorBorderRadius = 0;

  //labels//
  const labeldh = document.getElementById("labeldh");
  const labeldv = document.getElementById("labeldv");
  const labelbr = document.getElementById("labelbr");
  const labelsr = document.getElementById("labelsr");
  const labelcs = document.getElementById("labelcs");
  const labelt = document.getElementById("labelt");
  const labelbrr = document.getElementById("labelbrr");
  
  //BOX
  const box = document.getElementById("box");
  
  //SETSTYLE
  const setBoxShadow = () => {
    const text = `${valorDesplazamientoH}px ${valorDesplazamientoV}px ${valorBlurRadius}px ${valorSpreadRadius}px ${valorColorSombra}`
    console.log('text :>> ', text);
    box.style.boxShadow = text;
    box.style.borderRadius = labelbrr.innerHTML
    box.style.height = labelt.innerHTML
    box.style.width = labelt.innerHTML
  }

  const desplazamientoH = document.getElementById("desplazamientoh");
  desplazamientoH.addEventListener('change', (e) => {
    valorDesplazamientoH = e.target.value;
    labeldh.innerHTML = valorDesplazamientoH + "px";
    
    setBoxShadow();
  })

  const desplazamientoV = document.getElementById("desplazamientov");
  desplazamientoV.addEventListener('change', (e) => {
    valorDesplazamientoV = e.target.value;
    labeldv.innerHTML = valorDesplazamientoV + "px";
    
    setBoxShadow();
  })

  const blurRadius = document.getElementById("radiusb");
  blurRadius.addEventListener('change', (e) => {
    valorBlurRadius = e.target.value;
    labelbr.innerHTML = valorBlurRadius + "px";
    
    setBoxShadow();
  })

  const spreadRadius = document.getElementById("radiuss");
  spreadRadius.addEventListener('change', (e) => {
    valorSpreadRadius = e.target.value;
    labelsr.innerHTML = valorSpreadRadius + "px";
    
    setBoxShadow();
  })

  const colorSombra = document.getElementById("color");
  colorSombra.addEventListener('change', (e) => {
    valorColorSombra = e.target.value;
    labelcs.innerHTML = valorColorSombra;
    
    setBoxShadow();
  })

  const tamaño = document.getElementById("tamaño");
  tamaño.addEventListener('change', (e) => {
    valorTamaño = e.target.value;
    labelt.innerHTML = valorTamaño + 'px';
    
    setBoxShadow();
  })

  const borderRadius = document.getElementById("border");
  borderRadius.addEventListener('change', (e) => {
    valorBorderRadius = e.target.value;
    labelbrr.innerHTML = valorBorderRadius + "px";
    setBoxShadow();
  })

});