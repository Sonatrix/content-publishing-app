module.exports = {
  getCities: (req, res, next) =>
    res.json([
      {
        name: 'Delhi',
        id: 1,
      },
      { name: 'Mumbai', id: 2 },
    ]),
  getShows: (req, res, next) =>
    res.json([
      {
        name: 'Singing',
        timings: [{ time: '12' }, { time: '13' }],
        id: 1,
      },
      { name: 'Dance', id: 2, timings: [{ time: '12' }, { timings: '13' }] },
    ]),
};
