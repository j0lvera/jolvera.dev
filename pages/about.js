import Page from "../components/layouts/page";

function About() {
  return (
    <Page title={"About"}>
      <p>
        My name is Juan Olvera. I was born in Mexico, and currently live in The
        Woodlands, TX.
      </p>

      <p>I’m a self-taught front-end developer & web standards enthusiastic.</p>

      <p>
        I build web products and services with focus on user experience,
        accessibility, and performance.
      </p>

      <p>
        My primary focus is JavaScript development. I build user interfaces
        using React, Vue, and similar libraries. Currently I work more with
        React and its ecosystem (Redux, React Router, etc.) along with the
        corresponding tooling (Babel, Gulp, Webpack, Rollup, etc.)
      </p>

      <p>
        I’m a Linux user and spend most of my development time on the terminal,
        with tools like Tmux and Vim (recently I switched to VS Code, but still
        use Vim for a lot of things).
      </p>

      <p>
        On my free time I do side projects with Python. I’m comfortable with its
        ecosystem: Virtualenv, PyPi, Pythonic style, etc. I’ve built web
        crawlers, back-end services (APIs), bots (Twitter, Telegram, Messenger),
        and some penetration testing tools. These projects got me experience
        with MongoDB, Postgres, SQLite, Celery, Redis, Ngnix and more.
      </p>

      <p>
        Other stuff I’ve built are cli programs with both Python (Click) and
        Node.js (Commander.js).
      </p>

      <h2>Technical Skills</h2>

      <h3>Web technologies</h3>

      <ul>
        <li>HTML</li>
        <li>CSS (including pre-processors Sass and Less)</li>
        <li>JavaScript (ES6, TypeScript, Elm)</li>
        <li>WordPress theme development</li>
      </ul>

      <h3>Other programming languages</h3>

      <ul>
        <li>Python</li>
        <li>PHP</li>
        <li>ReasonML</li>
        <li>Elm</li>
      </ul>

      <h3>Tools & workflow</h3>

      <ul>
        <li>IDE: IntelliJ IDEA</li>
        <li>Browser: Firefox Developer Edition</li>
        <li>Task runner: Webpack</li>
        <li>Version control system: Git</li>
        <li>Terminal: Gnome Terminal (GNU/Linux)</li>
        <li>
          OS: Experienced in macOS (current), GNU/Linux (preferred) & Windows
        </li>
      </ul>

      <h3>Languages</h3>

      <ul>
        <li>Spanish: Native</li>
        <li>English: Fluent</li>
      </ul>

      <h3>Professional Interests</h3>

      <ul>
        <li>Web design & front-end development</li>
        <li>UI/UX design</li>
        <li>Technical writing</li>
        <li>JavaScript programming</li>
        <li>Shell programming</li>
        <li>Python programming</li>
        <li>Web apps Security & penetration testing</li>
        <li>Cryptography</li>
      </ul>

      <h3>Me everywhere else</h3>

      <ul>
        <li>
          <a href={"https://github.com/j0lv3r4"}>Github</a>
        </li>
        <li>
          <a href={"https://twitter.com/_jolvera"}>Twitter</a>
        </li>
        <li>
          <a href={"https://keybase.io/thinkxl"}>Keybase</a>
        </li>
      </ul>
    </Page>
  );
}

export default About;
