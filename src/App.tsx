import './App.css';

// import { useMediaQuery } from 'react-responsive';
// import { useState } from 'react';
import {
  Button,
  Card,
  Link,
} from '@arco-design/web-react';

function App() {
  // const [count, setCount] = useState(0);

  // const darkThemeMq = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log(darkThemeMq, "darkThemeMq");
  // console.log(darkThemeMq.matches);

  const handleOrientationChange = (mql) => {
    mql.addListener((e) => {
      console.log(1111, e);
    });
  };

  handleOrientationChange(darkThemeMq);

  // darkThemeMq.addListener(handleOrientationChange);

  // if (darkThemeMq) {
  //   document.body.setAttribute("arco-theme", "dark");
  // } else {
  //   document.body.removeAttribute("arco-theme");
  // }
  const toggleTheme = (value) => {
    if (value) document.body.setAttribute("arco-theme", value);
    else document.body.removeAttribute("arco-theme");
  };

  return (
    <>
      <Button type="secondary" onClick={() => toggleTheme("")}>
        浅色
      </Button>
      <Button type="primary" onClick={() => toggleTheme("dark")}>
        深色
      </Button>
      <div style={{ display: "flex" }}>
        <Card
          style={{ width: 360 }}
          title="Arco Card"
          extra={<Link>More</Link>}
        >
          ByteDance's core product, Toutiao ('Headlines'), is a content platform
          in China and around the world. Toutiao started out as a news
          recommendation engine and gradually evolved into a platform delivering
          content in various formats.
        </Card>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
