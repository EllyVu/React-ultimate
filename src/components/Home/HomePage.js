import { useNavigate } from "react-router-dom";
import VideoHomePage from "../../assets/video-homepage.mp4"
import { useSelector } from "react-redux";
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);


    const navigate = useNavigate();

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
                <div className="title-3">
                    {isAuthenticated === false ?
                        <button className="btn-startnow" onClick={() => navigate('/login')} >
                            Bắt đầu ngay. Tất cả đều miễn phí
                        </button>
                        :
                        <button className="btn-startnow" onClick={() => navigate('/users')} >
                            Doing Quiz Now
                        </button>}

                </div>
            </div>
        </div>
    )
}
export default HomePage;