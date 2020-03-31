import axios from "axios";
require('dotenv').config();
axios.defaults.headers.get['Access-Control-Allow-Origin'] = true

const sumoAccessID = process.env.sumoAccessID;
const sumoAccessKey = process.env.sumoAccessKey;


export default {

	// Gets all Collectors
	getCollectors: function () {
		console.log("Grabbing Collectors");
		axios.get("https://api.sumologic.com/api/v1/collectors",
			{
				headers: {
				'Access-Control-Allow-Origin': true,
				'Content-Type': 'application/json',
				Authorization: "Basic "+sumoAccessID+":"+sumoAccessKey,
				}
		})
			.then((res) => {
				if (!res) return;
				return res;
			})
			.catch (err => console.log(err));
	},
}