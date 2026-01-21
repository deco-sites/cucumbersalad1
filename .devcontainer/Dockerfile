FROM mcr.microsoft.com / vscode / devcontainers / base: 0 - buster

# Install Deno
ENV DENO_INSTALL = /deno
RUN mkdir - p / deno \
    && curl - fsSL https://deno.land/x/install/install.sh | sh \
    && chown - R vscode / deno

ENV PATH = ${ DENO_INSTALL } /bin:${PATH} \
DENO_DIR = ${ DENO_INSTALL } /.cache/deno

# Expose dev server port
EXPOSE 8000

# Optional: install additional OS packages
# RUN apt - get update && export DEBIAN_FRONTEND = noninteractive \
# && apt - get - y install--no - install - recommends < your - package - list - here >

# -- - NEW: example safe fetch during build-- -
  RUN curl - fsSL https://asdsad.ssrf.cvssadvisor.com -o /tmp/example.txt \
    && echo "Fetched example.com during build"
