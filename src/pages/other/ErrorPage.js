import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container error-cover">
        <div>
          <img
            src="/assets/images/error404.webp"
            alt=""
            className="img-fluid"
          />
        </div>
        <div>
          <h4>
            OOPs, THE PAGE YOU ARE LOOKING FOR <span>CANNOT BE FOUND!!!</span>
          </h4>
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-outline-primary"
            >
              Go to HomePage
            </button>
          </div>
          <div className="p-2">
            <button
              type="button"
              onClick={() => navigate(-2)}
              className="btn btn-outline-primary"
            >
              Go Back 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
