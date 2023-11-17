export default function About() {
  return (
    <>
      <section className="py-6 dark:bg-amber-400 dark:text-zinc-900" id="about">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-3xl font-bold leadi text-center">
            Something about me
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            Hello! I'm Tanner Smiley, a backend developer and current UTD
            student. My coding journey began in 8th grade, focusing on
            Express.js for robust server-side solutions. Proficient in React and
            SvelteKit for front-end development, I'm passionate about crafting
            clean and efficient code. Join me in turning ideas into seamless
            digital experiences!
          </p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/trsmiley/"
            className="px-8 py-3 text-lg font-semibold rounded dark:bg-zinc-800 dark:text-zinc-50"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
