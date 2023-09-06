import { useState } from "react";

import ServiceList from "./components/services/ServiceList";

function App() {
  return (
    <>
      <h1>CLN Stylez: Where natural hair gets healing service </h1>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ServiceList />
          </div>
          <div className="col">
            <ServiceList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
