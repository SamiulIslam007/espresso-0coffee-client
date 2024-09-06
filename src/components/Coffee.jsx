import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const deleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted");

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        fetch(`https://coffee-server-self.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.deletedCount > 0) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success",
            //   });
            // }

            const remainingCoffees = coffees.filter((singleCoffee) => {
              return singleCoffee._id !== _id;
            });
            console.log(remainingCoffees);
            setCoffees(remainingCoffees);
          });
      }
    });
  };

  return (
    <div className="card card-side bg-gray-100 shadow-md">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p>Chef name: {chef} </p>
        <p>Category: {category} </p>
        <p>taste: {taste} </p>
        <p>supplier: {supplier} </p>

        <div className="card-actions justify-center">
          <button className="btn btn-success">View</button>
          <Link to={`updatecoffee/${_id}`}>
            <button className="btn btn-info">Update</button>
          </Link>
          <button onClick={() => deleteHandler(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
