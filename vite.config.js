import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    outDir: 'dist', // Ensure this is set to 'dist' to match Vercel's expectations
    assetsInlineLimit: 2048,
    minify: 'esbuild', // Faster minification
    sourcemap: false, // Disable source maps for smaller builds
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Cache busting
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'entry/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 7777,
    strictPort: true, // Prevents auto-assigning a random port
    host: '0.0.0.0', // Enables external access (useful for testing)
    https: false, // Ensure HTTPS is handled by deployment service
    open: false, // Prevents browser auto-opening
  },
  preview: {
    port: 5000, // Separate port for preview builds
  },
  esbuild: {
    target: 'esnext', // Ensures modern JS compatibility
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});
