import styles from "./Button.module.css";
import clsx from "clsx";
function Button({ primary }) {
  const pri = clsx(styles.heading, {
    [styles.active]: primary,
  });
  return <button className={pri}>Click me</button>;
}
export default Button;
