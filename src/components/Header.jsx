import "../styles/Header.css";

function Header() {
  return (
    <nav>
      <div className="container nav">
        <div className="flex logo-gap">
          <img src="./react.svg" />
          <span className="reactfacts">ReactFacts</span>
        </div>
        <div>
          <span className="reactcourse">React Course - Project 1</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
