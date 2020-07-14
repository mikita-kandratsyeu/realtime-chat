import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const END_POINT = 'localhost:5000';

  useEffect(() => {
    const { room, name } = queryString.parse(location.search);

    socket = io(END_POINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, ({ error }) => {

    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [END_POINT, location.search]);

  return (
    <h1>Chat</h1>
  )
};

export default Chat;
