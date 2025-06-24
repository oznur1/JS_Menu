import fetchMenu from "./api.js";
import { renderCards } from "./ui.js"; 

document.addEventListener("DOMContentLoaded",async()=>{
  const data= await fetchMenu();

  renderCards(data)
})