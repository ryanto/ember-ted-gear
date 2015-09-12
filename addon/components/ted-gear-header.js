import Ember from 'ember';
import layout from '../templates/components/ted-gear-header';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['dropdown-header']
});
