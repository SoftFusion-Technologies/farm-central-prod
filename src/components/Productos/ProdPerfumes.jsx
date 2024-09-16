import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import {
  boosNight,
  poloRojo,
  kingAzul,
  queenrosa,
  shakirap,
  hersecret,
  ImgNewPerf1,
  ImgNewPerf2,
  ImgNewPerf3,
  ImgNewPerf4,
  ImgNewPerf5,
  ImgNewPerf6,
  ImgNewPerf7,
  ImgNewPerf8,
  ImgNewPerf9,
  ImgNewPerf10,
  ImgNewPerf11,
  ImgNewPerf12
} from './prod.js';

function ProdOrtopedia() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      img: boosNight,
      title: 'Boos Intense Night',
      description:
        'Enérgica y sofisticada, perfecta para las noches llenas de intensidad y emoción. Notas cálidas y especiadas que capturan la esencia de la aventura nocturna.'
    },
    {
      id: 2,
      img: poloRojo,
      title: 'Weelington Polo Club',
      description:
        'Fresca y deportiva que refleja el espíritu competitivo y elegante del polo. Notas cítricas y amaderadas que evocan la brisa del campo de juego.'
    },
    {
      id: 3,
      img: kingAzul,
      title: 'King of seduction Absolute',
      description:
        'Poderosa y magnética, ideal para el hombre seguro de sí mismo. Notas de cítricos vibrantes y maderas nobles que seducen con elegancia.'
    },
    {
      id: 4,
      img: queenrosa,
      title: 'Queen of seduction lively muse',
      description:
        'Vibrante y femenina, diseñada para la mujer que inspira y deslumbra. Notas florales y frutales que capturan la esencia de la seducción.'
    },
    {
      id: 5,
      img: shakirap,
      title: 'Shakira Sweet Dreams',
      description:
        'Suave y acogedora, perfecta para soñar despierto. Notas dulces y florales que envuelven en un abrazo de ensueño.'
    },
    {
      id: 6,
      img: hersecret,
      title: 'HerSecret Temptation',
      description:
        'Misteriosa y tentadora, ideal para la mujer que guarda secretos seductores. Notas orientales y florales que hechizan y encantan.'
    },
    // Nuevos productos de perfumeria enviados por el cliente R1-16-09-24 - BenjaminOrellana-Inicio
    {
      id: 7,
      img: ImgNewPerf1,
      title: 'CARO CUORE Amore',
      description:
        'Romántico y apasionado, Amore captura el corazón con una mezcla dulce y envolvente. Notas de vainilla y flores exóticas que invitan a una experiencia inolvidable.'
    },
    {
      id: 8,
      img: ImgNewPerf2,
      title: 'CARO CUORE',
      description:
        'Elegancia y sofisticación en su máxima expresión. CARO CUORE combina delicadas notas florales con un toque amaderado, creando una fragancia que envuelve y cautiva a quien la lleva.'
    },
    {
      id: 9,
      img: ImgNewPerf3,
      title: 'BOSS Woman',
      description:
        'Empoderada y moderna, BOSS Woman es la fragancia para la mujer que lidera con confianza. Notas cítricas y florales se mezclan con un toque de sutiles maderas, reflejando su fuerza y feminidad.'
    },

    {
      id: 10,
      img: ImgNewPerf4,
      title: 'BOSS Woman Rose',
      description:
        'Sofisticada y delicada, BOSS Woman Rose captura la esencia de la feminidad moderna. Con suaves notas de rosa y toques frutales, esta fragancia es perfecta para quienes buscan elegancia con un aire de frescura.'
    },
    {
      id: 11,
      img: ImgNewPerf5,
      title: 'Acqua di Vertiente',
      description:
        'Refrescante y vibrante, Acqua di Vertiente evoca la serenidad del agua pura. Con notas marinas y cítricas, esta fragancia es ideal para quienes buscan una sensación de frescura y libertad.'
    },
    {
      id: 12,
      img: ImgNewPerf6,
      title: 'BOSS Woman',
      description:
        'Empoderada y moderna, BOSS Woman es la fragancia para la mujer que lidera con confianza. Notas cítricas y florales se mezclan con un toque de sutiles maderas, reflejando su fuerza y feminidad.'
    },
    {
      id: 13,
      img: ImgNewPerf7,
      title: 'Acqua di Vertiente Rosa',
      description:
        'Suave y refrescante, Acqua di Vertiente Rosa combina la frescura de las notas acuáticas con la delicadeza de las flores. Perfecta para quienes buscan una fragancia ligera y femenina con un toque de vitalidad.'
    },
    {
      id: 14,
      img: ImgNewPerf8,
      title: 'Acqua di Vertiente Verde',
      description:
        'Un tributo a la naturaleza en su forma más pura, Acqua di Vertiente Verde combina la delicadeza de los jazmines de Provenza, el frescor del muguet y la riqueza de las gardenias. Esta fragancia floral y verde evoca paisajes tranquilos y exóticos, creando una experiencia refrescante y envolvente.'
    },
    {
      id: 15,
      img: ImgNewPerf9,
      title: 'Prune Moi',
      description:
        'Elegante y misterioso, Prune Moi es una fragancia que envuelve los sentidos con su seductora mezcla de notas afrutadas y florales. Perfecta para quienes buscan una esencia única que refleje sofisticación y encanto.'
    },
    {
      id: 16,
      img: ImgNewPerf10,
      title: 'Acqua di Vertiente Flores de Oriente',
      description:
        'Un viaje sensorial a través de un jardín oriental en plena floración. Acqua di Vertiente Flores de Oriente combina la intensidad de las flores exóticas con matices frescos y acuáticos, creando una fragancia que es a la vez elegante y envolvente.'
    },
    {
      id: 17,
      img: ImgNewPerf11,
      title: 'Wanama Sexi Spice',
      description:
        'Audaz y vibrante, Wanama Sexi Spice es una fragancia que combina especias intensas con un toque seductor. Sus notas cálidas y picantes crean una experiencia olfativa irresistible, perfecta para quienes buscan destacar con confianza y estilo.'
    },
    {
      id: 18,
      img: ImgNewPerf12,
      title: 'Wanama Floral Bloom',
      description:
        'Fresca y femenina, Wanama Floral Bloom captura la esencia de un jardín en plena floración. Con notas de flores delicadas y un toque de frutas frescas, esta fragancia evoca una sensación de elegancia natural y vitalidad.'
    }
  ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="bg-gray-100 py-12 font-lora">
      <section className="flex flex-wrap justify-center container mx-auto">
        <AnimatePresence>
          {displayedProducts.map(product => (
            <motion.div
              key={product.id}
              className="flex flex-col mb-8 px-4 w-full sm:w-1/2 md:w-1/3"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-5 h-48 overflow-hidden flex items-center justify-center">
                  <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
                </div>
                <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{product.title}</h3>
                <p className="text-lg text-black mb-4 flex-grow">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-darkcyan text-white py-2 px-4 rounded-full hover:bg-cyan-700 transition-colors duration-300"
        >
          {showAll ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
}

export default ProdOrtopedia;
