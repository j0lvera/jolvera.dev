import { Box, Text } from "@rebass/emotion";
import Link from "next/link";

const Project = ({ project }) => (
  <Box bg="rgba(0,0,0,0.5);" p={3} mb={2}>
    <Link href={project.link}>{project.name}</Link>

    <Text as="p" mb={0}>
      {project.description}
    </Text>
  </Box>
);

const Projects = ({ list }) =>
  list.map(project => <Project project={project} />);

export default Projects;
