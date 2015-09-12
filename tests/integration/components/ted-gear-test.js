import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ted-gear', 'Integration | Component | ted gear', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ted-gear}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ted-gear}}
      template block text
    {{/ted-gear}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should hide the items until the gear is clicked', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#ted-gear}}
      {{#ted-gear-item}}
        an item
      {{/ted-gear-item}}
    {{/ted-gear}}
  `);

  assert.equal(this.$('.Ted-gear-item:visible').length, 0);

  this.$('.Ted-gear__toggle').click();

  assert.equal(this.$('.Ted-gear-item:visible').length, 1);
});

test('it should allow align the menu to the right of the gear', function(assert) {
  this.render(hbs`
    {{#ted-gear align="right"}}
      {{#ted-gear-item}}
        an item
      {{/ted-gear-item}}
    {{/ted-gear}}
  `);

  assert.equal(this.$('.Ted-gear .dropdown-menu-right').length, 1);
});
