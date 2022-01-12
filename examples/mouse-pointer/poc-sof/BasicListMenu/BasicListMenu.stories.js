import lng from '@lightningjs/core';
import { withKnobs } from '@storybook/addon-knobs';

import BasicListMenu from './BasicListMenu';
import BaseBadge from 'components/UI/Badges/BaseBadge';

export default {
  title: 'BasicListMenu',
  decorators: [withKnobs],
  parameters: { stage: { h: 500 } }
};

const badge = {
  flex: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  Badge: {
    type: BaseBadge,
    cc: true,
    iconHeight: 32
  }
};

export const ScrollingSummary = () =>
  class Container extends lng.Component {
    _getFocused() {
      return this.tag('BasicListMenu');
    }

    static _template() {
      return {
        BasicListMenu: {
          w: (w) => w,
          h: (h) => h,
          type: BasicListMenu,
          items: [
            {
              label: 'Super Basic'
            },
            {
              label: 'Super Basic',
              sublabel: 'with a Sublabel'
            },
            {
              label: 'Highlight Label:',
              highlightLabel: ' On'
            },
            {
              label: 'Right Arrow',
              rightArrow: true
            },
            {
              label: 'Right Content',
              rightContent: badge
            },
            {
              label: 'Check',
              icon: 'check',
              iconVisible: true
            },
            {
              label: 'Lock',
              icon: 'lock',
              iconVisible: true
            },
            {
              label: 'Unlock',
              action: false,
              icon: 'unlock',
              iconVisible: true
            },
            {
              label: 'Icon Invisible',
              action: true,
              icon: 'check',
              iconVisible: false
            },
            {
              label: 'All The:',
              sublabel: 'Even a really really really really really really really really really really really really really ' +
                'really really really really really really really really really really really really really really really long subtitle. ',
              highlightLabel: ' Things',
              action: true,
              icon: 'check',
              iconVisible: true,
              rightArrow: true,
              rightContent: badge
            }
          ]
        }
      };
    }
  };

export const NoScroll = () =>
  class Container extends lng.Component {
    _getFocused() {
      return this.tag('BasicListMenu');
    }

    static _template() {
      return {
        BasicListMenu: {
          w: (w) => w,
          h: (h) => h,
          type: BasicListMenu,
          items: [
            {
              label: 'On',
              icon: 'check',
              iconVisible: true
            },
            {
              label: 'Off',
              icon: 'check'
            }
          ]
        }
      };
    }
  };
