import Link from "next/link";
import About from "../components/home/about/About";
import Album from "../components/home/album/Album";
import Gallery from "../components/home/gallery/Gallery";
import HeaderPage from "../components/home/header/HeaderPage";
import Latest from "../components/home/latest/Latest";
import Tour from "../components/home/tour/Tour";

export default function Home() {
  return (
    <div>
      <HeaderPage/>
      <Album/>
      <Tour/>
      <Latest/>
      <About/>
      <Gallery/>
    </div>
  );
}
