import React from "react";

export default () => {
  const leBool = false;

  return (
    <div href={leBool ? "eloquentjavascript.net" : null}>Inspect my props</div>
  );
};

// when href is set to null, it does not appear on the dom element. However, it does if set to an empty string.