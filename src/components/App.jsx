import "../styles/index.scss";
import Recipes from "./Recipes";
import guitar from "../images/sarah-arista-n7XS9AbpZ5w-unsplash.jpg";
import guitarSvg from "../images/1F3B8.svg";

import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh hai, React</h1>
          <img src={guitar} alt="Guitar" width="250" />
          <img src={guitarSvg} alt="Guitar" width="250" />
        </section>
        <Recipes />
      </main>
    </>
  );
};

export default App;
