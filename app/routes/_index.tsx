import type { MetaFunction } from "@remix-run/node";
import Awards from "~/compnent/Awards";
import Contact from "~/compnent/Contact";
import Menu from "~/compnent/Menu";
import Profile from "~/compnent/Profile";
import Works from "~/compnent/Works";

export const meta: MetaFunction = () => {
  return [
    { title: "Furuta Katsumi | Portfolio" },
    { name: "description", content: "古田克海のポートフォリオサイト。" },
  ];
};

export default function Index() {
  return (
    <>
      <Menu />

      <h1 className="text-3xl font-bold text-center my-8">
        Furuta Katsumi <br /> Portfolio
      </h1>

      <div className="container mx-auto">
        <Profile />
        <Awards />
        <Works />
        <Contact />
      </div>
    </>
  );
}
