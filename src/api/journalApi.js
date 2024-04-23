import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-journal-1fbfc-default-rtdb.firebaseio.com",
});

export default journalApi;
