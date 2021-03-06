import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-fab-action-item', 'Integration | Component | paper fab action item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-fab-action-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-fab-action-item}}
      template block text
    {{/paper-fab-action-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
