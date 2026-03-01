import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="albums-page">
      <div class="page-header">
        <div>
          <p class="eyebrow">JSONPlaceholder API</p>
          <h1>ALL ALBUMS</h1>
        </div>
        <span class="count" *ngIf="!loading">{{ albums.length }} albums</span>
      </div>

      <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <span>Fetching albums...</span>
      </div>

      <div class="empty" *ngIf="!loading && albums.length === 0">
        No albums found.
      </div>

      <div class="albums-list" *ngIf="!loading && albums.length > 0">
        <div
          class="album-item"
          *ngFor="let album of albums"
          (click)="navigateToAlbum(album.id)"
        >
          <span class="album-id">#{{ album.id }}</span>
          <span class="album-title">{{ album.title }}</span>
          <button
            class="btn-delete"
            (click)="deleteAlbum($event, album.id)"
            [disabled]="deletingId === album.id"
          >
            {{ deletingId === album.id ? '...' : 'Delete' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .albums-page {
      padding: 3rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border);
    }

    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-display);
      font-size: 3.5rem;
      line-height: 1;
    }

    .count {
      font-size: 0.8rem;
      color: var(--text-muted);
      letter-spacing: 1px;
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

    .empty {
      text-align: center;
      padding: 4rem;
      color: var(--text-muted);
    }

    .albums-list {
      display: flex;
      flex-direction: column;
    }

    .album-item {
      display: grid;
      grid-template-columns: 60px 1fr auto;
      align-items: center;
      gap: 1.5rem;
      padding: 1rem 1.2rem;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      transition: background 0.15s;
    }

    .album-item:hover {
      background: var(--surface);
    }

    .album-item:hover .album-title {
      color: var(--accent);
    }

    .album-id {
      font-family: var(--font-display);
      font-size: 1.1rem;
      color: var(--text-muted);
      min-width: 40px;
    }

    .album-title {
      font-size: 0.9rem;
      transition: color 0.15s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn-delete {
      padding: 0.35rem 0.9rem;
      background: transparent;
      border: 1px solid #ff4d4d44;
      color: #ff4d4d;
      font-size: 0.75rem;
      border-radius: 2px;
      transition: background 0.15s, border-color 0.15s;
      white-space: nowrap;
    }

    .btn-delete:hover:not(:disabled) {
      background: #ff4d4d22;
      border-color: #ff4d4d;
    }

    .btn-delete:disabled {
      opacity: 0.5;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  deletingId: number | null = null;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  navigateToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    this.deletingId = id;
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
        this.deletingId = null;
      },
      error: () => {
        this.deletingId = null;
      }
    });
  }
}
