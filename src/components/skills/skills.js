import { motion } from "framer-motion";
import BallCanvas from '../canvas/BallCanvas';
import { technologies } from '../content/technologies';

const Skills = () => {
  return (
    <div id="Skills" className="flex flex-wrap justify-center gap-10 mt-14">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className="w-28 h-28"
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
