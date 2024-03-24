import Link from "next/link"

function Pagination({ totalPage, page, sort }) {
  let pages = parseInt(page)
  let nextpage = pages + 1
  let prevpage = pages - 1
  let prevpageby10 = pages - 10

  let lastpage = pages + 10
  if (pages > lastpage) {
    nextpage = lastpage
  }

  if (pages < 1) {
    prevpage = 1
  }

  return (
    <div className="flex flex-nowrap">
      {" "}
      <Link
        className={`join-item btn hover:shadow hover:shadow-white  ${1 > prevpageby10 ? "hidden" : ""}`}
        href={`/Movie?page=${prevpageby10}&sort_by=${sort}`}
      >
        {prevpageby10 === 0 ? 1 : prevpageby10}
      </Link>
      <Link
        className={`join-item btn btn-disabled  ${1 > prevpageby10 ? "hidden" : ""}`}
        href={`/Movie?page=${prevpageby10}&sort_by=${sort}`}
      >
        ...
      </Link>
      <Link
        className={`join-item btn hover:shadow hover:shadow-white  ${prevpage === 0 ? "hidden" : ""}`}
        href={`/Movie?page=${prevpage}&sort_by=${sort}`}
      >
        {prevpage === 0 ? 1 : prevpage}
      </Link>
      <Link
        className="join-item btn btn-disabled bg-[#020D18] text-white"
        href={`/Movie?page=3&sort_by=${sort}`}
      >
        {pages}
      </Link>
      <Link
        className="join-item btn hover:shadow hover:shadow-white "
        href={`/Movie?page=${nextpage}&sort_by=${sort}`}
      >
        {nextpage}
      </Link>
      <Link
        className="join-item btn btn-disabled "
        href={`/Movie?page=${lastpage}&sort_by=${sort}`}
      >
        ...
      </Link>
      <Link
        className={`join-item btn hover:shadow hover:shadow-white  ${lastpage === totalPage ? "hidden" : ""}`}
        href={`/Movie?page=${lastpage}&sort_by=${sort}`}
      >
        {lastpage}
      </Link>
    </div>
  )
}

export default Pagination
