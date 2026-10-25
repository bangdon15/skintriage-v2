const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Mock storage for demo submissions
const submissions = [
  {
    id: 'ST-9482',
    date: '2026-10-24',
    status: 'Reviewed',
    reviewer: 'Dr. Sarah Jensen, MD (FAAD)',
    triageCategory: 'Low Risk - Routine Monitoring',
    notes: 'No asymmetric borders or irregular pigmentation observed. Recommend annual full-body skin exam.'
  },
  {
    id: 'ST-9501',
    date: '2026-10-25',
    status: 'In Review',
    reviewer: 'Dr. Michael Chang, MD (Derm)',
    triageCategory: 'Priority Clinical Evaluation',
    notes: 'Undergoing secondary dermatoscope analysis.'
  }
];

// In-memory API
app.post('/api/submit', (req, res) => {
  const newId = 'ST-' + Math.floor(1000 + Math.random() * 9000);
  const newSubmission = {
    id: newId,
    date: new Date().toISOString().split('T')[0],
    status: 'Received',
    reviewer: 'Assigned to Board-Certified Reviewer',
    triageCategory: 'Pending Evaluation',
    data: req.body
  };
  submissions.push(newSubmission);
  res.json({ success: true, trackingId: newId, message: 'Screening submission received successfully.' });
});

app.get('/api/track/:id', (req, res) => {
  const found = submissions.find(s => s.id.toUpperCase() === req.params.id.toUpperCase());
  if (found) {
    res.json({ success: true, data: found });
  } else {
    res.status(404).json({ success: false, message: 'No screening found with this Request ID.' });
  }
});

// Clean URLs
app.get('/submit', (req, res) => res.sendFile(path.join(__dirname, 'submit.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/for-dermatologists', (req, res) => res.sendFile(path.join(__dirname, 'for-dermatologists.html')));
app.get('/for-employers', (req, res) => res.sendFile(path.join(__dirname, 'for-employers.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));
app.get('/my-screenings', (req, res) => res.sendFile(path.join(__dirname, 'my-screenings.html')));
app.get('/privacy', (req, res) => res.sendFile(path.join(__dirname, 'privacy.html')));
app.get('/terms', (req, res) => res.sendFile(path.join(__dirname, 'terms.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`Skin Triage Clinical Platform running at http://localhost:${PORT}`);
});
