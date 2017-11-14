FROM node:8.9.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Add your source files
COPY . /usr/src/app 

EXPOSE 8080

CMD ["npm","run","dev"]