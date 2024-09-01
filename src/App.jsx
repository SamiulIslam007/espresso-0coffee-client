import { useLoaderData } from "react-router-dom";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-3xl text-center">I have {coffees.length} coffees.</h1>
    </>
  );
}

export default App;
