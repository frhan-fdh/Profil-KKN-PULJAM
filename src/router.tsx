import { createBrowserRouter } from "react-router";
import ProfilAnggota from "./ProfilAnggota";
import NotFound from "./NotFound";

const router = createBrowserRouter([
	{
		path: "/profilAnggota/:nim",
		element: <ProfilAnggota />,
	},
    	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;