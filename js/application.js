window.Todos = Ember.Application.create();

// Local storage adapter (browser)
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});

// Fixture adapter (hard coded)
//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
