const gulp = require('gulp');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');
const jest = require('gulp-jest').default;
const prettierEslint = require('gulp-prettier-eslint');

gulp.task('test', () =>
	gulp
		.src('__tests__')
		.pipe(jest({
			coverage: true,
		})));

gulp.task('lint', () =>
	gulp
		.src([
			'!node_modules/**',
			'!**/node_modules/**',
			'functions/**/*.js',
			'__tests__/**/*.js',
		])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError()));

gulp.task('prettier', () => {
	gulp
		.src(
			[
				'!node_modules/**',
				'!**/node_modules/**',
				'functions/**/*.js',
				'tests/**/*.js',
			],
			{
				base:
					'./',
			}
		)
		.pipe(prettierEslint())
		.pipe(gulp.dest('./'));
});

gulp.task('prettify', (done) => {
	runSequence(
		'prettier',
		'lint',
		done
	);
});
