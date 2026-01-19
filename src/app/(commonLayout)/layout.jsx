import Navbar from "@/component/module/Navbar";
import "../globals.css";
export default function HomeLayout({ children }) {
    return <>
        <Navbar></Navbar>
        {children}
        <p>Footer</p>
    </>
}