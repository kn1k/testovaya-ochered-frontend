import { moduleForModel, test } from 'ember-qunit';

moduleForModel('участник', 'Unit | Serializer | участник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:участник',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:участник'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
