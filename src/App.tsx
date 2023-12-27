import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-full flex flex-col justify-between align-center border-2 border-indigo-500 text-white sm:bg-red-800 md:bg-emerald-800 lg:bg-yellow-800 xl:bg-green-800 2xl:bg-blue-950">
      <Header />
      <main>
        <h1 className="leading-none text-sm md:text-xl font-bold border-2 border-indigo-500">
          HI, MY NAME IS
        </h1>
        <h2 className="text-6xl font-extrabold">BOND TRINH</h2>
        <div className="border-2 border-indigo-500">
          <p className="my-10 md:text-2xl font-medium leading-none">
            I am a junior developer passionate about frontend development
          </p>
          <button className="rounded-full font-extrabold px-10 py-4 text-xl border-2 border-indigo-500 text-center whitespace-nowrap	">
            LET'S TALK
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
