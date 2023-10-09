// Defina objetos de tradução para cada idioma
const translations = {
  'pt-BR': {
    'welcome-text': 'Bem-vindo ao meu site!',
    'about-header': 'Sobre Mim',
    // Adicione mais traduções aqui
  },
  'en-US': {
    'welcome-text': 'Welcome to my website!',
    'about-header': 'About Me',
    // Adicione mais traduções aqui
  },
  // Adicione mais idiomas e traduções conforme necessário
};

// Função para atualizar o conteúdo da página com base no idioma selecionado
function updateContent(language) {
  const elementsToTranslate = document.querySelectorAll('[id]');
  elementsToTranslate.forEach((element) => {
    const translationKey = element.id;
    const translation = translations[language][translationKey];
    element.textContent = translation;
  });
}

// Defina o idioma padrão (por exemplo, 'pt-BR')
let currentLanguage = 'pt-BR';

// Função para alternar o idioma
function changeLanguage(newLanguage) {
  if (translations[newLanguage]) {
    currentLanguage = newLanguage;
    updateContent(currentLanguage);
  } else {
    console.error(`Traduções para ${newLanguage} não encontradas.`);
  }
}

// Exemplo: Alterar o idioma quando um botão ou bandeira for clicada
document.getElementById('change-language-pt').addEventListener('click', () => {
  changeLanguage('pt-BR');
});

document.getElementById('change-language-en').addEventListener('click', () => {
  changeLanguage('en-US');
});

// Inicialize o conteúdo com base no idioma padrão
updateContent(currentLanguage);
