import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

const variants = {
  open: { opacity: 0.7, display: 'flex' },
  closed: { opacity: 0, display: 'none', transition: { delay: 0.3 } },
};

type OverlayProps = HTMLMotionProps<'div'> & {
  isOpen: boolean;
};

export default function Overlay({ isOpen, ...props }: OverlayProps) {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-full bottom-0 bg-black"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      initial={false}
      {...props}
    />
  );
}
