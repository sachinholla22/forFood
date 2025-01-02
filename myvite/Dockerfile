FROM node:18-alpine
WORKDIR /app/frontend
COPY package*.json . postcss.config.js . tailwind.config.js . tsconfig.app.json . tsconfig.json . tsconfig.node.json . vite.config.ts .
COPY . .
RUN npm install 
EXPOSE 5173
CMD ["npm","run","dev"]
