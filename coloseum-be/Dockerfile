FROM node:10.18.0 
WORKDIR /home/app
COPY ./package.json .
RUN npm i
COPY . .
CMD [ "npm", "start" ]


