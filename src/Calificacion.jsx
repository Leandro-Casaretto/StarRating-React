import React, { useState } from 'react';
import './Calificacion.css';
import { FaStar } from 'react-icons/fa';

const Calificacion = () => {
  const numEstrellas = [1, 2, 3, 4, 5];
  const [rankingActual, setRankingActual] = useState(null);
  const [rankingHover, setRankingHover] = useState(null);

  const handleStarHover = (star) => {
    setRankingHover(star);
  };

  const handleStarClick = (star) => {
    setRankingActual(star);
  };

  return (
    <div className="divDevuelto">
      <article>
        <h1>Ejercicio Estrellas</h1>
      </article>
      <div className="estrellas">
        {numEstrellas.map((estrella) => {
        const activo = estrella <= (rankingHover || rankingActual);
        return (
          <span key={estrella} className="label-estrella">
            <FaStar
              size={70}
              className={estrella}
              color={activo ? 'yellow' : '#888888'}
              onMouseEnter={() => handleStarHover(estrella)}
              onMouseLeave={() => handleStarHover(0)}
              onClick={() => handleStarClick(estrella)}
            ></FaStar>
          </span>
        );
      })}
      </div>
      
      {rankingActual !== null && (
        <h2 className="comentario">Calificacion: {rankingActual} / 5</h2>
      )}
    </div>
  );
};

export default Calificacion;
