export default function Button(props: any) {

	return (
		<>
			<button
				type="submit"
				disabled={props.disabled}
			>
				{props.text}
			</button>
		</>
	);
}