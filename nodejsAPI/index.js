const http = require('http');
//for express
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/files/Resume', (req, res) => {
    const pdfPath = path.join(__dirname, 'assets', 'Resume1.0.pdf');
    
    // Set response headers to indicate a PDF file
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Resume1.0.pdf"');
  
    // Send the PDF file as a response
    res.sendFile(pdfPath);
  });

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/files/Resume', (req, res) => {
    res.send('Return Resume')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })