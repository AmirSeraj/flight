import { motion } from "framer-motion";
import { MdOutlineConnectingAirports } from "react-icons/md";

const MenuItem = ({ i, setOpen, setSearchVal }) => {
    const items = [
        'New York',
        'New Orleans',
        'Manhatan',
        'Newark',
        'Times Square',
        'New York (JFK, Jonh of kenedy)',
        'New Jersy',
        'New Orleans',
        'London',
        'Tehran',
        'Turkey',
        'Estanbul',
        'Toronto (Canada)',
        'Amesterdam',
        'Rotterdom',
        'Abu Zabi',
        'Mazandaran'
    ]
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const handleGetValue = (value) => {
    setSearchVal(value)
    setOpen(false);
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-5 flex gap-2 border-b border-gray-400 last:border-b-0 cursor-pointer"
      onClick={() => handleGetValue(items[i])}
    >
      <MdOutlineConnectingAirports size={28} />
      {items[i]}
    </motion.li>
  );
};

export default MenuItem;
