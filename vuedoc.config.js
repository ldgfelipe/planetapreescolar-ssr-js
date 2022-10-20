// vuedoc.config.js
import { Loader } from '@vuedoc/parser';
import { PugLoader } from '@vuedoc/parser/loaders/pug';

export default {
  output: 'docs/',
  parsing: {
    features: ['name', 'description', 'keywords', 'slots', 'model', 'props', 'events', 'methods'],
    loaders: [
      Loader.extend('pug', PugLoader),
    ],
  },
};