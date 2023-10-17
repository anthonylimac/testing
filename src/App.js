import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import WelcomePage from "./pages/WelcomePage";
import CounterPage from "./pages/CounterPage";
import PlayersPage from "./pages/PlayersPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage/>
        </Route>
        <Route path="/table">
          <TablePage/>
        </Route>
        <Route path="/">
          <WelcomePage/>
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10}/>
        </Route>
        <Route path="/players">
          <PlayersPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
