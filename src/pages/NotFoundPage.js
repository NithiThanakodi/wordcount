import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/page-not-found.jpg";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <section className="pnf">
            <div className="oops">
                <p>Opps - Page Not Found!</p>
                <div className="">
                    <img src={NotFoundImage} alt="Page not found" />
                </div>
                <button onClick={() => navigate("/")} > Go Back To Word Counter </button>
            </div>
        </section>
    )
}
