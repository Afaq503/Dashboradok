import { Provider } from "react-redux";
import MainPage from "./pages/MainPage";
import Store from "./redux/Store";

function App() {

  return (
    <>
    <Provider store={Store}>
    <MainPage/>

    </Provider>
    </>
  );
}

export default App;
