import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


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
    const login = <span>Log in please</span>;
    return (
        <div>
            <span>{(new Date().toString())}</span>
            <br/><br/>{login}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};
/*можно и через js не используя jsx
const el = React.createElement('h1', null, 'HEllo wordldik');*/

//либо через jsx
// const el = <h1>Hello world</h1>;

ReactDom.render(<App/>, document.getElementById('root'));

