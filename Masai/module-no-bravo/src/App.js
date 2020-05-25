import React from "react";
import axios from "axios";
import NavBar from "./components/Commoncomponents/Navbar/NaVbar";
import Card from "./components/Commoncomponents/Card/Card";
import Pagination from "./components/Commoncomponents/Pagination/Pagination";
import Crousel from "./components/Commoncomponents/Crousel/Crousel";
import Footer from ".//components/Commoncomponents/Footer/Footer";
import { v4 as uuidv4 } from "uuid";
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drinkOnLoad: [
				"WHISKY",
				"RUM",
				"BEER",
				"VODKA",
				"WINE",
				"GIN",
				"BRANDY",
				"TEQUILA",
				"VERMOUTH",
				"MARGARITA",
				"SCOTCH",
				"RUM",
			],
			cardDataOnLoad: [],
			userSearchData: [],
			search: "",
			isSearchButtonClicked: false,
			dropdownData: [],
			select: "",
			isDropdownClicked: false,
			itemPerPage: 12,
			noOfPages: 0,
			currentPage: 1,
			flag: false,
		};
	}

	handleChange = (e) => {
		if (e.target.name === "search") {
			this.setState({
				[e.target.name]: e.target.value,
			});
		} else {
			this.setState(
				{
					[e.target.name]: e.target.value,
					isDropdownClicked: true,
				},
				this.dropdownDrinksSelect(e.target.value)
			);
		}
	};

	dropdownDrinksSelect = (value) => {
		if (value === "Alcoholic") {
			console.log("1");
			axios
				.get(
					"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
				)
				.then((res) => {
					this.setState({
						dropdownData: [...res.data.drinks],
					});
				});
		} else if (value === "Non_Alcoholic") {
			console.log("2");
			axios
				.get(
					"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
				)
				.then((res) => {
					this.setState({
						dropdownData: [...res.data.drinks],
					});
				});
		} else if (value === "Ordinary_Drink") {
			console.log("3");
			axios
				.get(
					"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
				)
				.then((res) => {
					this.setState({
						dropdownData: [...res.data.drinks],
					});
				});
		} else if (value === "Cocktail") {
			console.log("4");
			axios
				.get(
					"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
				)
				.then((res) => {
					this.setState({
						dropdownData: [...res.data.drinks],
					});
				});
		} else if (value === "Cocktail_glass") {
			console.log("5");
			axios
				.get(
					"https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
				)
				.then((res) => {
					this.setState({
						dropdownData: [...res.data.drinks],
					});
				});
		} else if (value === "Champagne_flute") {
			console.log("6");
			axios
				.get(
					"https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
				)
				.then((res) => {
					this.setState({
						dropdownData: [...res.data.drinks],
					});
				});
		}
	};

	async getDrinksOnLoad() {
		let { drinkOnLoad, cardDataOnLoad } = this.state;
		for (var i = 0; i < drinkOnLoad.length; i++) {
			await axios
				.get(
					`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkOnLoad[i]}`
				)
				.then((res) => {
					this.setState({
						[cardDataOnLoad]: cardDataOnLoad.push(res.data.drinks[0]),
					});
				});
		}
	}
	searchDrinksBtn = (e) => {
		let { search, userSearchData } = this.state;
		axios
			.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
			.then((res) => {
				this.setState(
					{
						userSearchData: [...res.data.drinks],
						isSearchButtonClicked: true,
						isDropdownClicked: false,
					},
					console.log(userSearchData)
				);
			})
			.catch((err) => console.log(err));
	};

	backToHomePage = () => {
		this.setState({
			isSearchButtonClicked: false,
			isDropdownClicked: false,
		});
	};
	handlePagination = (e) => {
		let { itemPerPage } = this.state;
		this.setState({
			flag: itemPerPage,
			currentPage: e.target.id,
		});

	};

	handlePreviousNext = (currentPageNo) => {
		let { dropdownData, itemPerPage } = this.state;
		let item = Math.ceil(dropdownData.length / itemPerPage);
		if (currentPageNo <= 1) {
			this.setState({
				currentPage: 1,
			});
		} else if (currentPageNo >= item) {
			this.setState({
				currentPage: item,
			});
		} else {
			console.log(currentPageNo);
			this.setState({
				currentPage: currentPageNo,
			});
		}
	};

	componentDidMount() {
		this.getDrinksOnLoad();
	}

	render() {
		let {
			itemPerPage,
			currentPage,
			cardDataOnLoad,
			userSearchData,
			isSearchButtonClicked,
			isDropdownClicked,
			dropdownData,
		} = this.state;
		let item = Math.ceil(dropdownData.length / itemPerPage);
		let start = itemPerPage * (currentPage - 1);
		let end = itemPerPage * currentPage - 1;
		let startIndex = start;
		let endIndex = end;
		console.log(dropdownData);

		return (
			<div className="container-fluid">
				<NavBar
					iconclick={this.backToHomePage}
					val={this.state}
					userselect={this.state}
					onchange={this.handleChange}
					pass={this.searchDrinksBtn}
				/>

				{!isDropdownClicked && isSearchButtonClicked && (
					<div className="row px-3 mt-0 ">
						<div className="col-12 card px-3 mb-3">
							<div className="card-header font-weight-bold">Search Results</div>
						</div>

						{userSearchData.map((item) => {
							return (
								<div key={uuidv4()} className="col-3">
									<Card
										text="font-weight-bold text-truncate "
										instruction={item.strInstructions}
										image={item.strDrinkThumb}
										label={item.strDrink}
									/>
								</div>
							);
						})}
					</div>
				)}

				{!isDropdownClicked && !isSearchButtonClicked && (
					<>
						<div className="row  mb-3 card">
							<Crousel />
						</div>
						<div className="row">
							{cardDataOnLoad.map((item) => {
								return (
									<div key={uuidv4()} className="col-3 px-3 ">
										<Card
											text="text-truncate"
											instruction={item.strInstructions}
											image={item.strDrinkThumb}
											label={item.strDrink}
										/>
									</div>
								);
							})}
						</div>
					</>
				)}

				{isDropdownClicked && (
					<>
						<div className="row">
							{dropdownData.slice(startIndex, endIndex + 1).map((item) => {
								return (
									<div key={uuidv4()} className="col-3 px-3 ">
										<Card
											text="text-truncate"
											instruction={item.strInstructions}
											image={item.strDrinkThumb}
											label={item.strDrink}
										/>
									</div>
								);
							})}
						</div>
						<div className="offset-4">
							<Pagination
								prevNext={this.handlePreviousNext}
								click={this.handlePagination}
								pages={item}
							/>
						</div>
					</>
				)}

				<Footer />
			</div>
		);
	}
}
