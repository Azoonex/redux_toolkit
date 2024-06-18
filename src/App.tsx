
import React from "react";
import CakeView from "./Redux/rtk-demo/features/cake/CakeView";
import IcecreameView from "./Redux/rtk-demo/features/icecream/IcecreameView";
import TodoList from "./Redux/rtk-demo/features/todo/TodoList";
const App: React.FC = () => {
    return (
        <div>
           <CakeView />
            <IcecreameView />
            <TodoList />
        </div>
    );
};

export default App;
