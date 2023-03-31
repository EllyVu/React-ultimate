import VideoHomePage from "../../assets/video-homepage.mp4"

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source
                    src={VideoHomePage}
                    type="video/mp4">
                </source>
            </video>
            <div className="homepage-content">
                <div className="title-1">
                    Có rất nhiều bài tập để làm !
                </div>
                <div className="title-2">
                    Muốn hỏi gì nào
                </div>
                <div className="click555">
                    <button className="click666" >
                        Bắt đầu ngay. Tất cả đều miễn phí
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;