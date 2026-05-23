
    // EFEITO DIGITAÇÃO

    const text = "Desenvolvedor Front-End";

    let index = 0;

    const span = document.querySelector('.hero span');

    span.innerHTML = "";

    function typing(){

      if(index < text.length){

        span.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);
      }
    }

    typing();

    // ANIMAÇÃO DOS CARDS

    const cards = document.querySelectorAll('.card');

    window.addEventListener('scroll',()=>{

      cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      })
    })

    cards.forEach(card=>{

      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = '0.6s';

    })