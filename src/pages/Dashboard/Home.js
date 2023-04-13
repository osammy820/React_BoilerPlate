import React from "react";

function Home() {
  return (
    <div>
      <h1 className="h3 mb-3">Analytics Dashboard</h1>

      <div className="row">
        <div className="col-xl-12 col-xxl-12 d-flex">
          <div className="w-100">
            <div className="row">
              <Card title={'Sales'}/>
              <Card title={'Visitors'}/>
              <Card title={'Earnings'}/>
              <Card title={'Orders'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({title}) => {
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col mt-0">
              <h5 className="card-title">{title}</h5>
            </div>

            <div className="col-auto">
              <div className="stat text-primary">
                <i className="align-middle" data-feather="truck"></i><i class="fa fa-money-check-alt"></i>
              </div>
            </div>
          </div>
          <h1 className="mt-1 mb-3">2.382</h1>
          <div className="mb-0">
            <span className="text-danger">
              {" "}
              <i className="mdi mdi-arrow-bottom-right"></i> -3.65%{" "}
            </span>
            <span className="text-muted">Since last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
