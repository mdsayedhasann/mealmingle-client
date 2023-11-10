import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log("Register Success");
        updateUser(name, photo)
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "User Register Success",
                text: "Welcome to MEALMINGLE",
                footer: '<a href="#">You can take and Share Your food now with others</a>'
              });
              form.reset()
        })
        .catch(error => {
            console.error(error);
            
        })
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
            icon: "error",
            title: "Registration Failed"
          });
      });
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col ">
        <div>
          <h1 className="text-3xl font-semibold">Register Now</h1>
        </div>
        <div className="card w-[350px] shadow-xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
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
              <button className="btn text-white bg-gradient-to-r from-[#3CC0AD] to-[#40DB9B]">
                register
              </button>
            </div>

            <div className="py-4">
              <p>
                Already have a Account? Please{" "}
                <NavLink className="text-[#3FD99C]" to="/login">
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
