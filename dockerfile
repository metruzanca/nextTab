# Step 1 - Build the app
FROM node:14-alpine as build

WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install

COPY . ./

# ENV SELF_HOSTING=true
RUN pnpm build

# Step 2 - Nginx Static as a static web server

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80