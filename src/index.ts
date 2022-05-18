import { runGame } from '@/game/runGame';

bootstrapApp();

function bootstrapApp() {
  const { body } = document;
  body.style.width = '100%';
  body.style.height = '100%';
  body.style.margin = '0';
  body.style.position = 'fixed';

  runGame(body);
}
