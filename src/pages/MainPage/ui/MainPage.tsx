import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import MainButton from "../../../components/MainButton";
import Checkbox from "../../../components/Checkbox";
import RadioButton from "../../../components/RadioButton";
import Tabs from "../../../components/Tabs";
import Dropdown from "../../../components/Dropdown";

const MainPage: React.FC = () => {
	const {t} = useTranslation();
	const [isChecked, setIsChecked] = React.useState(false);
	const [isIndeterminate, setIsIndeterminate] = React.useState(true);
	const [isCheckedDisabled] = React.useState(false);
	const [selectedRadio, setSelectedRadio] = useState("option1");
	const tabItems = [
		{label: "Button", icon: "🔳"},
		{label: "Button", icon: "🔳"},
		{label: "Button", icon: "🔳"},
		{label: "Button", icon: "🔳"},
		{label: "Button", icon: "🔳", disabled: true}
	];
	const dropdownItems = [
		{label: "Play`n go", value: "playngo", icon: "🎮"},
		{label: "Placeholder", value: "placeholder", icon: "🍍"},
		{label: "Placeholder", value: "placeholder2", icon: "⚡"},
		{label: "Placeholder", value: "placeholder3", icon: "🎲"},
		{label: "Placeholder", value: "placeholder4", icon: "🎰"}
	];

	return (
		<div className="p-6 bg-gray-100 min-h-screen flex flex-col items-start gap-6">
			<h1 className="text-2xl font-bold text-blue-700">{t("Главная страница")}</h1>

			<div className="flex gap-4">
				<MainButton size="M" variant="primary" state="default">
					Primary
				</MainButton>
				<MainButton size="M" variant="secondary" state="default">
					Secondary
				</MainButton>
				<MainButton size="M" variant="primary" state="default" icon="left">
					With Icon
				</MainButton>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex gap-4 items-center">
					<span className="text-lg text-blue-700">Default (Unchecked)</span>
					<Checkbox checked={false} onChange={setIsChecked} />
				</div>
				<div className="flex gap-4 items-center">
					<span className="text-lg text-blue-700">Checked</span>
					<Checkbox checked={isChecked} onChange={setIsChecked} />
				</div>
				<div className="flex gap-4 items-center">
					<span className="text-lg text-blue-700">Indeterminate</span>
					<Checkbox
						checked={isIndeterminate}
						indeterminate={isIndeterminate}
						onChange={() => setIsIndeterminate(false)}
					/>
				</div>
				<div className="flex gap-4 items-center">
					<span className="text-lg text-blue-700">Disabled</span>
					<Checkbox checked={isCheckedDisabled} disabled />
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<h2 className="text-lg font-semibold text-blue-700">Radio Buttons</h2>
				<div className="flex gap-4">
					<RadioButton
						name="group1"
						checked={selectedRadio === "option1"}
						onChange={() => setSelectedRadio("option1")}
					/>
					<RadioButton
						name="group1"
						checked={selectedRadio === "option2"}
						onChange={() => setSelectedRadio("option2")}
					/>
					<RadioButton name="group1" checked={false} disabled />
				</div>
			</div>

			<div className="p-6 bg-gray-100 min-h-screen flex flex-col items-start gap-6">
				<Tabs tabs={tabItems} />
			</div>

			<div className="p-6 bg-gray-100 min-h-screen flex flex-col items-start gap-6">
				<Dropdown title="Providers" items={dropdownItems} showScroll={true} />
			</div>
		</div>
	);
};

export default MainPage;
