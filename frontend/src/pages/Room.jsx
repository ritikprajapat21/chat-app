import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const roomId = params.roomId;
  return { roomId };
}

export default function Room() {
  const { roomId } = useLoaderData();
  console.log(roomId);
  return <div>Room</div>;
}
