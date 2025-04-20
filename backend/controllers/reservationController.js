const Reservation = require('../models/reservationModel');
const { sendReservationConfirmation } = require('../utils/mail');

exports.createReservation = async (req, res) => {
    try {
        const { name, phone, date, time, people, table, requests } = req.body;
        
        // Basic validation
        if (!name || !phone || !date || !time || !people || !table) {
            return res.status(400).json({ error: 'All required fields must be filled' });
        }

        // Create reservation
        const reservationId = await Reservation.create({
            name, phone, date, time, 
            people: parseInt(people),
            table, requests
        });

        // Send confirmation email
        await sendReservationConfirmation(
            'restaurant@example.com', // Or req.user.email if authenticated
            {
                id: reservationId,
                name,
                date,
                time,
                people,
                table
            }
        );

        res.json({ 
            success: true, 
            reservationId,
            message: 'Reservation created successfully' 
        });

    } catch (error) {
        console.error('Reservation error:', error);
        res.status(500).json({ error: 'Failed to create reservation' });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.getAll();
        res.json({ success: true, data: reservations });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reservations' });
    }
};