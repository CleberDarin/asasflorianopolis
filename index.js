window.addEventListener('DOMContentLoaded', () => {
    const linksMenu = document.querySelectorAll("header nav a");

    linksMenu.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "transform 0.3s ease, color 0.3s ease";
            link.style.transform = "translateY(-1.5px)";
            link.style.color = "#8B4513";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "rotate(0deg) scale(1)";
            link.style.color = "";
        });
    });
});

function mostrarFormulario() {
    const formulario = document.getElementById('formularioDoacao');
    formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', () => {
    const linksMenu = document.querySelectorAll("footer nav a");

    linksMenu.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "transform 0.3s ease, color 0.3s ease";
            link.style.transform = "translateY(-1.5px)";
            link.style.color = "#FFFFFF";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "rotate(0deg) scale(1)";
            link.style.color = "";
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const linksMenu = document.querySelectorAll("footer p a");

    linksMenu.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "transform 0.3s ease, color 0.3s ease";
            link.style.transform = "translateY(-2px)";
            link.style.color = "#FFFFFF";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "rotate(-1deg) scale(1)";
            link.style.color = "";
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const linksMenu = document.querySelectorAll("header nav a");
    const botoes = document.querySelectorAll(".button, .button_conheca, .contato_umbanda, .servicos");

    linksMenu.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "transform 0.3s ease";
            link.style.transform = "translateY(-5px)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "translateY(0)";
        });
    });

    botoes.forEach(botao => {
        botao.addEventListener("mouseover", () => {
            botao.style.transition = "transform 0.3s ease";
            botao.style.transform = "translateY(-5px)";
        });

        botao.addEventListener("mouseout", () => {
            botao.style.transform = "translateY(0)";
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector(".logo_asas img");

    if (logo) {
        logo.addEventListener("mouseover", () => {
            logo.style.transition = "transform 0.3s ease";
            logo.style.transform = "scale(1.1)";
        });

        logo.addEventListener("mouseout", () => {
            logo.style.transform = "scale(1)";
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const textoLogo = document.querySelector(".logo-asas, .inicio");

    if (textoLogo) {
        textoLogo.addEventListener("mouseover", () => {
            textoLogo.style.transition = "transform 0.3s ease";
            textoLogo.style.transform = "scale(1.05)";
        });

        textoLogo.addEventListener("mouseout", () => {
            textoLogo.style.transform = "scale(1)";
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const agenda = document.querySelector(".agenda, .amaci, .paragrafo");

    if (agenda) {
        agenda.addEventListener("mouseover", () => {
            agenda.style.transition = "transform 0.3s ease";
            agenda.style.transform = "scale(1.03)";
        });

        agenda.addEventListener("mouseout", () => {
            agenda.style.transform = "scale(1)";
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const mediunico = document.querySelector(".mediunico");

    if (mediunico) {
        mediunico.addEventListener("mouseover", () => {
            mediunico.style.transition = "transform 0.3s ease";
            mediunico.style.transform = "scale(1.03)";
        });

        mediunico.addEventListener("mouseout", () => {
            mediunico.style.transform = "scale(1)";
        });
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const orixas = document.querySelectorAll(".orixas p");

    orixas.forEach(paragrafo => {
        paragrafo.addEventListener("mouseover", () => {
            paragrafo.style.transition = "transform 0.3s ease";
            paragrafo.style.transform = "scale(1.03)";
        });

        paragrafo.addEventListener("mouseout", () => {
            paragrafo.style.transform = "scale(1)";
        });
    });
});


