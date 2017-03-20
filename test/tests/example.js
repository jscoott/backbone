describe("Simple tests examples", function () {

  it("should fail", function () {
    assert.equal(false, false);
  });

  it("should detect true", function () {
    assert.equal(true, true);
  });

  it("should increments values", function () {
    let mike = 0;

    assert.equal(mike++ === 0, true);
    assert.equal(mike === 1, true);
  });

  it("should increments values (improved)", function () {
    let mike = 0;

    assert.equal(mike++, 0);
    assert.equal(mike, 1);
  });

});

describe("Tests with before/after hooks", function () {
  let a = 0;

  beforeEach(function () {
    a++;
  });

  afterEach(function () {
    a = 0
  });

  it("should increment value", function () {
    assert.equal(a, 1);
  });

  it("should reset after each test", function () {
    assert.equal(a, 1);
  });
});

describe("Async tests", function () {
  it("should wait timer", function (done) {
    setTimeout(function () {
      assert.equal(true, true);
      done();
    }, 500);
  });
});
