import loadScript from 'discourse/lib/load-script';

export default Ember.Component.extend({
  visible: false,
  slotId: null,

  init() {
    this._super();

    const { siteSettings } = this;
    const slot = this.get('slot').trim();
    this.set('siteId', (siteSettings.astrobanner_site_id || '').trim());


    this.set('slotTrim', slot);

    const userSee = (!this.currentUser) ||
                     (this.currentUser.get('trust_level') <= siteSettings.astrobanner_through_trust_level);
    if (userSee) {
      this.set('visible', true);
    }
  },

  didInsertElement() {
    this._super();
  }

});