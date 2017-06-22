// This is the only HTML controller - all other HTML routes are handled by React Router

module.exports = (app) => { 
    app.get("/", (req, res) => res.sendFile('../public/index.html'));
}