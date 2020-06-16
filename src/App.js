import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";

export default class App extends React.Component {
   //utilize lifecycle in react "extends" means to add stuff into components
   constructor() {
      //executing code
      super();
      console.log(uiData);
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               {uiData.map((functionUI) => {
                  return (
                     <FunctionUI
                        name={functionUI.name}
                        desc={functionUI.desc}
                        inputs={functionUI.inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
