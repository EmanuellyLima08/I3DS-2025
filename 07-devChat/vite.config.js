import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,    // Certifique-se de que o frontend está usando a porta 3000
    host: '0.0.0.0', // Permite acesso externo na rede
    open: true,
    hmr: true,  // Habilita hot module replacement (opcional, pode ajudar no desenvolvimento)
  },
});
