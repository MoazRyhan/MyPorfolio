
import BallCanvas from '../canvas/BallCanvas';
import { technologies } from '../content/technologies';

const Skills = () => {
  return (
    <>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-50 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};
 
export default Skills;
