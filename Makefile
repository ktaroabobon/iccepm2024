.PHONY: help
help:
	cat Makefile

run:
	yarn start

test:
	yarn test

fmt:
ifdef CI
	yarn run prettier . --check
else
	yarn run prettier . --write
endif

lint:
	yarn run eslint src

typecheck: TSC_OPTS=
typecheck:
	yarn run tsc --noEmit $(TSC_OPTS)