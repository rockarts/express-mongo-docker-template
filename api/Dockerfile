FROM node:18
WORKDIR /app
COPY package.json /.

# This line makes sure that no dev dependences are install in a production environment
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm --production=false install; \
        else npm install --only=production ; \
        fi
COPY . ./

ENV PORT 3000
EXPOSE $PORT

CMD ["node", "server.js"]
