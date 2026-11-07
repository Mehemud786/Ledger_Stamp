// api/get-password.js
export default function handler(req, res) {
    // Returns the password stored in Vercel Environment Variables
    res.status(200).json({ password: process.env.PDF_PASSWORD });
}