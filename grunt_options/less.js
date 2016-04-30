'use strict';

module.exports = {
	dev: {
		src: [
			'css/local.less',
		],
		dest: 'css/_bundle.css'
	},
	prod: {
		options: {
			compress: true,
			yuicompress: true,
			optimization: 2
		},
		src: [
			'css/local.less'
		],
		dest: 'css/_bundle.css'
	}
};