import Logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <section>
            <div className="d-g bg-no-repeat bg-center bg-cover border-y-2 py-8 h-[200px] border-neutral-800 w-full m-auto border-dark p-4 flex align-center justify-center ">
                <img src={Logo} alt="React Logo" className="" />
            </div>
            <div className="text-neutral-500 flex justify-center py-10">
                <p>© 2024 Bloq Quantum Pvt Ltd. All Rights Reserved</p>
            </div>
        </section>
    );
}

export default Footer;