import MovieList from "@/components/MovieList";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Temp from "@/components/Temp";

export default function Home() {
  return (
    <main className="">
      <div className="md:flex">
        <div className="flex">
          <Sidebar/>
          <MovieList />
        </div>
      </div>
    </main>
  );
}
