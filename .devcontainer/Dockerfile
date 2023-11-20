FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Install angular
RUN npm install -g @angular/cli@17.0.1

# Install node modules
ARG NODE_MODULES="eslint typescript"
RUN npm install -g ${NODE_MODULES} \
    && npm cache clean --force > /dev/null 2>&1

# Disable Angular CLI things
RUN ng config -g cli.analytics false && \
    ng config -g cli.completion.prompted true
