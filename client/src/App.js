import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
	return (
		<Router>
			<>
				<header className="App-header">test</header>
				<Routes>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
