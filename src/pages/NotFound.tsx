import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const variant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };

  return (
    <motion.main
      className="content-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, staggerChildren: 0.25 },
        },
      }}
    >
      <motion.div
        className="flex flex-col justify-center align-center gap-8 w-max m-auto max-md:text-sm"
        variants={variant}
      >
        <div>
          <h1>Error 404</h1>
          <p>This page could not be found.</p>
        </div>
        <Link
          to="/"
          className="max-w-fit bg-[#fff] text-[#162914] hover:opacity-75 rounded-full font-semibold py-4 px-8 shadow-xl"
        >
          Home
        </Link>
      </motion.div>
    </motion.main>
  );
}
