FROM node:14.15.4-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf

# Build step #2: build the API with the client as static files
FROM python:3.9.13-slim-buster
WORKDIR /app
COPY --from=build /app/build ./build

RUN mkdir ./backend
COPY ./backend ./backend
RUN pip install -r ./backend/requirements.txt
ENV FLASK_ENV production

EXPOSE 80
WORKDIR /app/backend
CMD ["gunicorn", "-b", ":80", "app:app"]