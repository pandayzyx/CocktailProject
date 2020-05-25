import React from "react";

export default function Footer(props) {
	return (
		<div className="row text-white bg bg-dark p-3 mt-5">
			<div className="col-2">
				<img
					className="img-fluid"
					src="https://media.winefolly.com/winefolly-logo-circle.png"
					alt="img"
				></img>
			</div>
			<div className="col-2 offset-1">
				<h3 className="font-weight-bold text-white">SODA MONK</h3>
				<p>Home</p>
				<p>About Us</p>
				<p>Privacy Policy</p>
				<p>Terms of use</p>
				<p>Leaderboard</p>
				<p>Forums</p>
			</div>

			<div className="col-2">
				<h3 className="font-weight-bold text-white">CITIES</h3>
				<p>Mumbai</p>
				<p>New Delhi</p>
				<p>Chennai</p>
				<p>Bengaluru</p>
				<p>Hyderabad</p>
				<p>LuckNow</p>
			</div>

			<div className="col-2 ">
				<h3 className="font-weight-bold text-white">NEAR ME</h3>

				<p>Fine Dining</p>
				<p>Casual Dining</p>
				<p>Bar</p>
				<p>Pub</p>
				<p>Microbrewery</p>
				<p>Club</p>
			</div>

			<div className="col-2 ">
				<h3 className="font-weight-bold text-white">PRODUCTS</h3>

				<p>Whisky</p>
				<p>Beer</p>
				<p>Rum</p>
				<p>Vodka</p>
				<p>Gin</p>
				<p>Tequila</p>
			</div>
			<div className="col-12 card bg bg-dark border-4 border border-dark text-white py-2">
				<div className="row card-footer">
					<div className="col-6 offset-2">
						<p>2020 Epicture Life Ventures. All Rights Reserved></p>
					</div>

					<div className="col-3">
						<i style={{ fontSize: "30px" }} className="fab fa-twitter"></i>
						<i
							style={{ marginLeft: "10px", fontSize: "30px" }}
							className="fab fa-instagram"
						></i>
						<i
							style={{ marginLeft: "10px", fontSize: "30px" }}
							className="fab fa-facebook"
						></i>
					</div>
				</div>
			</div>
		</div>
	);
}
