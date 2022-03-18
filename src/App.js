
import "./App.css";
import RegistrationForm from "./components";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";

import CustomizedDialogs from "./components/dialog";
import FetchData from "./components/FetchData";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="App">
      <CustomizedDialogs title="Register Here">
        <RegistrationForm />
      </CustomizedDialogs>
      <br></br>
      <br></br>
      <br></br>
      <div className="dv">
        {/* <FetchData /> */}
        <Card2 />
        <Card3 id="c3"/>
        <Card4/>
      </div>
      <br></br>
      <br></br>
     <Foot/>
    </div>
  );
}

export default App;
