
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');

    
    const revealProjects = () => {
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add('visible');
            }, index * 2000); 
        });
    };

    
    revealProjects();
});

