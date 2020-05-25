import React from "react";
import Dropdown from "../Dropdown/Dropdown";

export default function NavBar(props) {
	let { pass, val, onchange, iconclick, userselect } = props;
	console.log();
	return (
		<div className="card mb-3">
			<div className="row navbar">
				<div className="col-6">
					<i
						onClick={(e) => iconclick(e)}
						className="fas fa-glass-cheers display-2 float-left"
					></i>
					<h1 className="font-weight-bold float-left mt-4 ml-5 py-3">
						{" "}
						Tripsy Bar Tender
					</h1>
				</div>
				<div className="col-2">
					<Dropdown selection={onchange} val={userselect} />
				</div>
				<div className="col-4">
					<div className="topnav">
						<input
							name="search"
							className="mt-4"
							type="text"
							value={val.search}
							onChange={(e) => onchange(e)}
							placeholder="Search by name.."
						/>
						<div
							className="btn-group btn-group-toggle ml-3"
							data-toggle="buttons"
						>
							<label className="btn btn-secondary active">
								<input onClick={(e) => pass(e)} type="radio" name="options" />
								Search
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
