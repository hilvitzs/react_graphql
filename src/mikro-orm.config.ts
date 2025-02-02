// import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

// export default {
export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        // brackets mean that it can match t or j
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: 'lireddit',
    // driver: PostgreSqlDriver,
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
