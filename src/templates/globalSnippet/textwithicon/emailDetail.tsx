import style from '@styles/snippets/detailIcon.module.scss'

type emailDetailType = {
    email: string
}
export default function EmailDetail({email}:emailDetailType) {
    return (
        <div className={style.email}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="28" height="28" rx="14" fill="#D9D9D9"/>
                <path d="M5 9.5C5 8.83696 5.26339 8.20107 5.73223 7.73223C6.20107 7.26339 6.83696 7 7.5 7H22.5C23.163 7 23.7989 7.26339 24.2678 7.73223C24.7366 8.20107 25 8.83696 25 9.5V19.5C25 20.163 24.7366 20.7989 24.2678 21.2678C23.7989 21.7366 23.163 22 22.5 22H7.5C6.83696 22 6.20107 21.7366 5.73223 21.2678C5.26339 20.7989 5 20.163 5 19.5V9.5ZM7.5 8.25C7.16848 8.25 6.85054 8.3817 6.61612 8.61612C6.3817 8.85054 6.25 9.16848 6.25 9.5V9.77125L15 15.0212L23.75 9.77125V9.5C23.75 9.16848 23.6183 8.85054 23.3839 8.61612C23.1495 8.3817 22.8315 8.25 22.5 8.25H7.5ZM23.75 11.2287L17.865 14.76L23.75 18.3812V11.2287ZM23.7075 19.8238L16.6575 15.485L15 16.4788L13.3425 15.485L6.2925 19.8225C6.36353 20.0885 6.5204 20.3236 6.73874 20.4913C6.95708 20.659 7.22468 20.75 7.5 20.75H22.5C22.7752 20.75 23.0426 20.6593 23.261 20.4918C23.4793 20.3243 23.6362 20.0895 23.7075 19.8238ZM6.25 18.3812L12.135 14.76L6.25 11.2287V18.3812Z" fill="#109132"/>
                <rect x="1" y="1" width="28" height="28" rx="14" stroke="#109132" strokeWidth="2"/>
            </svg>
            <p>{email}</p>
        </div>
    )
}