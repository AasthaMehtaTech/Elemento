import React from "react";

import completeScript from "../../utils/completeScript";

const ElementView = ({ html, css, js }) => {
  var code = completeScript(html, css, js);
  return (
    <div>
      <iframe
        title='Element View'
        style={{
          width: "100%",
          height: "200px",
          marginTop: "50px",
          border: "1px solid",
        }}
        srcDoc={`${code}`}
      />
    </div>
  );
};

export default ElementView;
