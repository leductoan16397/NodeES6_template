FROM node:14 as debug

WORKDIR /work/

RUN npm install nodemon -g

COPY package*.json /work/

RUN npm install

COPY . /work/

EXPOSE 5000

CMD ["npm","run","dev"]

# ENTRYPOINT ["npm","run","dev"]
# ENTRYPOINT [ "nodemon", "--inspect=0.0.0.0", "--exec", "babel-node", "app.js" ]



FROM node:14 as prod

WORKDIR /work/

COPY package*.json /work/

RUN npm install

COPY . /work/

CMD ["npm", "run", "webpack-run" ]