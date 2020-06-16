import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   //utilize lifecycle in react "extends" means to add stuff into components
   constructor() {
      //executing code
      super();
      console.log(uiData);
   }

   render() {
      //has to return JSX
      const orderedData = orderBy(uiData, "name", "desc");

      const getFunctionsNum = () => {
         return;
      };

      return (
         //wrap JSX with a parenthesis if contains multiple html elements
         <div className="container">
            <div className="row">
               <div class="col-12">
                  <h1 class="d-flex justify-content-center">
                     JavaScript Functions
                  </h1>
                  <p class="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
               </div>
               {orderedData.map((functionUI) => {
                  //mapping over utility library
                  return (
                     <FunctionUI // names what you give it
                        name={functionUI.name} //for everyone of these points its going to render html from ui.js
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
