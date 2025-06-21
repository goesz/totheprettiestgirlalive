   let atual = 0;
    const musicControl = document.getElementById('musicControl');

    function subirCoracao() {
  const coracao = document.createElement('div');
  coracao.textContent = '💖';
  coracao.style.position = 'fixed';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.bottom = '0';
  coracao.style.fontSize = (16 + Math.random() * 20) + 'px';
  coracao.style.opacity = '0.8';
  coracao.style.transition = 'bottom 4s linear, opacity 4s';
  coracao.style.zIndex = '0';
  coracao.style.userSelect = 'none';
  coracao.style.pointerEvents = 'none';
  document.body.appendChild(coracao);

  requestAnimationFrame(() => {
    coracao.style.bottom = '100vh';
    coracao.style.opacity = '0';
  });

  setTimeout(() => coracao.remove(), 4000);
}

    function comecar() {
      document.getElementById('inicio').style.display = 'none';
      document.getElementById('slide').style.display = 'flex';
      mostrarMotivo();
      document.getElementById('musica').play();
      document.getElementById('musicControl').style.display = 'flex';
      setInterval(subirCoracao, 10000);
    }

    function mostrarMotivo() {
      document.getElementById('img').src = motivos[atual].img;
      document.getElementById('titulo').textContent = motivos[atual].titulo;
      document.getElementById('descricao').textContent = motivos[atual].descricao;
      

      const btnProximo = document.getElementById('btnProximo');
      btnProximo.style.display = (atual === motivos.length - 1) ? 'none' : 'inline-block';

      const btnEstatisticas = document.getElementById('btnStats');
      btnEstatisticas.style.display = (atual === motivos.length - 1) ? 'inline-block' : 'none';
  
      const btnAnterior = document.getElementById('btnAnterior');
      btnAnterior.style.display = (atual === 0) ? 'none' : 'inline-block';

      if (atual === motivos.length - 1) soltarCoracoes();
      atualizarContador();
}



    function proximo() {
      if (atual < motivos.length - 1) {
        atual++;
        mostrarMotivo();
      }
    }

    function voltar() {
      if (atual > 0) {
        atual--;
        mostrarMotivo();
      }
    }

    const btnNao = document.getElementById('btnNao');
    btnNao.addEventListener('mouseover', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const offset = 100;
      let newTop, newLeft;

      do {
        newTop = Math.random() * 80;
        newLeft = Math.random() * 80;
      } while (Math.abs(window.innerHeight * newTop / 100 - mouseY) < offset &&
               Math.abs(window.innerWidth * newLeft / 100 - mouseX) < offset);

      btnNao.style.top = newTop + '%';
      btnNao.style.left = newLeft + '%';
    });
    document.addEventListener('keydown', (e) => {
  if (document.getElementById('slide').style.display === 'flex') {
    if (e.key === 'ArrowRight') proximo();
    if (e.key === 'ArrowLeft') voltar();
  }
});

function soltarCoracoes() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const coracao = document.createElement('div');
      coracao.className = 'coracao';
      coracao.textContent = '❤️';
      coracao.style.left = Math.random() * 100 + 'vw';
      coracao.style.zIndex = '0';
      coracao.style.userSelect = 'none';
      coracao.style.pointerEvents = 'none';
      coracao.style.fontSize = (16 + Math.random() * 24) + 'px';
      document.body.appendChild(coracao);
      setTimeout(() => coracao.remove(), 4000);
    }, i * 150);
  }
}
function toggleMusica() {
  const musica = document.getElementById('musica');
  musica.paused ? musica.play() : musica.pause();
}
const musica = document.getElementById('musica');
  const btnMusica = document.getElementById('btnMusica');
  const volumeSlider = document.getElementById('volumeSlider');


  volumeSlider.oninput = () => {
    musica.volume = volumeSlider.value;
  };

  musicControl.addEventListener('mouseenter', () => {
    volumeSlider.style.opacity = '1';
    musicControl.style.width = '160px';
  });
  musicControl.addEventListener('mouseleave', () => {
    volumeSlider.style.opacity = '0';
    musicControl.style.width = '40px';
  });

  function atualizarContador() {
  const inicio = new Date(2023, 1, 3);
  const last = new Date(2025, 5, 20)
  const hoje = new Date();
  const lastDate = Math.floor((hoje - last) / (1000 * 60 * 60 * 24));
  const dias = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
  document.getElementById('contadorDias').textContent = `${dias} dias desde o nosso primeiro encontro,`;
  document.getElementById('contadorMotivos').textContent = `${motivos.length} motivos listados até então.`;
  if (lastDate > 1){
    document.getElementById('lastDate').textContent = `${lastDate} dias desde o nosso último encontro :/`;
}
  
}
window.onload = () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 47 },
      color: { value: "#ff6f61" },
      shape: { type: ["circle", "triangle"  ]
       },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100 }
      }
}
  });
};
function mostrarEstatisticas() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}