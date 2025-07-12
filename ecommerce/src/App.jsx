import { RouterProvider } from "react-router";
import router from "./components/Routes/Routes";
import store from "./store";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
