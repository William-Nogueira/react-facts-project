import "../styles/Facts.css";

function Facts() {
  return (
    <main>
      <div className="container main">
        <h1 className="fun-facts">Fun Facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
          <li>
            React is not a complete framework, but rather a library for building
            user interfaces.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Facts;
