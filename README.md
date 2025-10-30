# Personal Portfolio Website

An interactive single-page React application featuring a 3D timeline visualization of life events and experiences. Built with React, Vite, and react-three-fiber.

## Features

- **Interactive 3D Timeline**: Explore experiences in an engaging 3D spiral visualization
- **Category Filtering**: Filter events by Professional Experience, Research, Extra-Curricular & Volunteering, and Competitions
- **Detailed Modals**: Click on any timeline node to view comprehensive details
- **Smooth Navigation**: Seamless scrolling between sections with react-scroll
- **Responsive Design**: Optimized for desktop and mobile devices

## Technologies Used

- **React 19** with Hooks
- **Vite** for fast development and optimized builds
- **react-three-fiber & drei** for 3D visualizations
- **Three.js** for 3D rendering
- **react-modal** for popup windows
- **react-scroll** for smooth section navigation

## Installation

```bash
# Clone the repository
git clone https://github.com/GomyX/GomyX.github.io.git
cd GomyX.github.io

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
# Create an optimized production build
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make the site available at `https://GomyX.github.io`

### Manual Deployment Steps

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the static files ready for deployment

3. For GitHub Pages, you can:
   - Push the `dist` folder contents to the `gh-pages` branch, or
   - Configure GitHub Pages to serve from the root of your main branch (you'll need to move files from `dist` to root)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Fixed navigation with smooth scrolling
│   ├── HeroSection.jsx         # Landing/welcome section
│   ├── ExperienceSection.jsx   # Main section with timeline
│   ├── TimelineFilters.jsx     # Category filter checkboxes
│   ├── TimelineVisual.jsx      # 3D timeline visualization
│   ├── ItemModal.jsx           # Detail popup modal
│   └── ContactSection.jsx      # Contact information
├── data.js                      # Timeline events data
├── App.jsx                      # Main application component
└── main.jsx                     # Application entry point
```

## Customization

### Adding/Modifying Timeline Events

Edit `src/data.js` to add or modify timeline events. Each event should follow this structure:

```javascript
{
  id: 1,                          // Unique identifier
  date: "2024-2025",              // Time period
  title: "Event Title",           // Display name
  category: "professional",       // Must match filter categories
  shortDescription: "Brief desc", // Short summary
  details: "Full description..."  // Detailed information
}
```

### Available Categories

- `professional` - Professional Experience
- `research` - Research Experience
- `extra-curricular` - Extra-Curricular & Volunteering
- `competitions` - Competitions

### Styling

Each component has its own CSS file in `src/components/`. Modify these files to customize the appearance.

## Browser Support

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

This project is open source and available under the MIT License.
