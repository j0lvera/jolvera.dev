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
    <p {...props}>
      <span>{status}</span>
    </p>
  );
};
export default Status;
