/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Text } from "@rebass/emotion";

const Status = props => {
  const { status } = props;
  const colors = {
    Draft: {
      bg: "#bdc3c7",
      fg: "#333"
    },

    "In Progress": {
      bg: "#2980b9",
      fg: "#000"
    },

    Finished: {
      bg: "#27ae60",
      fg: "#000"
    }
  };

  return (
    <Text as="p" {...props}>
      <span
        css={css`
          padding: 2px 4px;
          border-radius: 0.2em;
          background-color: ${colors[status]["bg"]};
          color: ${colors[status]["fg"]};
          font-size: 0.9em;
        `}
      >
        {status}
      </span>
    </Text>
  );
};
export default Status;
