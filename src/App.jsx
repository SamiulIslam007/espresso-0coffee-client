import { useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <>
      <div className="px-8">
        <h1 className="mb-7 text-3xl text-center text-purple-500">
          I have {coffees.length} coffees.
        </h1>
        <div className="grid gap-3 md:grid-cols-2 ">
          {coffees.map((coffee) => {
            return <Coffee keys={coffee._id} coffee={coffee} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
