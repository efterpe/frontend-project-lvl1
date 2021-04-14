install-deps:
	npm install
brain-games: install-deps
	node bin/brain-games.js
brain-calc: install-deps
	node bin/brain-calc.js
brain-even: install-deps
	node bin/brain-even.js
brain-gcd: install-deps
	node bin/brain-gcd.js  
brain-prime: install-deps
	node bin/brain-prime.js
brain-progression: install-deps
	node bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
