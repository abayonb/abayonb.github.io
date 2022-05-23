const pathToImage = `${process.env.PUBLIC_URL}/assets/pictures/personal-shoppers`;

export const getWhatCanYouExpectConfig = countryActive => ({
  content: [
    {
      image: {
        src: `${pathToImage}/picture--case-studies--1.jpg`,
        srcSet: `${pathToImage}/picture--case-studies--1_2x.jpg 2x`,
      },
      personal_shopper: {
        name: 'home.expect.example1_ps_name',
        position: 'home.expect.example1_ps_position',
        avatar: {
          src: `${pathToImage}/avatar/${countryActive}/1.jpg`,
          srcSet: `${pathToImage}/avatar/${countryActive}/1_2x.jpg 2x`,
        },
      },
      experience: {
        title: 'home.expect.example1_user',
        summary: 'home.expect.example1_comment',
      },
      selections: [
        'home.expect.example1_selection_1',
        'home.expect.example1_selection_2',
        'home.expect.example1_selection_3',
        'home.expect.example1_selection_4',
        'home.expect.example1_selection_5',
      ],
    },

    {
      image: {
        src: `${pathToImage}/picture--case-studies--2.jpg`,
        srcSet: `${pathToImage}/picture--case-studies--2_2x.jpg 2x`,
      },
      personal_shopper: {
        name: 'home.expect.example2_ps_name',
        position: 'home.expect.example2_ps_position',
        avatar: {
          src: `${pathToImage}/avatar/${countryActive}/2.jpg`,
          srcSet: `${pathToImage}/avatar/${countryActive}/2_2x.jpg 2x`,
        },
      },
      experience: {
        title: 'home.expect.example2_user',
        summary: 'home.expect.example2_comment',
      },
      selections: [
        'home.expect.example2_selection_1',
        'home.expect.example2_selection_2',
        'home.expect.example2_selection_3',
        'home.expect.example2_selection_4',
        'home.expect.example2_selection_5',
      ],
    },

    {
      image: {
        src: `${pathToImage}/picture--case-studies--3.jpg`,
        srcSet: `${pathToImage}/picture--case-studies--3_2x.jpg 2x`,
      },
      personal_shopper: {
        name: 'home.expect.example3_ps_name',
        position: 'home.expect.example3_ps_position',
        avatar: {
          src: `${pathToImage}/avatar/${countryActive}/3.jpg`,
          srcSet: `${pathToImage}/avatar/${countryActive}/3_2x.jpg 2x`,
        },
      },
      experience: {
        title: 'home.expect.example3_user',
        summary: 'home.expect.example3_comment',
      },
      selections: [
        'home.expect.example3_selection_1',
        'home.expect.example3_selection_2',
        'home.expect.example3_selection_3',
        'home.expect.example3_selection_4',
        'home.expect.example3_selection_5',
      ],
    },
  ],
});
