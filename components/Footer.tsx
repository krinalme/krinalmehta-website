import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">Krinal Mehta</div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/krinal" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/krinal" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.youtube.com/@krinal" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
