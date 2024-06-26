
import React from "react";
import CakeView from "./Redux/rtk-demo/features/cake/CakeView";
import IcecreameView from "./Redux/rtk-demo/features/icecream/IcecreameView";
import TodoList from "./Redux/rtk-demo/features/todo/TodoList";
import DateNow from "./components/DateNow";
import ProdcutCounter from "./Redux/rtk-demo/features/product/ProdcutCounter";
import User from "./Redux/rtk-demo/features/user/User";
const App: React.FC = () => {
    return (
        <div>
           <CakeView />
            <IcecreameView />
            <TodoList />
            <DateNow />
            <ProdcutCounter />
            <User />
        </div>
    );
};

export default App;
