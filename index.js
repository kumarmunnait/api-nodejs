const express = require("express");
const users = require("./json/data.json")
const app = express();
const port = 8000;

// APIs routers 

// retun all user as document html 
app.get("/", (req, res) => {
    const html =
        `
        <ul>
        ${users.map((item) => `<li>${item.first_name}</li>`).join("")}
        </ul>
    `
    return res.send(html);
})

// APIs to get all users
app.get("/api/users", (req, res) => {
    return res.json(users);
})

// APIs to find single user
app.get("/api/users/:id", (req, res) => {
    let id = Number(req.params.id);
    let user = users.find((item) => item.id === id)
    return res.json(user);
})

// APIs to edit single user
app.patch("/api/user/edit/:id", (req, res) => {
    // TODO EDIT USER
    let id = Number(req.params.id);
    return res.json({ status: "pending" });
})

// APIs to delete single user
app.delete("/api/delete/users/:id", (req, res) => {
    // TODO DELETE USER
    let id = Number(req.params.id);
    return res.json({ status: "pending" });
})

// if route is same (/api/users/:id) for all methods then we can write code in short form like 

// app.route("/api/users/:id")
//     .get((req, res) => {
//         let id = Number(req.params.id);
//         let user = users.find((item) => item.id === id)
//         return res.json(user);
//     })
//     .patch((req, res) => {
//         return res.json({ status: "pending" });
//     })
//     .delete((req, res) => {
//         return res.json({ status: "pending" });
//     });


// APIs to add single user
app.post("/api/add-user", (req, res) => {
    // TODO CREATE NEW USER
    return res.json({ status: "pending" });
})

// run server
app.listen(port, () => console.log(`server is running on, ${port}`));