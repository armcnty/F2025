const axiosRequest = require("axios");
const apiUrl = "http://localhost:3000/contact/";
// If not using your own API, try it out with this: 
// https://api.github.com

async function getActivity() {
    let response = await axiosRequest.get(apiUrl);
    console.log(response.data);
}

getActivity();
