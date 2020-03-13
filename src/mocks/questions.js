export default [
  {
    type: `artist`,
    song: {
      artist: `X Ambassadors`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        artist: `X Ambassadors`,
        picture: `https://api.adorable.io/avatars/128/${Math.random()}`,
      },
      {
        artist: `Bastille`,
        picture: `https://api.adorable.io/avatars/128/${Math.random()}`,
      },
      {
        artist: `Imagine Dragons`,
        picture: `https://api.adorable.io/avatars/128/${Math.random()}`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `инди-рок`,
    answers: [
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `инди-рок`,
      },
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `рок`,
      },
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `джаз`,
      },
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `фолк`,
      },
    ],
  },
];
