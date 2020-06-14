FROM node:13
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm ci --only=production
EXPOSE 4006
CMD [ "npm", "run dev" ]