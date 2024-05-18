import {useEffect} from 'react'

function Background() {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        const W = window.innerWidth;
        const H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        const fontSize = 16;
        const columns = Math.floor(W / fontSize);
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops.push(0);
        }
        const str = 'public static HostAndPort toHostAndPort(NetworkEndpoint networkEndpoint) {switch (networkEndpoint.getType()) {case IP:return HostAndPort.fromHost(networkEndpoint.getIpAddress().getAddress());case IP_PORT:return HostAndPort.fromParts(networkEndpoint.getIpAddress().getAddress(), networkEndpoint.getPort().getPortNumber());case HOSTNAME:case IP_HOSTNAME:return HostAndPort.fromHost(networkEndpoint.getHostname().getName());case HOSTNAME_PORT:case IP_HOSTNAME_PORT:return HostAndPort.fromParts(networkEndpoint.getHostname().getName(), networkEndpoint.getPort().getPortNumber());case UNRECOGNIZED:case TYPE_UNSPECIFIED:throw new AssertionError("Type for NetworkEndpoint must be specified.");';

        const draw = () => {
            context.fillStyle = "rgba(0,0,0,0.05)";
            context.fillRect(0, 0, W, H);
            context.font = "700 " + fontSize + "px Arial"; 
            context.fillStyle = "#00cc33";
            for (let i = 0; i < columns; i++) {
                const index = Math.floor(Math.random() * str.length);
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                context.fillText(str[index], x, y);
                if (y >= canvas.height && Math.random() > 0.99) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        draw();
        const intervalId = setInterval(draw, 35);
        return () => clearInterval(intervalId); 
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Background
