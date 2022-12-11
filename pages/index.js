import Head from 'next/head'
import Header from '../components/Header';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
    </>
  );
}