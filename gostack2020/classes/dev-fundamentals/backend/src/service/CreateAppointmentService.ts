// Service contém a regra de negócio de nossa aplicação
// Cada serviço deve ter uma unicamente e exclusiva functionalidade, responsabilidade
// O service deve ter apenas um método publico, o qual realiza aquilo que é a responsabilidade do service
// Este serviço tem apenas a respomsabilidade de criar um agendamento
// Toda lógica de criação do agendamento deve estar neste classe
// Não confundir transformação de dado e regra de negócio
// O service não deve ter acesso direto aos dados da requisição de da resposta

import Appointement from '../models/Appointment';
import { startOfHour } from 'date-fns';
import AppointmentsRepositoty from '../repositories/AppointmentsRepository';

interface Request { // Este request é um DTO embora não tenha a sigla no nome
    provider: string;
    date: Date;
}

/**
 * Dependency Inversion
 * O service depende e um classe externa, no caso, o appointmentRepository, em vez de intanciá-la dentro
 * do service, o service receberá uma instância de appointmentRepository como um parâmetro do construcor
 * da classe. Isso é para garantir que, independentemente de quantos services estiverem usando appointmentRepository,
 * estejam usando a mesma instância.
 */

class CreateAppointmentService {

    private appointamentsRepository: AppointmentsRepositoty;

    constructor( appointamentsRepository: AppointmentsRepositoty ) {

        this.appointamentsRepository = appointamentsRepository;

    }

    public execute({ provider, date }: Request ): Appointement {

        const appointmentDate = startOfHour( date );

        const findAppointmentIsSameDate = this.appointamentsRepository.findByDate( 
            appointmentDate 
        );

        if ( findAppointmentIsSameDate ) {
            throw Error('This appointament is already booked.');
        }

        //const appointment = appointamentRepository.create(provider, parsedDate);
        const appointment = this.appointamentsRepository.create({
            provider,
            //date: parsedDate
            date: appointmentDate
        });

        return appointment;

    }
    
}

export default CreateAppointmentService;