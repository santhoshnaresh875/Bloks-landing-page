import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Logo from "../assets/logo.svg";

const Header = () => {
    const navigate = useNavigate();

    const handleBlogsClick = () => {
        navigate("/blogs");
    };

    return (
        <section className="border-2 bg-neutral-900 border-neutral-800 w-11/12 m-auto border-dark rounded-lg p-4 flex justify-between shadow-xl shadow-neutral-900">
            <img src={Logo} alt="React Logo" />
            <div className="flex gap-4">
                <Button
                    buttonText="Blogs"
                    style="bg-transparent text-white hover:text-green-400 border border-red-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    onClick={handleBlogsClick}
                />
                <Button
                    buttonText="Book a demo"
                    style="bg-transparent text-white hover:text-green-400 border border-red-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"

                />
            </div>
        </section>
    );
}

export default Header;
