import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Post = (props) => (
    <Query
        query={gql`
      query {
        Post(id: "${props.match.params.postId}") {
          id
          title
          text
        }
      }
   `}
        fetchPolicy='network-only'
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
                <ul key='topPosts'>
                    <li><b>Id: </b>{data.Post.id}</li>
                    <li><b>Title: </b>{data.Post.title}</li>
                    <li><b>Text: </b>{data.Post.text}</li>
                </ul>
            );
        }}
    </Query>
);

export default Post;
