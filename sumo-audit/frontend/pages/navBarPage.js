import React from "react";
import {Headers} from "../styles/index";
// import Collectors from "../src_backup/data/prod_collectors_2020-03-23";
// import API from "../utils/API";
// import {Col} from 'reactstrap';


function NavBarPage() {

//	Once we get this working it will call sumo directly
// const handleButtonClick = () => {
// 	API.getCollectors();
//
// }
// const handleButtonClick = () => {
// 	API.getCollectors(Collectors)
//
// }

	return (

		<>
			<Headers>
				<h1>Sumo Logic Audit</h1>
			</Headers>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a className="nav-link active" data-toggle="tab" href="#home">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" data-toggle="tab" href="#collectors">Get Report</a>
				</li>
			</ul>
			<div id="myTabContent" className="tab-content">
				<div className="tab-pane fade show active" id="home">
					<p>Self service Sumo Logic audit for application collectors.</p>
				</div>
				<div className="tab-pane fade" id="collectors">
					<p>Select the refresh button to get the lastest data of collectors.</p>
					{/*<button type="button" className="btn btn-success" onClick={handleButtonClick}>Pull Collectors</button>*/}
				</div>

			</div>

		</>


	)


}

export default NavBarPage;