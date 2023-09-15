import { hash } from 'bcryptjs';
import { connect } from '../../utils/db';
import { sign } from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await hash(password, 10);

  const connection = await connect();

  try {
    const [result] = await connection.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );

    const userId = result.insertId;

    // Create a JWT token and send it in the response
    const token = sign({ userId, username }, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  } finally {
    connection.end();
  }
}
