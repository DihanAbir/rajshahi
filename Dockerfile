FROM node 
WORKDIR /app  
COPY package.json .
RUN npm install 

# copy all on container 
COPY . . 

# runnung container image 
EXPOSE 3000
CMD ["npm", "start"]

