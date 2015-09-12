import Ember from 'ember';
import layout from '../templates/components/ted-gear';

export default Ember.Component.extend({
  layout: layout,
  align: 'left',

  classNames: ['Ted-gear'],

  right: Ember.computed.equal('align', 'right')
});
