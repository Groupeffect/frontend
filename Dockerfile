FROM node:18
ARG PORT=3000
ENV PORT=$PORT
WORKDIR /app
COPY ./webinterface/. .
RUN ls -a
CMD yarn dev --host '0.0.0.0' --port $PORT
