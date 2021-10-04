module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
		indent: ['error', 'tab'],
		semi: ['error', 'never'],
		eqeqeq: ['error', 'always'],
		quotes: ['error', 'single'],
		'block-spacing': ['error', 'always'],
		'space-before-function-paren': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'space-before-blocks': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'func-call-spacing': ['error', 'never'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'keyword-spacing': ['error', { before: true, after: true }],
		'space-infix-ops': ['error', { int32Hint: false }],
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false
			}
		}]
	}
}
