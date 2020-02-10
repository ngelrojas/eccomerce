const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'Jaquets',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 2,
      linkUrl: 'jaquets',
    },
    {
      title: 'hasts',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 3,
      linkUrl: '',
    },
    {
      title: 'hasts',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 4,
      size: 'large',
      linkUrl: '',
    },
    {
      title: 'hasts',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 5,
      size: 'large',
      linkUrl: '',
    },
  ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
