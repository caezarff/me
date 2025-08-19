"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [hoveredArrow, setHoveredArrow] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 text-xl font-medium z-10 my-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          caezar
        </motion.div>

        <motion.div
          className="absolute left-[6rem] top-1/2 -translate-y-1/2 h-px bg-gray-300 my-2.5"
          style={{ width: "calc(50% - 6rem)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          {/* Arrow 1 - top */}
          <motion.div
            className="absolute origin-left rotate-[-90deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 1 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 1 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 1 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.4, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(1)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              ui/ux
            </motion.span>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div
            className="absolute origin-left rotate-[-75deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 2 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 2 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.5, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 2 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.5, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(2)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              web
            </motion.span>
          </motion.div>

          {/* Arrow 3 */}
          <motion.div
            className="absolute origin-left rotate-[-60deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 3 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 3 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.6, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 3 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.6, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(3)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              design
            </motion.span>
          </motion.div>

          {/* Arrow 4 */}
          <motion.div
            className="absolute origin-left rotate-[-45deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 4 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 4 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.7, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 4 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.7, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(4)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              motion
            </motion.span>
          </motion.div>

          {/* Arrow 5 */}
          <motion.div
            className="absolute origin-left rotate-[-30deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 5 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 5 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.8, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 5 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.8, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(5)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              flow
            </motion.span>
          </motion.div>

          {/* Arrow 6 */}
          <motion.div
            className="absolute origin-left rotate-[-15deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 6 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 6 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.9, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 6 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 1.9, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(6)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              minimal
            </motion.span>
          </motion.div>

          {/* Arrow 7 - horizontal */}
          <motion.div
            className="absolute origin-left rotate-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 7 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 7 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.0, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 7 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.0, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(7)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              code
            </motion.span>
          </motion.div>

          {/* Arrow 8 */}
          <motion.div
            className="absolute origin-left rotate-[15deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 8 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 8 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.1, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 8 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.1, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(8)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              creative
            </motion.span>
          </motion.div>

          {/* Arrow 9 */}
          <motion.div
            className="absolute origin-left rotate-[30deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 9 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 9 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.2, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 9 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.2, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(9)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              tech
            </motion.span>
          </motion.div>

          {/* Arrow 10 */}
          <motion.div
            className="absolute origin-left rotate-[45deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 10 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 10 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.3, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 10 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.3, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(10)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              grid
            </motion.span>
          </motion.div>

          {/* Arrow 11 */}
          <motion.div
            className="absolute origin-left rotate-[60deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 11 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 11 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.4, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 11 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.4, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(11)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              logic
            </motion.span>
          </motion.div>

          {/* Arrow 12 */}
          <motion.div
            className="absolute origin-left rotate-[75deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 12 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 12 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.5, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 12 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.5, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(12)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              craft
            </motion.span>
          </motion.div>

          {/* Arrow 13 - bottom */}
          <motion.div
            className="absolute origin-left rotate-[90deg] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.1 }}
          >
            <motion.div
              className="w-32 h-px bg-gray-400"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: hoveredArrow === 13 ? 1.2 : 1,
                backgroundColor: hoveredArrow === 13 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.6, duration: 0.5 }}
              whileHover={{ scaleX: 1.2, backgroundColor: "#ffffff" }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderLeftColor: hoveredArrow === 13 ? "#ffffff" : "#9ca3af",
              }}
              transition={{ delay: 2.6, duration: 0.3 }}
              whileHover={{ borderLeftColor: "#ffffff" }}
            ></motion.div>
            <motion.span
              className="ml-2 text-gray-400 text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
              }}
              onHoverStart={() => setHoveredArrow(13)}
              onHoverEnd={() => setHoveredArrow(null)}
            >
              build
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
