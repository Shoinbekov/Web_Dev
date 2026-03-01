import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="photos-page">
      <div class="page-header">
        <div>
          <p class="eyebrow">Album #{{ albumId }}</p>
          <h1>PHOTOS</h1>
        </div>
        <a [routerLink]="['/albums', albumId]" class="btn-back">← Back to Album</a>
      </div>

      <div class="loading" *ngIf="loading">
        <div class="spinner"></div>
        <span>Loading photos...</span>
      </div>

      <div class="empty" *ngIf="!loading && photos.length === 0">
        No photos found.
      </div>

      <div class="photos-grid" *ngIf="!loading && photos.length > 0">
        <div class="photo-card" *ngFor="let photo of photos">
          <div class="photo-img-wrap">
            <img [src]="photo.thumbnailUrl" [alt]="photo.title" loading="lazy" />
            <div class="photo-overlay">
              <span>{{ photo.title }}</span>
            </div>
          </div>
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .photos-page {
      padding: 3rem;
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

    .btn-back {
      font-size: 0.85rem;
      color: var(--text-muted);
      transition: color 0.2s;
      white-space: nowrap;
    }

    .btn-back:hover {
      color: var(--accent);
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

    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 1rem;
    }

    .photo-card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .photo-img-wrap {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 2px;
      background: var(--surface);
      border: 1px solid var(--border);
    }

    .photo-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s;
    }

    .photo-img-wrap:hover img {
      transform: scale(1.05);
    }

    .photo-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      opacity: 0;
      transition: opacity 0.2s;
    }

    .photo-img-wrap:hover .photo-overlay {
      opacity: 1;
    }

    .photo-overlay span {
      font-size: 0.7rem;
      color: var(--accent);
      text-align: center;
      line-height: 1.4;
    }

    .photo-title {
      font-size: 0.72rem;
      color: var(--text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 600px) {
      .photos-page { padding: 1.5rem; }
      .photos-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
    }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
