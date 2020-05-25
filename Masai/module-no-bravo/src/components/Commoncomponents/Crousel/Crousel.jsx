import React from "react";

export default function Crousel(props) {
	return (
		<div class="col-10 offset-1">
			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							style={{
								height: "420px",
								borderRadius: "30px",
								border: "3px solid white",
							}}
							class="d-block  w-100"
							src="https://images.unsplash.com/photo-1550622841-495620acc40d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt="First slide"
						></img>
					</div>
					<div class="carousel-item">
						<img
							style={{
								height: "420px",
								borderRadius: "30px",
								border: "3px solid white",
							}}
							class="d-block  w-100"
							src="https://images.unsplash.com/photo-1484132368430-ca5c967b425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt="Third slide"
						></img>
					</div>
					<div class="carousel-item">
						<img
							style={{
								height: "420px",
								borderRadius: "30px",
								border: "3px solid white",
							}}
							class="d-block  w-100"
							src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt="Second slide"
						></img>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
