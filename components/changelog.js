const Changelog = ({ details }) => (
  <details>
    <summary>
      <strong>Changelog</strong>
    </summary>

    {details.map((detail, index) => {
      const key = detail[0];
      const changes = detail.slice(1);
      return (
        <div key={index}>
          <p>{key}:</p>
          <ul>
            {changes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    })}
  </details>
);

export default Changelog;
