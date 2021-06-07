let notifyUser = (message) => {
  let notifyUserDiv = document.getElementById("notifyUser");
  if (notifyUserDiv) notifyUserDiv.remove();
  document.body.innerHTML +=
  `<div id="notifyUser" style="position: fixed;
  bottom: 15px;
  left: 50%;
  width: 80%;
  padding: 5px;
  z-index: 100;
  text-align: center;
  -ms-transform: translate(-50%,0); /* IE 9 */
  transform: translate(-50%,0); /* Standard syntax */
  color: white;
  border-radius: 5px;
  background-color: #36454F">
    ${message}
  </div>`;
  notifyUserDiv = document.getElementById("notifyUser");

  setTimeout(()=> {
    notifyUserDiv.remove();
  }, 5000)
}
