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
            this.createToDoItem('Drink coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have a lunch'),
        ]
    };
    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
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
        const newItem = this.createToDoItem(text);
        this.setState(({todoData}) => {
           const newArr = [...todoData, newItem];
            return {
               todoData: newArr
            }
        });
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

       return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];


    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    render () {
        const {todoData} = this.state;
        const doneCount = todoData
                            .filter((el) => el.done).length;
        const todoCount = todoData.length-doneCount;
        return (
            <div className="todo-app">
                {/*<span>{(new Date().toString())}</span>*/}
                {/*<br/><br/>{login}*/}
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>


                <ItemAddForm onItemAdded = {this.addItem}/>
            </div>
        );
    }
};
/*можно и через js не используя jsx
const el = React.createElement('h1', null, 'HEllo wordldik');*/

//либо через jsx
// const el = <h1>Hello world</h1>;

