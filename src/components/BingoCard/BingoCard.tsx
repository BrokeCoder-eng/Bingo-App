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
								<td key={colIndex}>{prompt}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default BingoCard;
