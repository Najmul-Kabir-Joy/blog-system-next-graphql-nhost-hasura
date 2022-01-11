import Banner from "./Components/HomeComponents/Banner";
import CovidAlert from "./Components/HomeComponents/CovidAlert";
import HomeMenu from "./Components/HomeComponents/HomeMenu";
import Motivation from "./Components/HomeComponents/Motivation";

export default function Home() {
  return (
    <>
      <Banner />
      <CovidAlert />
      <HomeMenu />
      <Motivation />
    </>
  )
}
