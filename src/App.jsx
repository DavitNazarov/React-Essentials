import Header from "./components/head/Header.jsx";
import CoreConsepts from "./components/coreConsept/CoreConsepts.jsx";
import Examples from "./components/Example/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConsepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
