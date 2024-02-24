include .env.local
export

IMAGE_NAME=next-client-prod
DEV_IMAGE_NAME=next-client-dev
DOCKERFILE_PATH=.\prod.Dockerfile
PORT=3000

# Command to build the Docker image
build:
	docker build -t $(IMAGE_NAME) -f $(DOCKERFILE_PATH) .

# Command to run the Docker container
run:
	docker run --name $(IMAGE_NAME)-container -p $(PORT):$(PORT) -e NEXTAUTH_URL=$(NEXTAUTH_URL) -e NEXTAUTH_SECRET=$(NEXTAUTH_SECRET) -d $(IMAGE_NAME)

# Command to run the Docker dev
dev:
	docker run --name $(DEV_IMAGE_NAME)-container -p $(PORT):$(PORT) -e NEXTAUTH_URL=$(NEXTAUTH_URL) -e NEXTAUTH_SECRET=$(NEXTAUTH_SECRET) --restart=always -v ./src:/app/src -v ./public:/app/public -d $(DEV_IMAGE_NAME)

.PHONY: build run
