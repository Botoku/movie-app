import { useRouter } from "next/router"
const movieDetail = () => {
    const router = useRouter()
    const { movieDetail } = router.query

  return (
    <div>This is the {movieDetail} page</div>
  )
}

export default movieDetail