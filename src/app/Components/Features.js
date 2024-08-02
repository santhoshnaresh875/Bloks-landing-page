import Constants from "../Constants/constants";
import Button from "./Button";
import Card from "./Card";

const { FeatureList } = Constants.LandingPage;
console.log(FeatureList);

const Features = () => {
  return (
    <section className="text-white h-fit w-8/12 m-auto">
      <div className="text-bold py-8 text-4xl font-bold flex items-center gap-6 flex-col text-center">
        <img className="h-40 w-40" src={Constants.LandingPage.meterImage} alt="meter" />
        <p>Fast-Tracking Quantum Algorithm Development for</p>
        <p className="text-blue"> Quantum Teams</p>
      </div>
      <div className="w-11/12 flex flex-wrap gap-4 m-auto justify-center">
        {FeatureList.map((feature, index) => (
          <Card
            key={index}
            text={feature.text}
            subText={feature.subText}
            imgUrl={feature.imgUrl}
          />
        ))}
      </div>
      <div className=" flex gap-8 py-8 items-center gap-6 flex-col text-center">
        <p className="text-bold text-4xl font-bold">Fast track your Quantum Adoption Journey</p>
        <Button buttonText='Book a Demo' style="bg-transparent text-white hover:text-green-400 border border-red-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    />
      </div>
     
    </section>
  );
};

export default Features;
