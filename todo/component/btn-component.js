import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class AddComponent extends LitElement {
    
    static properties = {
        todo_title: {type: String, state: true}
    }

    constructor() {
        super();
        this.todo_title = '';
        // this.addEventListener('click', (e) => console.log(e.type, e.target.localName));
      }

    //   get _input() {
    //     return (this.___input ??= this.renderRoot?.querySelector('input') ?? null);
    //   }
      
    createRenderRoot() {
        return this;
      }

    _handleBtnClick () {
        if(this.todo_title=='') return;
        const event = new CustomEvent('btnClick', {bubbles: true, composed: true, detail: { source: 'add-todo', todo_title : this.todo_title}})
        this.dispatchEvent(event)
         // Clear the input field
    const inputElement = this.querySelector('input[type="text"]');
    if (inputElement) {
        inputElement.value = '';
    }
    }
    _handleInput (e) {
        this.todo_title = e.target.value;
    }
    render() {
        return html`
            <div class='todo-input'>
                <input type='text' placeholder='Add your new todo' @input='${this._handleInput}' value='${this.todo_title}'>
                <button class='btn btn-primary' @click='${this._handleBtnClick}' >+</button>
            </div>
        `
    }
}

customElements.define('btn-component', AddComponent)