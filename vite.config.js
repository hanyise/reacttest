import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

    server: {
    open: true,    // 웹브라우저 자동 활성화
    port: 3000,    // 포트 3000번으로 수정
  },  
})
