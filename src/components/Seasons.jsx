import springIcon from '../assets/spring.svg';
import summerIcon from '../assets/summer.svg';
import autumnIcon from '../assets/autumn.svg';
import winterIcon from '../assets/winter.svg';

const Seasons = () => {
  const icons = [springIcon, summerIcon, autumnIcon, winterIcon];

  return (
    <div className="mt-32 w-full">
      <h3 className="text-3xl text-center text-gray-100 font-semibold mb-8">Explore four seasons in Edinburgh</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Season ${index + 1}`}
            className="w-24 h-24 md:w-32 md:h-32 transition-transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Seasons;

