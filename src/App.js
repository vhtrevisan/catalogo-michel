// src/App.js
import React, { useState } from 'react';
import CourseCard from './components/CourseCard';
import './App.css';
import './index';

function App() {
  const courses = [
    { id: 1, title: "Curso de JavaScript", description: "Aprenda JavaScript do básico ao avançado." },
    { id: 2, title: "Curso de React", description: "Construa interfaces de usuário incríveis com React." },
    { id: 3, title: "Curso de Node.js", description: "Desenvolva aplicações back-end com Node.js." },
    { id: 4, title: "Curso de Python", description: "Explore a programação com Python." },
    { id: 5, title: "Curso de HTML e CSS", description: "Fundamentos do desenvolvimento web." },
    { id: 6, title: "Curso de Design Gráfico", description: "Crie designs impressionantes." },
    { id: 7, title: "Curso de Marketing Digital", description: "Domine as estratégias de marketing online." },
    { id: 8, title: "Curso de Fotografia", description: "Aprenda a capturar momentos incríveis." },
    { id: 9, title: "Curso de UX/UI", description: "Desenvolva habilidades em design de experiência do usuário." },
    { id: 10, title: "Curso de Análise de Dados", description: "Aprenda a analisar e interpretar dados." },
    { id: 11, title: "Curso de Segurança da Informação", description: "Entenda os princípios da segurança digital." },
    { id: 12, title: "Curso de Desenvolvimento de Jogos", description: "Crie e desenvolva seus próprios jogos." },
    // Continue adicionando cursos conforme necessário
  ];

  const [visibleCourses, setVisibleCourses] = useState(10);

  const loadMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 10);
  };

  return (
    <div className="App">
      <header>
        <img src="https://media.discordapp.net/attachments/1270824500023267524/1300976567966503014/logo-anhanguera.png?ex=6722cc58&is=67217ad8&hm=e5c733779aed2c07296970970db7a8528fc8beb29c89c8a998b9cccf0fc448e6&=&format=webp&quality=lossless&width=960&height=221" alt="Logo-Anhanguera" className="logo" />
        <h1>Catálogo de Cursos</h1>
      </header>
      <div className="course-list">
        {courses.slice(0, visibleCourses).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {visibleCourses < courses.length && (
        <button onClick={loadMoreCourses} className="load-more">
          Carregar Mais Cursos
        </button>
      )}
    </div>
  );
}

export default App;
