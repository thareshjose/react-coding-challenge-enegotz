import Axios from "axios";

export function fetchCarData() {
  var encodedURI = window.encodeURI("https://enegotz.glitch.me/");

  return Axios.get(encodedURI).then(function(response) {
    return response.data;
  });
}
