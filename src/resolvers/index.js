const resolvers = {
  video: () => ({
    id: '1aec',
    title: 'bar',
    duration: 180,
    watched: true,
  }),
  videos: () => [{
    id: '1aec',
    title: 'bar',
    duration: 180,
    watched: true,
  }, {
    id: '2aec',
    title: 'b2ar',
    duration: 280,
    watched: true,
  }]
};


module.export = { resolvers };
