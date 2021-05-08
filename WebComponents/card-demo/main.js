class UserCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var shadow = this.attachShadow({mode: 'closed'})
        var templateElem = document.getElementById('userCardTemplate')
        var content = templateElem.content.cloneNode(true)
        content.querySelector('img').setAttribute('src', this.getAttribute('image'))
        content.querySelector('.name').innerText = this.getAttribute('name')
        content.querySelector('.email').innerText = this.getAttribute('email')
        shadow.appendChild(content)
    }
}
window.customElements.define('user-card', UserCard);