import React from 'react'
import Main from './common/Main';
import AddMemoBtn from './AddMenuButton';
import MemoRouter from '../routes/memo';
import { Memo } from '../models';
import {  Redirect, useLocation, useRouteMatch } from 'react-router';

// interface Props {
//     // memos: Memo[]
//     hasAddMemoBtn: boolean
//     apiCalling: boolean
//   }
  
  


const MemoList = function(){
    // const {apiCalling, hasAddMemoBtn } = props;

    const {pathname} = useLocation()
    const { url} = useRouteMatch();
  

    const hasAddMemoBtn = pathname === `${url}`

    console.log('MemoCon',hasAddMemoBtn)
    console.log('MemoCon',`${url}/memo`)


    return (
        <Main>
          <div style={{ margin: '10px' }}>
            {hasAddMemoBtn && <AddMemoBtn />}
            <MemoRouter />
          </div>
        </Main>
    )
}


export default MemoList;