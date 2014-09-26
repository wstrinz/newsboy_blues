import DS from 'ember-data';

var Story = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  story_content: DS.attr('string')
});

Story.reopenClass({
  FIXTURES: [
    { id: 1,
      title: 'Local Web Consultancy Fights Off Alien Invasion, Saves Kitten',
      url: 'http://www.bendyworks.com',
      story_content: 'Continuing their streak of epic daring do, crime fighting outfit Bendyworks has...' },
    { id: 2,
      title: 'Teach Your Cat To Fly With This One Weird Trick',
      url: 'http://en.wikipedia.org/wiki/Anti-gravity',
      story_content: "You'll never believe..." }
  ]
});

export default Story;
