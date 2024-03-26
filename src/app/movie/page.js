import Movies from "@/components/Movies/Movies"
import Pagination from "@/components/Pagination/Pagination"
const TOKEN = process.env.API_USER_TOKEN

async function page(param) {
  const { searchParams } = param
  const query = searchParams.query
  const page = searchParams.page < 1 ? 1 : searchParams.page
  const sort = searchParams.sort_by || "popularity"
  let MoviesData = null
  if (query) {
    MoviesData = null
    MoviesData = await FetchingMovies({
      page: page,
      sort: sort,
      query: query,
    })
  } else {
    MoviesData = await FetchingMovies({
      page: page,
      sort: sort,
    })
  }

  return (
    <main
      className="p-0 m-0 BG  min-h-screen   bg-black"
      suppressHydrationWarning
    >
      <div className="w-[80%]  mx-auto ">
        <h1 className="text-center font-bold text-xl">
          <span className="text-[#9344E3]">{sort.toUpperCase()} </span>
          MOVIES
        </h1>
        {MoviesData && <Movies MoviesData={MoviesData} />}
        <div className=" ">
          <div className="mx-auto  sm:w-[28%]">
            <Pagination
              totalPage={MoviesData.total_pages}
              page={page}
              sort={sort}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page

export async function FetchingMovies({ page, sort, query }) {
  let options
  if (query) {
    options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${query}include_adult=false&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmE4NzMyMDM4M2ZlMzlhMTA3NDM4ZWRkMWI5YzBlNSIsInN1YiI6IjY1ZmQ1ZGE0NzcwNzAwMDE2MzA4NzkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LeiSY9F_PLqdVc4kNAiLVIfos2gVt5eVFb-Wc1Nrj0",
      },
    }
    const Movie = await fetch(options, { next: { revalidate: 1 } })
    const MoviesData = await Movie.json()
    return MoviesData
  } else {
    options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    }
    const Movie = await fetch(options, { next: { revalidate: 1 } })
    const MoviesData = await Movie.json()
    return MoviesData
  }
}
