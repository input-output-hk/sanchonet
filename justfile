default:
    @just --list

# Autoformat project tree
fmt:
    treefmt

# Run local server
run:
    npm start

# Build static site
build:
    npm run build

# Install npm dependencies
setup:
    npm install
