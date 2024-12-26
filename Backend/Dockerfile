FROM node:18-alpine
WORKDIR /app
COPY package*.json .
COPY . .
RUN npm install
EXPOSE 4300
CMD ["npm","start"]