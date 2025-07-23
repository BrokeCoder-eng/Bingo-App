import React, { useState } from "react";
import TabNavigation from "./components/TabNavigationBar/TabNavigationBar";
import BingoCard from "./components/BingoCard/BingoCard";

// style={{ padding: "2rem" }}

function App() {
	const [activeTab, setActiveTab] = useState("Rules");

	const RULES = (
		<>
			<h1>Welcome to Bingo!</h1>
			<h2>The Rules are as follows:</h2>
			<p>
				Each Day a person gets nominated and a Bingo card is made of them and
				everyone — except for the nominee — will be notified via an email. While
				everyone fixates on the nominated person to reach a Bingo, the nominated
				person tries to predict what's on their Bingo Card to try and prevent
				anyone to get a Bingo on their card. If someone either scores a Bingo or
				prevents a Bingo will score points and be ranked on the leaderboards.
			</p>
		</>
	);

	return (
		<div>
			<TabNavigation
				tabs={["Rules", "Current Bingo", "Next Bingo", "Leaderboard"]}
				activeTab={activeTab}
				onTabChange={setActiveTab}
			/>

			<main className="tab-content" key={activeTab}>
				{activeTab === "Rules" && RULES}
				{activeTab === "Current Bingo" && <BingoCard title="My Bingo Card" />}
				{activeTab === "Next Bingo" && <h1>Next Bingo Victim!</h1>}
				{activeTab === "Leaderboard" && <h1>Leaderboards</h1>}
			</main>
		</div>
	);
}

export default App;
