const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// Pour hacher les mots de passe (à utiliser dans un projet de production)
// const bcrypt = require('bcrypt'); 

// Modèle utilisateur
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Stocker le mot de passe en texte brut (non recommandé)
    hospital: { type: String },
    specialty: { type: String },
    role: { type: String, enum: ['patient', 'doctor'], default: 'patient' },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

const app = express();
const PORT = 5000; // Port par défaut

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/etomady', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Route d'inscription
app.post('/api/register', async (req, res) => {
    const { firstName, lastName, address, email, password, hospital, specialty, role } = req.body;

    try {
        // Hachage du mot de passe (non utilisé dans cet exemple mais recommandé)
        // const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            address,
            email,
            password, // À remplacer par hashedPassword dans un projet de production
            hospital,
            specialty,
            role
        });

        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
    }
});

// Route de connexion
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérification du mot de passe
        // Dans un projet de production, vous devriez décommenter la ligne suivante pour comparer les mots de passe hachés
        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = user.password === password; // Vérification simple en texte brut (à éviter en production)

        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Authentification réussie
        res.status(200).json({ message: 'Connexion réussie', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur de connexion', error });
    }
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
