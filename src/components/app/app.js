import React, {Component} from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

// const TodoList = () => {
//    const items = ['Learn React', 'Build Awesome App'];
//     return (
//     <ul>
//         <li>{ items[0] }</li>
//         <li>{ items[1] }</li>
//     </ul>
//     );
// };


export default class App extends Component  {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //формируем новый массив
            /*const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);
            //обьединяем 2 массива в одни с помощью spread оператора
            const newArray = [...before, ...after];*/

            //более сокращенная запись
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];

            return {
                todoData: newArray
            }
        })
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        this.setState(({todoData}) => {
           const newArr = [...todoData, newItem];
            return {
               todoData: newArr
            }
        });
    };

    render () {
        return (
            <div className="todo-app">
                {/*<span>{(new Date().toString())}</span>*/}
                {/*<br/><br/>{login}*/}
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>

                <ItemAddForm onItemAdded = {this.addItem}/>
            </div>
        );
    }
};
/*можно и через js не используя jsx
const el = React.createElement('h1', null, 'HEllo wordldik');*/

//либо через jsx
// const el = <h1>Hello world</h1>;

