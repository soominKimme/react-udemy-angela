/////////////////////////////////////////////////
// 408-409. Keeper App Project - Part 1 Challenge

import React from "react";

//Remember that when you're using HTML attributes => They can only be applied to HTML elements. NOT your custom created React elements.(e.g. <Footer className="note"/> (x!!!))

function Note() {
    return <div className="note">
        <h1>This is the note title</h1>
        <a>This is the note content</a>
    </div>
}

export default Note;