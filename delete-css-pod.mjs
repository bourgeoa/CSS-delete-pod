#!/usr/bin/env node
// #!/usr/bin/env node --no-warnings
// ©2023 Ruben Verborgh – MIT License

import assert from 'node:assert';
import { resolve } from 'node:path';
import { promisify } from 'node:util';
import * as childProcess from 'node:child_process';
import { lstat, readdir, readFile, writeFile } from 'node:fs/promises';
// import fs from 'node:fs'

const execFile = promisify(childProcess.execFile);

const expectedArgs = {
  'podEmail' : 'email of pod to be deleted'
};

const passwordHashStart = '$2a$10$';

main(...process.argv).catch(console.error);
