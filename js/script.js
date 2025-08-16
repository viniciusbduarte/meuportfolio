// Filtro de projetos
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Ativar botão clicado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            // Filtrar projetos
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Carregar conteúdo do projeto específico (simulação)
function loadProjectContent() {
    if (!window.location.pathname.includes('project-template.html')) return;

    // Simulação - na prática, você buscaria de um JSON ou banco de dados
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    // Aqui você poderia fazer uma requisição AJAX para buscar os dados do projeto
    console.log(`Carregando projeto ${projectId}`);
    // document.querySelector('.project-header h1').textContent = `Projeto ${projectId}`;
}

// Inicializar funções específicas de páginas
function initPageSpecificFunctions() {
    if (document.querySelector('.projects-filter')) {
        setupProjectFilters();
    }
    
    loadProjectContent();
}

// Atualizar o DOMContentLoaded para incluir:
document.addEventListener('DOMContentLoaded', function() {
    // Código existente...
    initPageSpecificFunctions();
});