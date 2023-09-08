import React from 'react';

import Image from 'next/image';

import Button from '@/resources/Button';

import SantanderLogo from '@/assets/images/santander_logo.svg';
import ToroVsIbovMobile from '@/assets/images/toro_vs_ibov_mobile.svg';
import ToroVsIbovDesktop from '@/assets/images/toro_vs_ibov_desktop.svg';

export default function HeroSection() {
  return (
    <section className="flex flex-col my-10 mx-auto px-5 max-w-md lg:flex-row lg:justify-between lg:max-w-6xl lg:my-20 lg:gap-5 6xl:px-0">
      <div className="mb-10 lg:max-w-md">
        <h1 className="text-4xl text-primary-300 font-bold">
          Aumente seu potencial de ganho com quem vence na Bolsa há anos
        </h1>
        <ul className="text-base text-gray-300 list-disc pl-7 mt-6 mb-10">
          <li>Acessoria exclusiva gratuita.</li>
          <li>Recomendações de investimentos por experts.</li>
          <li>Corretagem zero.</li>
        </ul>
        <Button label="Abra sua conta grátis" className="w-full mb-6 lg:w-3/4" />
        <section className="flex gap-4">
          <span>Uma empresa</span>
          <Image src={SantanderLogo} width={0} height={0} alt="Santander Logo" className="h-full" />
        </section>
      </div>

      <div>
        <Image
          src={ToroVsIbovMobile}
          width={0}
          height={0}
          alt="Toro One vs Ibov"
          className="w-full sm:hidden"
        />
        <Image
          src={ToroVsIbovDesktop}
          width={555}
          height={344}
          alt="Toro One vs Ibov"
          className="hidden sm:block"
        />
      </div>
    </section>
  );
}
