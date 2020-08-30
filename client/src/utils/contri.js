

const finalcode = (e)=> {
   var finalCode = "";
   e.display.view.forEach((code) => {
    finalCode += code.line.text;
    finalCode += "\n";
  });
   return finalCode
}

export default finalcode;
