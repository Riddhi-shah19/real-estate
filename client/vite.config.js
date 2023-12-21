import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        // for every /api requset add target at beginning 
        target:'http://localhost:3000',
        secure:false,
      }
    }
  },
  plugins: [react()],
})
