const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
})