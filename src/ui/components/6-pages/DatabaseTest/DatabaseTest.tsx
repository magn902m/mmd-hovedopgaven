import React, { useRef, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { child, get } from "firebase/database";
import { push, update } from "firebase/database";
// Read more about the api calls: https://firebase.google.com/docs/database/web/read-and-write#web-version-9_1

export default function DatabaseTest() {
  const [profil, setProfil] = useState({
    username: "",
    profile_picture: "",
    email: "",
  });
  // useFirestore will get the firebase app from Context!
  const formPostElm = useRef(null);
  const formGetElm = useRef(null);
  const formPutDeleteElm = useRef(null);

  function submittedPost(e: { preventDefault: () => void }) {
    console.log("submittedPost");
    e.preventDefault();

    const postData = {
      userId: "Asefeh",
      name: "Asefeh",
      email: "coolfish@gmail.com",
      imageUrl: "a picture",
    };

    function writeUserData(postData: {
      userId: string;
      name: string;
      email: string;
      imageUrl: string;
    }) {
      const db = getDatabase();
      set(ref(db, "users/" + postData.userId), {
        username: postData.name,
        email: postData.email,
        profile_picture: postData.imageUrl,
      });
    }

    writeUserData(postData);
  }

  function submittedGet(e: { preventDefault: () => void }) {
    console.log("submittedGet");
    e.preventDefault();

    const dbRef = ref(getDatabase());
    // get(child(dbRef, `users/${userId}`))
    get(child(dbRef, `users/Asefeh`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setProfil(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function submittedPutDelete(e: { preventDefault: () => void }) {
    console.log("submittedGet");
    e.preventDefault();

    // A post entry.
    const postData = {
      userId: "Asefeh",
      name: "Magnus",
      email: "coolfish@gmail.com",
      imageUrl: "a picture",
    };

    function writeNewPost(postData: {
      userId: string;
      name: string;
      email: string;
      imageUrl: string;
    }) {
      const db = getDatabase();

      // Get a key for a new Post.
      const newPostKey = push(child(ref(db), "posts")).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates: any = {};
      // updates["/posts/" + newPostKey] = postData;
      updates["/users/" + postData.userId + "/" + newPostKey] = postData;

      return update(ref(db), updates);
    }

    writeNewPost(postData);
  }
  return (
    <>
      <section>
        <h2>Database Test</h2>
        <form id="post_form" ref={formPostElm} onSubmit={submittedPost}>
          <h4>Write data (Post)</h4>

          <button type="submit">Post data</button>
        </form>
      </section>
      <section>
        <form id="get_form" ref={formGetElm} onSubmit={submittedGet}>
          <h4>Read data (Get)</h4>

          {profil && (
            <ul>
              <li>{profil?.username}</li>
              <li>{profil?.profile_picture}</li>
              <li>{profil?.email}</li>
            </ul>
          )}

          <button type="submit">Get data</button>
        </form>
      </section>

      <section>
        <form id="put_delete_form" ref={formPutDeleteElm} onSubmit={submittedPutDelete}>
          <h4>Updating or deleting data (Put and Delete)</h4>

          <button type="submit">Put/delete data</button>
        </form>
      </section>
    </>
  );
}
