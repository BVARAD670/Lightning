import BasicListMenuItem from './BasicListMenuItem.js';

export const MENU_PADDING = 2;

export default
class BasicListMenu extends lng.Component {
  static _template() {
    return {
      clipping: true,
      collision: true,
      ref: 'BasicListMenu',
      flex: { direction: 'column' },
      ScrollWrapper: {
        collision: true,
        flexItem: { grow: 1 },
        w: (w) => w,
        flex: {
          direction: 'column',
          paddingTop: MENU_PADDING,
          paddingBottom: MENU_PADDING
        }
      }
    };
  }

  _init() {
    this._index = 0;
  }

  get items() {
    return this.tag('ScrollWrapper').children;
  }

  set items(items) {
    const patch = {};
    items.forEach((el, index) => {
      patch[`MenuItem-${index}`] = {
        type: BasicListMenuItem,
        ...el,
        itemIndex: index,
        collision: true
      };
    });
    /*
     * if there are more previously rendered items
     * than the new items, remove them
    */
    this.tag('ScrollWrapper').children.slice(items.length).forEach((item, i) => {
      patch[`MenuItem-${i + items.length}`] = undefined;
    });

    this.tag('ScrollWrapper').patch(patch);
  }

  _handleUp() {
    // Find next item that's focusable going up
    let nextIndex;
    for (let i = this._index - 1; i >= 0; i--) {
      if (this.items[i]?.focusable) {
        nextIndex = i;
        break;
      }
    }

    if (nextIndex !== undefined) {
      this.setIndex(nextIndex);
    } else {
      this.signal('focusExitFirst');
    }
  }

  _handleDown() {
    const length = this.items.length;

    // Find next item that's focusable going down
    let nextIndex;
    for (let i = this._index + 1; i < length; i++) {
      if (this.items[i]?.focusable) {
        nextIndex = i;
        break;
      }
    }

    if (nextIndex !== undefined) {
      this.setIndex(nextIndex);
    } else {
      this.signal('focusExitLast');
    }
  }

  _handleRight() {
    // Only treat the Right key as an enter if the item has the rightArrow focusable
    if (this.items[this._index]?.rightArrow) {
      this._handleEnter();
    }
  }

  _handleEnter() {
    this.signal('itemSelect', this.items[this._index].action, this.items[this._index]);
  }
  setIndex(idx) {
    const hover = (this._index !== idx);

    // store new index
    this._index = idx;

    if (hover && this.items[idx]) {
      // Trigger the signal after scrolling just incase the signal causes a relayout
      this._scrollToItem();
      this.signal('itemFocus', this.items[idx].action, this.items[this._index]);
    }
  }
  _unFocusOtherChildren(itemIndex) {
    console.log(this.children);
    this.tag('ScrollWrapper').children.forEach((item) => item.itemIndex !== itemIndex && item._unfocus());
  }
  _scrollToItem() {
    const wrapper = this.tag('ScrollWrapper');
    if (this._index === undefined || this._index >= wrapper.children.length) return;

    const selectedItem = wrapper.children[this._index];
    const itemRelY1 = wrapper.y + selectedItem.finalY;
    const itemRelY2 = itemRelY1 + selectedItem.finalH;

    // If item is out of bounds then scroll it into view
    // Either out of bounds from the top or bottom
    // Bottom case
    if (itemRelY2 > this.finalH - MENU_PADDING) {
      wrapper.patch({
        smooth: {
          y: (this.finalH - selectedItem.finalH) - selectedItem.finalY - MENU_PADDING
        }
      });
    } else if (itemRelY1 < MENU_PADDING) {
      wrapper.patch({
        smooth: {
          y: -selectedItem.finalY + MENU_PADDING
        }
      });
    }
  }

  get activeItem() {
    return (this.items[this._index] || {}).action;
  }

  _getFocused() {
    return this.tag('ScrollWrapper').children[this._index];
  }
}
