"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flight_search_component_1 = require("./flight-search/flight-search.component");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking.component");
exports.FLIGHT_BOOKING_ROUTES = [
    {
        path: 'flight-booking',
        component: flight_booking_component_1.FlightBookingComponent,
        children: [
            {
                path: 'flight-search',
                component: flight_search_component_1.FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent
            }
        ]
    }
];
//# sourceMappingURL=flight-booking.routes.js.map