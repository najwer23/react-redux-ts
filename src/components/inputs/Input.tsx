export default function Input(props: any) {

	return (
		<>
			<div className="inputTextWithLabel">
				<label htmlFor={props.id}> {props.label} </label>

				<input
					ref={props.innerRef}
					type={props.type}
					name={props.id}
					id={props.id}
				/>
			</div>
		</>
	);
}