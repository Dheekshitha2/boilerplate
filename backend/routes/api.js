const express = require('express');

module.exports = function (supabase) {
    const router = express.Router();

    // Define your routes here
    router.get('/users', async (req, res) => {
        // Example: Fetch all users from your Supabase table
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) res.status(400).send(error);
        else res.status(200).json(data);
    });

    router.post('/users', (req, res) => {
        // Handle POST request for creating a new user
    });

    router.put('/users/:id', (req, res) => {
        // Handle PUT request for updating a user by ID
    });

    router.delete('/users/:id', (req, res) => {
        // Handle DELETE request for deleting a user by ID
    });

    return router;
};
