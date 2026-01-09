const App = {
  respond(text) {
    Memory.store(text);

    return Router.route(text);
  }
};

Updates.init();