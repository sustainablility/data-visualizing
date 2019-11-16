import axios from 'axios';
async function loadDataFromServer(url) {
    let result = await axios.get(url);
    return result.data;
}
export default loadDataFromServer;