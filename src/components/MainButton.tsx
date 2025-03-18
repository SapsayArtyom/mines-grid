import React from "react";
import {clsx} from "clsx";

type ButtonProps = {
	size?: "L" | "M" | "S";
	variant?: "primary" | "secondary";
	state?: "default" | "hover" | "disabled";
	icon?: "none" | "left" | "right" | "single";
	children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonSizes = {
	L: "py-3 px-6 text-lg",
	M: "py-2 px-5 text-md",
	S: "py-1 px-3 text-sm"
};

const buttonVariants = {
	primary: {
		default: "bg-gradient-to-b from-amber-400 to-amber-500 text-black shadow-md",
		hover: "bg-gradient-to-b from-amber-300 to-amber-400 shadow-lg",
		disabled: "bg-gray-700 text-gray-500 cursor-not-allowed"
	},
	secondary: {
		default: "bg-gray-800 text-white shadow-md",
		hover: "bg-gray-700 text-amber-400 shadow-lg",
		disabled: "bg-gray-700 text-gray-500 cursor-not-allowed"
	}
};

const Button: React.FC<ButtonProps> = ({
	size = "M",
	variant = "primary",
	state = "default",
	icon = "none",
	children,
	...props
}) => {
	return (
		<button
			className={clsx(
				"rounded-2xl flex items-center justify-center gap-2 font-medium transition-all",
				buttonSizes[size],
				buttonVariants[variant][state],
				state === "hover" && "hover:scale-105"
			)}
			disabled={state === "disabled"}
			{...props}
		>
			{icon === "left" && <span className="text-lg">🔳</span>}
			{children}
			{icon === "right" && <span className="text-lg">🔳</span>}
			{icon === "single" && <span className="text-lg">🔳</span>}
		</button>
	);
};

export default Button;
