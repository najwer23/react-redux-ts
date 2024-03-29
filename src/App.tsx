import React from 'react';
import Stage from './components/stage/Stage'

import { Provider } from "react-redux";
import store from "./store";


function App() {

  return <>
		<Provider store={store}>
			<Stage />
		</Provider>
	</>
}

export default App;
