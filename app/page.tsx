import MovieList from '@/components/MovieList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>IMDB Movie app</h1>
      <div className="">
        <div>Sidebar</div>
        <div><MovieList /></div>
      </div>

    </main>
  )
}
