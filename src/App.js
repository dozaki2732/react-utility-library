import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy"; //importing lodash function

export default class App extends React.Component {
   //utilize lifecycle in react "extends" means to add stuff into components
   constructor() {
      //executing code
      super();
      console.log(uiData);
   }
   getData() {}
   render() {
      //has to return JSX
      const orderedData = orderBy(uiData, "name", "desc"); //lodash knows to look for the string of "name"

      const getFunctionsNum = () => {
         //return the number of functions in the library
         return;
      };

      return (
         //wrap JSX with a parenthesis if contains multiple html elements
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Functions
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
               </div>
               {orderedData.map((functionUI) => {
                  //mapping over utility library
                  const { name, desc, inputs, order } = functionUI;

                  return (
                     <FunctionUI // names what you give it
                        key={order}
                        name={name} //for everyone of these points its going to render html from ui.js
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
