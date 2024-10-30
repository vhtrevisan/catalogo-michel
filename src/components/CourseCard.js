import React, { useState } from 'react';
import './CourseCard.css';

function CourseCard({ course }) {
  const [showModal, setShowModal] = useState(false);

  const handleEnroll = () => {
    const message = `Olá, gostaria de mais informações sobre o curso: ${course.title}.`;
    window.open(`https://wa.me/5515997067367?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <button onClick={() => setShowModal(true)}>Ver Descrição</button>
      <button onClick={handleEnroll} className="enroll-button">Inscrever-se</button>
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;
