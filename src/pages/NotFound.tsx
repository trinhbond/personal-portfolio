import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-dvh content-center"
    >
      <div className="flex flex-col justify-center align-center gap-8 w-max m-auto leading-[1.6rem] text-sm">
        <div>
          <h1 className="text-5xl font-bold">Error 404</h1>
          <p className="text-gray-light">This page could not be found. </p>
        </div>
        <Link to="/" className="underline">
          Back to Home
        </Link>
      </div>
    </motion.main>
  );
}
