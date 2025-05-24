import { motion } from "framer-motion";
import "./Card.css";

function Card({ title, description }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default Card;
