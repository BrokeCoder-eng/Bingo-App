import { useState } from "react";
import "./BingoCard.css";

interface BingoCardProps {
	title: string;
	// prompts: string[][];
}

function BingoCard({ title }: BingoCardProps) {
	const prompts = [
		["Refactor", "Console.log", "Null", "Merge", "Promise"],
		["Unit test", "Deploy", "Bug", "API", "Commit"],
		["Loop", "Branch", "FREE", "Hook", "Rollback"],
		["Regex", "Typescript", "404", "NPM", "Token"],
		["Git", "PR", "Hotfix", "Build", "Crash"],
	];

	const [clicked, setClicked] = useState(
		Array.from({ length: 5 }, () => Array(5).fill(false))
	);

	const [bingo, setBingo] = useState(false);

	const handleClick = (row: number, col: number) => {
		const updated = clicked.map((r, rowIndex) =>
			r.map((cell, colIndex) =>
				rowIndex === row && colIndex === col ? !cell : cell
			)
		);
		setClicked(updated);
	};

	const hasBingo = (grid: boolean[][]): boolean => {
		const size = grid.length;

		for (let i = 0; i < size; i++) {
			if (grid[i].every((cell) => cell)) return true;
		}

		for (let j = 0; j < size; j++) {
			if (grid.every((row) => row[j])) return true;
		}

		if (grid.every((row, i) => row[i])) {
			return true;
		}

		if (grid.every((row, i) => row[size - 1 - i])) {
			return true;
		}

		return false;
	};

	const handleCheckBingo = () => {
		if (hasBingo(clicked)) {
			setBingo(true);
		} else {
			alert("No bingo yet! Keep trying!");
		}
	};

	return (
		<>
			<table className="bingo-card">
				<thead>
					<tr>
						<th colSpan={prompts[0]?.length || 5}>{title}</th>
					</tr>
				</thead>
				<tbody>
					{prompts.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((prompt, colIndex) => (
								<td
									key={colIndex}
									onClick={() => handleClick(rowIndex, colIndex)}
									className={clicked[rowIndex][colIndex] ? "clicked" : ""}
								>
									{prompt}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<button onClick={handleCheckBingo}>BINGO!!</button>

			{bingo && (
				<div className="bingo-popup">
					🎉 BINGO! 🎉
					<button className="close-button" onClick={() => setBingo(false)}>
						Close
					</button>
				</div>
			)}
		</>
	);
}

export default BingoCard;
