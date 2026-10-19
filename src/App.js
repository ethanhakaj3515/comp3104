import React from 'react';
import './App.css';

function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="title">
        <p className="eyebrow">COMP3104 · CLASS EXERCISE 06</p>
        <h1 id="title">Host a React app on GitHub Pages</h1>
        <div className="student-details" aria-label="Student information">
          <p><span>Student Name</span> Ethan Hakaj</p>
        </div>
        <p className="intro">
          This single page app is built for production and published with GitHub Pages.
        </p>
        <a className="button" href="https://pages.github.com/">
          Learn about GitHub Pages <span aria-hidden="true">↗</span>
        </a>
        <p className="status"><span aria-hidden="true" /> Live on GitHub Pages</p>
      </section>
    </main>
  );
}

export default App;
