import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ted-gear-header', 'Integration | Component | ted gear header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ted-gear-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ted-gear-header}}
      template block text
    {{/ted-gear-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
