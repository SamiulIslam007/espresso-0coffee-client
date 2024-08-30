function AddCoffee() {
  // Handler to handle add coffee form
  const addCoffeeHandler = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(newCoffee);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">Add a coffee</h1>
      <div className="w-[50%] mx-auto">
        <form onSubmit={addCoffeeHandler}>
          <div className="flex justify-between gap-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Chef</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="chef"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex justify-between gap-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex justify-between gap-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="w-[100%]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Type here"
                className="input input-bordered w-full  "
              />
            </label>
          </div>
          <div>
            <button className="bg-green-800 text-white w-full p-3 text-center rounded-lg mt-3 cursor-pointer hover:bg-green-900 transition">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCoffee;
