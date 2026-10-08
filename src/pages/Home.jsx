import { useEffect, useState } from "react"

const Home = () => {

    const brinquedos = [
  { id: 1, title: "Brinquedo Um", description: "First item description." },
  { id: 2, title: "Brinquedo Dois", description: "Second item description." },
  { id: 3, title: "Brinquedo Três", description: "Third item description." },
  { id: 4, title: "Brinquedo Quatro", description: "Fourth item description." },
];

return (
    <>
        <h4 className="p-4 text-lg font-bold">Conheça nossos produtos!</h4>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brinquedos.map((brinquedo) => (
            <div
            key={brinquedo.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {brinquedo.title}
                </h3>

                <p className="text-sm text-gray-600">
                    {brinquedo.description}
                </p>
                <div className="mt-4 flex justify-center">
                    <button className="w-1/2 rounded-2xl bg-cyan-500 px-4 py-1 text-lg font-semibold text-white hover:bg-cyan-600">
                        Comprar
                    </button>
                </div>
            </div>
        ))}
        </div>
    </>
  );
}

export default Home
