import axios from "axios";

const journalApi = axios.create({
    baseURL: "https://vue-fernando-ba84c-default-rtdb.firebaseio.com",
});


export default journalApi