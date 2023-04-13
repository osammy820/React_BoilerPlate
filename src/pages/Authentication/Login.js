import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/customComponents/Button";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    errors: [],
  });

  const handleUserInput = (e) => {
    setUserInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let data = {
      email: userInput.email,
      password: userInput.password,
    };
    navigate("/dashboard");
    axios
      .post("/api/authentication/login", data)
      .then((res) => {
        localStorage.setItem("token", res?.data?.data?.token);
        localStorage.setItem("code", res?.data?.data?.user?.code);
        localStorage.setItem("role", res?.data?.data?.user?.role);
        localStorage.setItem("name", res?.data?.data?.user?.name);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        if (
          err.response.data.status === 400 &&
          err.response.data.success === false
        ) {
          setUserInput((userInput) => ({
            ...userInput,
            errors: err?.response?.data?.error_msg,
          }));
        }
      });
  };


  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Hello Welcome,</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <img
                        src="img/avatars/avatar.png"
                        alt="Charles Hall"
                        className="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      />
                    </div>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          value={userInput?.email}
                          onChange={handleUserInput}
                          required
                          placeholder="Enter your email"
                        />
                        <small className="text-danger">{userInput?.errors?.email}</small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          value={userInput?.password}
                          onChange={handleUserInput}
                          required
                          placeholder="Enter your password"
                        />
                        <small className="text-danger">{userInput?.errors?.password}</small>
                        <small>
                          <a href="index.html">Forgot password?</a>
                        </small>
                      </div>
                      <div>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="remember-me"
                            name="remember-me"
                            checked
                          />
                          <span className="form-check-label">
                            Remember me next time
                          </span>
                        </label>
                      </div>
                      <div className="text-center mt-3">
                        <Button cssClasses={'btn btn-lg btn-primary'} isloading={loading} callback={handleSubmit} buttonText={'Sign In'}/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
