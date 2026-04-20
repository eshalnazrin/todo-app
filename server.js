cat > server.js << 'EOF'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sample.html');
});

app.listen(port, '0.0.0.0', () => console.log('Server running on port ' + port));
EOF