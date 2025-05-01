import React from "react";

const Perkenalan = (props) => {

    const [jumlahProduct, setJumlahProduct] = useState(0);

    const handleClick = (nama) => {
        console.log('haii' + nama)
    }

    return (
        <div>
            <h1>Perkenalan</h1>
            <p>nama {props.nama}</p>
            <p>hobby {props.hobby}</p>
            <button onClick={() => handleClick(props.nama)}>klik</button>
        </div>
    )
}

export default Perkenalan;