

export interface Config {
    port                :   number
    databaseUrl         :   string,
    jwt_secret          :   string
}

// Errors
export type CustomError = Error & {
    statusCode?: number;
    status?: string;
    isOperational?: boolean;
  };