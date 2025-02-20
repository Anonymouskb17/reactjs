import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

function Pararaph() {
  const context = useContext(ThemeContext);

  return <div className={context.theme}>Conten with me</div>;
}
export default Pararaph;
