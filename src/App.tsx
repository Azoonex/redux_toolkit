
import React from "react";
import CakeView from "./Redux/rtk-demo/features/cake/CakeView";
import IcecreameView from "./Redux/rtk-demo/features/icecream/IcecreameView";
const App: React.FC = () => {
    return (
        <div>
           <CakeView />
            <IcecreameView />
        </div>
    );
};

export default App;
