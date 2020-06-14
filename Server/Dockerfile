FROM node:13-alpine
WORKDIR /app
COPY . ./
RUN npm install
RUN npm ci --only=production
EXPOSE 4006
CMD [ "npm", "run dev" ]