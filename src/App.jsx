import { useState } from "react";
import { CoreConsept } from "./components/CoreConsept";
import Header from "./components/Header";
import TabBtn from "./components/TabBtn.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [clickedTopic, setClickedTopic] = useState();
  const handleClick = (ClickedValue) => {
    setClickedTopic(ClickedValue);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConsept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabBtn
              isClicked={clickedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabBtn>
            <TabBtn
              isClicked={clickedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabBtn>
            <TabBtn
              isClicked={clickedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabBtn>
            <TabBtn
              isClicked={clickedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabBtn>
          </menu>
          {!clickedTopic ? (
            <p>Please choose the topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[clickedTopic].title} </h3>
              <p>{EXAMPLES[clickedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[clickedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
