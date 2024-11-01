import "../styles.css";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";


function App() {
  return (
    <div>
    <Header />
    {notes.map(noteItem => <Note key = {noteItem.key} name = {noteItem.title} content = {noteItem.content} />)}
    <Footer />
    </div>
  )
}


export default App;
