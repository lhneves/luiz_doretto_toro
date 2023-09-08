import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MenuItem from './MenuItem';
import Button from '../Button';

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

type NavigationProps = {
  navbarLinks: { [key: string]: string[][] };
};

export default function Navigation({ navbarLinks }: NavigationProps) {
  return (
    <div className="flex flex-col gap-10">
      {Object.keys(navbarLinks).map((key) => (
        <div key={key} className="flex flex-col gap-3">
          <h2 className="font-hairline">{key.toLocaleUpperCase()}</h2>
          <motion.ul
            className="flex flex-col content-center text-gray-300 pl-8 gap-2"
            variants={variants}
          >
            {navbarLinks[key].map(([label, link]) => (
              <MenuItem key={link}>
                <Link href={link} className="text-primary-100">
                  {label}
                </Link>
              </MenuItem>
            ))}
          </motion.ul>
        </div>
      ))}
      <div className="flex flex-col gap-5 mt-5">
        <Button label="Cadastre-se" variant="contained" className="w-full" />
        <Button label="Entrar" variant="outlined" className="w-full" />
      </div>
    </div>
  );
}
