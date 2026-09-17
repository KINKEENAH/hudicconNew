const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const statsRoutes = require('./routes/statsRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

console.log("contactRoutes:", contactRoutes);
console.log("eventsRoutes:", eventsRoutes);
console.log("statsRoutes:", statsRoutes);
console.log("newsletterRoutes:", newsletterRoutes);

const app = express();

app.use(cors({
  origin: [
     "http://localhost:5173",
      process.env.CLIENT_URL
  ]
}));
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hudiccon API is running' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log('contactRoutes:', contactRoutes);
console.log('eventsRoutes:', eventsRoutes);
console.log('statsRoutes:', statsRoutes);
console.log('newsletterRoutes:', newsletterRoutes);
