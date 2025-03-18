import React, {useState} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

type DropdownItem = {
	label: string;
	value: string;
	icon?: React.ReactNode;
};

type DropdownProps = {
	title: string;
	items: DropdownItem[];
	showScroll?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({title, items, showScroll = true}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleSelection = (value: string) => {
		setSelectedItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
	};

	const filteredItems = items.filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<div className="relative w-64">
			{/* Кнопка dropdown */}
			<button
				className="w-full bg-gray-800 text-white p-3 rounded-md flex justify-between items-center"
				onClick={toggleDropdown}
			>
				<span>{selectedItems.length > 0 ? `Selected ${selectedItems.length}` : title}</span>
				{isOpen ? <FaChevronUp /> : <FaChevronDown />}
			</button>

			{/* Выпадающее меню */}
			{isOpen && (
				<div className="absolute w-full mt-2 bg-gray-900 text-white rounded-md shadow-lg p-2">
					<input
						type="text"
						placeholder="Search..."
						className="w-full p-2 bg-gray-800 rounded-md text-white mb-2"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>

					<div className={`overflow-y-auto ${showScroll ? "max-h-40" : ""}`}>
						{filteredItems.length > 0 ? (
							filteredItems.map((item) => (
								<label
									key={item.value}
									className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
								>
									<input
										type="checkbox"
										checked={selectedItems.includes(item.value)}
										onChange={() => handleSelection(item.value)}
										className="form-checkbox text-amber-400"
									/>
									{item.icon && <span>{item.icon}</span>}
									{item.label}
								</label>
							))
						) : (
							<p className="p-2 text-gray-400">No providers found for your request</p>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
