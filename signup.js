export default function signup() {
    const signupPath = '/signup';
    app.post('/signup', (req, res) => {
        const { username, password, email, dob } = req.body;
        if (!username) {
            return res.status(400).send({ error: 'Username cannot be empty' });
        }

        if (!email) {
            return res.status(400).send({ error: 'Email cannot be empty' });
        }
        if (password.length < 8 || password.length > 16) {
            return res.status(400).send({ error: 'Password must be between 8 and 16 characters' });
        }
        console.log({ username, password, email, dob });
        res.send({ message: 'User signed up successfully' });
    });

    return (
        <div>
            <h1>Signup</h1>
            <form action="/signup" method="POST">
                <input type="text" name="username" placeholder="Username" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="date" name="dob" />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

