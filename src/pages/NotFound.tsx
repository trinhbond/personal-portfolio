import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.main
      className="h-dvh content-center"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.div
        className="flex flex-col justify-center align-center gap-8 w-max m-auto leading-[1.6rem] max-[768px]:text-sm"
        variants={variant}
      >
        <div>
          <h1 className="text-3xl font-bold">Error 404</h1>
          <p className="text-gray-light">This page could not be found. </p>
        </div>
        <Link to="/" className="underline">
          Back to Home
        </Link>
      </motion.div>
    </motion.main>
  );
}
