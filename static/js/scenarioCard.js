function scenarioCardOpenOnLoad() {
    const hash = window.location.hash;
    if (hash) {
        const card = document.getElementById(hash.substring(1));
        if (card) card.querySelector('.hidden')?.classList.remove('hidden');
    }
}

function scenarioCardToggleVisibilityAndUpdateURL(element) {
    const content = element.nextElementSibling;
    const isOpening = content.classList.toggle('hidden');
    const slug = `#${element.parentElement.id}`;

    if (!isOpening) {
        window.history.pushState(null, '', slug);
    } else if (window.location.hash === slug) {
        window.history.pushState(null, '', ' ');
    }
}

document.addEventListener('DOMContentLoaded', scenarioCardOpenOnLoad);

function setCardColor(element, cssVar) {
    element.style.backgroundColor = `var(${cssVar})`;
}