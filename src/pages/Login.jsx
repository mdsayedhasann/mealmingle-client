import { NavLink } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);
    }
    return (
        <div className="hero">
        <div className="hero-content flex-col ">
          <div>
              <h1 className='text-3xl font-semibold'>
                  Login Now
              </h1>
          </div>
          <div className="card w-[350px] shadow-xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-gradient-to-r from-[#3CC0AD] to-[#40DB9B]">Login</button>
              </div>

              <div className='py-4'>
                    <p>
                        Don't have a Account? Please <NavLink className='text-[#3FD99C]' to='/register'>Register</NavLink>
                    </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;