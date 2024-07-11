import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView="visible"
      className="h-dvh content-center text-sm"
    >
      <div className="flex flex-col justify-center align-center gap-8 w-max m-auto">
        <div>
          <h1 className="text-5xl font-bold mb-2">Error 404</h1>
          <p className="text-[#e6e6e6]">This page could not be found. </p>
        </div>
        <Link to="/" className="hover:underline">
          Back to Home
        </Link>
      </div>
    </motion.main>
  );
}
