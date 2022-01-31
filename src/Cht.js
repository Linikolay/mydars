import openSocket from 'socket.io-client';


const soc = openSocket('https://chat.mydars.uz', {
    extraHeaders: {
        'token': localStorage.getItem('token'),
        // 'watch_room_id':545,
        // 'is_admin':true
    }
});

export default soc