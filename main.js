const selectCard = document.querySelector('#select');
const thankYouCard = document.querySelector('#thank-you');
const submitBtn = document.querySelector('#submit-btn');
const circles = document.querySelectorAll('.circle');
const selectedNumber = document.querySelector('#selected-number');

circles.forEach((circle, index)=>{
  circle.addEventListener('click', (e)=>{
    // Resetear estilos
    circles.forEach(circle => {
      circle.classList.remove('bg-Light-Grey');
      circle.classList.remove('text-White');
    });

    // Cambiar estilo al círculo
    circle.classList.add('bg-Light-Grey');
    circle.classList.add('text-White');

    // Cambiar el texto del número seleccionado
    selectedNumber.innerText = e.target.innerText;

    // Permitir Presionar botón
    submitBtn.addEventListener('click', ()=>{
      selectCard.classList.add('hidden');
      thankYouCard.classList.remove('hidden');
    });
  })
});