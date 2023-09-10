import React from 'react';

import Image from 'next/image';

import EvaristoMobile from '@/assets/images/evaristo_mobile.webp';
import EvaristoDesktop from '@/assets/images/evaristo_desktop.webp';

import Button from '@/resources/Button';
import CardBenefits from '@/resources/CardBenefits';

import { tv } from 'tailwind-variants';

const mainSection = tv({
  slots: {
    container: 'flex flex-col bg-gray-100 py-10 px-6 gap-10',
    title: 'text-primary-300 text-2xl text-center lg:text-4xl max-w-5xl mx-auto',
    subcontainer: 'flex flex-col items-center gap-10 lg:relative',
    cardsContainer:
      'flex flex-col justify-center items-start gap-6 md:flex-row md:flex-wrap lg:absolute lg:top-20 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:w-full lg:justify-between lg:px-4 lg:max-w-6xl',
    evaristoMobile: 'w-full max-w-sm lg:hidden',
    evaristoDesktop: 'hidden w-full max-w-lg lg:block',
  },
});

export default function MainSection() {
  const { container, title, subcontainer, cardsContainer, evaristoDesktop, evaristoMobile } =
    mainSection();

  return (
    <section className={container()}>
      <h2 className={title()}>
        Conheça os
        <b> benefícios dos diversos ativos de Bolsa</b> e
        <b> alavanque seus resultados no longo prazo</b>
      </h2>
      <section className={subcontainer()}>
        <div className={cardsContainer()}>
          <CardBenefits cardType="stock" />
          <CardBenefits cardType="fii" />
          <CardBenefits cardType="bdr" />
          <CardBenefits cardType="etf" />
        </div>
        <Image
          src={EvaristoMobile}
          className={evaristoMobile()}
          placeholder="blur"
          alt="Evaristo"
        />
        <Image
          src={EvaristoDesktop}
          className={evaristoDesktop()}
          placeholder="blur"
          alt="Evaristo"
        />
        <Button label="Abra sua conta grátis" className="w-full max-w-sm" />
      </section>
    </section>
  );
}
