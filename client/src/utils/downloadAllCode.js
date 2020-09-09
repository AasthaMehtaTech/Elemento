// to download it all in a single html file

import {merged_strings} from './buildAll.js';
import clearSelected from "./clearSelected";

export default () => {

    var str1 = '<html>\n <head>\n <title> </title>\n';
    var cssJs = `<style>\n ${merged_strings.CSSAll} \n</style>\n<script>\n${merged_strings.JSAll}\n</script>\n`;
    var str2 = '</head>\n <body>\n';
    var str3 = '</body>\n <script>\n </script>\n </html>';
    
    var resultant=  str1 + cssJs + str2 + merged_strings.HTMLAll + str3;

    const element = document.createElement("a");
    var blob = new Blob([resultant], {
        type: "text/html",
    });
    element.href = URL.createObjectURL(blob);
    element.download = "Element.html";
    document.body.appendChild(element);
    element.click();
    clearSelected();
};