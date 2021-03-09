import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld( request: Request, response: Response ) {

    const user = createUser({
        email: 'ivano@winkel.com,br',
        password: '12345',
        techs: [
            'NodeJS', 
            'Java', 
            'ReactJS',
            { title: 'NodeJS', experience: 100 }
        ],
    });

    return response.json({ message: 'Hello World' });

}