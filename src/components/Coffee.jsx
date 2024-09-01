const Coffee = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffee;

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

        <div className="card-actions justify-end">
          <button className="btn btn-primary">See details</button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
