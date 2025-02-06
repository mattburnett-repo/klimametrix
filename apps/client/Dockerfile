# Single stage build
FROM node:18-alpine
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app
COPY . .

RUN yarn install
RUN cd apps/client && yarn build

# Serve with nginx
FROM nginx:alpine
COPY --from=0 /app/apps/client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 