import React from 'react';

import Image from 'next/image';

import Stocks from '@/assets/icons/icn_stock.svg';
import FII from '@/assets/icons/icn_fii.svg';
import BDR from '@/assets/icons/icn_bdr.svg';
import ETF from '@/assets/icons/icn_etf.svg';

type CardBenefitsProps = {
  cardType: 'stock' | 'fii' | 'bdr' | 'etf';
};

export default function CardBenefits({ cardType }: CardBenefitsProps) {
  const cardsInfo = {
    stock: {
      img: Stocks,
      title: 'Ações',
      description:
        'Potencial de crescimento e valorização expressiva no longo prazo, assim como oportunidade de receber dividendos periódicos das empresas.',
    },
    fii: {
      img: FII,
      title: 'FIIs',
      description:
        'Ganhe renda passiva através de alugueis mensais, enquanto diversifica seus investimentos em imóveis sem a necessidade de comprar um imóvel físico.',
    },
    bdr: {
      img: BDR,
      title: 'BDRs',
      description:
        'Acesso a empresas globais sem precisar investir em ações no exterior, proporcionando ampla diversificação geográfica e setorial.',
    },
    etf: {
      img: ETF,
      title: 'ETFs',
      description:
        'Exposição simplificada a diferentes setores e índices de mercado, possibilitando diversificação instantânea em diversos ativos.',
    },
  };

  return (
    <div className="flex flex-col p-6 gap-2 border rounded-lg bg-white shadow-cardbenefit md:w-[45%] lg:w-full lg:max-w-sm">
      <Image src={cardsInfo[cardType].img} width={24} height={24} alt="Ações" />
      <h4 className="text-xl text-primary-200 font-bold">{cardsInfo[cardType].title}</h4>
      <p className="text-base text-gray-300 max-w-lg">{cardsInfo[cardType].description}</p>
    </div>
  );
}
