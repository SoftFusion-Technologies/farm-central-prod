import React from 'react';
import Skincare1 from '../../images/productos1.jpeg';
import Skincare2 from '../../images/productos2.jpg';
import Skincare3 from '../../images/productos3.jpeg';

function Prodskincare() {
  return (
    <div>
      <section
        className="flex flex-wrap justify-center pb-24 container mx-auto "
        data-aos="fade-down"
      >
        <div className="flex flex-col mb-5 px-4 w-full sm:w-1/2 md:w-1/3">
          <img
            src={Skincare1}
            alt="Ultra estructura crema de día"
            className="mb-5"
          />
          <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">
            Ultra Estructura Crema de Día
          </h3>
          <p className="text-lg text-black">
            Ultra Estructura Crema de Día está diseñada para revitalizar y
            proteger la piel a lo largo del día. Su fórmula avanzada hidrata
            profundamente mientras actúa como una barrera contra los factores
            ambientales. Con el uso continuo, mejora la elasticidad de la piel y
            reduce la apariencia de líneas finas y arrugas, gracias a su
            capacidad para estimular la producción de colágeno. Ideal para todo
            tipo de piel, esta crema proporciona un acabado suave y radiante,
            manteniendo la piel firme y protegida durante todo el día.
          </p>
        </div>

        <div className="flex flex-col mb-5 px-4 w-full sm:w-1/2 md:w-1/3">
          <img src={Skincare2} alt="Ultra hidratacion" className="mb-5" />
          <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">
            Ultra volumen
          </h3>
          <p>
            La Crema Facial Dermaglós Ultra volumen es una solución innovadora
            para mantener la piel hidratada y fresca. Su fórmula única ofrece
            una hidratación profunda durante 24 horas, combatiendo los primeros
            signos del envejecimiento gracias a su efecto antioxidante. Con una
            textura ultra liviana y de rápida absorción, es adecuada para todo
            tipo de piel, proporcionando un cuidado suave pero efectivo.
          </p>
        </div>

        <div className="flex flex-col mb-5 px-4 w-full sm:w-1/2 md:w-1/3">
          <img src={Skincare3} alt="Limpieza profunda" className="mb-5" />
          <h3 className="text-2xl text-darkcyan uppercase font-lora mb-4 text-center">
            Limpieza profunda
          </h3>
          <p>
            El Gel de Limpieza Profunda Aveno es un producto excepcional para
            quienes buscan una limpieza facial y corporal que sea a la vez suave
            y efectiva. Este gel está especialmente formulado para pieles
            sensibles y reactivas, incluso aquellas con tendencia atópica o
            deshidratadas.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Prodskincare;
