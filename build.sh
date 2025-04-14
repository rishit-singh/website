#!/bin/bash
echo "Installing dependencies with npm ci..."
npm ci
echo "Building project..."
npm run build 