import React from 'react';
import Table from './components/Table';
import winedata from "./Wine-Data.json";
import {mean, median, mode} from "./common.js";
import './App.css';

function App() {
  // Added the Gamma for each entity
  winedata.forEach(ele=>{
    ele.Gamma = !(ele.Magnesium == 0 || isNaN(ele.Magnesium)) ? (ele.Ash * ele.Hue)/ele.Magnesium : null;
  })

  // All classes
  const classes = [...new Set(winedata.map(item => item["Alcohol"]))];

  //initializing array and push values in them.
  let flavArr = [], gammaArr = [], flavResultArr=[], gammaResultArr=[];
  classes.forEach(() => {
    flavArr.push([]);
    gammaArr.push([]);
    flavResultArr.push({"mean":'', "median": '', "mode": ''});
    gammaResultArr.push({"mean":'', "median": '', "mode": ''});
  })

  winedata.forEach(ele => {
    switch(ele["Alcohol"]){
      case 1: 
        flavArr[0].push(parseFloat(ele.Flavanoids));
        gammaArr[0].push(parseFloat(ele.Gamma));
        break;
      case 2: 
        flavArr[1].push(parseFloat(ele.Flavanoids));
        gammaArr[1].push(parseFloat(ele.Gamma));
        break;
      case 3: 
        flavArr[2].push(parseFloat(ele.Flavanoids));
        gammaArr[2].push(parseFloat(ele.Gamma));
        break;
      default : 
        break;
    }
  })

 
  // calculated the mean of flavanoid and gamma using the helper function.
  flavArr.forEach((arr,i) => {
    flavResultArr[i].mean = mean(arr);
    flavResultArr[i].median = median(arr);
    flavResultArr[i].mode = mode(arr);
  })

  gammaArr.forEach((arr,i) => {
    gammaResultArr[i].mean = mean(arr);
    gammaResultArr[i].median = median(arr);
    gammaResultArr[i].mode = mode(arr);
  })
  // constructing rows for the flavanoid and gamma tables.
  let flavTable= [["Flavanoids Mean"], ["Flavanoids Median"], ["Flavanoids Mode"]];
  let gammaTable= [["Gamma Mean"], ["Gamma Median"], ["Gamma Mode"]];
  flavResultArr.forEach(ele =>{
    flavTable[0].push(ele.mean);
    flavTable[1].push(ele.median);
    flavTable[2].push(ele.mode);
  })

  gammaResultArr.forEach(ele =>{
    gammaTable[0].push(ele.mean);
    gammaTable[1].push(ele.median);
    gammaTable[2].push(ele.mode);
  })

  return (
    <div className="App">
          <div id="table1">
            <h5>Flavanoids</h5>
            <Table data={flavTable} key="flavanoids"/>
          </div>
          
          <div id="table2">
            <h5>Gamma</h5>
            <Table data={gammaTable} key="gamma"/>
          </div>
          
    </div>
  );
}

export default App;
