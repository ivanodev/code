import { isEqual } from 'date-fns';
import Appointment from "../models/Appointment";

// Repositório é o intermediario entre a rota e persistência do dados
// DTO - data transfer object usado para trafegar informações de um lugar para outro dentro de nossa aplicação

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepositoty {

    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate( date: Date ): Appointment | null {

        const findAppointment = this.appointments.find( appointment =>
            isEqual( date, appointment.date )
        );

        return findAppointment || null;

    }

    //public create( provider: string, date: Date ): Appointment {
    //public create( data: CreateAppointmentDTO ): Appointment {
    public create({ provider, date }: CreateAppointmentDTO): Appointment { // passagem de parâmetro nomeado

        //const appointment = new Appointment( provider, date );
        //const appointment = new Appointment( data.provider, data.date );
        const appointment = new Appointment({ provider, date });
        this.appointments.push( appointment );

        return appointment;

    }
}

export default AppointmentsRepositoty;