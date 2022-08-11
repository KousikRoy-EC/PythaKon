import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Post from "./posts";
const Home = () => {
    const [note, setNote] = useState({
        Name: "",
        Post: "",
        comment: [],
        L: 0,
        DL: 0,
        Like: true,
        DisLike: true,
        time: 0,
    });
    const [noteArray, setnoteArray] = useState([])
    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
                time: new Date().getTime(),
            };
        });
    }

    function submitNote(event) {
        // props.dispatch(addNote(note));
        setnoteArray((prevNote) => {
            return ([...noteArray, note])
        });
        console.log(note);
        setNote({
            Name: "",
            Post: "",
            comment: [],
            L: 0,
            DL: 0,
            time: 0,
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note" action="/post" method="post" >
                <input
                    required
                    style={{
                        border: "1px solid rgba(0,0,0,.125)",
                        borderRadius: "5px",
                        margin: "5px 0px",
                    }}
                    name="Name"
                    onChange={handleChange}
                    value={note.Name}
                    placeholder="Name"
                />

                <textarea
                    required
                    style={{
                        border: "1px solid rgba(0,0,0,.125)",
                        borderRadius: "15px",
                        margin: "5px 0px",
                    }}
                    name="Post"
                    type="text"
                    onChange={handleChange}
                    value={note.Post}
                    placeholder="What's happening ? . . . "
                    rows={3}
                />

                <button type="submit" className="D-btn">
                    <span>Post</span>
                    <FaArrowAltCircleRight style={{ marginLeft: "5px" }} />
                </button>
            </form>

            {noteArray.map((noteItem, index) => {
                return (
                    <Post
                        key={index}
                        id={index}
                        Name={noteItem.Name}
                        Post={noteItem.Post}
                        Likes={noteItem.L}
                        DisLikes={noteItem.DL}
                        tm={noteItem.time}
                        SLike={noteItem.Like}
                        SDisLike={noteItem.DisLike}
                    />
                );
            })}
        </div>
    );
};

export default Home;
