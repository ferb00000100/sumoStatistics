import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
// import Collector from './Collector';

// Write your query the same as you did in graphql playground
const ALL_COLLECTORS_QUERY = gql`
    query ALL_ITEMS_QUERY {
        collectors {
            name
            instanceID
            owner
            }
    }
`;

const Left = styled.div`
  text-align: left;
`;

const CollectorList = styled.div`
  //display:grid;
  //display: inline-grid;
  //grid-template-columns: 1fr 1fr;
  //grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin 0 auto;
  ul {
  list-style-type:none;
  }

`;

export default class Collectors extends Component {
    render() {
        return (
            <Left>
                <Query query={ALL_COLLECTORS_QUERY}>
                    {  // these curly brackets tell react we are leaving JSX and are now using javaScript
                    //    (payload) => {  // This will show the entire payload
                            ({data, error, loading }) => {
                            console.log(data);
                                if(loading) return <p>Loading...</p>
                                if(error) return <p>Error: {error.message}</p>
                                return <CollectorList>
                                    {data.collectors.map(collector =>
                                        <ul>
                                            {/*<Collector item={collector} key={collector.id}/>*/}
                                            <li>Collector: {collector.name}</li>
                                            <li>Instance: {collector.instanceID}</li>
                                            <li>Owner: {collector.owner}</li>
                                        </ul>
                                    )}
                                </CollectorList>
                        }}
                </Query>

            </Left>
        );
    }
}