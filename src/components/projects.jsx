export default function Projects() {
  return (
    <>
      <section
        className="py-6 sm:py-12 dark:bg-zinc-800 dark:text-zinc-100"
        id="projects"
      >
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">My Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-zinc-900">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://archive.hatclub.dev/"
              >
                <img
                  className="object-cover w-full h-52 dark:bg-zinc-500"
                  src="https://github.com/thehatclub/anime-archive/blob/main/client/public/logo.png?raw=true"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a target="_blank" rel="noreferrer" href="#"></a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thehatclub/anime-archive"
                  className="text-xs tracki uppercase hover:underline dark:text-amber-400"
                >
                  <i class="fa-solid fa-code-branch"></i> Repository
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Anime Archive
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-zinc-400">
                  <span>
                    <i class="fa-regular fa-clock"></i> Developing
                  </span>
                  <span>Full Stack</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-zinc-900">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://whimsigains.hatclub.dev/"
              >
                <img
                  className="object-cover w-full h-52 dark:bg-zinc-500"
                  src="https://raw.githubusercontent.com/thehatclub/whimsigains/04205a8fe185530cb643e289100108e713665ed1/static/strong.svg"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a target="_blank" rel="noreferrer" href="#"></a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thehatclub/whimsigains"
                  className="text-xs tracki uppercase hover:underline dark:text-amber-400"
                >
                  <i class="fa-solid fa-code-branch"></i> Repository
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Whimsigains
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-zinc-400">
                  <span>
                    <i class="fa-regular fa-clock"></i> Oct 7, 2023
                  </span>
                  <span>Front End</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-zinc-900">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ethics.hatclub.dev/"
              >
                <img
                  className="object-cover w-full h-52 dark:bg-zinc-500"
                  src="https://github.com/thehatclub/ethics/blob/main/openai.png?raw=true"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a target="_blank" rel="noreferrer" href="#"></a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/thehatclub/ethics"
                  className="text-xs tracki uppercase hover:underline dark:text-amber-400"
                >
                  <i class="fa-solid fa-code-branch"></i> Repository
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Ethics Research
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-zinc-400">
                  <span>
                    <i class="fa-regular fa-clock"></i> Apr 6, 2023
                  </span>
                  <span>Front End</span>
                </div>
              </div>
            </article>
            <article className="grid place-items-center dark:bg-zinc-900">
              <div className="flex flex-col items-center p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  More to come...
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
