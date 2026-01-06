import Image from "next/image";
import Header from "./UI/About";
import Pages from "./UI/Paginas";
import Technology from "./UI/Technology";
import About from "./UI/About";

export default function Home() {
  return (
    <div className="">
      <About />
      <Pages />
      <Technology />
    </div>
  );
}
