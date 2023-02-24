//Lazy initialization

const [notes, setNotes] = React.useState(() =>
    JSON.parse(localStorage.getItem("notesArray")) ||[])
const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
)

React.useEffect(() =>{
   localStorage.setItem("notesArray",JSON.stringify(notes))
},[notes])