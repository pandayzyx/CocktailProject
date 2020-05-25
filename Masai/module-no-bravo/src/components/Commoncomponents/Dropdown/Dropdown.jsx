import React from "react";

export default function Dropdown(props) {
	let { val, selection } = props;
	return (
		<div>
			<select
				className="form-control mt-3"
				value={val.select}
				onChange={(e) => selection(e)}
				name="select"
			>
				<option>--Search by Category</option>
				<option value="Alcoholic">Alcoholic</option>
				<option value="Non_Alcoholic">Non_Alcoholic</option>
				<option value="Ordinary_Drink">Ordinary_Drink</option>
				<option value="Cocktail">Cocktail</option>
				<option value="Cocktail_glass">Cocktail_glass</option>
				<option value="Champagne_flute">Champagne_flute</option>
			</select>
		</div>
	);
}
