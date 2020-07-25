const fs = require("fs");
const util = require("util");
const uuid = require("uuidv1")
const db = require("./db.json")
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
console.log(db)


class Store {
    read(){
        return readFile(db, "utf8")
    }
    write(note){
        return writeFile(db, JSON.stringify(note))
    }
    getNotes(){
      return this.read().then(notes =>{
        let parseNote; 
        //metodo de arreglo//
        try {
            parseNote = [].concat(JSON.parse(notes))
        } catch (error) {
         parseNote = [];   
        }
        return parseNote;
      })
    }
    addNotes(note){
        const {title, text} = note;
        if(!title || !text){
            throw new Error("Valedor te falta el texto ñero!")
        }
       const newNote = {
           title,
           text,
           id: uuid(),
       }
       return this.getNotes()
       .then(notes =>[...notes, newNote]) //copia actual de notas//
       .then(updateNotes => this.write(updateNotes))
       .then(()=> newNote)
    }
};



