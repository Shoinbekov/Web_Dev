# Album Browser — Lab 6: Routing & HTTP

A multi-page Angular SPA that browses albums and photos from the JSONPlaceholder REST API.

## Features

- **Routing**: 6 routes with route parameters (`/albums/:id`, `/albums/:id/photos`)
- **HTTP**: All API calls via `AlbumService` using `HttpClient`
- **CRUD**: Read (list & detail), Update (edit title), Delete (remove from list)
- **5 Components**: Home, About, Albums, AlbumDetail, AlbumPhotos
- **TypeScript interfaces**: `Album` and `Photo` models
- **Loading indicators** and responsive photo grid

## Getting Started

### Prerequisites

- Node.js v18+
- Angular CLI v17+

```bash
npm install -g @angular/cli
```

### Install & Run

```bash
cd lab6/album-browser
npm install
ng serve
```

Open http://localhost:4200 in your browser.

## Project Structure

```
src/app/
├── models/
│   ├── album.model.ts       # Album interface
│   └── photo.model.ts       # Photo interface
├── services/
│   └── album.service.ts     # All API calls via HttpClient
├── components/
│   ├── home/                # Welcome page
│   ├── about/               # About page
│   ├── albums/              # Album list with delete
│   ├── album-detail/        # Album detail with edit
│   └── album-photos/        # Photo grid
├── app.component.ts         # Nav + router-outlet
├── app.routes.ts            # Route configuration
└── app.config.ts            # App bootstrap config
```

## API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com):

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/albums` | All albums |
| GET | `/albums/:id` | Single album |
| GET | `/albums/:id/photos` | Album photos |
| PUT | `/albums/:id` | Update album |
| DELETE | `/albums/:id` | Delete album |

> Note: JSONPlaceholder simulates mutations — changes don't persist server-side, but the UI updates locally.
