import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a class="brand" routerLink="/home">ALBUM<span>BROWSER</span></a>
      <div class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/albums" routerLinkActive="active">Albums</a>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      height: 60px;
      background: var(--bg);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .brand {
      font-family: var(--font-display);
      font-size: 1.6rem;
      letter-spacing: 2px;
      color: var(--text);
    }

    .brand span {
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-muted);
      transition: color 0.2s;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }

    main {
      min-height: calc(100vh - 60px);
    }
  `]
})
export class AppComponent {}
