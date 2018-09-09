export default function (window) {
  function isAvailable(name) {
    try {
      var unique = 'testStorage' + Date.now();
      var st = window[name];
      st.setItem(unique, unique);
      var value = st.getItem(unique);
      st.removeItem(unique);
      if (value !== unique) {
        throw 'not equal'; //eslint-disable-line no-throw-literal
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  var storage = void 0;
  if (isAvailable('localStorage')) {
    storage = window.localStorage;
  } else if (isAvailable('sessionStorage')) {
    storage = window.sessionStorage;
  } else {
    storage = {
      setItem: function setItem() {},
      getItem: function getItem() {},
      removeItem: function removeItem() {}
    };
  }

  return {
    save: function save(key, value) {
      storage.setItem(key, value);
    },
    load: function load(key) {
      return storage.getItem(key);
    },
    remove: function remove(key) {
      storage.removeItem(key);
    }
  };
};
