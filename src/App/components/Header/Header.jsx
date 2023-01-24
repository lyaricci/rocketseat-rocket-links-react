import "./Header.css";

export function Header({ name, career, techs }) {
	return (
		<div className="Header">
			<h1>{name}</h1>
			<p>{career}</p>
			<p>{techs}</p>
		</div>
	);
}
