import "./Buttons.css";

export default function ButtonLink({ socialIcon, socialLink, socialName }) {
	return (
		<div>
			<a className="btnLinks" href={socialLink} target="_blank">
				<img src={socialIcon} onload="SVGInject(this)" alt="Icon" />
				{socialName}
			</a>
		</div>
	);
}

export function ButtonSwitcher({ text }) {
	return (
		<div>
			<button className="btnSwitcher">{text}</button>
		</div>
	);
}
