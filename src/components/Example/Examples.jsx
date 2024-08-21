import React, { useState } from "react";
import TabBtn from "./TabBtn";
import { EXAMPLES } from "../../data";
import { Section } from "../Section";
import Tabs from "../Tabs";
const Examples = () => {
  const [clickedTopic, setClickedTopic] = useState("");
  const handleClick = (clickedValue) => {
    setClickedTopic(clickedTopic === clickedValue ? "" : clickedValue);
    // console.log("value", clickedValue);
    // console.log("Topic", clickedTopic);
  };
  // console.log("topic2", clickedTopic);
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsConteiner="menu"
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
};

export default Examples;
