import Camp from "./component/camp";
import Features from "./component/features";
import GetApp from "./component/getApp";
import Guide from "./component/guide";
import Hero from "./component/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
