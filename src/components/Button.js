import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secundary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secundary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secundary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && danger,
      "text-red-500": outline && warning,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationProp: ({ primary, secundary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secundary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary, secundary, success, warning or danger must be true!"
      );
    }
  },
};

export default Button;
