FROM node:10.18.0-alpine 

WORKDIR /home/app
COPY ./package.json .
RUN npm i
COPY . .

CMD [ "npm", "run", "serve" ]


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./dist /usr/share/nginx/html