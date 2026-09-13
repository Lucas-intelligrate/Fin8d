FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY public /srv
COPY docs/mockup /srv/mockup
EXPOSE 8080
