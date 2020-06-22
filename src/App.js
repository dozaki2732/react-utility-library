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
      //initialize state inside constructor via this.state
      this.state = {
         isFavoritesChecked: false, //set defaul values, define initial state
         allFuncs: orderBy(uiData, "order", "desc"),
         displayedFuncs: orderBy(uiData, "order", "desc"),
         orderBy: '["order", "desc"]',
      };
   }
   //  componentDidUpdate() {
   //     console.log("hello");
   //  }
   filterFuncs(e) {
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked; //grabbing user input of what id was clicked on
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase(); //search input of user
      const allFuncs = [...this.state.allFuncs]; //get a copy of all the functions "shallow copy" of the array
      if (isFavoritesChecked) {
         //grabbing all favorites
         this.setState({ isFavoritesChecked: true }); //whatever is checked is going to be flipped to the opposite
         //console.log(this);
         const favoriteFuncs = allFuncs.filter((func) => {
            return func.isFavorite; //return only favorites by filter
         });
         //console.log(favoriteFuncs);
         const filteredFuncs = favoriteFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         }); //return only the items that contain search input
         const orderArr = JSON.parse(this.state.orderBy);

         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs }); //setting displayed funcs to filtered
      } else {
         this.setState({ isFavoritesChecked: false }); //toggle favorites
         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", ...orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs }); //else, just display all funcs
      }
   }
   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs();
      });
      this.filterFuncs();
   }
   render() {
      //has to return JSX

      const getFunctionsNum = () => {
         //return the number of functions in the library
         return uiData.length;
      };

      return (
         //wrap JSX with a parenthesis if contains multiple html elements
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Functions
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterFuncs(e); // "this" refers to class
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterFuncs(e); // "this" refers to class
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        favorites
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control "
                           aria-describedby="search-input"
                           id="search-input"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           onChange={(e) => {
                              this.filterFuncs(e);
                           }}
                        />
                     </div>
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className="form-control"
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["order", "desc"]'>
                              Most recent
                           </option>
                           <option value='["order", "asc"]'>Oldest</option>
                           <option value='["name", "asc"]'>A - Z</option>
                           <option value='["name", "desc"]'>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
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
