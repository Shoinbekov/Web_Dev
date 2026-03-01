import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="detail-page">
      <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <span>Loading album...</span>
      </div>

      <div class="detail-content" *ngIf="!loading && album">
        <div class="breadcrumb">
          <a routerLink="/albums">Albums</a>
          <span>/</span>
          <span>#{{ album.id }}</span>
        </div>

        <div class="album-meta">
          <p class="eyebrow">Album #{{ album.id }} · User {{ album.userId }}</p>
          <h1>{{ album.title }}</h1>
        </div>

        <div class="edit-section">
          <label>Edit Title</label>
          <div class="input-row">
            <input
              type="text"
              [(ngModel)]="editTitle"
              placeholder="Album title..."
            />
            <button
              class="btn-save"
              (click)="saveAlbum()"
              [disabled]="saving || editTitle === album.title"
            >
              {{ saving ? 'Saving...' : saved ? '✓ Saved' : 'Save' }}
            </button>
          </div>
        </div>

        <div class="actions">
          <a [routerLink]="['/albums', album.id, 'photos']" class="btn-photos">
            View Photos →
          </a>
          <a routerLink="/albums" class="btn-back">← Back to Albums</a>
        </div>
      </div>

      <div class="empty" *ngIf="!loading && !album">
        Album not found.
      </div>
    </div>
  `,
  styles: [`
    .detail-page {
      padding: 3rem;
      max-width: 700px;
      margin: 0 auto;
    }

    .loading {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 4rem;
      justify-content: center;
      color: var(--text-muted);
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--border);
      border-top-color: var(--accent);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    .breadcrumb a {
      color: var(--accent);
    }

    .breadcrumb a:hover {
      text-decoration: underline;
    }

    .album-meta {
      margin-bottom: 3rem;
      padding-bottom: 2.5rem;
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
      font-size: 2.5rem;
      line-height: 1.1;
      text-transform: uppercase;
    }

    .edit-section {
      margin-bottom: 3rem;
    }

    label {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.8rem;
    }

    .input-row {
      display: flex;
      gap: 0.8rem;
    }

    input {
      flex: 1;
      padding: 0.8rem 1.2rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 2px;
      color: var(--text);
      font-size: 0.9rem;
      transition: border-color 0.2s;
    }

    input:focus {
      outline: none;
      border-color: var(--accent);
    }

    .btn-save {
      padding: 0.8rem 1.8rem;
      background: var(--accent);
      color: #000;
      border: none;
      border-radius: 2px;
      font-weight: 600;
      font-size: 0.85rem;
      transition: opacity 0.2s;
      white-space: nowrap;
    }

    .btn-save:disabled {
      opacity: 0.4;
    }

    .actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .btn-photos {
      display: inline-block;
      padding: 0.8rem 1.8rem;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 2px;
      font-size: 0.85rem;
      font-weight: 500;
      transition: border-color 0.2s, color 0.2s;
    }

    .btn-photos:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .btn-back {
      font-size: 0.85rem;
      color: var(--text-muted);
      transition: color 0.2s;
    }

    .btn-back:hover {
      color: var(--text);
    }

    .empty {
      text-align: center;
      padding: 4rem;
      color: var(--text-muted);
    }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editTitle = album.title;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.saving = true;
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album!.title = this.editTitle;
        this.saving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 2000);
      },
      error: () => {
        this.saving = false;
      }
    });
  }
}
