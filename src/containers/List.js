import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/SubHeader/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const List = ({ lists, listItems, loading = false, error = false, match, history }) => {
  const items = listItems && listItems.filter(item => item.listId === parseInt(match.params.id))

  const list = lists && lists.find(list => lists.id === parseInt(match.params.id));

  return (
    <>
    {history && <SubHeader goBack={() => history.goBack()} title={list.title} openForm={() => history.push(`${match.url}/new`)} />}
    <ListItemWrapper>
      {items && items.map(item => <ListItem key={item.id} data={ item } />) }
    </ListItemWrapper>
    </>
  )
};

export default List;