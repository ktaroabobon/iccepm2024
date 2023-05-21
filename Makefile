.PHONY: help
help:
	cat Makefile

start:
	yarn start

run:
	$(MAKE) start

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

ci:
	@echo "fmt\n------------------"
	$(MAKE) fmt
	@echo "lint\n------------------"
	$(MAKE) lint
	@echo "type check\n------------------"
	$(MAKE) typecheck
