import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';


// const TodoList = () => {
//    const items = ['Learn React', 'Build Awesome App'];
//     return (
//     <ul>
//         <li>{ items[0] }</li>
//         <li>{ items[1] }</li>
//     </ul>
//     );
// };


const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
    ];

    const login = <span>Log in please</span>;
    return (
        <div className="todo-app">
            {/*<span>{(new Date().toString())}</span>*/}
            {/*<br/><br/>{login}*/}
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
};
/*можно и через js не используя jsx
const el = React.createElement('h1', null, 'HEllo wordldik');*/

//либо через jsx
// const el = <h1>Hello world</h1>;

ReactDom.render(<App/>, document.getElementById('root'));

