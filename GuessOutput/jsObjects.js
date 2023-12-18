const hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

const stoleSecretIdentity = hero.getSecretIdentity;
// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
