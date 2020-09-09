function extractBody(html){
    var body_starts = html.indexOf("<body>");
    var body_end = html.indexOf("</body>");
    var body_content = html.slice(body_starts+6, body_end);
    return body_content;
};
export default extractBody;
