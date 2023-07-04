type MovieRes = {
    results: Movie
}

type Movie = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    overview: string
}