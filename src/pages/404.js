import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';
import '../styles/404.css';

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <span>Page not found. Back to{' '}
        <Link href="/">Home</Link>
      </span>
      <ul className='icons'>
        <li>
          <Link href="https://www.linkedin.com/in/bondnicktrinh/" target="blank">
            <LinkedInIcon fontSize='large' />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/bondtrinh1" target="blank" >
            <GitHubIcon fontSize='large' />
          </Link>
        </li>
        <li>
          <Link href="mailto:bond.nicktrinh@gmail.com">
            <EmailIcon fontSize='large' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default PageNotFound;