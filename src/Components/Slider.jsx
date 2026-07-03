import Image1 from "../imgs/img1.png"
import Image2 from "../imgs/img2.png"
import Image3 from "../imgs/img3.png"
import "../Style/Slider.css"

function Slider() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100 height-100vh" alt="image1" />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100 height-100vh" alt="image2" />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100 height-100vh" alt="image3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider