import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class TodoList extends LitElement {
    
    static properties = {
        todoList: {}
    }

    static styles = css`
        ul {
            margin:0;
            padding:0
        }

        li{
            list-style-type: none;
            background: #efefef;
            padding: 10px;
            margin-block: 10px;
        }

        .delete {
            font-weight: 600;
            color: red;
            float: right;
            cursor: pointer;
            opacity: 0;
        }

        li:hover .delete{
            text-decoration: underline;
            opacity: 1;
        }`

      _delete (id) {
        const event = new CustomEvent('btnClick', {detail: { source: 'delete-todo', todo_id : id}})
        this.dispatchEvent(event)
      }
    render() {
        return html`
            <ul>
                ${this.todoList.map(function(todo) {
                    return html`<li>${todo.title} <button class='delete' @click='${ () => {this._delete(todo.id)}}'>Delete<span></li>`
                }.bind(this))}
            </ul>
        `
    }
}

customElements.define('todo-list', TodoList)