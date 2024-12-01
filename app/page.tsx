import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Link href="cabins">This is a link</Link>
    </div>
  );
}
