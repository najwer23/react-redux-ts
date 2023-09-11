import { FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	innerRef: React.RefObject<HTMLInputElement>;
	type: string;
	onBlur?: any;
	value?: string;
}


const Input: FC<InputProps> = ({id, label, innerRef, type, onBlur, value}) => {
	function handleBlur(e: React.FocusEvent<HTMLElement>) {
		if (onBlur !== undefined) {
			onBlur(e);
		}
	}

	return (
		<>
			<div className="inputTextWithLabel">
				<label htmlFor={id}> {label}</label>

				<input
					onBlur={handleBlur}
					ref={innerRef}
					type={type}
					name={id}
					id={id}
					value={value}
				/>
			</div>
		</>
	);
}

export default Input;