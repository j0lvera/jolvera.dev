import { Box, Text } from "@rebass/emotion";

const Changelog = ({ details }) => (
  <>
    <hr />
    <Text as="details" fontFamily="monospace">
      <summary>
        <strong>Changelog</strong>
      </summary>

      {details.map(detail => {
        const key = detail[0];
        const changes = detail.slice(1);
        return (
          <Box ml={4} mt={2}>
            <Text as="p" mb={0}>
              {key}:
            </Text>
            <ul>
              {changes.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </Box>
        );
      })}
    </Text>
    <hr />
  </>
);

export default Changelog;
