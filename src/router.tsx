import { createBrowserRouter } from "react-router";
import ProfilAnggota from "./ProfilAnggota";
import NotFound from "./NotFound";
import ComingSoon from "./ComingSoon";

const router = createBrowserRouter([
  {
    path: "/profil-anggota/:nim",
    element: <ProfilAnggota />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <ComingSoon />,
  }
]);

export default router;
