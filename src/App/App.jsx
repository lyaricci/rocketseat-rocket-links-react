import "./App.css";
import ButtonLink from "./components/Buttons/Buttons";
import { ButtonSwitcher } from "./components/Buttons/Buttons";

function App() {
	return (
		<div className="App">
			<ButtonLink
				socialLink={"https://discord.com/users/506557042530451482"}
				socialName="Discord"
			/>
			<ButtonSwitcher />
		</div>
	);
}

export default App;
