import React from "react";

import Parallaxer from "./Parallaxer";

export default () => (
  <div style={{ height: '300vh' }}>
    <Parallaxer imageSrc="https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif" parallaxSpeed={0.5} />
    <p style={{ float: 'left' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex similique, voluptatum adipisci libero magnam, magni minima quis culpa facilis quidem, vero delectus reiciendis dolores repellat blanditiis nisi quisquam recusandae.
        </p>
  </div>
);
