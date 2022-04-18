import classNames from "classnames";

function Container(props) {
  const { className, children, ...rest } = props;
  return (
    <div
      className={classNames(
        "w-full lg:max-w-1xl mx-auto prose dark:prose-invert prose-base",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
