import Ember from 'ember';
import layout from '../templates/components/ted-gear-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',

  classNames: ['Ted-gear-item']
});
