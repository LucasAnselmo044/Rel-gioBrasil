const horarioBrasilia = document.getElementById('horas-brasilia');
const minutosBrasilia = document.getElementById('min-brasilia');
const segundosBrasilia = document.getElementById('seg-brasilia');

const horarioFernando = document.getElementById('horas-fernando');
const minutosFernando = document.getElementById('min-fernando');
const segundosFernando = document.getElementById('seg-fernando');

const horarioAmazonas = document.getElementById('horas-amazonas');
const minutosAmazonas = document.getElementById('min-amazonas');
const segundosAmazonas = document.getElementById('seg-amazonas');

const horarioAcre = document.getElementById('horas-acre');
const minutosAcre = document.getElementById('min-acre');
const segundosAcre = document.getElementById('seg-acre');

function updateClock() {
    let data = new Date();
    let hr = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    horarioBrasilia.textContent = hr.toString().padStart(2, '0');
    minutosBrasilia.textContent = minutos.toString().padStart(2, '0');
    segundosBrasilia.textContent = segundos.toString().padStart(2, '0');

    let hrFernando = hr + 1;
    if (hrFernando >= 24) {
        hrFernando -= 24;
    }
    horarioFernando.textContent = hrFernando.toString().padStart(2, '0');
    minutosFernando.textContent = minutos.toString().padStart(2, '0');
    segundosFernando.textContent = segundos.toString().padStart(2, '0');

    let hrAmazonas = hr - 1;
    if (hrAmazonas < 0) {
        hrAmazonas += 24; 
    }
    horarioAmazonas.textContent = hrAmazonas.toString().padStart(2, '0');
    minutosAmazonas.textContent = minutos.toString().padStart(2, '0');
    segundosAmazonas.textContent = segundos.toString().padStart(2, '0');

    let hrAcre = hr - 2;
    if (hrAmazonas < 0) {
        hrAmazonas += 24; 
    }
    horarioAcre.textContent = hrAcre.toString().padStart(2, '0');
    minutosAcre.textContent = minutos.toString().padStart(2, '0');
    segundosAcre.textContent = segundos.toString().padStart(2, '0');
}
updateClock();
setInterval(updateClock, 1000);
