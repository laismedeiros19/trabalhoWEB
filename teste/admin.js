// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões que abrem/fecham submenus
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Itera sobre cada botão
    dropdownToggles.forEach(toggle => {
        // Adiciona um evento de clique a cada um
        toggle.addEventListener('click', function() {
            
            // Pega o elemento 'li' pai (que contém o botão e o submenu)
            const menuItem = this.parentElement;

            // Pega o submenu que é "irmão" do botão
            const submenu = this.nextElementSibling;

            // Adiciona ou remove a classe 'active' do 'li' pai
            // Isso faz a seta girar (veja o CSS)
            menuItem.classList.toggle('active');

            // Adiciona ou remove a classe 'active' do submenu
            // Isso faz o submenu aparecer ou desaparecer (veja o CSS)
            submenu.classList.toggle('active');
        });
    });
});