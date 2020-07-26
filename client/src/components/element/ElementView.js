import React from 'react'

const ElementView = ({html, css, js}) => {
var code = completeScript(html, css, js);
    return (
        <div>
           <iframe style={{width: '100%', height: '200px', marginTop: '50px', border: '1px solid' }} srcDoc = {`${code}`}  />
        </div>
    )
}

const completeScript = (html, css , js) => {

    var insert = html.indexOf('<head>');
        insert += 7
    var str1 = html.slice(0,insert);
    var str2 = html.slice(insert);

    var cssJs = `<style>\n ${css} \n</style>\n<script>\n${js}\n</script>\n`

    return str1+cssJs+str2;
}
export default ElementView
