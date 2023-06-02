import EmailDetail from "@snippets/textwithicon/emailDetail";
import PhoneDetail from "@snippets/textwithicon/phoneDetail";



export default function FooterDetail() {
    return (
    <div >
        <PhoneDetail phone="T / 330-726-2222"/>
        <PhoneDetail phone="F / 330-953-2255"/>
        <EmailDetail email="petlodgeusa@gmail.com"/>
    </ div>
    )
}