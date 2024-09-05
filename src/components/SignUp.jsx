import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const signUpHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        alert("signup successful");
      })
      .catch((e) =>
        console.log("error occured when creating user for signup", e)
      );
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={signUpHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
