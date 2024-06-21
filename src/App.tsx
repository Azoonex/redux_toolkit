
import React from "react";
import CakeView from "./Redux/rtk-demo/features/cake/CakeView";
import IcecreameView from "./Redux/rtk-demo/features/icecream/IcecreameView";
import TodoList from "./Redux/rtk-demo/features/todo/TodoList";
import DateNow from "./components/DateNow";
const App: React.FC = () => {
    return (
        <div>
           <CakeView />
            <IcecreameView />
            <TodoList />
            <DateNow />
        </div>
    );
};

export default App;
