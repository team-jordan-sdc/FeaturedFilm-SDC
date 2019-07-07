const seed = require('./seeder')

test('the movie list has given movie', async() => {
  expect(seed.movieNames).toContain('Amelie');
});

test('the seeded list has 100 entires', async()=> {
  seed.db.query(`USE featurefilm`);
  seed.db.query(`select title from Features`, (err, res)=>{
    expect(res.length).toEqual(100);
    //done();
  });
});

test('the seeded db should contain titles from provided names',async()=>{
  //seed.db.query(`USE featurefilm`);
  seed.db.query(`select title from Features`, (err, res)=>{
    expect(seed.movieNames).toContain(res[2].title);

  });
});

test('the seeded db should have genres from provided tags', async()=>{
  seed.db.query(`select category_1 from Features`, (err, res)=>{
    expect(seed.tagsArray).toContain(res[2].category_1);
  })
})