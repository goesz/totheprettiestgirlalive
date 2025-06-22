let atual = 0;
let modo = "principais";
const musicControl = document.getElementById("musicControl");

function subirCoracao() {
  const coracao = document.createElement("div");
  coracao.textContent = "🤍";
  coracao.style.position = "fixed";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.bottom = "0";
  coracao.style.fontSize = 16 + Math.random() * 20 + "px";
  coracao.style.opacity = "0.8";
  coracao.style.transition = "bottom 4s linear, opacity 4s";
  coracao.style.zIndex = "0";
  coracao.style.userSelect = "none";
  coracao.style.pointerEvents = "none";
  document.body.appendChild(coracao);

  requestAnimationFrame(() => {
    coracao.style.bottom = "100vh";
    coracao.style.opacity = "0";
  });

  setTimeout(() => coracao.remove(), 4000);
}
function digitarTexto(elemento, texto, delay = 60) {
  elemento.textContent = "";
  elemento.style.opacity = "0";
  setTimeout(() => (elemento.style.opacity = "1"), 100);
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.textContent += texto.charAt(i);
    i++;
    if (i === texto.length) clearInterval(intervalo);
  }, delay);
}

function comecar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("slide").style.display = "flex";
  mostrarMotivo();
  document.getElementById("musica").play();
  document.getElementById("musicControl").style.display = "flex";
  setInterval(subirCoracao, 15000);
}

function mostrarMotivo() {
  const lista = modo === "principais" ? motivos : motivosExtras;
  const motivo = lista[atual];
  document.getElementById("img").src = motivo.img;
  const titulo = document.getElementById("titulo");
  if (modo === "extras") {
    digitarTexto(titulo, motivo.titulo);
  } else {
    titulo.textContent = motivo.titulo;
    titulo.style.opacity = "1";
  }

  if (modo === "extras") {
    document.getElementById("adicionadoEm").innerHTML = `<i><b>Adicionado em: </b>${motivo.adicionado}</i>`;
  }
  document.getElementById("descricao").textContent = motivo.descricao;

  document.getElementById("estrelaExtras").style.display =
    modo === "extras" ? "block" : "none";

  const btnProximo = document.getElementById("btnProximo");
  if (modo === "principais" && atual === motivos.length - 1) {
    btnProximo.style.display = "none";
  } else if (modo === "extras" && atual === motivosExtras.length - 1) {
    btnProximo.style.display = "none";
  } else {
    btnProximo.style.display = "inline-block";
  }

  const btnEstatisticas = document.getElementById("btnStats");
  if (modo === "principais" && atual === motivos.length - 1) {
    btnEstatisticas.style.display = "none";
  } else if (modo === "extras" && atual === motivosExtras.length - 1) {
    btnEstatisticas.style.display = "inline-block";
  } else {
    btnEstatisticas.style.display = "none";
  }

  const btnAnterior = document.getElementById("btnAnterior");
  btnAnterior.style.display = atual === 0 ? "none" : "inline-block";

  const btnPrincipais = document.getElementById("btnPrincipais");
  btnPrincipais.style.display =
    atual === motivosExtras.length - 1 && modo === "extras"
      ? "inline-block"
      : "none";

  document.getElementById("btnExtras").style.display =
    modo === "principais" && atual === motivos.length - 1
      ? "inline-block"
      : "none";

  if (atual === motivos.length - 1 && modo === "principais") soltarCoracoes();
  atualizarContador();
  const fita = document.getElementById("fitaAdesiva");
  const classes = ["top-left", "top-right", "bottom-left", "bottom-right"];
  fita.className = "fita";

  if (Math.random() < 0.3 && modo === 'principais') {
    const aleatoria = classes[Math.floor(Math.random() * classes.length)];
    fita.classList.add(aleatoria);
    fita.style.display = "block";
  } else if(modo === 'extras') {
    const aleatoria = classes[Math.floor(Math.random() * (classes.length - 1)) + 1];
    fita.classList.add(aleatoria);
    fita.style.display = "block";
  }  else {
    fita.style.display = "none";
  }
}

function iniciarExtras() {
  modo = "extras";
  atual = 0;
  mostrarMotivo();
}

function voltarPrincipais() {
  modo = "principais";
  atual = motivos.length - 1;
  document.getElementById("adicionadoEm").innerHTML = ``;
  mostrarMotivo();
}

function proximo() {
  const lista = modo === "principais" ? motivos : motivosExtras;
  if (atual < lista.length - 1) {
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

const btnNao = document.getElementById("btnNao");
btnNao.addEventListener("mouseover", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const offset = 100;
  let newTop, newLeft;

  do {
    newTop = Math.random() * 80;
    newLeft = Math.random() * 80;
  } while (
    Math.abs((window.innerHeight * newTop) / 100 - mouseY) < offset &&
    Math.abs((window.innerWidth * newLeft) / 100 - mouseX) < offset
  );

  btnNao.style.top = newTop + "%";
  btnNao.style.left = newLeft + "%";
});
document.addEventListener("keydown", (e) => {
  if (document.getElementById("slide").style.display === "flex") {
    if (e.key === "ArrowRight") proximo();
    if (e.key === "ArrowLeft") voltar();
  }
});

function soltarCoracoes() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const coracao = document.createElement("div");
      coracao.className = "coracao";
      coracao.textContent = "❤️";
      coracao.style.left = Math.random() * 100 + "vw";
      coracao.style.zIndex = "0";
      coracao.style.userSelect = "none";
      coracao.style.pointerEvents = "none";
      coracao.style.fontSize = 16 + Math.random() * 24 + "px";
      document.body.appendChild(coracao);
      setTimeout(() => coracao.remove(), 4000);
    }, i * 150);
  }
}
function toggleMusica() {
  const musica = document.getElementById("musica");
  musica.paused ? musica.play() : musica.pause();
}
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const volumeSlider = document.getElementById("volumeSlider");

volumeSlider.oninput = () => {
  musica.volume = volumeSlider.value;
};

musicControl.addEventListener("mouseenter", () => {
  volumeSlider.style.opacity = "1";
  musicControl.style.width = "160px";
});
musicControl.addEventListener("mouseleave", () => {
  volumeSlider.style.opacity = "0";
  musicControl.style.width = "40px";
});

function atualizarContador() {
  const inicio = new Date(2023, 1, 3);
  const last = new Date(2025, 5, 14);
  const hoje = new Date();
  const lastDate = Math.floor((hoje - last) / (1000 * 60 * 60 * 24));
  const dias = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
  document.getElementById(
    "contadorDias"
  ).textContent = `${dias} dias desde o nosso primeiro encontro,`;
  document.getElementById("contadorMotivos").textContent = `${
    motivos.length + motivosExtras.length
  } motivos listados até então.`;
  if (lastDate > 1) {
    document.getElementById(
      "lastDate"
    ).textContent = `${lastDate} dias desde o nosso último encontro :/`;
  }
}
window.onload = () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 47 },
      color: { value: "#ff6f61" },
      shape: { type: ["circle", "triangle"] },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
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
