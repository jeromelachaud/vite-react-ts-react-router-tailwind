import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
        Vite + React + Typescript + Tailwindcss + React Router
      </p>
      <p className="mt-3">
        <button
          type="button"
          className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
    </div>
  );
};

export default Home;
