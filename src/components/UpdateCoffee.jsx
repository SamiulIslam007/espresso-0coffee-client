import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const updatedFormHandler = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedNewCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(coffee._id);
    fetch(`https://coffee-server-self.vercel.app/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedNewCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">Update a coffee</h1>
      <div className="w-[50%] mx-auto">
        <form onSubmit={updatedFormHandler}>
          <div className="flex justify-between gap-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                defaultValue={coffee.name}
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
                defaultValue={coffee.chef}
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
                defaultValue={coffee.supplier}
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
                defaultValue={coffee.taste}
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
                defaultValue={coffee.category}
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
                defaultValue={coffee.details}
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
                defaultValue={coffee.photo}
                placeholder="Type here"
                className="input input-bordered w-full  "
              />
            </label>
          </div>
          <div>
            <input
              className="bg-green-800 text-white w-full p-3 text-center rounded-lg mt-3 cursor-pointer hover:bg-green-900 transition"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
