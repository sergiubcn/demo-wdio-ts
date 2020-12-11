import knex from 'knex';
import fs from 'fs';

interface ConnectionInfo {
    dbName: string;
    dbUser: string;
    dbPass: string;
    dbHost: string;
    dbPort: number;
    dbClient: string;
}

interface Result {
    method: string;
    sql: any;
    binding: any;
}

export default class Database {
    private name: string;
    private user: string;
    private pass: string;
    private host: string;
    private port: number;
    private client: string;
    private connection: any;

    constructor({ dbName, dbUser, dbPass, dbHost, dbPort, dbClient }: ConnectionInfo) {
        this.name = dbName;
        this.user = dbUser;
        this.pass = dbPass;
        this.host = dbHost;
        this.port = dbPort;
        this.client = dbClient;
        this.connection = null;
    }

    /**
     * Establishes a connection to the database.
     */
    connect(): void {
        if (this.host.includes(':')) {
            const split = this.host.split(':');

            this.host = split[0];
            this.port = parseInt(split[1], 10);
        }

        this.connection = knex({
            client: this.client,
            connection: {
                database: this.name,
                host: this.host,
                password: this.pass,
                port: this.port,
                user: this.user,
            },
            pool: { max: 5, min: 0 },
        });
    }

    /**
     * Executes a raw SQL query and returns the results.
     * @param query The SQL query to execute.
     * @param param Parameters to be passed to the query.
     */
    executeRawQuery(query: string, param: Array<number | string>): Result {
        return this.connection.raw(query, param).catch(function (error: any) {
            console.error(error);
        });
    }

    /**
     * Executes a SQL query from a file and returns the results.
     * @param fileName The name of the file containing the query.
     * @param param An array of parameters to be passed to the query.
     */
    executeFileQuery(fileName: string, param: Array<number | string>): Result {
        const query = fs.readFileSync('utils/db/queries/' + fileName + '.sql').toString();
        return this.executeRawQuery(query, param);
    }
}
