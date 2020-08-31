const TravelRouteService = require( '../service/travel-route.service' );

travelService = () => {
    return new TravelRouteService();
}

const TravelRouteController = {

    async create( req, res, next ) {

        try {

            const travelRoute = await travelService().create( req.body );
            res.status( 200 ).json( travelRoute );

        } catch ( error ) {

            next( error );

        }

    },

    async find( req, res, next ) {

        try {

            const travelRoutes = await travelService().find();
            res.status( 200 ).json( travelRoutes );

        } catch ( error ) {

            next( error );

        }

    },

    async update( req, res, next ) {

        try {

            //const travelRoute = await travelService().update( req.query, req.body );
            //res.status( 200 ).json( travelRoute );     
            res.status( 200 ).json( 'Rotina não implementada.' );           

        } catch ( error ) {

            next( error );

        }

        next();

    },

    async remove( req, res, next ) {

        try {

            //const travelRoute = await travelService().update( req.query, req.body );
            //res.status( 200 ).json( travelRoute );     
            res.status( 200 ).json( 'Rotina não implementada.' );           

        } catch ( error ) {

            next( error );

        }

        next();

    },

    async bestRoute( req, res, next ) {

        try {

            const { route } = req.params;
            const travelRoute = await travelService().bestRoute( route );
            res.status( 200 ).json( travelRoute );           

        } catch ( error ) {

            next( error );

        }

        next();

    }



}

module.exports = TravelRouteController;