import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Menu from '@/assets/icons/icn_menu.svg';
import Close from '@/assets/icons/icn_close.svg';

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        key={isOpen ? 'dark' : 'light'}
        className="z-10 lg:hidden"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: -90 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <Close cursor="pointer" onClick={toggle} />
        ) : (
          <Menu cursor="pointer" onClick={toggle} />
        )}
      </motion.button>
    </AnimatePresence>
  );
}
