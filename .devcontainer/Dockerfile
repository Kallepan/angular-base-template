ARG VARIANT=18-bookworm
FROM node:${VARIANT}

LABEL name="Angular Dev Container" \
    description="A container for Angular development" \
    version="1.0.0"

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    vim \
    curl \
    sudo \
    wget \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install node modules
ARG NODE_MODULES="eslint typescript @angular/cli"
RUN npm install -g ${NODE_MODULES} \
    && npm cache clean --force > /dev/null 2>&1

# Disable Angular CLI things
RUN ng config -g cli.analytics false && \
 ng config -g cli.completion.prompted true

EXPOSE 4200 9876
