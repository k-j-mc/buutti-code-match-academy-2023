import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<div className="main">
			<NavigationBar />

			<HomePage />
		</div>
	);
};

export default App;
