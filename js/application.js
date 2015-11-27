window.Todos = Ember.Application.create();

// Use fixture adapter (browser memory cache)
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
