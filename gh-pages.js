import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Cour-de-cassation/judilibre-stats.git',
  user: {
   name: 'Fabien ANTOINE',
   email: 'fabien.antoine@m4x.org'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
