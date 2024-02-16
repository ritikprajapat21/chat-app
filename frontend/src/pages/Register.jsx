import { Form, redirect } from "react-router-dom";
import { socket } from "../socket.js";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  socket.connect();
  return redirect(`/roomId/${data.roomId}`);
}

export default function Register() {
  return (
    <>
      <Form method="post">
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="roomId" placeholder="Chat Room ID" />
        <button type="submit">Join</button>
      </Form>
    </>
  );
}
