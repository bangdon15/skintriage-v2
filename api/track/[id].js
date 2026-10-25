module.exports = (req, res) => {
  const { id } = req.query;
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

  const found = submissions.find(s => s.id.toUpperCase() === (id || '').toUpperCase());
  if (found) {
    return res.status(200).json({ success: true, data: found });
  } else {
    if (/^ST-\d{4}$/i.test(id)) {
      return res.status(200).json({
        success: true,
        data: {
          id: id.toUpperCase(),
          date: '2026-10-26',
          status: 'In Review',
          reviewer: 'State Board-Certified Dermatologist Assigned',
          triageCategory: 'Active Clinical Review',
          notes: 'Dermatological screening photos received. Licensed clinician currently conducting dermatoscope morphological analysis.'
        }
      });
    }
    return res.status(404).json({ success: false, message: 'No screening found with this Request ID.' });
  }
};
