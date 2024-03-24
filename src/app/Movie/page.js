// import Footer from "@/components/Footer/Footer"
import Movies from "@/components/Movies/Movies"
import Pagination from "@/components/Pagination/Pagination"
// import Pagination from "@/components/Pagination/Pagination"
const TOKEN = process.env.API_USER_TOKEN

async function page(param) {
  const { searchParams } = param
  const page = searchParams.page < 1 ? 1 : searchParams.page
  const sort = searchParams.sort_by || "popularity"

  const MoviesData = await FetchingMovies({
    page: page,
    sort: sort,
  })

  return (
    <main className="p-0 m-0  min-h-screen   bg-black" suppressHydrationWarning>
      <div className="w-[80%]  mx-auto ">
        <h1 className="text-center font-bold text-xl">
          <span className="text-[#9344E3]">{sort.toUpperCase()} </span>
          MOVIES
        </h1>
        <Movies MoviesData={MoviesData} />
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
      {/* <Footer /> */}
    </main>
  )
}

export default page

export async function FetchingMovies({ page, sort }) {
  const options = {
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
