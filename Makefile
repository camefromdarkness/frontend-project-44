install:
	npm ci

brain-games:
	npm run brain-games


publish:
	npm publish --dry-run

lint:
	NODE_NO_WARNINGS=1 npx eslint .
