import React from "react"

function TrendMovie() {
  return  <div className="w-full h-[600px] dark:text-white  flex -z-50 relative bottom-32 ">
  <div
    id="popup-modal"
    tabindex="-1"
    className="hidden fixed top-0 right-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] w-[100vw] bg-black bg-opacity-75"
  >
    <div className="relative w-full h-full flex justify-center p-10">
      <div className="relative  rounded-lg shadow  min-h-[75vh] min-w-[75vw]">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-4xl opacity-60 hover:opacity-100"
          data-modal-hide="popup-modal"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            fill-rule="evenodd"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
          </svg>
        </button>
        <div className="p-6 text-center w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex-grow m-4 py-8">
            <iframe
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Irish Wish | Official Trailer | Netflix"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_gKXowSyfjM?autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fmovie-project-popcornpalace.vercel.app&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full h-full">
    <div className="absolute w-full h-[600px] bg-gradient-to-r from-black opacity-70 z-10"></div>
    <div className="h-[600px] relative">
      <img
        alt="Irish Wish"
        fetchpriority="high"
        decoding="async"
        data-nimg="fill"
        class="w-full h-full object-cover"
        // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
        sizes="100vw"
        src="https://image.tmdb.org/t/p/original//qz2QzkYzesbbL94rdUpZrFPhlRe.jpg"
        //  srcset="/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=3840&amp;q=75 3840w"
        // src="/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2Fqz2QzkYzesbbL94rdUpZrFPhlRe.jpg&amp;w=3840&amp;q=75"
      />
    </div>
    <div className="absolute w-full top-[20%] p-4 md:p-8 z-20">
      <h1 className="text-3xl max-w-2xl md:text-6xl font-bold">
        Irish Wish
      </h1>
      <div className="my-4 flex gap-4">
        <p className="text-white ">1h 37 min</p>
        <p className="text-white ">2018</p>
      </div>
      <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] dark:text-gray-200">
        Maddies dream guy is days away from marrying her best friend when a
        wish for true love made on an ancient stone in Ireland magically
        alters her fate.
      </p>
      <button className=" bg-purple-700 text-white border border-gray-300 hover:bg-gray-400 hover:border-gray-400 hover:text-black border  text-md font-semibold py-2 px-10">
        More{" "}
      </button>
    </div>
  </div>
</div>
}

export default TrendMovie
