import React from "react";

type RadioButtonProps = {
	checked?: boolean;
	disabled?: boolean;
	name?: string;
	onChange?: (checked: boolean) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({checked = false, disabled = false, name, onChange}) => {
	const handleChange = () => {
		if (disabled) return;
		onChange?.(!checked);
	};

	return (
		<label
			className={`relative w-6 h-6 flex items-center justify-center border-2 rounded-full cursor-pointer transition-all
        ${
			disabled
				? "border-gray-600 bg-gray-700 cursor-not-allowed"
				: checked
					? "border-amber-500 bg-gray-900"
					: "border-gray-500 hover:border-amber-500"
		}`}
			onClick={handleChange}
		>
			<input
				type="radio"
				className="opacity-0 absolute w-full h-full cursor-pointer"
				checked={checked}
				disabled={disabled}
				name={name}
				readOnly
			/>
			{checked && <span className="w-3 h-3 bg-amber-400 rounded-full"></span>}
		</label>
	);
};

export default RadioButton;
