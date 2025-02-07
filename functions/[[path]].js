import { createPagesFunctionHandler } from '@remix-run';

import * as build from '../build/server';

export const onRequest = createPagesFunctionHandler({ build });
