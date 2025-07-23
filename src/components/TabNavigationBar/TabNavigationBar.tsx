import React from "react";
import "./TabNavigationBar.css";

interface TabNavigationProps {
	tabs: string[];
	activeTab: string;
	onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
	tabs,
	activeTab,
	onTabChange,
}) => {
	return (
		<nav className="tab-nav">
			<ul className="tab-list">
				{tabs.map((tab) => (
					<li
						key={tab}
						className={`tab-item ${activeTab === tab ? "active" : ""}`}
						onClick={() => onTabChange(tab)}
					>
						{tab}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TabNavigation;
