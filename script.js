HEAD;
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  // Função para mostrar a seção correta e atualizar o link ativo
  function showSection(sectionId) {
    // Esconde todas as seções
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Mostra a seção desejada
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Remove a classe 'active' de todos os links de navegação
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Adiciona a classe 'active' ao link clicado
    const activeLink = document.querySelector(`.nav-link[href="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Adiciona o evento de clique aos links de navegação
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link (rolar para a âncora)
      const sectionId = link.getAttribute("href");
      showSection(sectionId);
    });
  });

  // Lógica para a seleção de personagem (reutilizada do exemplo anterior)
  const characterGrid = document.querySelector(
    "#character-select .character-grid"
  );
  const selectedCharacterImage = document.getElementById(
    "selectedCharacterImage"
  );
  const selectedCharacterName = document.getElementById(
    "selectedCharacterName"
  );

  const characters = [
    {
      id: "01",
      name: "dikaios",
      image: "imagens/dikaios.png",
    },
    {
      id: "02",
      name: "fallax",
      image: "imagens/fallax.png",
    },
    {
      id: "03",
      name: "aethoria",
      image: "imagens/aethoria.png",
    },
    {
      id: "04",
      name: "elyriah",
      image: "imagens/elyriah.png",
    },
    {
      id: "05",
      name: "nephario",
      image: "imagens/nephario.png",
    },
    {
      id: "06",
      name: "tharros",
      image: "imagens/tharros.png",
    },
    {
      id: "07",
      name: "vorgath",
      image: "imagens/vorgath.png",
    },
    {
      id: "08",
      name: "xerath",
      image: "imagens/xerath.png",
    },
    {
      id: "09",
      name: "xyhlon",
      image: "imagens/xyhlon.png",
    },
    {
      id: "10",
      name: "10",
      image: "./imagens/unknown.png",
    },
    {
      id: "11",
      name: "11",
      image: "./imagens/unknown.png",
    },
    {
      id: "12",
      name: "12",
      image: "./imagens/unknown.png",
    },
    {
      id: "13",
      name: "13",
      image: "./imagens/unknown.png",
    },
    {
      id: "14",
      name: "14",
      image: "./imagens/unknown.png",
    },
    {
      id: "15",
      name: "15",
      image: "./imagens/unknown.png",
    },
  ];

  function populateCharacterGrid() {
    if (characterGrid) {
      // Verifica se o elemento existe antes de tentar popular
      characters.forEach((character) => {
        const characterItem = document.createElement("div");
        characterItem.classList.add("character-item");
        characterItem.dataset.id = character.id;

        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;

        characterItem.appendChild(img);
        characterGrid.appendChild(characterItem);

        characterItem.addEventListener("click", () => {
          const currentSelected = document.querySelector(
            "#character-select .character-item.selected"
          );
          if (currentSelected) {
            currentSelected.classList.remove("selected");
          }
          characterItem.classList.add("selected");

          selectedCharacterImage.src = character.image;
          selectedCharacterImage.alt = character.name;
          selectedCharacterName.textContent = character.name;
        });
      });
    }
  }

  populateCharacterGrid();

  // Seleciona a primeira seção ('Tela Inicial') por padrão ao carregar a página
  showSection("#home");

  // Seleciona o primeiro personagem por padrão na aba de seleção de personagem
  // (apenas se a aba de seleção de personagem for a primeira a ser exibida,
  // ou se você quiser que ele seja pré-selecionado sempre que a aba for acessada)
  if (characters.length > 0) {
    const firstCharacter = document.querySelector(
      `#character-select .character-item[data-id="${characters[0].id}"]`
    );
    if (firstCharacter) {
      firstCharacter.click();
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("clickSound");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      const soundFile = this.dataset.sound; // Obtém o nome do arquivo de som do atributo data-sound
      audio.src = "./audios/som_botao_1.mp3"; // Define o caminho do arquivo de áudio
      audio.play(); // Toca o som
    });
  });
});
