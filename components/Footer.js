import Link from 'next/link';

export default function Footer(){
    return(
        <footer className = "p-4 bg-footer-green text-gray-50 justify-center">
            <p className = "text-footer-text">2022</p>
            <div className = "text-right">
                <a href="https://www.linkedin.com/in/jae-loney/">
                <p> Made by Jae - Click to Connect! </p>
                </a>
                <h1 className="title">
                <Link href="/start">Click to Read More on Next JS!</Link>
                </h1>
            </div>
        </footer>
    )
}