import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-page">
      <div class="about-header">
        <p class="eyebrow">About this project</p>
        <h1>ALBUM<span>BROWSER</span></h1>
      </div>

      <div class="about-body">
        <div class="section">
          <h2>Project Overview</h2>
          <p>
            Album Browser is a multi-page Single Page Application (SPA) built with Angular 17.
            It demonstrates routing, HTTP communication, service layers, and reactive data handling
            using RxJS Observables.
          </p>
        </div>

        <div class="section">
          <h2>Features</h2>
          <ul>
            <li>Angular Router with 6 routes and route parameters</li>
            <li>HttpClient integration with JSONPlaceholder REST API</li>
            <li>Service layer (AlbumService) for all API calls</li>
            <li>CRUD operations: Read, Update, Delete</li>
            <li>TypeScript interfaces for Album and Photo models</li>
            <li>Responsive photo grid layout</li>
            <li>Loading indicators and empty state handling</li>
          </ul>
        </div>

        <div class="section">
          <h2>Technical Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">Angular 17</div>
            <div class="tech-item">TypeScript 5.2</div>
            <div class="tech-item">RxJS 7.8</div>
            <div class="tech-item">HttpClient</div>
            <div class="tech-item">Angular Router</div>
            <div class="tech-item">JSONPlaceholder API</div>
          </div>
        </div>

        <div class="section">
          <h2>Course Info</h2>
          <div class="info-grid">
            <div class="info-row">
              <span class="label">Course</span>
              <span>Web Development — Lab 6</span>
            </div>
            <div class="info-row">
              <span class="label">Topic</span>
              <span>Routing &amp; HTTP</span>
            </div>
            <div class="info-row">
              <span class="label">API</span>
              <span>jsonplaceholder.typicode.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }

    .about-header {
      margin-bottom: 4rem;
      padding-bottom: 3rem;
      border-bottom: 1px solid var(--border);
    }

    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 1rem;
    }

    h1 {
      font-family: var(--font-display);
      font-size: 5rem;
      line-height: 0.9;
    }

    h1 span {
      color: var(--accent);
    }

    .section {
      margin-bottom: 3rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: 1.8rem;
      letter-spacing: 1px;
      margin-bottom: 1.2rem;
      color: var(--text);
    }

    p {
      color: var(--text-muted);
      line-height: 1.8;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    ul li {
      color: var(--text-muted);
      padding-left: 1.2rem;
      position: relative;
      font-size: 0.9rem;
    }

    ul li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent);
    }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .tech-item {
      padding: 0.4rem 1rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 2px;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .info-grid {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border);
      border-radius: 4px;
      overflow: hidden;
    }

    .info-row {
      display: flex;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border);
      font-size: 0.9rem;
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .label {
      color: var(--text-muted);
      min-width: 100px;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `]
})
export class AboutComponent {}
