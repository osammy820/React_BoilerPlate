import { RotatingLines,TailSpin,ThreeDots } from  'react-loader-spinner'

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinners= {
  rotatingLines: (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="25"
      visible={true}
    />
  ),
  tailSpin: (
    <TailSpin
      height="80"
      width="80"
      color="#011535"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  ),
  threeDots: (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  ),
};

export default Spinners