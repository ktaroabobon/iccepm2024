.PHONY: help
help:
	cat Makefile

run:
	yarn start

fmt:
ifdef CI
	yarn run prettier . --check
else
	yarn run prettier . --write
endif