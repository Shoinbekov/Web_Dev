import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero">
      <div class="hero-content">
        <p class="eyebrow">JSONPlaceholder API</p>
        <h1>ALBUM<br><span>BROWSER</span></h1>
        <p class="desc">
          Explore a curated collection of 100 albums and their photos.
          Browse, edit, and manage albums with a modern Angular interface.
        </p>
        <a routerLink="/albums" class="btn-primary">Browse Albums →</a>
      </div>
      <div class="hero-visual">
        <div class="grid-visual">
          <div *ngFor="let i of boxes" class="box" [style.opacity]="(i % 7 + 1) * 0.12"></div>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="feature">
        <span class="feature-num">01</span>
        <h3>Browse Albums</h3>
        <p>View all 100 albums from the API with instant navigation to details.</p>
      </div>
      <div class="feature">
        <span class="feature-num">02</span>
        <h3>Edit & Update</h3>
        <p>Modify album titles and save changes via PUT requests to the API.</p>
      </div>
      <div class="feature">
        <span class="feature-num">03</span>
        <h3>Photo Gallery</h3>
        <p>View photo thumbnails for any album in a responsive grid layout.</p>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: calc(100vh - 60px);
      max-height: 700px;
    }

    .hero-content {
      padding: 5rem 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 500;
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(4rem, 8vw, 7rem);
      line-height: 0.9;
      color: var(--text);
    }

    h1 span {
      color: var(--accent);
    }

    .desc {
      color: var(--text-muted);
      max-width: 380px;
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .btn-primary {
      display: inline-block;
      padding: 0.9rem 2.2rem;
      background: var(--accent);
      color: #000;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 1px;
      border-radius: 2px;
      width: fit-content;
      transition: opacity 0.2s, transform 0.2s;
    }

    .btn-primary:hover {
      opacity: 0.85;
      transform: translateX(4px);
    }

    .hero-visual {
      background: var(--surface);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-left: 1px solid var(--border);
    }

    .grid-visual {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 8px;
      padding: 2rem;
      width: 100%;
    }

    .box {
      aspect-ratio: 1;
      background: var(--accent);
      border-radius: 2px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--border);
    }

    .feature {
      padding: 3rem;
      border-right: 1px solid var(--border);
    }

    .feature:last-child {
      border-right: none;
    }

    .feature-num {
      font-family: var(--font-display);
      font-size: 3rem;
      color: var(--border);
      display: block;
      margin-bottom: 1rem;
    }

    .feature h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      letter-spacing: 0.5px;
    }

    .feature p {
      color: var(--text-muted);
      font-size: 0.85rem;
      line-height: 1.7;
    }

    @media (max-width: 768px) {
      .hero {
        grid-template-columns: 1fr;
        max-height: none;
      }
      .hero-visual { display: none; }
      .hero-content { padding: 3rem 2rem; }
      .features { grid-template-columns: 1fr; }
      .feature { border-right: none; border-bottom: 1px solid var(--border); }
    }
  `]
})
export class HomeComponent {
  boxes = Array.from({ length: 42 }, (_, i) => i);
}
