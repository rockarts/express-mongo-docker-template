class SortModal {
  constructor(trigger) {
    this.trigger = trigger;
    this.cacheDOM();
    this.bindListeners();
  }

  cacheDOM() {
    this.dom = {};
    this.dom.modal = document.querySelector(`[data-modal="${this.trigger.dataset.sort}"]`);
    this.dom.close = this.dom.modal.querySelector('[data-close]');
    this.dom.sortOptions = this.dom.modal.querySelectorAll('[data-sort-option]');
  }

  bindListeners() {
    this.trigger.addEventListener('click', this.toggleModal.bind(this))
    this.dom.close.addEventListener('click', this.toggleModal.bind(this))
    this.dom.sortOptions.forEach((option) => {
      option.addEventListener('change', this.handleSortChange.bind(this));
  });
  }

  toggleModal() {
    const isOpen = this.dom.modal.getAttribute('aria-hidden') == 'false';
    
    this.dom.modal.setAttribute('aria-hidden', isOpen);

    if (isOpen) {
      document.querySelector('main').removeAttribute('inert');
      this.trigger.focus();
    } else {
      document.querySelector('main').setAttribute('inert', '');
      this.dom.close.focus();
    }
  }

  handleSortChange(e) {
    const selectedSort = e.target.value;
    console.log('Selected sort option:', selectedSort);
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const sortModalTriggers = document.querySelectorAll('[data-sort]')
  sortModalTriggers.forEach((trigger) => new SortModal(trigger))
});