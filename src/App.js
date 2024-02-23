import "./App.css";
import Title from "./components/Title";
import Year from "./components/Year";
import Logo from "./components/Logo";
import MenuBackground from "./components/MenuBackground";

function App() {
  return (
    <div className="Body">
      <Title />
      <Year />
      <Logo />
      <MenuBackground />
    </div>
  );
}

export default App;
