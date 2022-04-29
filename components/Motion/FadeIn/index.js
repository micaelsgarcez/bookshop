import { motion } from 'framer-motion'

export default function FadeIn({
  hero = false,
  direction,
  delay = 0,
  className,
  children
}) {
  let initial = { opacity: 0 }
  let animate = { opacity: 1 }

  if (direction === 'down') {
    initial = { opacity: 0, y: -100 }
    animate = { opacity: 1, y: 0 }
  }

  if (direction === 'top') {
    initial = { opacity: 0, y: 100 }
    animate = { opacity: 1, y: 0 }
  }

  if (direction === 'left') {
    initial = { opacity: 0, x: -100 }
    animate = { opacity: 1, y: 0 }
  }

  if (direction === 'right') {
    initial = { opacity: 0, x: 100 }
    animate = { opacity: 1, y: 0 }
  }

  if (hero) {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        viewport={{ once: true }}
        transition={{ delay }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
