import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import tennis_court_W from "../assets/tennis_court_W.webp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tennis Court</title>
        <meta name="description" content="Reserve your tennis court" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=" space-x-10 xl:ml-5 xl:flex">
          <div className="p-10 xl:p-1 ">
            <p className="mt-16 text-center text-6xl font-bold text-darkest">
              Welcome to our tennis court reservation website!
            </p>
            <p className="mt-16 text-center text-5xl font-medium">
              Easy and fast way to book your next tennis game.
            </p>
            <p className="mt-16 text-center text-4xl font-medium">
              Occasional player or a passionate competitor, we have the perfect
              court to meet your needs.
            </p>
          </div>
          <Image
            className="invisible max-w-[60%] xl:visible"
            src={tennis_court_W}
            alt="tennis court photo"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
