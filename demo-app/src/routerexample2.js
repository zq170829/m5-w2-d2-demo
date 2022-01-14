import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${match.url}/dogs`}>Dogs</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${match.path}/:topicId`} element={<Topic />}></Route>
        <Route path={match.path}>
          <h3>Please select a topic</h3>
        </Route>
      </Routes>
    </div>
  );
}
// add topic function
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
