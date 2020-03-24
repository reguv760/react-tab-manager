import React, { useState } from "react";

import TabManager from "./components/TabManager";

const TABS = [
  { label: "Tab 1", value: 1 },
  { label: "Tab 2", value: 2 },
  { label: "Tab 3", value: 3 }
];

function App() {
  const [activeTab, handleTab] = useState(0);

  return (
    <div className='App'>
      <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
      <div className='tab-content'>
        <div>Content of Tab {activeTab} </div>
      </div>
    </div>
  );
}

export default App;
