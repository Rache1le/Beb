const script = document.currentScript;
const root = script.dataset.root;

async function loadComponent(elementId, file) {
    const response = await fetch(`${root}/${file}`);
    const content = await response.text();

    document.getElementById(elementId).innerHTML = content;
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");