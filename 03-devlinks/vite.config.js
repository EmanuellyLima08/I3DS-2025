import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //Porta para conexão, altere quando necessário
    open: true, //Abre automáticamente o navegador e inicia o server
    host: true, //Habilitar redes externas

  },
});
