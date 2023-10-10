const Assignment3 = ({ planetList }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Planet</th>
						<th>Climate</th>
					</tr>
					{planetList.map((planet) => (
						<tr key={planet.name}>
							<td>{planet.name}</td>
							<td>{planet.climate}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Assignment3;
