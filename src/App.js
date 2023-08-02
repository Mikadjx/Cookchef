import Footer from "./components/footer";
import Header from "./components/header";
import Content from "./components/content";
import styles from"./App.module.scss";

function App() {
  return (
<div className={`d-flex flex-column ${styles.appContainer}`}>
  <Header />
 <Content />
<Footer />
  </div>
  );
}

export default App;
