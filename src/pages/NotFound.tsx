import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const variants = {
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
        className="flex flex-col align-center gap-8 w-max m-auto"
        variants={variants}
      >
        <div>
          <h1 className="text-5xl mb-1">404</h1>
          <p>This page could not be found.</p>
        </div>
        <Link
          to="/"
          className="self-start bg-[#fff] text-[#162914] hover:opacity-75 rounded-full font-semibold py-3 px-6"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.main>
  );
}
