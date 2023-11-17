export default function Hero() {
  return (
    <>
      <section className="dark:bg-zinc-800 dark:text-zinc-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              My name is
              <span className="dark:text-amber-400"> Tanner Smiley</span> and I
              am a backend-dev
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              I am a Computer Science student at UTD,
              <br className="inline" />
              and I love making ideas into a reality
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/thehatclub"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-amber-400 dark:text-zinc-900"
              >
                <i class="fa-brands fa-github"></i> Github
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/trsmiley/"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-zinc-100"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="/vector.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
