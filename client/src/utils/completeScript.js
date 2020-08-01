export default (html, css, js) => {
  var insert = html.indexOf("<head>");
  insert += 7;
  var str1 = html.slice(0, insert);
  var str2 = html.slice(insert);

  var cssJs = `<style>\n ${css} \n</style>\n<script>\n${js}\n</script>\n`;

  return str1 + cssJs + str2;
};
