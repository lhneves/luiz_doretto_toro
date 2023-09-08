import React, { useState } from 'react';
import Link from 'next/link';

import Button from '../Button';
import Overlay from './Overlay';
import Navigation from './Navigation';
import MenuToggle from './MenuToggle';

import LogoName from '@/assets/images/logo_name.svg';
import User from '@/assets/icons/icn_user.svg';

import { motion } from 'framer-motion';

const variants = {
  open: {
    right: 0,
    display: 'block',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
  closed: {
    right: -200,
    display: 'none',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 250,
      display: {
        delay: 0.3,
      },
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarDesktopLinks = [
    ['Bolsa', '/bolsa'],
    ['Renda Fixa', '/renda-fixa'],
    ['Fundos', '/fundos'],
    ['Plataformas de Trading', '/plataformas'],
    ['Aprenda', '/aprenda'],
    ['Simulador', '/simulador'],
  ];

  const navbarMobileLinks = {
    investimentos: [
      ['Bolsa de Valores', '/bolsa'],
      ['Renda Fixa e Tesouro Direto', '/renda-fixa'],
      ['Fundos de Investimentos', '/fundos'],
      ['Simulador de investimentos', '/simulador'],
    ],
    trading: [
      ['Trading na Toro', '/trader'],
      ['Plataformas de Trading', '/plataformas'],
    ],
    aprenda: [
      ['Cursos', '/aprenda/cursos'],
      ['Estratégias', '/estrategias'],
      ['Conteudos', '/aprenda '],
    ],
  };

  return (
    <section className="flex justify-between items-center px-6 py-3 lg:shadow-navbar">
      <Link href="/">
        <LogoName />
      </Link>

      <nav>
        <ul className="hidden lg:flex flex-wrap content-center text-gray-300 lg:gap-7 xl:gap-10">
          {navbarDesktopLinks.map(([label, link]) => (
            <li key={link} className="hover:text-gray-800 transition duration-300 ease-in-out">
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4">
        <Button label="Fazer login" variant="ghost" className="hidden sm:flex" icon={<User />} />
        <Button label="Abra sua conta" variant="outlined" />
        <MenuToggle isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />
      </div>

      {/* Mobile Navbar */}
      <Overlay isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />

      <motion.aside
        className="absolute top-0 -right-64 bottom-0 bg-white px-8 sm:px-16 py-16 overflow-y-scroll"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        initial={false}
      >
        <Navigation navbarLinks={navbarMobileLinks} />
      </motion.aside>
    </section>
  );
}
