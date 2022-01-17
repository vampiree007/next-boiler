import React from 'react';
import styles from '../styles/layout/layout.module.scss';
import Head from 'next/head';
import HeaderComponent from '../components/header/header.component';
import FooterComponent from '../components/footer/footer.component';

// ROOT LAYOUT IS IMPORTANT FOR SEO TO WORK
function RootLayout({ children, title, description }) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>{title || 'PLEASE PROVIDE TITLE'}</title>
                <meta name="description" content={description || 'PLEASE PROVIDE DESC'} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <HeaderComponent />
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <FooterComponent />
            </footer>
        </div>
    )
}

// EXPORT DEFAULT ROOT LAYOUT
export default RootLayout;
