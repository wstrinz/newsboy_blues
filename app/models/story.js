import DS from 'ember-data';

var Story = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  story_content: DS.attr('string')
});

export default Story;
