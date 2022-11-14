# electron-vite-react with Firebase error auth

this repository doesn't include firebase app credentials.
you have to add it, but it is quite easy.

src/lib/firebase.ts

to do that you have to create a firebase project. Go to settings of the project, create a new web app and add the credentials

after that, you can try to authenticate. an you will have an error like this:

firebase: error (auth/network-request-failed).

- it is not e.preventDefault();
- I actually have internet connection.
- In the console, I get the headers of the response validating the user correctly. and they are good. it means the server of firebase-auth works. But I get an error in the same method (signInWithEmailAndPassword), and it showed me this message.

firebase: error (auth/network-request-failed).

I suppose this is a vite problem. But I don't know how can I solve it.
