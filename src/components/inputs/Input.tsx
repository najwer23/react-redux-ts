import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	innerRef: React.RefObject<HTMLInputElement>;
	type: string;
}

const Input: FC<InputProps> = ({id, label, innerRef, type}) => {
	return (
		<>
			<div className="inputTextWithLabel">
				<label htmlFor={id}> {label}</label>

				<input
					ref={innerRef}
					type={type}
					name={id}
					id={id}
				/>
			</div>
		</>
	);
}

export default Input;