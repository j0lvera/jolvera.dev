import Link from "./link";

const Project = ({ project }) => (
  <div>
    <Link href={project.link}>{project.name}</Link>

    <p>{project.description}</p>
  </div>
);

const Projects = ({ list }) =>
  list.map(project => <Project project={project} />);

export default Projects;
