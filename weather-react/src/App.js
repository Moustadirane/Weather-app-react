import React from 'react';

const api = {
    key: "511bed680f73bff65ec232c038a2b53a"
}
/* base: "https://api.openweathermap.org/data/2.5/" --> invalid */

function App() {
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
        </main>
    </div>
  );
}

export default App;
