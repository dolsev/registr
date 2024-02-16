// pages/api/registration.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone } = req.body;

        if (!firstName || !lastName || !email || !phone) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!isValidPhoneNumber(phone)) {
            return res.status(400).json({ error: 'Invalid phone number format' });
        }

        return res.status(200).json({ message: 'Data successfully received and processed' });
    } else {
        return res.status(405).json({ error: 'Method not supported' });
    }
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
