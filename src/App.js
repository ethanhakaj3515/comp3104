import React from 'react';
import './App.css';

function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="title">
        <p className="eyebrow">COMP3104 · DEVOPS</p>
        <h1 id="title">A single page app, ready to deploy</h1>
        <p className="intro">
          This React application is configured for a production build and GitHub Pages hosting.
        </p>
        <a className="button" href="https://pages.github.com/">
          Learn about GitHub Pages <span aria-hidden="true">↗</span>
        </a>
        <p className="status"><span aria-hidden="true" /> React app is running</p>
      </section>
    </main>
  );
}

export default App;
