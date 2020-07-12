import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader/SubHeader';

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const ListLink = styled(Link)`
  display: flex;
  text-align: left;
  align-items: center;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2%;
  color: black;
  text-decoration: none;
`;

const Title = styled.h3`
  flex-basis: 80%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Lists = ({lists, loading = false, error = false, match, history }) => (
  <>
  {history && <SubHeader title='Your Lists' openForm={() => history.push('/new')} /> }
  <ListWrapper>
    {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
    {lists && lists.map(list => (
      <ListLink 
      key={list.id}
      to={`list/${list.id}`}>
        <Title>{ list.title } </Title>
      </ListLink>
    ))}
  </ListWrapper>
  </>
);

export default Lists;