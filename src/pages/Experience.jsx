// src/pages/Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experiencia</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Indexar, Santiago, Chile</h3>
            <p><strong>Analista Funcional y QA (Práctica Profesional)</strong> | enero 2024 – marzo 2024</p>
            <ul>
              <li>Creación de scripts SQL que mejoraron la migración de los datos al sistema de imposiciones Capredena.</li>
              <li>Realización de migración de bases de datos al sistema web de la caja de retiro Capredena.</li>
              <li>Programación y corrección de errores del sistema de imposiciones Capredena utilizando lenguajes como C# y .NET.</li>
              <li>Actualización de la base de datos del sistema de Capredena y creación de modelos de datos.</li>
              <li>Transformación y tratamiento de datos entregados en Excel para su posterior migración a la base de datos.</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Contraplano, Viña del Mar, Chile</h3>
            <p><strong>Informático (Práctica Laboral)</strong> | marzo 2023 – junio 2023</p>
            <ul>
              <li>Participación en el equipo de desarrollo del sitio web de Contraplano utilizando WordPress y PHP.</li>
              <li>Generación y edición de contenido para la página web de Contraplano, incluyendo la creación de entradas de noticias, imágenes destacadas, títulos y contenido multimedia utilizando WordPress.</li>
              <li>Trabajo en la optimización de recursos y la implementación de estrategias de SEO para mejorar la visibilidad en línea.</li>
              <li>Diseño de interfaces de usuario para la página web de Contraplano.</li>
              <li>Colaboración en la creación y envío masivo de correos electrónicos utilizando la plataforma "MailChimp".</li>
              <li>Búsqueda de correos electrónicos de gobernadores, concejales, seremis y secretarios de todo el país de Chile para su inclusión en las listas de contactos.</li>
              <li>Uso de FileZilla Client (FTP) para cargar archivos en formato PDF a la biblioteca nacional.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
