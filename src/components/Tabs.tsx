import React, {useState} from "react";

type TabItem = {
	label: string;
	icon?: React.ReactNode;
	disabled?: boolean;
};

type TabsProps = {
	tabs: TabItem[];
};

const Tabs: React.FC<TabsProps> = ({tabs}) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className="flex items-center bg-gray-900 p-2 rounded-lg">
			{/* Левая кнопка */}
			<button
				className={`p-2 rounded-md text-white transition-all ${
					selectedIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:text-amber-400"
				}`}
				disabled={selectedIndex === 0}
				onClick={() => setSelectedIndex((prev) => Math.max(0, prev - 1))}
			>
				◀
			</button>

			{/* Табы */}
			<div className="flex gap-2 mx-2">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all
              ${
					tab.disabled
						? "text-gray-600 bg-gray-800 cursor-not-allowed"
						: index === selectedIndex
							? "bg-gray-700 text-amber-400"
							: "bg-gray-800 text-white hover:text-amber-400"
				}`}
						disabled={tab.disabled}
						onClick={() => !tab.disabled && setSelectedIndex(index)}
					>
						{tab.icon && <span>{tab.icon}</span>}
						{tab.label}
					</button>
				))}
			</div>

			{/* Правая кнопка */}
			<button
				className={`p-2 rounded-md text-white transition-all ${
					selectedIndex === tabs.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:text-amber-400"
				}`}
				disabled={selectedIndex === tabs.length - 1}
				onClick={() => setSelectedIndex((prev) => Math.min(tabs.length - 1, prev + 1))}
			>
				▶
			</button>
		</div>
	);
};

export default Tabs;
