# Dev stage — dependencies only (used by docker-compose.yml)
FROM node:24-alpine AS dev

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . /app


# Build stage — production assets
FROM dev AS builder

RUN CI=false npm run build


# Runtime stage
FROM nginxinc/nginx-unprivileged:alpine3.22-perl

LABEL maintainer=courseproduction@bcit.ca
LABEL org.opencontainers.image.source="https://github.com/bcit-tlu/qf-pcr"
LABEL org.opencontainers.image.description="QF-PCR — Quantitative Fluorescence PCR online learning module"

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build/ ./
