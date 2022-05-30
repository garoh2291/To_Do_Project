import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/Routes";
import { BACKEND_URL } from "./data";
import { Header } from "./layout/Header";

function App() {
  console.log(BACKEND_URL);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
