import React from 'react';
import Image from 'next/image';

import PhoneMockup from '@/assets/images/phone_screen_mockup.webp';

import Button from '@/resources/Button';

import { tv } from 'tailwind-variants';

const footerSection = tv({
  slots: {
    container: 'bg-gray-200',
    subcontainer:
      'flex flex-col items-center py-10 gap-10 w-full max-w-6xl mx-auto lg:flex-row-reverse lg:py-20 ',
    infoWrapper: 'px-6 flex flex-col md:max-w-3xl lg:p-0',
    title: 'font-thin text-3xl text-center mb-6 lg:text-start lg:text-4xl',
    description: 'text-base text-gray-300 text-center mb-10 lg:text-start lg:text-lg',
    button: 'w-full md:max-w-sm md:mx-auto lg:mx-0',
  },
});

export default function FooterSection() {
  const { container, subcontainer, infoWrapper, title, description, button } = footerSection();

  return (
    <section className={container()}>
      <div className={subcontainer()}>
        <div className={infoWrapper()}>
          <h2 className={title()}>
            Acesse <b>relatórios exclusivos e recomendações</b> de
            <b> investimentos de forma gratuita</b>
          </h2>
          <p className={description()}>
            Tome decisões informadas, diversifique sua carteira e maximize seu potencial de ganho
            com os materiais exclusivos produzidos pela nossa equipe de Análise.
          </p>
          <Button label="Abra sua conta grátis" className={button()} />
        </div>
        <Image
          src={PhoneMockup}
          width={500}
          placeholder="blur"
          alt="Phone Mockup"
          className="object-cover"
        />
      </div>
    </section>
  );
}
