import { uuid } from 'uuidv4';

// Model é a forma como um dado é composto em nossa aplicação

class Appointment {

    id: string;

    provider: string

    date: Date;

    //constructor( provider: string, date: Date ) {
    constructor({ provider, date }: Omit<Appointment, 'id'> ) { // Recebe as propriedades da interface Appoitament meno o ID
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
    
}

export default Appointment;