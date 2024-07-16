import InputBox from "./components/Input";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full border-2 border-red-500 h-screen">
      <Navbar />
      <InputBox />
    </div>
  );
}
