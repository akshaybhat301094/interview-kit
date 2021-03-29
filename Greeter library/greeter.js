// This is an example for creating a custom library like jquery

// want to use a custom object like G$ for this library G$(firstname, lastname, language)

// setup safe code
(function (global, $) {
  // setup object and prototype

  // calling the new inside this so the user does not have to call a new keyword everytime he/she invokes a function of this library
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  // won't be exposed to outside  world :- for internal use only
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
  };

  // anything inside this will be exposed to outside world
  Greeter.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.fullName();
    },
    greet: function (formal) {
      var msg;
      // if undefined or null it will be coerced to false
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // this refers to the calling object at execution time
      // makes the method chainable
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ' ' + this.fullName());
      }

      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) throw 'missing jquery selector';

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    },
  };

  // constructor function
  Greeter.init = function (firstName, lastName, language) {
    var self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  };

  // setting its prototype to original so all the methods created reference the Greeter.init prototype
  Greeter.init.prototype = Greeter.prototype;

  // setting up the object in the global space along with the alias G$, so it can be accessed from outside
  global.Greeter = global.G$ = Greeter;
})(window, $);
