import linktreeQRCode from '/Nickistylez.png'

const Linktree = () => {



    return (
        <div className="linktree-container">
            <p> Check out our linktree for our affiliate links </p>
            <p> Or just to support our franchise </p>

            <img src={linktreeQRCode} height='150px' alt='linktree qr code' /> <br/><br/>
            <p style={{color: "orangered"}}> Code not working? </p>
            <a href='https://linktr.ee/Nickistylez' > Click Here </a>
        </div>
    )
}

export default Linktree