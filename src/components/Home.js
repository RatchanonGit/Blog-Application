import home from "../images/home.svg"
export default function Home() {
    return (
        <>
            <div className="container">
                <h2>หน้าแรกของเว็ปไซต์</h2>
                <img src={home} alt="home" />
            </div>
        </>
    )
}