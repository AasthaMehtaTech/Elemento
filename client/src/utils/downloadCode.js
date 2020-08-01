import completeScript from './completeScript';


export default (HTMLCode, CSSCode, JSCode) => {
  const element = document.createElement("a");
  var blob = new Blob([completeScript(HTMLCode, CSSCode, JSCode)], {
    type: "text/html",
  });
  element.href = URL.createObjectURL(blob);
  element.download = "Element.html";
  document.body.appendChild(element);
  element.click();
};
