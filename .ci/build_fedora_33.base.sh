#!/usr/bin/env bash
set -e

docker buildx build \
  --push \
  --platform linux/arm64,linux/amd64 \
  --tag ghcr.io/firezone/fedora:33 \
  --build-arg BASE_IMAGE="fedora:33" \
  --progress plain \
  -f pkg/Dockerfile.base.rpm \
  .
