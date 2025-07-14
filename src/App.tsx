import { RouterProvider } from "react-router";
import router from "./router";
import { useWindowSize } from "./windowSize";
import NotAllowed from "./NotAllowed";
const App = () => {
  const { width } = useWindowSize();
  const isDesktop = width! >= 1024;

  if (isDesktop) {
    return <NotAllowed />;
  }
  return <RouterProvider router={router} />;
};

export default App;
