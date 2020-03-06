'use strict'

const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: "gameshop"
})

db.connect((err) => {
    if (err) throw err
    console.log('Database connected')
})

const createBooksTable = () => {
    let sql = `
        create table games (
            id int unsigned auto_increment primary key,
            title varchar(255) not null,
            genre varchar(255) not null,
            year int unsigned not null,
            stock int unsigned default 0,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp null on update current_timestamp
        )
    `

    db.query(sql, (err, result) => {
        if (err) throw err

        console.log('Table games has been created!')
    })
}

const createUsersTable = () => {
    let sql = `
        create table users (
            id int unsigned auto_increment primary key,
            username varchar(100) not null,
            password varchar(255) not null,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp null on update current_timestamp
        )
    `

    db.query(sql, (err, result) => {
        if (err) throw err

        console.log('Table users has been created!')
    })
}

const createUserBookTable = () => {
    let sql = `
        create table user_games (
            id int unsigned auto_increment primary key,
            user_id int not null,
            games_id int not null,
            created_at timestamp default current_timestamp
        )
    `

    db.query(sql, (err, result) => {
        if (err) throw err

        console.log('Table user_games has been created!')
    })
}

createBooksTable()
createUsersTable()
createUserBookTable()
