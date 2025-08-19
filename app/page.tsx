"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-xl font-medium z-10 my-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          caezar
        </motion.div>

        <motion.div
          className="absolute left-[6rem] top-1/2 -translate-y-1/2 h-px bg-white my-2.5"
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
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
              className="w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.3 }}
            ></motion.div>
            <motion.span
              className="ml-2 text-white text-sm cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.2 }}
            >
              build
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
