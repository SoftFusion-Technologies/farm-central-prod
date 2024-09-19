import React, { useState } from 'react';
import {
  gelLimpieza,
  niveaHidra,
  shampoohead,
  desodorante,
  serumAmarillo,
  serumRojo,
  serumVerde,
  garnierAguaMicelarAcido,
  garnierMicelarVitamina,
  garnierHidratanteFps,
  neutrogenaAcido,
  neutrogenaExfolianteAcne,
  neutrogenaHydro,
  lorealAcidoGel,
  lorealAcidoOjos,
  lorealSerumOjos,
  lorealSerumRelleno,
  dermaglosAzul,
  dermaglosMorado,
  dermaglosRojo,
  dermaglosMarron,
  garnierHidratanteSerum,
  lorealLimpieza,
  dermaglosLeche,
  dermaglosSerum,
  dermaglosSerumC,
  dermaglosSerumA,
  dermaglosFacialHidra,
  dermaglosFacialAgua,
  dermaglosFacialNoche,
  dermaglosFacialDia,
  dermaglosFacialDesmaquilla,
  dermaglosFacialNutre,
  dermaglosFacialNormal,
  dermaglosFacialGrasa,
  dermaglosFacialFPS,
  dermaglosHombrehidra,
  dermaglosHombreLimp,
  dermaglosCorpHidra,
  dermaglosCorpSeca,
  dermaglosCorpSpray,
  dermaglosCorplHidraProf,
  dermaglosManosUltrahidra,
  dermaglosManosHidraEsencial,
  dermaglosManosHidraRege,
  elviveGloss,
  Cicatricure1,
  Cicatricure2,
  Cicatricure3,
  Cicatricure4,
  Cicatricure5,
  Cremas1,
  Cremas2,
  Cremas3,
  Cerave1,
  Cerave2,
  Cerave3,
  Cerave4,
  Cerave5,
  Caviahue1,
  Caviahue2,
  Caviahue3,
  Caviahue4,
  Caviahue5,
  Caviahue6,
  Eucerin1,
  Eucerin2,
  Eucerin3,
  Eucerin4,
  Eucerin5,
  Eucerin6,
  Eucerin7,
  Eucerin8,
  Eucerin9,
  Eucerin10,
  Eucerin11
} from './prod.js';
import ProductCarousel from './ProdCarrousel.jsx';

function ProdCuidPerson() {
  const [showAll, setShowAll] = useState(false);

  const niveaSerums = [
    { img: serumAmarillo, title: 'Amarillo', description: 'Reduce y previene manchas causadas por el sol, envejecimiento y factores hormonales. Unifica el tono, aporta luminosidad, previene el envejecimiento. Contiene ácido hialurónico.' },
    { img: serumRojo, title: 'Rojo (Antiedad)', description: 'Aumenta la producción de colágeno, ayuda a rellenar arrugas profundas.' },
    { img: serumVerde, title: 'Verde (Marcas Post Acné)', description: 'Fórmula refrescante, textura ligera en gel, efecto matificante. Enriquecido con ácido hialurónico, ácido salicílico y extracto de té verde.' },
  ];

  const garnierMicelar = [
    { img: garnierAguaMicelarAcido, title: 'Con Ácido Salicílico', description: 'Limpia la piel, remueve el maquillaje y las bacterias que causan el acné y los puntos negros.' },
    { img: garnierMicelarVitamina, title: 'Con Vitamina C', description: 'Enriquecida con vitamina C para potenciar la luminosidad de tu piel: limpia, desmaquilla y unifica el tono de la piel.' },
  ];

  const garnierHidra = [
    { img: garnierHidratanteFps, title: 'Hidratante Tono Uniforme FPS 30', description: 'Textura ligera con protección FPS30. Esta crema hidrata, protege y unifica el tono de la piel en 7 días.' },
    { img: garnierHidratanteSerum, title: 'Hidratante Serum Gel', description: 'Gel hidratante con textura en aqua ULTRA LIGERA. Hidrata el rostro hasta por 48 horas y controla el brillo resultando en una piel sin sensación grasosa.' },
  ];

  const neutrogena = [
    { img: neutrogenaAcido, title: 'Limpieza en Gel', description: 'Ofrece una limpieza profunda dejando la piel purificada y visiblemente menos grasa durante todo el día, eliminando impurezas y manteniendo su equilibrio natural sin dejar sensación de sequedad.' },
    { img: gelLimpieza, title: 'Exfoliante', description: 'Remueve las impurezas y grasitud de la piel dejando una sensación refrescante. Con sus microesferas revitalizantes, produce una suave espuma que elimina las impurezas de la superficie de la piel.' },
    { img: neutrogenaExfolianteAcne, title: 'Contra el Acné', description: 'Exfoliante facial para pieles con tendencia acneica. El exfoliante antiacné Neutrogena ayuda en el tratamiento del acné mientras desobstruye los poros, reduce los puntos negros y las espinillas.' },
  ];

  const loreal = [
    { img: lorealAcidoGel, title: 'Gel con Ácido Hialurónico', description: 'Gel facial con ácido hialurónico para una hidratación profunda y una piel más suave y tersa.' },
    { img: lorealAcidoOjos, title: 'Serum para Ojos', description: 'Serum para ojos con ácido hialurónico que reduce las arrugas y ojeras, dejando una mirada más fresca y descansada.' },
    { img: lorealLimpieza, title: 'Gel de Limpieza', description: 'Gel limpiador facial que elimina las impurezas y refresca la piel, ideal para el uso diario.' },
    { img: lorealSerumOjos, title: 'Serum Contorno de Ojos', description: 'Serum para el contorno de ojos que hidrata y reduce las líneas de expresión.' },
    { img: lorealSerumRelleno, title: 'Serum Rellenador', description: 'Serum rellenador con ácido hialurónico que hidrata y rellena las arrugas desde el interior.' },
  ];

  const dermaglosUltra = [
    { img: dermaglosAzul, title: 'Celeste +30 años', description: 'Crema facial antiarrugas para mujeres de más de 30 años, hidrata y protege la piel.' },
    { img: dermaglosMorado, title: 'Morada +40 años', description: 'Crema facial antiarrugas para mujeres de más de 40 años, reafirma y revitaliza la piel.' },
    { img: dermaglosRojo, title: 'Roja +50 años', description: 'Crema facial antiarrugas para mujeres de más de 50 años, nutre y regenera la piel.' },
    { img: dermaglosMarron, title: 'Marrón +60 años', description: 'Crema facial antiarrugas para mujeres de más de 60 años, fortalece y rejuvenece la piel.' },
  ];

  const dermaglosSerumCont = [
    { img: dermaglosSerum, title: 'Niacinamida', description: 'Serum con niacinamida que ayuda a reducir la inflamación y el enrojecimiento, mejora la textura de la piel y minimiza los poros.' },
    { img: dermaglosSerumC, title: 'Vitamina C', description: 'Serum con vitamina C que aporta luminosidad, unifica el tono de la piel y combate los signos del envejecimiento.' },
    { img: dermaglosSerumA, title: 'Ácido Hialurónico', description: 'Serum con ácido hialurónico que hidrata profundamente, mejora la elasticidad y rellena las líneas finas.' },
  ];

  const dermaglosFacial = [
    { img: dermaglosFacialHidra, title: 'Tónico Hidratante Descongestivo', description: 'Tónico que hidrata y descongestiona la piel, proporcionando una sensación de frescura.' },
    { img: dermaglosLeche, title: 'Leche de Limpieza Activa', description: 'Elimina en profundidad el maquillaje y las impurezas diarias permitiendo a la piel respirar libremente sin dejar sensación de grasitud.' },
    { img: dermaglosFacialAgua, title: 'Agua Micelar 6 en 1', description: 'Limpia, desmaquilla, tonifica, refresca, suaviza y equilibra la piel.' },
    { img: dermaglosFacialNoche, title: 'Crema Nutritiva de Noche', description: 'Crema que nutre y regenera la piel durante la noche, dejándola suave y revitalizada.' },
    { img: dermaglosFacialDia, title: 'Emulsión Hidratante de Día', description: 'Hidratante ligera que proporciona una hidratación duradera y protege la piel durante el día.' },
    { img: dermaglosFacialDesmaquilla, title: 'Desmaquillante Bifaz para Ojos y Labios', description: 'Remueve el maquillaje a prueba de agua, sin residuo graso, sin alcohol. Todo tipo de piel.' },
    { img: dermaglosFacialNutre, title: 'Crema Nutritiva de Noche para Pieles Secas y Muy Secas', description: 'Crema que nutre intensamente las pieles secas y muy secas durante la noche.' },
    { img: dermaglosFacialNormal, title: 'Gel de Limpieza Pieles Normales', description: 'Limpia en profundidad, elimina impurezas, mantiene la piel suave e hidratada.' },
    { img: dermaglosFacialGrasa, title: 'Gel de Limpieza Pieles Grasas', description: 'Gel que elimina el exceso de grasa y las impurezas, dejando la piel limpia y fresca.' },
    { img: dermaglosFacialFPS, title: 'Crema Protectora FPS 30', description: 'Crema hidratante matificante, hidrata sin efecto graso, previene la aparición de manchas, protege de las agresiones ambientales. Pieles mixtas a grasas.' },
  ];

  const dermaglosHombres = [
    { img: dermaglosHombrehidra, title: 'Crema Gel Hidratante + After Shave', description: 'Hidrata la piel y calma la irritación causada por el afeitado, dejando una sensación de frescura.' },
    { img: dermaglosHombreLimp, title: 'Gel de Limpieza', description: 'Gel que limpia en profundidad la piel masculina, eliminando impurezas y el exceso de grasa.' },
  ];

  const dermaglosCorp = [
    { img: dermaglosCorpHidra, title: 'Leche Corporal Hidratación Intensa para Piel Seca', description: 'Leche corporal que proporciona una hidratación intensa para pieles secas.' },
    { img: dermaglosCorpSeca, title: 'Leche Corporal Hidratación para Piel Extra Seca y Sensible', description: 'Leche corporal que hidrata y calma las pieles extra secas y sensibles.' },
    { img: dermaglosCorpSpray, title: 'Spray Corporal Hidratante', description: 'Spray hidratante que proporciona una hidratación inmediata y duradera.' },
    { img: dermaglosCorplHidraProf, title: 'Leche Corporal Hidratación Profunda para Piel Muy Seca', description: 'Leche corporal que hidrata profundamente las pieles muy secas.' },
  ];

  const dermaglosManos = [
    { img: dermaglosManosUltrahidra, title: 'Ultrahidratante para Manos', description: 'Crema ultrahidratante que nutre y protege las manos secas.' },
    { img: dermaglosManosHidraEsencial, title: 'Hidratación Esencial para Manos', description: 'Crema hidratante que suaviza y protege las manos.' },
    { img: dermaglosManosHidraRege, title: 'Hidratación Regeneradora para Manos', description: 'Crema regeneradora que hidrata y rejuvenece las manos.' },
  ];


  const products = [
    {
      id: 1,
      img: niveaHidra,
      title: 'Nivea Hidratación Express',
      description:
        'Proporciona una hidratación intensa y duradera, dejando la piel del cuerpo suave y tersa al instante. Su fórmula ligera y de rápida absorción es perfecta para el uso diario.'
    },
    {
      id: 2,
      img: shampoohead,
      title: 'Head & Shoulders Limpieza Renovadora',
      description:
        'Diseñado para eliminar la caspa y proporcionar una limpieza profunda al cuero cabelludo. Su fórmula refrescante deja el cabello limpio y con una sensación de frescura duradera.'
    },
    {
      id: 3,
      img: desodorante,
      title: 'Rexona Invisible 72 hr',
      description:
        'Protección duradera contra el sudor y el mal olor durante 72 horas. Su fórmula anti manchas blancas y amarillas protege la ropa, manteniéndote fresco y seco todo el día.'
    },
    {
      id: 4,
      img: neutrogenaHydro,
      title: 'Neutrogena HydroBoost',
      description:
        'Alto poder antioxidante, textura ultra liviana contiene ácido hialurónico, vitamina C y protección solar FPS 25.'
    },
    {
      id: 5,
      component: (
        <ProductCarousel
          title="Nivea Serums Antimanchas"
          products={niveaSerums}
        />
      )
    },
    {
      id: 6,
      component: (
        <ProductCarousel
          title="Garnier Agua Micelar"
          products={garnierMicelar}
        />
      )
    },
    {
      id: 7,
      component: (
        <ProductCarousel
          title="Garnier Express Aclara Anti Manchas"
          products={garnierHidra}
        />
      )
    },
    {
      id: 8,
      component: (
        <ProductCarousel title="Neutrogena Exfoliantes" products={neutrogena} />
      )
    },
    { id: 9, component: <ProductCarousel title="L'Oréal" products={loreal} /> },
    {
      id: 10,
      component: (
        <ProductCarousel title="Dermaglós Ultra" products={dermaglosUltra} />
      )
    },
    {
      id: 11,
      component: (
        <ProductCarousel
          title="Dermaglós Serum"
          products={dermaglosSerumCont}
        />
      )
    },
    {
      id: 12,
      component: (
        <ProductCarousel title="Dermaglós Facial" products={dermaglosFacial} />
      )
    },
    {
      id: 13,
      component: (
        <ProductCarousel
          title="Dermaglós Hombres"
          products={dermaglosHombres}
        />
      )
    },
    {
      id: 14,
      component: (
        <ProductCarousel title="Dermaglós Corporal" products={dermaglosCorp} />
      )
    },
    {
      id: 15,
      component: (
        <ProductCarousel title="Dermaglós Manos" products={dermaglosManos} />
      )
    },
    {
      id: 16,
      img: elviveGloss,
      title: 'Elvive Glycolic Gloss',
      description:
        'Combina shampoo, acondicionador, crema para peinar y tratamiento intensivo para hidratar profundamente el cabello, dejándolo suave, brillante y libre de frizz.'
    },
    {
      id: 17,
      img: Cicatricure1,
      title: 'Cicatricure Gel Cicatrices',
      description:
        'Diseñado para mejorar la apariencia de cicatrices y marcas en la piel, Cicatricure Gel Cicatrices ayuda a suavizar y atenuar irregularidades. Su fórmula avanzada promueve la regeneración celular, dejándote con una piel más uniforme y suave.'
    },
    {
      id: 18,
      img: Cicatricure2,
      title: 'Cicatricure Antiedad - 40% OFF',
      description:
        'Revitaliza y rejuvenece tu piel con Cicatricure Antiedad. Este potente tratamiento combate los signos del envejecimiento, reduciendo arrugas y líneas finas. Aprovecha ahora el 40% de descuento para lucir una piel más firme y radiante.'
    },

    {
      id: 19,
      img: Cicatricure3,
      title: 'Cicatricure Age Care',
      description:
        'Cicatricure Age Care es tu aliado ideal para combatir los signos visibles del envejecimiento. Su fórmula avanzada está diseñada para mejorar la firmeza y elasticidad de la piel, reduciendo arrugas y líneas finas, mientras aporta una hidratación profunda para un aspecto más juvenil y radiante.'
    },
    {
      id: 20,
      img: Cicatricure4,
      title: 'Cicatricure Antimancha SERUM Aclarante Vit C',
      description:
        'Cicatricure Antimancha Serum Aclarante con Vitamina C es un tratamiento especializado para reducir manchas y unificar el tono de la piel. Su fórmula rica en vitamina C ayuda a iluminar y aclarar la piel, proporcionando un aspecto más uniforme y radiante. Ideal para combatir manchas y signos de pigmentación.'
    },
    {
      id: 21,
      img: Cicatricure5,
      title: 'Cicatricure Antimancha Crema de Día',
      description:
        'Cicatricure Antimancha Crema de Día está formulada para combatir y reducir las manchas oscuras mientras hidrata tu piel durante todo el día. Su combinación de ingredientes activos trabaja para unificar el tono y proporcionar una piel más clara y luminosa, protegiendo contra el daño ambiental y promoviendo una apariencia radiante y juvenil.'
    },
    {
      id: 22,
      img: Cremas1,
      title: 'Dermaglos Solar Crema Color',
      description:
        'Dermaglos Solar Crema Color combina protección solar con un toque de color, ofreciendo una defensa completa contra los daños del sol mientras unifica y mejora el tono de tu piel. Su fórmula avanzada no solo protege contra los rayos UVA y UVB, sino que también proporciona una cobertura ligera y natural para un aspecto radiante y uniforme.'
    },
    {
      id: 23,
      img: Cremas2,
      title: 'Nivea Sun Protect & Bronze',
      description:
        'Nivea Sun Protect & Bronze ofrece una protección solar eficaz mientras ayuda a potenciar el bronceado natural de tu piel. Su fórmula innovadora proporciona una alta protección contra los rayos UVA y UVB, mientras estimula la producción de melanina para un bronceado más dorado y uniforme. Ideal para quienes buscan proteger su piel y lograr un tono bronceado radiante.'
    },
    {
      id: 24,
      img: Cremas3,
      title: 'Nivea Sun Kids Protect & Play',
      description:
        'Nivea Sun Kids Protect & Play está especialmente formulado para la piel delicada de los niños. Ofrece una alta protección contra los rayos UVA y UVB, y es resistente al agua, ideal para actividades al aire libre y juegos. Su fórmula suave y dermatológicamente probada previene irritaciones y proporciona una protección eficaz para mantener a los pequeños seguros mientras disfrutan del sol.'
    },
    {
      id: 25,
      img: Cerave1,
      title: 'CeraVe Crema Hidratante',
      description:
        'CeraVe Crema Hidratante proporciona una hidratación profunda y duradera para la piel seca y sensible. Enriquecida con ceramidas esenciales y ácido hialurónico, ayuda a restaurar y mantener la barrera natural de la piel mientras proporciona una hidratación intensiva. Su fórmula sin fragancia y no comedogénica es adecuada para el uso diario y para todo tipo de piel.'
    },
    {
      id: 26,
      img: Cerave2,
      title: 'CeraVe Loción Hidratante',
      description:
        'CeraVe Loción Hidratante ofrece una hidratación ligera pero eficaz para la piel normal a seca. Formulada con ceramidas esenciales y ácido hialurónico, esta loción ayuda a restaurar y mantener la barrera protectora de la piel mientras proporciona una hidratación duradera. Su textura no grasa se absorbe rápidamente, dejando la piel suave y flexible.'
    },
    {
      id: 27,
      img: Cerave3,
      title: 'CeraVe Limpiadora Hidratante',
      description:
        'CeraVe Limpiadora Hidratante limpia suavemente la piel mientras preserva su hidratación natural. Formulada con ceramidas esenciales y ácido hialurónico, esta limpiadora elimina impurezas sin despojar la piel de sus aceites naturales. Ideal para pieles secas y sensibles, deja la piel limpia, suave y nutrida, preparándola para los siguientes pasos de tu rutina de cuidado.'
    },
    {
      id: 28,
      img: Cerave4,
      title: 'CeraVe Loción Hidratante para Rostro',
      description:
        'CeraVe Loción Hidratante para Rostro está diseñada para proporcionar una hidratación ligera y duradera, ideal para el cuidado diario del rostro. Enriquecida con ceramidas esenciales y ácido hialurónico, esta loción ayuda a restaurar y mantener la barrera protectora de la piel mientras asegura una hidratación sin sensación grasosa. Perfecta para pieles normales a secas, deja el rostro suave, radiante y equilibrado.'
    },
    {
      id: 29,
      img: Cerave5,
      title: 'CeraVe Gel Limpiador Espumoso',
      description:
        'CeraVe Gel Limpiador Espumoso ofrece una limpieza profunda y efectiva con una textura ligera y espumosa. Formulado con ceramidas esenciales y ácido hialurónico, este gel limpia las impurezas y el exceso de grasa sin despojar la piel de su hidratación natural. Ideal para pieles normales a grasas, deja la piel fresca, equilibrada y perfectamente limpia.'
    },
    {
      id: 30,
      img: Caviahue1,
      title: 'Caviahue Serum Ultra Hydra B5',
      description:
        'Caviahue Serum Ultra Hydra B5 proporciona una hidratación intensa y duradera con su fórmula concentrada de vitamina B5 y ácido hialurónico. Este suero mejora la elasticidad y firmeza de la piel, mientras ayuda a reducir la apariencia de líneas finas y sequedad. Ideal para pieles deshidratadas, deja la piel suave, radiante y visiblemente revitalizada.'
    },
    {
      id: 31,
      img: Caviahue2,
      title: 'Caviahue Contorno de Ojos',
      description:
        'Caviahue Contorno de Ojos está formulado para tratar y revitalizar la delicada piel alrededor de los ojos. Con ingredientes activos como ácido hialurónico y extractos botánicos, este contorno de ojos ayuda a reducir la apariencia de ojeras, hinchazón y líneas finas. Su fórmula ligera y refrescante mejora la elasticidad y luminosidad de la zona, proporcionando un aspecto más descansado y rejuvenecido.'
    },
    {
      id: 32,
      img: Caviahue3,
      title: 'Caviahue Crema Facial Humectante',
      description:
        'Caviahue Crema Facial Humectante ofrece una hidratación profunda y duradera para todo tipo de piel. Enriquecida con ingredientes activos como ácido hialurónico y extractos naturales, esta crema ayuda a mantener la piel suave, flexible y equilibrada. Su fórmula ligera se absorbe fácilmente, proporcionando una barrera protectora que combate la sequedad y mejora la apariencia general de la piel.'
    },
    {
      id: 33,
      img: Caviahue4,
      title: 'Caviahue Crema Antiage',
      description:
        'Caviahue Crema Antiage está formulada para combatir los signos visibles del envejecimiento, ofreciendo una acción rejuvenecedora y regeneradora. Su fórmula avanzada, enriquecida con ingredientes como ácido hialurónico y extractos de plantas, ayuda a reducir arrugas, mejorar la elasticidad y firmar la piel. Ideal para el uso diario, proporciona una hidratación intensa y promueve un aspecto más joven y radiante.'
    },
    {
      id: 34,
      img: Caviahue5,
      title: 'Caviahue Gel Hidratante Facial',
      description:
        'Caviahue Gel Hidratante Facial proporciona una hidratación ligera y refrescante para la piel del rostro. Formulado con ácido hialurónico y extractos botánicos, este gel ayuda a mantener la piel suave y equilibrada sin dejar una sensación grasosa. Ideal para todo tipo de piel, especialmente para pieles mixtas y grasas, su fórmula se absorbe rápidamente y deja la piel con un acabado fresco y revitalizado.'
    },
    {
      id: 35,
      img: Caviahue6,
      title: 'Caviahue Mineral Face',
      description:
        'Caviahue Mineral Face está formulado con minerales esenciales para proporcionar una protección y cuidado óptimos para la piel del rostro. Su composición única ayuda a revitalizar la piel, proporcionando hidratación y mejorando la textura mientras defiende contra las agresiones externas. Ideal para todo tipo de piel, este producto aporta un toque de frescura y luminosidad, dejando el rostro con una apariencia saludable y equilibrada.'
    },
    {
      id: 36,
      img: Eucerin1,
      title: 'L’Oréal Paris Serum Invisible',
      description:
        'L’Oréal Paris Serum Invisible es un protector solar innovador que ofrece una protección de amplio espectro sin dejar residuos visibles en la piel. Su fórmula ligera se absorbe rápidamente, proporcionando una barrera eficaz contra los rayos UVA y UVB, mientras hidrata y mejora la textura de la piel. Ideal para todo tipo de piel, su acabado invisible lo convierte en la opción perfecta para usar debajo del maquillaje o como parte de tu rutina diaria, dejando la piel suave, protegida y radiante.'
    },
    {
      id: 37,
      img: Eucerin2,
      title: 'Eucerin Protector Solar Hydro Fluid',
      description:
        'Eucerin Protector Solar Hydro Fluid ofrece una protección avanzada contra los daños del sol con una textura fluida y ligera. Su fórmula hidratante combina protección de amplio espectro contra los rayos UVA y UVB con un acabado no graso, ideal para pieles normales a mixtas. Su tecnología hidratante y su capacidad de absorción rápida proporcionan una piel protegida y fresca, manteniendo la hidratación durante todo el día.'
    },
    {
      id: 38,
      img: Eucerin3,
      title: 'La Roche-Posay Protector Solar',
      description:
        'La Roche-Posay Protector Solar Fluido Control ofrece una protección avanzada contra los daños solares con una fórmula ligera y no comedogénica. Diseñado para pieles grasas y con tendencia a imperfecciones, controla el exceso de sebo y proporciona un acabado mate sin dejar sensación grasa. Su tecnología de protección de amplio espectro contra rayos UVA y UVB, junto con su fórmula calmante y antioxidante, ayuda a proteger y mantener la piel equilibrada y protegida durante todo el día.'
    },
    {
      id: 39,
      img: Eucerin4,
      title: 'Eucerin Protector Solar Oil Control',
      description:
        'Eucerin Protector Solar Oil Control está especialmente formulado para controlar el exceso de grasa y proporcionar una protección solar efectiva. Su fórmula ligera y libre de aceite ayuda a reducir el brillo y mantener un acabado mate durante todo el día. Ofrece protección de amplio espectro contra los rayos UVA y UVB, ideal para pieles mixtas a grasas y propensas a imperfecciones. Perfecto para mantener la piel protegida y equilibrada, mientras controla el exceso de sebo.'
    },
    {
      id: 40,
      img: Eucerin5,
      title: 'La Roche-Posay Anthelios Age',
      description:
        'La Roche-Posay Anthelios Age combina protección solar avanzada con cuidado antienvejecimiento. Su fórmula enriquecida con ingredientes anti-edad ayuda a reducir la apariencia de arrugas y manchas, mientras proporciona una protección de amplio espectro contra los daños solares. Su textura ligera y no grasa se absorbe fácilmente, dejándote con una piel suave, protegida y visiblemente más joven. Ideal para el uso diario en pieles maduras que buscan una protección eficaz y beneficios adicionales contra el envejecimiento.'
    },
    {
      id: 41,
      img: Eucerin6,
      title: 'La Roche-Posay Anthelios UV Mune 400',
      description:
        'La Roche-Posay Anthelios UV Mune 400 ofrece una protección avanzada contra los daños del sol con su innovadora tecnología UV Mune 400, que proporciona una barrera efectiva contra los rayos UVA más largos y dañinos. Su fórmula ligera y de rápida absorción previene el envejecimiento prematuro de la piel y protege contra la aparición de manchas. Ideal para pieles sensibles y expuestas a condiciones extremas, garantiza una protección superior y duradera para una piel radiante y saludable.'
    },
    {
      id: 42,
      img: Eucerin7,
      title: 'Eucerin Protector Solar Oil Control Tinted',
      description:
        'Eucerin Protector Solar Oil Control Tinted combina protección solar avanzada con un toque de color para unificar el tono de la piel. Su fórmula de control de aceite proporciona un acabado mate y reduce el brillo, ideal para pieles grasas y propensas a imperfecciones. Enriquecido con pigmentos minerales, ayuda a ocultar imperfecciones y proporciona una cobertura ligera. Ofrece protección de amplio espectro contra los rayos UVA y UVB, manteniendo la piel protegida y con un aspecto radiante durante todo el día.'
    },
    {
      id: 43,
      img: Eucerin8,
      title: 'La Roche-Posay Anthelios Fluido Oil Control',
      description:
        'La Roche-Posay Anthelios Fluido Oil Control ofrece una protección solar de amplio espectro con una fórmula específica para pieles grasas y propensas a imperfecciones. Su textura fluida y ligera se absorbe rápidamente, proporcionando un acabado mate y controlando el exceso de grasa. Ideal para el uso diario, protege contra los rayos UVA y UVB mientras reduce el brillo y mantiene la piel fresca y equilibrada. Perfecto para pieles que buscan una protección eficaz sin comprometer el control del sebo.'
    },
    {
      id: 44,
      img: Eucerin9,
      title: 'La Roche-Posay Anthelios Fluido con Color',
      description:
        'La Roche-Posay Anthelios Fluido con Color combina una protección solar avanzada con una cobertura de tono que unifica y embellece la piel. Su fórmula ligera y de rápida absorción protege contra los rayos UVA y UVB mientras proporciona un acabado suave y natural. Ideal para pieles sensibles, ayuda a disimular imperfecciones y proporciona una apariencia uniforme y radiante. Perfecto para el uso diario, ofrece una protección efectiva y una mejora estética en un solo paso.'
    },
    {
      id: 45,
      img: Eucerin10,
      title: 'La Roche-Posay Gel-Crema Oil Control',
      description:
        'La Roche-Posay Anthelios UV Mune 400 Gel-Crema Oil Control ofrece una protección solar superior con su innovadora tecnología UV Mune 400, que proporciona una defensa eficaz contra los rayos UVA más intensos. Su fórmula gel-crema con control de aceite está diseñada para pieles grasas y propensas a imperfecciones, proporcionando un acabado mate y una sensación de frescura durante todo el día. Ideal para el uso diario, combina una protección avanzada con control del brillo, garantizando una piel protegida, equilibrada y radiante.'
    }
    // {
    //   id: 46,
    //   img: Eucerin11,
    //   title: 'Eucerin Oil Control Anti-Brillo',
    //   description:
    //     'Eucerin Oil Control Anti-Brillo está formulado para combatir el exceso de grasa y el brillo en la piel, ofreciendo un control efectivo durante todo el día. Su fórmula ligera y de rápida absorción ayuda a reducir el brillo y mantener un acabado mate, ideal para pieles mixtas a grasas. Además de controlar el sebo, proporciona una protección solar eficaz contra los daños de los rayos UVA y UVB, ayudando a prevenir imperfecciones y mantener la piel equilibrada y fresca.'
    // }
  ];

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="bg-gray-100 py-12 font-lora">
      <section className="flex flex-wrap justify-center container mx-auto">
        {displayedProducts.map(product => (
          <div key={product.id} className="flex flex-col mb-8 px-4 w-full sm:w-1/2 md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg flex flex-col h-full p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              {product.component ? (
                product.component
              ) : (
                <>
                <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">{product.title}</h3>
                  <div className="mb-5 h-48 overflow-hidden flex items-center justify-center">
                    <img src={product.img} alt={product.title} className="w-full h-full object-contain"/>
                  </div>
                  
                  <p className="text-lg text-black mb-4 flex-grow">{product.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-darkcyan text-white py-2 px-4 rounded-full hover:bg-cyan-700 transition-colors duration-300 h-12"
        >
          {showAll ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
}

export default ProdCuidPerson;
