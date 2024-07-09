import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify your build output directory
    rollupOptions: {
      input: {
        index: 'index.html',
        About: 'About.html',
        Services: 'Services.html',
        Testimonial: 'Testimonial.html',
        Schedule: 'Schedule.html',
        Learn: 'Learn.html',
        Shop: 'Shop.html',

        Healing: 'Healing.html',
        Movement: 'Movement.html',
        Nutrition: 'Nutrition.html',
        Yoga: 'Yoga.html',
        // Add more entries as needed for each HTML file
      }
    }
  }
});
