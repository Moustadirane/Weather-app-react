import React from 'react';

const api = {
    key: "511bed680f73bff65ec232c038a2b53a"
}


function App() {
   const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]; /* index num between 0-6, day of week*/
    let date = d.getDate(); /*num between 0-31 */
    let month = months[d.getMonth()] /* index num between 0-11, month of year*/
    let year = d.getFullYear(); /* gets current year */

    return`${day} ${month} ${date}, ${year}`
   }


  return (
    <div className="app ">
        <main>
            <div className="search-box">
                <input
                type = "text"
                className = "search-bar"
                placeholder = "Search..."
                />

            </div>

            <div className="location-box">
                <div className="location">New York City, U.S.</div>
                <div className="date">{dateBuilder(new Date())}</div>

            </div>
        </main>
    </div>
  );
}

export default App;
