import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import NullPropsTest from "./experiments/NullProps/UselessProps";
import RenderPropsTest from "./experiments/RenderProps/index";
import CodeSplitTest from './experiments/Splitting/code-split-component';
import LazyLoadTest from './experiments/LazyLoad/';

class App extends React.Component {
  render() {
    return (
      <div >
        <CodeSplitTest></CodeSplitTest>
       </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
