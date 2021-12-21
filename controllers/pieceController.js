let Room = require('../models/pieceModel.js');

let pieceList = [];

var mysql = require("mysql");
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'bd'
});
connection.connect(function(error) {if (error) console.log(error);});

exports.Accueil = function(request, response){
    response.render('piece.ejs');
}

exports.Encode = function(request, response){
    let nomPiece = request.body.piece;
    let largeur = Number(request.body.largeur);
    let longueur = Number(request.body.longueur);
    let room = new Room(nomPiece, largeur, longueur);
    pieceList.push(room);
    console.log(room);
    connection.query('INSERT into rooms (name, length, width) VALUES (?)', room, function(err, result) {
        if (err) console.log(err);
        else{
            response.redirect('/appart');
        }
    })
}

exports.Appart = function(request, response){
    connection.query("select * from rooms;", function(error, result) {
        if (error) console(error);
        else{
            response.render('appartement.ejs', {todot: result});
        }
    });
}