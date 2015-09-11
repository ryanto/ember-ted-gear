import Ember from 'ember';
import layout from '../templates/components/ted-gear-divider';

export default Ember.Component.extend({
  layout: layout,

  tagName: 'li',

  classNames: ['divider']

});
