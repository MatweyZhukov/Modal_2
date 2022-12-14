'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const modal = document.querySelector('.modal_container'),
		btnOpen = document.querySelector('[data-open]'),
		btnClose = document.querySelector('[data-close]'),
		inputs = document.querySelectorAll('.input');

	function deleteTextFromInputs() {
		inputs.forEach(item => item.value = '');
	}

	function showDarkBG() {
		if (modal.style.display === 'block') {
			document.body.style.cssText = 'background-color: lightgray;';
			btnOpen.style.cssText = 'background-color: lightgray; opacity: 0.5';
		} else {
			document.body.style.cssText = 'background-color: white;';
			btnOpen.style.cssText = 'background-color: white;';
		}
	}

	function openModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	window.addEventListener('click', (e) => {

		if (e.target === btnOpen) {
			openModal();
		}

		if (e.target === btnClose) {
			closeModal();
			deleteTextFromInputs();
		}

		if (e.target === document.body) {
			closeModal();
			deleteTextFromInputs();
		}

		showDarkBG();

	});

	document.addEventListener('keydown', (e) => {

		if (e.code === 'Escape' && modal.style.display == 'block') {
			closeModal();
			deleteTextFromInputs();
		}

		showDarkBG();

	});

});