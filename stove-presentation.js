import { Stove } from "./StoveConcept/Stove/stove.js";

const stoveData = new Stove();
const lighterColorBase = stoveData.stovePanel.lightersColors;
const lighterToolBase = stoveData.stovePanel.lightersStoveTool;
document.querySelector(".stove-brand").innerHTML = stoveData.brand;
setTimeout(() => {
  document.querySelector(".text-container").classList.add("text-by-binding");
  document.querySelector(
    ".text-container"
  ).innerHTML = `With the new release of the brand ${stoveData.brand}, the ${stoveData.color}
    stove with ${stoveData.width} of width and ${stoveData.height} of height,`;
}, 2000);
setTimeout(() => {
  document.querySelector(".text-container").classList.add("text-by-binding");
  document.querySelector(
    ".text-container"
  ).innerHTML = `what have ${stoveData.stovePanel.lightersQuantity}
    lighters with ${stoveData.stovePanel.lightersQuantity} different colors:
    <ul>
      <li style="color: ${lighterColorBase[0]}">${lighterColorBase[0]} from ${lighterToolBase[0]} lighter</li>
      <li style="color: ${lighterColorBase[1]}">${lighterColorBase[1]} from ${lighterToolBase[1]} lighter</li>
      <li style="color: ${lighterColorBase[2]}">${lighterColorBase[2]} from ${lighterToolBase[2]} lighter</li>
      <li style="color: ${lighterColorBase[3]}">${lighterColorBase[3]} from ${lighterToolBase[3]} lighter</li>
      <li style="color: ${lighterColorBase[4]}">${lighterColorBase[4]} from ${lighterToolBase[4]} lighter</li>
    </ul>`;
}, 4000);
setTimeout(() => {
  document.querySelector(
    ".text-container"
  ).innerHTML = `${stoveData.stovePanel.lampOvenButtonQuantity} lamp button
    for ${stoveData.stoveOven.ovenQuantity} oven and ${stoveData.kitchenRange.burnersQuantity} stove burners,
    ${stoveData.height} of height and ${stoveData.width} of width,`;
}, 6000);
setTimeout(() => {
  document.querySelector(
    ".text-container"
  ).innerHTML = `and the oven have a door with glass with ${stoveData.stoveOven.ovenGlass.ovenGlassHeight} of height
    and ${stoveData.stoveOven.ovenGlass.ovenGlassWidth} of width. So, let's cook?!`;
}, 8000);
