import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import PostState from "./context/post/PostState";

function App() {
	return (
		<PostState>
			<Router>
				<>
					<Navbar />
					<header className="App-header">test</header>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</>
			</Router>
		</PostState>
	);
}

export default App;
