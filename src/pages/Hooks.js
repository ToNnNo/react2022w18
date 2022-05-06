import Header from '../components/Header';
import StateClock from '../components/StateClock';
import StateColor from '../components/StateColor';
import { useEffect } from 'react';
import StateUserList from '../components/StateUserList';
import StateReducer from '../components/StateReducer';

export default function Hooks() {

  useEffect( () => {
    document.title = "Les Hooks"
  })

  return (
    <>
      <Header title="Les Hooks" />

      <StateColor />

      <StateClock />

      <StateReducer />

      <StateUserList />
    </>
  )

}