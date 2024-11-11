import express from 'express';
import { connectLibraryDB } from '../database/dispatcherdb.ts';
import { useGlobalSetters } from './set/index.ts';
import { useGlobalMiddlewares } from './use/dev/index.ts';

export const app = express();

connectLibraryDB();
useGlobalSetters();
useGlobalMiddlewares();
