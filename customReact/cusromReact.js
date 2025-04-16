const root = document.getElementById("root");
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'a tag for google'
}
const render = (element, container) => {
    const e = document.createElement(element.type);
    e.innerHTML = element.children;
    for (const prop in element.props) {
        e.setAttribute(prop, element.props.prop);
    }
    container.appendChild(e);
}
render(reactElement, root);