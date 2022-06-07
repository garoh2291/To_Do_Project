import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./components/Routes";
import { LoggedUserProvider } from "./context/providers/task-context-provider";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoggedUserProvider>
          <Header />
          <RoutesComponent />
        </LoggedUserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
