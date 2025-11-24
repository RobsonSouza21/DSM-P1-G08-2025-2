document.addEventListener('DOMContentLoaded', function() {
    // Pega o nome do arquivo da página atual (ex: "index.html")
    const currentPage = window.location.pathname.split('/').pop();

    // Seleciona todos os links da navegação
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        // Remove a classe 'active' de todos
        link.classList.remove('active');

        // Adiciona 'active' ao link correspondente à página atual
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // Caso especial para a página inicial (se a URL for vazia, ex: "/")
        if (currentPage === "" && linkPage === "index.html") {
             link.classList.add('active');
        }
    });
});

// FAQ Script
document.addEventListener('DOMContentLoaded', function() {
    // Pega o nome do arquivo da página atual (ex: "index.html")
    const currentPage = window.location.pathname.split('/').pop();

    // Seleciona todos os links da navegação
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        // Remove a classe 'active' de todos
        link.classList.remove('active');

        // Adiciona 'active' ao link correspondente à página atual
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        if (currentPage === "" && linkPage === "index.html") {
             link.classList.add('active');
        }
    });
});

// Avaliações Script

document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.getElementById("starContainer");
  const stars = starContainer
    ? Array.from(starContainer.querySelectorAll("span"))
    : [];
  const publicarBtn = document.getElementById("publicarBtn");
  const listaAvaliacoes = document.getElementById("listaAvaliacoes");

  let estrelasSelecionadas = 0;

  function updateStarClasses() {
    stars.forEach((s, idx) => {
      if (idx < estrelasSelecionadas) s.classList.add("selected");
      else s.classList.remove("selected");
    });
  }

  stars.forEach((star, index) => {
    star.setAttribute("tabindex", "0");

    star.addEventListener("click", () => {
      estrelasSelecionadas = index + 1;
      updateStarClasses();
    });

    star.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        star.click();
      }
    });
  });

  function renderEstrelasTexto(n) {
    const nota = Number(n) || 0;
    return "★".repeat(nota) + "☆".repeat(5 - nota);
  }

  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (publicarBtn) {
    publicarBtn.addEventListener("click", () => {
      const nomeEl = document.getElementById("nome");
      const emailEl = document.getElementById("email");
      const telefoneEl = document.getElementById("telefone");
      const avaliacaoEl = document.getElementById("avaliacao");
      const anonimoEl = document.getElementById("anonimo");

      const nome = nomeEl ? nomeEl.value.trim() : "";
      const email = emailEl ? emailEl.value.trim() : "";
      const telefone = telefoneEl ? telefoneEl.value.trim() : "";
      const texto = avaliacaoEl ? avaliacaoEl.value.trim() : "";
      const anonimo = anonimoEl ? anonimoEl.checked : false;

      if (!nome || !email || !telefone) {
        alert("Preencha nome, email e telefone antes de publicar.");
        return;
      }
      if (!emailValido(email)) {
        alert("Digite um email válido.");
        return;
      }

      const exibicaoNome = anonimo ? "Anônimo" : nome;
      const estrelasHtml = renderEstrelasTexto(estrelasSelecionadas);

      const card = document.createElement("div");
      card.className = "review-card";

      card.innerHTML = `
        <div class="review-header">
          <strong class="review-name">${exibicaoNome}</strong>
          <span class="review-stars">${estrelasHtml}</span>
        </div>
        ${texto ? `<p class="review-text">${texto}</p>` : ""}
      `;

      if (listaAvaliacoes) listaAvaliacoes.appendChild(card);

      if (nomeEl) nomeEl.value = "";
      if (emailEl) emailEl.value = "";
      if (telefoneEl) telefoneEl.value = "";
      if (avaliacaoEl) avaliacaoEl.value = "";
      if (anonimoEl) anonimoEl.checked = false;

      estrelasSelecionadas = 0;
      updateStarClasses();
    });
  } else {
    console.warn("Botão #publicarBtn não encontrado no DOM.");
  }
});
