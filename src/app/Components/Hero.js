import Highlight from "./Highlight";
import Button from "./Button";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  const handleBlogsClick = () => {
    navigate("/blogs");
};
  return (
    
    <section className="text-white h-fit w-8/12 m-auto flex flex-col items-center"><br></br>
      <Button buttonText='Backed by ipv'style="bg-color-red text-white hover:text-red-400 border border-green-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
       /><br></br>
       <Button className="custom-button"
       buttonText='We have raised1.3 Cr($155k) in pre-seed round from IPV🎉> | We re Hiring!' style=" bg-transparent text-white hover:text-red-400 border border-green-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
       onClick={handleBlogsClick}/>
      
      
      <p className="text-bold leading-relaxed text-white py-8 text-6xl font-bold  text-center">
        
       
        <Highlight text="Quantum" /> Algorithm Development made 10x{" "}
        <Highlight text="Faster" /> and <Highlight text="Easier" />

        <h5 className="latter">Build quantum algorithm for any of your use case with</h5>
        <h6 className="latter1">simple inputs, No Coding Required!</h6>

      </p>
      <Button className="latter3" buttonText='Book a Demo'style="bg-transparent text-white hover:text-red-400 border border-green-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
       />
    </section>
  );
};

export default Hero;
