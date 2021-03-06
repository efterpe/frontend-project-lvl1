install-deps:
	npm install
brain-games: install-deps
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
