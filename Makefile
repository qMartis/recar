-include ./server/.env.development
.DEFAULT_GOAL := start

start:
	@cd ./server && yarn start
setup:
	@cd ./server && \
	yarn install && \
	yarn reset && \
	yarn build
reset:
	@cd ./server && yarn reset
