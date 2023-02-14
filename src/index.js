class Flashcard extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });

    const wrapperEl = document.createElement('div');
    wrapperEl.classList.add('flashcard-div')

    const titleEl = document.createElement('h2');
    const textEl = document.createElement('p');


    const style = document.createElement('style');

    style.textContent = `
      .flashcard-div {
        max-width: 560px;
        border-radius: 8px;
        background-color: magenta;
        padding: 12px;
      }
      h2, p {
        color: white;
        margin: 0;
      }
      
    `;
    wrapperEl.append(titleEl, textEl);
    root.append(wrapperEl, style);

  }

  connectedCallback() {
    this.setText();
  }

  setText() {
    this.shadowRoot.querySelector('h2').textContent = this.getAttribute('data-title');
    this.shadowRoot.querySelector('p').textContent = this.getAttribute('data-text');
  }
}

customElements.define('flash-card', Flashcard);



let flashcard = document.createElement('flash-card');
flashcard.setAttribute('data-title', "JavaScript")
flashcard.setAttribute('data-text', "A groovy programming language.");

let flashcard2 = document.createElement('flash-card');
flashcard2.setAttribute('data-title', "Closure")
flashcard2.setAttribute('data-text', "Something about what code affects what.");

document.getElementById('root').append(flashcard, flashcard2);