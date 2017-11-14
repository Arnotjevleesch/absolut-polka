# FROM node:boron

# Create app directory
# WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

# RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .

# EXPOSE 8080
# CMD [ "npm", "start" ]




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

CMD ["npm","run","build"]