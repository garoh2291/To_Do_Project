import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/Routes";
import { Header } from "./layout/Header";
import { ProjectPage } from "./pages/Project";

function App() {
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
