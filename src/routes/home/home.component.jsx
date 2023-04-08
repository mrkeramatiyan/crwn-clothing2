import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => (
  <div>
    <Outlet />
    <Directory />
  </div>
);

export default Home;
