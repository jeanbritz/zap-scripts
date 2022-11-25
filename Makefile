docker-build:
	docker build -t zaproxy:local .

docker-run:
	docker run -it -p 8090:8090 --name zaproxy-local zaproxy:local

compose:
	docker-compose build
	docker-compose up
