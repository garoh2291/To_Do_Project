import { BACKEND_URL } from "../data";

function get(url) {
  return fetch(url)
    .then((respone) => respone.json())
    .then((data) => {
      return data;
    });
}
export function getTasksRequest(query) {
  return get(`${BACKEND_URL}/task${query ? `?${query}` : ""}`);
}
