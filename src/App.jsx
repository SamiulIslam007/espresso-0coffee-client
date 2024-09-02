import { useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(useLoaderData());

  return (
    <>
      <div className="px-8">
        <h1 className="mb-7 text-3xl text-center text-purple-500">
          I have {coffees.length} coffees.
        </h1>
        <div className="grid gap-3 md:grid-cols-2 ">
          {coffees.map((coffee) => {
            return (
              <Coffee
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
