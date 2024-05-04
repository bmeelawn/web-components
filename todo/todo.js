import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

import './component/btn-component.js';
import './component/todo-list.js';

class Todo extends LitElement {
    static properties = {
        todoList: { type: Array }
    }

    static styles = css`
        .container {
            margin-inline: auto;
            margin-top: 50px; 
            width: 300px;
            padding: 20px;
            background: #fff;
        }

        button {
            width: 50px;
            font-size: 28px;
            cursor: pointer;
            font-weight: 600;
        }

        input {
            width: 100%;
            height: 25px;
            padding: 5px;
        }

        .todo-input {
            display: flex;
            width: 100%;
            gap: 10px;
        }
    `;

    constructor() {
        super();
        this.todoList = JSON.parse(localStorage.getItem('todoList')) ?? [];
        console.log(this.todoList)
    }

    _handleButtonClick(e) {
        if (e.detail.source === 'add-todo') {
            this._addTodo(e.detail.todo_title);
        } else if (e.detail.source === 'delete-todo') {
            this._deleteTodo(e.detail.todo_id)
        } else if (e.detail.source === 'clear-todo') {

        }

    }

    _addTodo(name) {
        this.todoList = [...this.todoList, {
            'id': parseInt(this.todoList.length) + 1,
            'title': name,
            'status': 0
        }]
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }
    _deleteTodo(id) {
        this.todoList = [...this.todoList.filter((todo) => todo.id!==id)]
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }

    render() {
        return html`
            <div class='container'>
                <p>Todo App</p>
                <btn-component @btnClick='${this._handleButtonClick}'></btn-component>
                <todo-list .todoList='${this.todoList}' @btnClick='${this._handleButtonClick}'></todo-list>       
            </div>
        `
    }
}

customElements.define('main-component', Todo)