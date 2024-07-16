import InputBox from "./components/Input";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full  max-h-screen relative">
      <Navbar />
      <InputBox />
    </div>
  );
}
