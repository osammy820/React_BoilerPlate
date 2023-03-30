import Spinners from "./helpers/Spinners"


const LoadingPage = () => {
    return (
        <>
        <div className="spinner-container">
            {Spinners.tailSpin}
            <h4 className="mt-5">Loading...</h4>
        </div>
        </>
    )
}
export default LoadingPage