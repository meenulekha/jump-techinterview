import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Result {
  key: string;
  title: string;
  description?: string;
}

interface ResultsListProps {
  results: Result[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-4 space-y-3">
      {results.map((result, index) => (
        <motion.div
          key={result.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg"
        >
          <div className="h-12 w-12 rounded-lg bg-[#7cc7c7]/20 flex items-center justify-center flex-shrink-0">
            <Image
              src="/placeholder.svg"
              alt=""
              width={24}
              height={24}
              className="text-[#7cc7c7]"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-medium text-gray-900 truncate">
              {result.title}
            </h3>
            {result.description && (
              <p className="text-sm text-gray-500 truncate">
                {result.description}
              </p>
            )}
          </div>
          <button className="flex-shrink-0 h-10 px-4 flex items-center gap-2 text-sm font-medium text-white bg-[#7cc7c7] rounded-full hover:bg-[#6bb6b6] transition-colors">
            Buy
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ResultsList;
