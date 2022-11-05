import "./styles.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getSatelliteData } from "./data";
/**
## Problem Statement
We want to build an internal tool that visualizes satellite data roughly mapping to images posted on VSCO

We have an API (data.js) that can asynchronously retrieve the satellite data (getSatelliteData()). 

We want a table with the following columns: 
ID
Name
Altitude
Latitude
Longitude
LaunchDate

Milestone 1: Display Satellite Data
Next, let's get the data into the table.
Use the function getSatelliteData() to get the data into your html page, and then display that in a table. No styling required.


Milestone 2: Style
Spend a few minutes adding CSS styling to the table. Nothing grand.
Examples
Make the table header capitalized.
Make every other row have a light gray background.
Add some padding to the table rows
Change the font-size on the table headers 

Milestone 3: Sort by Name, with Indicator
Allow somebody viewing the page to sort the table, both ascending and descending, by ID. Provide an indicator to show that the table is sorted by the ID column, and in which direction.


Hi welcome!! 

set initial state for the table
useLayoutEffect to get preloaded data and pre rendered components

in the app component map through tableData and render.

 * 
 * 
 */

export default function App() {
  const [tableData, setTableData] = useState([]);
  const [sorted, setSorted] = useState(false);

  useLayoutEffect(() => {
    (async () => {
      const { above } = await getSatelliteData();
      setTableData(above);
    })();
  }, []);

  useEffect(() => {}, [sorted]);

  const sortDataByName = () => {
    const sortedTable = tableData.sort((a, b) => a.satname > b.satname);
    setSorted(!sorted);
    setTableData(sortedTable);
  };

  // ID
  // Name
  // Altitude
  // Latitude
  // Longitude
  // LaunchDate

  return (
    <div className="App">
      <div>
        <button onClick={sortDataByName}>sort by name</button>
      </div>
      <table className="table">
        <thead className="table_header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Altitude</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>LaunchDate</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index} className="table_row">
                <td>{data.satid}</td>
                <td>{data.satname}</td>
                <td>{data.satalt}</td>
                <td>{data.satlat}</td>
                <td>{data.satlng}</td>
                <td>{data.launchDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
