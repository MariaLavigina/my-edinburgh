import heroImg from '../assets/hero-image-one.svg'; 
import heroImg2 from '../assets/hero-image-two.svg';
import heroImg3 from '../assets/hero-image-three.svg';
import WeatherButton from './WeatherButton'; 
import Seasons from './Seasons';
import QuizButton from './QuizButton';

const Hero = ({ onQuizStart }) => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Text content */}
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <h2 className="text-5xl font-medium mb-4 text-gray-100">Discover Edinburgh through my eyes</h2>
          <p className="text-2xl text-gray-200 mb-6">
           Flanter bromise the wenterly drath of silven marquents. Strindle forth the blazen crout, for never shall the dwindle roft in parsel glane. Quander sights the braylish moonk, while trelling the vaspers in nocturn glay. Minter down the fleckled groove, and harrow not the glistened way. Bortans flindle in crasped delight, yarning toward the plenth of drayken light. When somber winds of fratel sweep, the jarnock lumes in thilven sleep.
          </p>
      
        </div>

        {/* Images */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <img src={heroImg} alt="Hero 1" className="rounded shadow-lg w-full md:w-1/3 max-w-sm mx-auto" />
            <img src={heroImg2} alt="Hero 2" className="rounded shadow-lg w-full md:w-1/3 max-w-sm mx-auto" />
            <img src={heroImg3} alt="Hero 3" className="rounded shadow-lg w-full md:w-1/3 max-w-sm mx-auto" />
          </div>
        </div>
         {/* Weather API button */}
      <WeatherButton />
      <Seasons />
   
           {/* Pass the onQuizStart prop down to QuizButton */}
        <QuizButton onClick={onQuizStart} />


      </div>
    </section>
  );
};


export default Hero;


