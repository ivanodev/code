import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentRespository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

// A rota deve ter apenas um responsabilidade. Receber a requisição, delegar para o arquivo que irá tratar
// a requisição e devolver a resposta para que chamou a rota. Por isso, as regras de negócio devem ser
// passadas para o arquivo de service

const appointmentsRouter = Router();
const appointamentRepository = new AppointmentRespository();

appointmentsRouter.get( '/', ( request, response ) => {

  const appointments = appointamentRepository.all();
  return response.json( appointments );

});

appointmentsRouter.post('/', ( request, response ) => {
    try {

        const { provider, date } = request.body;

        //const parsedDate = startOfHour( parseISO( date ) );
        const parsedDate = parseISO( date );

        const createAppointmentService = new CreateAppointmentService(
            appointamentRepository
        );

        const appointment = createAppointmentService.execute({
            provider,
            date: parsedDate
        });

    } catch ( err ) {
        return response.status(400).json({ error: err.message });
    }


    /* código passado para o service por ser regra de negócio
    const appointmentDate = startOfHour( parsedDate ); */


    /* código passado para o repository
    const findAppointmentIsSameDate = appointments.find( appointment =>
        isEqual( parsedDate, appointment.date )
    );
    */

   /* código passado para o service por ser regra de negócio 
   const findAppointmentIsSameDate = appointamentRepository.findByDate( parsedDate );

    if ( findAppointmentIsSameDate ) {

        return response.status( 400 ).json({ 
            message: 'This appointament is already booked.'
        });
    }

    //const appointment = appointamentRepository.create(provider, parsedDate);
    const appointment = appointamentRepository.create({
        provider,
        //date: parsedDate
        date: appointmentDate
    });*/

    return response.json( appointment );

});

export default appointmentsRouter;