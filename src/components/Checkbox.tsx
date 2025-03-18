import React from "react";

type CheckboxProps = {
	checked?: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({checked = false, indeterminate = false, disabled = false, onChange}) => {
	const handleChange = () => {
		if (disabled) return;
		onChange?.(!checked);
	};

	return (
		<label
			className={`relative w-6 h-6 flex items-center justify-center border-2 rounded-md cursor-pointer transition-all
        ${
			disabled
				? "border-gray-600 bg-gray-700 cursor-not-allowed"
				: checked || indeterminate
					? "border-transparent bg-gray-900"
					: "border-gray-500 hover:border-amber-500"
		}`}
			onClick={handleChange}
		>
			<input
				type="checkbox"
				className="opacity-0 absolute w-full h-full cursor-pointer"
				checked={checked}
				disabled={disabled}
				readOnly
			/>
			{checked && <span className="text-amber-400 text-lg">✔</span>}
			{indeterminate && <span className="text-amber-400 text-lg">➖</span>}
		</label>
	);
};

export default Checkbox;
